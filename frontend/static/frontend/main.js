/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/components/App.js":
/*!****************************************!*\
  !*** ./frontend/src/components/App.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\frontend\\\\src\\\\components\\\\App.js: Unexpected token (26:0)\\n\\n\\u001b[0m \\u001b[90m 24 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 26 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m    componentDidMount(){\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m    componentDidMount() {\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6325:17)\\n    at Object.unexpected (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7642:16)\\n    at Object.parseIdentifierName (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9521:18)\\n    at Object.parseIdentifier (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9499:23)\\n    at Object.parseMaybePrivateName (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8863:19)\\n    at Object.parsePropertyName (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9319:98)\\n    at Object.parseClassPropertyName (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10777:22)\\n    at Object.parseClassMemberWithIsStatic (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10698:22)\\n    at Object.parseClassMember (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10668:10)\\n    at C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10623:14\\n    at Object.withTopicForbiddingContext (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9702:14)\\n    at Object.parseClassBody (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10600:10)\\n    at Object.parseClass (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10574:22)\\n    at Object.parseStatementContent (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9871:21)\\n    at Object.parseStatement (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9758:10)\\n    at Object.parse (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11270:17)\\n    at parse (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11306:38)\\n    at parser (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at C:\\\\Users\\\\omokehinde\\\\Documents\\\\DjangoProjects\\\\leadmanager\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34\\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)\");\n\n//# sourceURL=webpack:///./frontend/src/components/App.js?");

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./frontend/src/components/App.js\");\n\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });