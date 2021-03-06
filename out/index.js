"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asArray = asArray;
exports.newError = newError;
Object.defineProperty(exports, "CancellationToken", {
  enumerable: true,
  get: function () {
    return _CancellationToken().CancellationToken;
  }
});
Object.defineProperty(exports, "CancellationError", {
  enumerable: true,
  get: function () {
    return _CancellationToken().CancellationError;
  }
});
Object.defineProperty(exports, "HttpError", {
  enumerable: true,
  get: function () {
    return _httpExecutor().HttpError;
  }
});
Object.defineProperty(exports, "createHttpError", {
  enumerable: true,
  get: function () {
    return _httpExecutor().createHttpError;
  }
});
Object.defineProperty(exports, "HttpExecutor", {
  enumerable: true,
  get: function () {
    return _httpExecutor().HttpExecutor;
  }
});
Object.defineProperty(exports, "DigestTransform", {
  enumerable: true,
  get: function () {
    return _httpExecutor().DigestTransform;
  }
});
Object.defineProperty(exports, "safeGetHeader", {
  enumerable: true,
  get: function () {
    return _httpExecutor().safeGetHeader;
  }
});
Object.defineProperty(exports, "configureRequestOptions", {
  enumerable: true,
  get: function () {
    return _httpExecutor().configureRequestOptions;
  }
});
Object.defineProperty(exports, "configureRequestOptionsFromUrl", {
  enumerable: true,
  get: function () {
    return _httpExecutor().configureRequestOptionsFromUrl;
  }
});
Object.defineProperty(exports, "safeStringifyJson", {
  enumerable: true,
  get: function () {
    return _httpExecutor().safeStringifyJson;
  }
});
Object.defineProperty(exports, "parseJson", {
  enumerable: true,
  get: function () {
    return _httpExecutor().parseJson;
  }
});
Object.defineProperty(exports, "configureRequestUrl", {
  enumerable: true,
  get: function () {
    return _httpExecutor().configureRequestUrl;
  }
});
Object.defineProperty(exports, "getS3LikeProviderBaseUrl", {
  enumerable: true,
  get: function () {
    return _publishOptions().getS3LikeProviderBaseUrl;
  }
});
Object.defineProperty(exports, "githubUrl", {
  enumerable: true,
  get: function () {
    return _publishOptions().githubUrl;
  }
});
Object.defineProperty(exports, "parseDn", {
  enumerable: true,
  get: function () {
    return _rfc2253Parser().parseDn;
  }
});
Object.defineProperty(exports, "UUID", {
  enumerable: true,
  get: function () {
    return _uuid().UUID;
  }
});
Object.defineProperty(exports, "ProgressCallbackTransform", {
  enumerable: true,
  get: function () {
    return _ProgressCallbackTransform().ProgressCallbackTransform;
  }
});
Object.defineProperty(exports, "parseXml", {
  enumerable: true,
  get: function () {
    return _xml().parseXml;
  }
});
Object.defineProperty(exports, "XElement", {
  enumerable: true,
  get: function () {
    return _xml().XElement;
  }
});
exports.CURRENT_APP_PACKAGE_FILE_NAME = exports.CURRENT_APP_INSTALLER_FILE_NAME = void 0;

function _CancellationToken() {
  const data = require("./CancellationToken");

  _CancellationToken = function () {
    return data;
  };

  return data;
}

function _httpExecutor() {
  const data = require("./httpExecutor");

  _httpExecutor = function () {
    return data;
  };

  return data;
}

function _publishOptions() {
  const data = require("./publishOptions");

  _publishOptions = function () {
    return data;
  };

  return data;
}

function _rfc2253Parser() {
  const data = require("./rfc2253Parser");

  _rfc2253Parser = function () {
    return data;
  };

  return data;
}

function _uuid() {
  const data = require("./uuid");

  _uuid = function () {
    return data;
  };

  return data;
}

function _ProgressCallbackTransform() {
  const data = require("./ProgressCallbackTransform");

  _ProgressCallbackTransform = function () {
    return data;
  };

  return data;
}

function _xml() {
  const data = require("./xml");

  _xml = function () {
    return data;
  };

  return data;
}

// nsis
const CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe"; // nsis-web

exports.CURRENT_APP_INSTALLER_FILE_NAME = CURRENT_APP_INSTALLER_FILE_NAME;
const CURRENT_APP_PACKAGE_FILE_NAME = "package.7z";
exports.CURRENT_APP_PACKAGE_FILE_NAME = CURRENT_APP_PACKAGE_FILE_NAME;

function asArray(v) {
  if (v == null) {
    return [];
  } else if (Array.isArray(v)) {
    return v;
  } else {
    return [v];
  }
}

function newError(message, code) {
  const error = new Error(message);
  error.code = code;
  return error;
} 
// __ts-babel@6.0.4
//# sourceMappingURL=index.js.map