/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _routes = __webpack_require__(1);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log(_routes2.default.apellido(undefined, 'paternina', 'soto'));
	var cadena = 'valor';
	console.log(cadena.includes('lora'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var nombre = 'jose';
	var routes = {
	  nombre: nombre,
	  apellido: function apellido() {
	    var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jose';
	
	    for (var _len = arguments.length, apellidos = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      apellidos[_key - 1] = arguments[_key];
	    }
	
	    return 'Me llamo ' + nombre + ' ' + apellidos.join(' ') + '.';
	  }
	};
	exports.default = routes;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTNhNzE4ZjIzMDQwZmI2MzZlMjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcm91dGVzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJhcGVsbGlkbyIsInVuZGVmaW5lZCIsImNhZGVuYSIsImluY2x1ZGVzIiwibm9tYnJlIiwicm91dGVzIiwiYXBlbGxpZG9zIiwiam9pbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBQ0FBLFNBQVFDLEdBQVIsQ0FBWSxpQkFBT0MsUUFBUCxDQUFnQkMsU0FBaEIsRUFBMEIsV0FBMUIsRUFBc0MsTUFBdEMsQ0FBWjtBQUNBLEtBQU1DLFNBQVMsT0FBZjtBQUNBSixTQUFRQyxHQUFSLENBQVlHLE9BQU9DLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBWixFOzs7Ozs7Ozs7OztBQ0hBLEtBQU1DLFNBQVMsTUFBZjtBQUNBLEtBQU1DLFNBQVM7QUFDYkQsaUJBRGE7QUFFYkosV0FGYSxzQkFFMEI7QUFBQSxTQUE5QkksTUFBOEIsdUVBQXJCLE1BQXFCOztBQUFBLHVDQUFWRSxTQUFVO0FBQVZBLGdCQUFVO0FBQUE7O0FBQ3JDLDBCQUFtQkYsTUFBbkIsU0FBNkJFLFVBQVVDLElBQVYsQ0FBZSxHQUFmLENBQTdCO0FBQ0Q7QUFKWSxFQUFmO21CQU1lRixNIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzYTcxOGYyMzA0MGZiNjM2ZTI1IiwiaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5jb25zb2xlLmxvZyhyb3V0ZXMuYXBlbGxpZG8odW5kZWZpbmVkLCdwYXRlcm5pbmEnLCdzb3RvJykpO1xuY29uc3QgY2FkZW5hID0gJ3ZhbG9yJztcbmNvbnNvbGUubG9nKGNhZGVuYS5pbmNsdWRlcygnbG9yYScpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCJjb25zdCBub21icmUgPSAnam9zZSc7XG5jb25zdCByb3V0ZXMgPSB7XG4gIG5vbWJyZSxcbiAgYXBlbGxpZG8obm9tYnJlID0gJ2pvc2UnLCAuLi5hcGVsbGlkb3Mpe1xuICAgIHJldHVybiBgTWUgbGxhbW8gJHtub21icmV9ICR7YXBlbGxpZG9zLmpvaW4oJyAnKX0uYDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JvdXRlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=