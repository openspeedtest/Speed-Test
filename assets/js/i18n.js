(function (window, document) {
  "use strict";

  var STORAGE_KEY = "openspeedtest.locale";
  var DEFAULT_LOCALE = "en";
  var SUPPORTED_LOCALES = {
    en: true,
    "zh-CN": true
  };

  /*
   * Keep every user-facing translation in this dictionary. English remains
   * the source locale and is also the fallback for missing translations.
   */
  var messages = {
    en: {
      "page.title": "SpeedTest by OpenSpeedTest™",
      "page.description": "Test your network speed now. HTML5 network performance estimation tool. Self-hosted SpeedTest by OpenSpeedTest™.",
      "app.ariaLabel": "OpenSpeedTest network speed test",
      "app.loading": "Loading OpenSpeedTest",
      "app.objectTitle": "OpenSpeedTest interface",
      "language.label": "Language",
      "language.en": "English",
      "language.zhCN": "简体中文",
      "credits.is": " is free and ",
      "credits.openSource": "open-source HTML5 network speed test",
      "credits.software": " software.",
      "credits.copyright": "© Copyright 2013–2024 OpenSpeedTest™. All rights reserved.",

      "label.download": "DOWNLOAD",
      "label.upload": "UPLOAD",
      "label.ping": "PING",
      "label.jitter": "JITTER",
      "action.start": "Start",
      "action.options": "Options",
      "action.switchDark": "Switch to dark mode",
      "action.switchLight": "Switch to light mode",
      "unit.mbps": "Mbps",
      "unit.ms": "ms",

      "status.automaticStart": "Automatic test starts in…",
      "status.fetchingServer": "Fetching server info…",
      "status.milliseconds": "Milliseconds",
      "status.initializing": "Initializing…",
      "status.testingDownload": "Testing download speed…",
      "status.mbpsDownload": "Mbps download",
      "status.testingUpload": "Testing upload speed…",
      "status.mbpsUpload": "Mbps upload",
      "status.done": "All done",
      "status.checkConnection": "Check your network connection status.",
      "status.networkError": "Network Error",
      "status.pleaseWait": "Please wait…",

      "tooltip.app": "HTML5 network performance estimation tool by OpenSpeedTest™.",
      "tooltip.downloadDescription": "Download speed is how quickly this device receives data from the server. Streaming video, loading websites, and downloading files all use download bandwidth.",
      "tooltip.uploadDescription": "Upload speed is how quickly this device sends data to the server. Video calls, cloud backups, sending files, and live streaming all use upload bandwidth.",
      "tooltip.latencyDescription": "Ping is round-trip network delay, measured in milliseconds. Lower is better. Jitter is the variation between ping samples; lower jitter usually means a more stable connection.",
      "tooltip.downloadUnit": "Download speed is measured in megabits per second (Mbps).",
      "tooltip.uploadUnit": "Upload speed is measured in megabits per second (Mbps).",
      "tooltip.pingUnit": "Ping is measured in milliseconds (ms).",
      "tooltip.jitterUnit": "Jitter is measured in milliseconds (ms).",
      "tooltip.uploadGraph": "Real-time upload traffic graph.",
      "tooltip.downloadGraph": "Real-time download traffic graph.",
      "tooltip.downloadResult": "Your download speed.",
      "tooltip.uploadResult": "Your upload speed.",
      "tooltip.pingResult": "Your ping.",
      "tooltip.jitterResult": "Your jitter.",
      "tooltip.pingJitterResult": "Your ping and jitter.",
      "tooltip.start": "Run a speed test. You can also press Enter.",
      "tooltip.options": "Show server information."
    },

    "zh-CN": {
      "page.title": "OpenSpeedTest™ 网络测速",
      "page.description": "立即测试当前设备与服务器之间的网络速度。基于 HTML5 的自托管网络性能测试工具。",
      "app.ariaLabel": "OpenSpeedTest 网络测速",
      "app.loading": "正在加载 OpenSpeedTest",
      "app.objectTitle": "OpenSpeedTest 测速界面",
      "language.label": "语言",
      "language.en": "English",
      "language.zhCN": "简体中文",
      "credits.is": " 是一款免费的 ",
      "credits.openSource": "开源 HTML5 网络测速",
      "credits.software": "软件。",
      "credits.copyright": "© 2013–2024 OpenSpeedTest™。保留所有权利。",

      "label.download": "下载",
      "label.upload": "上传",
      "label.ping": "延迟",
      "label.jitter": "抖动",
      "action.start": "开始",
      "action.options": "选项",
      "action.switchDark": "切换到深色模式",
      "action.switchLight": "切换到浅色模式",
      "unit.mbps": "Mbps",
      "unit.ms": "毫秒",

      "status.automaticStart": "即将自动开始测试…",
      "status.fetchingServer": "正在获取服务器信息…",
      "status.milliseconds": "毫秒",
      "status.initializing": "正在初始化…",
      "status.testingDownload": "正在测试下载速度…",
      "status.mbpsDownload": "Mbps 下载",
      "status.testingUpload": "正在测试上传速度…",
      "status.mbpsUpload": "Mbps 上传",
      "status.done": "测试完成",
      "status.checkConnection": "请检查网络连接状态。",
      "status.networkError": "网络错误",
      "status.pleaseWait": "请稍候…",

      "tooltip.app": "OpenSpeedTest™ 基于 HTML5 的网络性能测试工具。",
      "tooltip.downloadDescription": "下载速度表示当前设备从服务器接收数据的速度。观看视频、打开网页和下载文件都会使用下载带宽。",
      "tooltip.uploadDescription": "上传速度表示当前设备向服务器发送数据的速度。视频通话、云备份、发送文件和直播都会使用上传带宽。",
      "tooltip.latencyDescription": "延迟（Ping）是数据往返服务器所需的时间，以毫秒计，越低越好。抖动是多次延迟测量之间的波动，数值越低通常表示连接越稳定。",
      "tooltip.downloadUnit": "下载速度以兆比特每秒（Mbps）为单位。",
      "tooltip.uploadUnit": "上传速度以兆比特每秒（Mbps）为单位。",
      "tooltip.pingUnit": "延迟以毫秒（ms）为单位。",
      "tooltip.jitterUnit": "抖动以毫秒（ms）为单位。",
      "tooltip.uploadGraph": "实时上传流量图。",
      "tooltip.downloadGraph": "实时下载流量图。",
      "tooltip.downloadResult": "你的下载速度。",
      "tooltip.uploadResult": "你的上传速度。",
      "tooltip.pingResult": "你的网络延迟。",
      "tooltip.jitterResult": "你的网络抖动。",
      "tooltip.pingJitterResult": "你的网络延迟和抖动。",
      "tooltip.start": "开始网络测速，也可以按 Enter 键。",
      "tooltip.options": "显示服务器信息。"
    }
  };

  function normalizeLocale(locale) {
    var normalized = String(locale || "").replace(/_/g, "-").toLowerCase();

    if (normalized === "zh" || normalized.indexOf("zh-") === 0) {
      return "zh-CN";
    }

    return DEFAULT_LOCALE;
  }

  function matchBrowserLocale(locale) {
    var normalized = String(locale || "").replace(/_/g, "-").toLowerCase();

    if (normalized === "zh" || normalized.indexOf("zh-") === 0) {
      return "zh-CN";
    }
    if (normalized === "en" || normalized.indexOf("en-") === 0) {
      return "en";
    }

    return "";
  }

  function readStoredLocale() {
    try {
      var stored = window.localStorage && window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LOCALES[stored]) {
        return stored;
      }
    } catch (error) {
      // Storage can be unavailable in strict privacy modes; browser detection
      // still provides a deterministic fallback.
    }

    return "";
  }

  function detectLocale() {
    var stored = readStoredLocale();
    if (stored) {
      return stored;
    }

    var browserLanguages = window.navigator.languages;
    if (!browserLanguages || !browserLanguages.length) {
      browserLanguages = [
        window.navigator.language || window.navigator.userLanguage || DEFAULT_LOCALE
      ];
    }

    for (var index = 0; index < browserLanguages.length; index += 1) {
      var matchedLocale = matchBrowserLocale(browserLanguages[index]);
      if (matchedLocale) {
        return matchedLocale;
      }
    }

    return DEFAULT_LOCALE;
  }

  var activeLocale = detectLocale();

  function translate(key) {
    var activeMessages = messages[activeLocale] || messages[DEFAULT_LOCALE];
    return activeMessages[key] || messages[DEFAULT_LOCALE][key] || key;
  }

  function translateRoot(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }

    var textNodes = root.querySelectorAll("[data-i18n]");
    var index;
    for (index = 0; index < textNodes.length; index += 1) {
      textNodes[index].textContent = translate(textNodes[index].getAttribute("data-i18n"));
    }

    var titleNodes = root.querySelectorAll("[data-i18n-title]");
    for (index = 0; index < titleNodes.length; index += 1) {
      titleNodes[index].setAttribute(
        "title",
        translate(titleNodes[index].getAttribute("data-i18n-title"))
      );
    }

    var ariaNodes = root.querySelectorAll("[data-i18n-aria-label]");
    for (index = 0; index < ariaNodes.length; index += 1) {
      ariaNodes[index].setAttribute(
        "aria-label",
        translate(ariaNodes[index].getAttribute("data-i18n-aria-label"))
      );
    }

    var contentNodes = root.querySelectorAll("[data-i18n-content]");
    for (index = 0; index < contentNodes.length; index += 1) {
      contentNodes[index].setAttribute(
        "content",
        translate(contentNodes[index].getAttribute("data-i18n-content"))
      );
    }
  }

  function bindLocaleSelector() {
    var selector = document.getElementById("language-select");
    if (!selector) {
      return;
    }

    selector.value = activeLocale;
    selector.addEventListener("change", function () {
      setLocale(selector.value);
    });
  }

  function translateDocument() {
    if (document.documentElement) {
      document.documentElement.setAttribute("lang", activeLocale);
    }
    translateRoot(document);
    bindLocaleSelector();
  }

  function translateSvg(svgRoot) {
    if (!svgRoot) {
      return;
    }

    svgRoot.setAttribute("lang", activeLocale);
    svgRoot.setAttribute("role", "group");
    svgRoot.setAttribute("aria-label", translate("app.ariaLabel"));
    translateRoot(svgRoot);
  }

  function setLocale(locale) {
    var nextLocale = normalizeLocale(locale);
    if (!SUPPORTED_LOCALES[nextLocale]) {
      nextLocale = DEFAULT_LOCALE;
    }

    try {
      if (window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
      }
    } catch (error) {
      // A reload still applies browser detection if storage is unavailable.
    }

    activeLocale = nextLocale;
    window.location.reload();
  }

  window.OpenSpeedTestI18n = {
    defaultLocale: DEFAULT_LOCALE,
    messages: messages,
    normalizeLocale: normalizeLocale,
    detectLocale: detectLocale,
    getLocale: function () {
      return activeLocale;
    },
    setLocale: setLocale,
    t: translate,
    translateDocument: translateDocument,
    translateSvg: translateSvg
  };

  translateDocument();
})(window, document);
