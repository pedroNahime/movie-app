webpackHotUpdate('main', {
  /***/ './src/store/sagas/index.js':
    /*!**********************************!*\
  !*** ./src/store/sagas/index.js ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */
      ;(function(module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return rootSaga
          }
        )
        /* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! redux-saga/effects */ './node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js'
        )
        /* harmony import */ var _ducks_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../ducks/movies */ './src/store/ducks/movies/index.js'
        )
        /* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./movies */ './src/store/sagas/movies.js'
        )
        ;(function() {
          var enterModule =
            typeof reactHotLoaderGlobal !== 'undefined'
              ? reactHotLoaderGlobal.enterModule
              : undefined
          enterModule && enterModule(module)
        })()

        var _marked =
          /*#__PURE__*/
          regeneratorRuntime.mark(rootSaga)

        var __signature__ =
          typeof reactHotLoaderGlobal !== 'undefined'
            ? reactHotLoaderGlobal.default.signature
            : function(a) {
                return a
              }

        function rootSaga() {
          return regeneratorRuntime.wrap(function rootSaga$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2
                  return Object(
                    redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__['all']
                  )([
                    Object(
                      redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[
                        'takeLatest'
                      ]
                    )(
                      _ducks_movies__WEBPACK_IMPORTED_MODULE_1__['Types']
                        .GET_MOVIE,
                      _movies__WEBPACK_IMPORTED_MODULE_2__['getMovie']
                    )
                  ])

                case 2:
                case 'end':
                  return _context.stop()
              }
            }
          }, _marked)
        }
        ;(function() {
          var reactHotLoader =
            typeof reactHotLoaderGlobal !== 'undefined'
              ? reactHotLoaderGlobal.default
              : undefined

          if (!reactHotLoader) {
            return
          }

          reactHotLoader.register(
            rootSaga,
            'rootSaga',
            '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/store/sagas/index.js'
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
    },

  /***/ './src/store/sagas/movies.js':
    /*!***********************************!*\
  !*** ./src/store/sagas/movies.js ***!
  \***********************************/
    /*! exports provided: getMovie */
    /***/ function(module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/store/sagas/movies.js'"
      )

      /***/
    },

  /***/ './src/store/sagas/movies/movies.js': false
})
//# sourceMappingURL=03bbb18-main-wps-hmr.js.map
