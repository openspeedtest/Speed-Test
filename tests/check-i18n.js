"use strict";

var assert = require("node:assert");
var fs = require("node:fs");
var path = require("node:path");
var vm = require("node:vm");

var root = path.join(__dirname, "..");
var i18nSource = fs.readFileSync(path.join(root, "assets/js/i18n.js"), "utf8");
var windowMock = {
  navigator: { languages: ["en"] },
  localStorage: { getItem: function () { return null; } },
  location: { reload: function () {} }
};
var documentMock = {
  documentElement: { setAttribute: function () {} },
  getElementById: function () { return null; },
  querySelectorAll: function () { return []; }
};

vm.runInNewContext(i18nSource, {
  window: windowMock,
  document: documentMock
});

var messages = windowMock.OpenSpeedTestI18n.messages.en;
var files = [
  path.join(root, "index.html"),
  path.join(root, "assets/images/app.svg"),
  path.join(root, "assets/js/app-2.5.4.js"),
  path.join(root, "assets/js/i18n.js")
];
var usedKeys = {};
var keyPatterns = [
  /data-i18n(?:-title|-aria-label|-content)?="([^"]+)"/g,
  /\.t\("([^"]+)"\)/g,
  /translate\("([^"]+)"\)/g
];

files.forEach(function (file) {
  var contents = fs.readFileSync(file, "utf8");
  keyPatterns.forEach(function (pattern) {
    var match;
    while ((match = pattern.exec(contents)) !== null) {
      usedKeys[match[1]] = true;
    }
  });
});

Object.keys(usedKeys).forEach(function (key) {
  assert.ok(messages[key], "missing English dictionary key: " + key);
  assert.ok(
    windowMock.OpenSpeedTestI18n.messages["zh-CN"][key],
    "missing Simplified Chinese dictionary key: " + key
  );
});

var appSource = fs.readFileSync(path.join(root, "assets/js/app-2.5.4.js"), "utf8");
assert.ok(!/Show\.showStatus\("[A-Za-z]/.test(appSource), "runtime status bypasses i18n");
assert.ok(
  !/oDoLiveSpeed\.el\.textContent = "Network Error"/.test(appSource),
  "network error bypasses i18n"
);

var indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert.ok(
  indexSource.indexOf("assets/js/app-2.5.4.js") !== -1,
  "index.html must load the maintainable, unminified application source"
);
assert.ok(
  indexSource.indexOf("app-2.5.4.min.js") === -1,
  "index.html must not load the untranslated upstream minified bundle"
);

var svgSource = fs.readFileSync(path.join(root, "assets/images/app.svg"), "utf8");
var untranslatedTitles = svgSource.match(/<title(?![^>]*data-i18n)[^>]*>[\s\S]*?<\/title>/g) || [];
assert.deepStrictEqual(
  untranslatedTitles,
  ["<title>OpenSpeedTest™️</title>"],
  "only the OpenSpeedTest brand title may bypass translation"
);

var untranslatedSvgText = (svgSource.match(/<text(?![^>]*data-i18n)[^>]*>[\s\S]*?<\/text>/g) || [])
  .filter(function (node) {
    var textContent = node.replace(/<[^>]+>/g, "");
    return /[A-Za-z]/.test(textContent) && node.indexOf('id="YourIP"') === -1;
  });
assert.deepStrictEqual(
  untranslatedSvgText,
  [],
  "static alphabetic SVG labels must reference the language dictionary"
);

var nginxSource = fs.readFileSync(path.join(root, "nginx.conf"), "utf8");
assert.ok(
  /error_page\s+405\s+=200\s+\$uri;/.test(nginxSource),
  "upload POST must be consumed before the static 405 response becomes 200"
);
assert.ok(
  !/location\s*=\s*\/upload[\s\S]*?return\s+200/.test(nginxSource),
  "upload location must not return before consuming the request body"
);

var dockerfileSource = fs.readFileSync(path.join(root, "Dockerfile"), "utf8");
assert.ok(
  /FROM nginxinc\/nginx-unprivileged:stable-alpine/.test(dockerfileSource),
  "container must derive directly from the unprivileged Nginx image"
);
assert.ok(/RUN nginx -t/.test(dockerfileSource), "container build must validate Nginx");

console.log(
  "i18n static checks passed (" + Object.keys(usedKeys).length + " referenced keys)"
);
