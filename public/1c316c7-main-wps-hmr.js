webpackHotUpdate('main', {
  /***/ './src/store/ducks/index.js':
    /*!**********************************!*\
  !*** ./src/store/ducks/index.js ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */
      ;(function(module) {
        /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! redux */ './node_modules/redux/es/redux.js'
        )
        /* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./movies */ './src/store/ducks/movies/index.js'
        )
        ;(function() {
          var enterModule =
            typeof reactHotLoaderGlobal !== 'undefined'
              ? reactHotLoaderGlobal.enterModule
              : undefined
          enterModule && enterModule(module)
        })()

        var __signature__ =
          typeof reactHotLoaderGlobal !== 'undefined'
            ? reactHotLoaderGlobal.default.signature
            : function(a) {
                return a
              }

        var _default = Object(
          redux__WEBPACK_IMPORTED_MODULE_0__['combineReducers']
        )({
          moviesReducers: _movies__WEBPACK_IMPORTED_MODULE_1__['reducers']
        })

        /* harmony default export */ __webpack_exports__['default'] = _default
        ;(function() {
          var reactHotLoader =
            typeof reactHotLoaderGlobal !== 'undefined'
              ? reactHotLoaderGlobal.default
              : undefined

          if (!reactHotLoader) {
            return
          }

          reactHotLoader.register(
            _default,
            'default',
            '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/store/ducks/index.js'
          )
        })()
        ;(function() {
          var leaveModule =
            typeof reactHotLoaderGlobal !== 'undefined'
              ? reactHotLoaderGlobal.leaveModule
              : undefined
          leaveModule && leaveModule(module)
        })()
        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ))

      /***/
    }
})
//# sourceMappingURL=1c316c7-main-wps-hmr.js.map
