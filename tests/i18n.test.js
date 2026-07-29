"use strict";

var assert = require("node:assert");
var fs = require("node:fs");
var path = require("node:path");
var vm = require("node:vm");

var source = fs.readFileSync(
  path.join(__dirname, "..", "assets", "js", "i18n.js"),
  "utf8"
);

function loadI18n(options) {
  var storage = options.storage || {};
  var reloadCount = 0;
  var documentMock = {
    documentElement: {
      setAttribute: function () {}
    },
    getElementById: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    }
  };
  var windowMock = {
    navigator: {
      languages: options.languages || [],
      language: options.language || ""
    },
    localStorage: {
      getItem: function (key) {
        return storage[key] || null;
      },
      setItem: function (key, value) {
        storage[key] = value;
      }
    },
    location: {
      reload: function () {
        reloadCount += 1;
      }
    }
  };

  vm.runInNewContext(source, {
    window: windowMock,
    document: documentMock
  });

  return {
    api: windowMock.OpenSpeedTestI18n,
    storage: storage,
    reloadCount: function () {
      return reloadCount;
    }
  };
}

var english = loadI18n({ languages: ["fr-FR"] });
assert.strictEqual(english.api.getLocale(), "en");
assert.strictEqual(english.api.t("action.start"), "Start");

var simplifiedChinese = loadI18n({ languages: ["zh-CN", "en-US"] });
assert.strictEqual(simplifiedChinese.api.getLocale(), "zh-CN");
assert.strictEqual(simplifiedChinese.api.t("action.start"), "开始");

var genericChinese = loadI18n({ languages: ["zh-Hans"] });
assert.strictEqual(genericChinese.api.getLocale(), "zh-CN");

var browserPreferenceOrder = loadI18n({ languages: ["en-US", "zh-CN"] });
assert.strictEqual(browserPreferenceOrder.api.getLocale(), "en");

var storedEnglish = loadI18n({
  languages: ["zh-CN"],
  storage: { "openspeedtest.locale": "en" }
});
assert.strictEqual(storedEnglish.api.getLocale(), "en");

var manualSwitch = loadI18n({ languages: ["en-US"] });
manualSwitch.api.setLocale("zh-CN");
assert.strictEqual(manualSwitch.storage["openspeedtest.locale"], "zh-CN");
assert.strictEqual(manualSwitch.reloadCount(), 1);

assert.strictEqual(
  simplifiedChinese.api.t("missing.translation.key"),
  "missing.translation.key"
);

var englishKeys = Object.keys(english.api.messages.en).sort();
var chineseKeys = Object.keys(english.api.messages["zh-CN"]).sort();
assert.deepStrictEqual(chineseKeys, englishKeys);

console.log("i18n behavior tests passed (" + englishKeys.length + " keys)");
