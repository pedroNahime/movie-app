webpackHotUpdate('main', {
  /***/ './src/components/List/index.js':
    /*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
    /*! exports provided: mapStateToProps, mapDispatchToProps, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */
      ;(function(module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mapStateToProps',
          function() {
            return mapStateToProps
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mapDispatchToProps',
          function() {
            return mapDispatchToProps
          }
        )
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js'
        )
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-redux */ './node_modules/react-redux/es/index.js'
        )
        /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! redux */ './node_modules/redux/es/redux.js'
        )
        /* harmony import */ var _store_ducks_movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../store/ducks/movies */ './src/store/ducks/movies/index.js'
        )
        /* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../Movie */ './src/components/Movie/index.js'
        )
        /* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./styles.js */ './src/components/List/styles.js'
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

        var List = function List(props) {
          var dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__['useDispatch']
          )()
          var initFetchMethod = Object(
            react__WEBPACK_IMPORTED_MODULE_1__['useCallback']
          )(
            function() {
              console.log(props)
              return dispatch(props.getMovie())
            },
            [dispatch]
          )
          Object(react__WEBPACK_IMPORTED_MODULE_1__['useEffect'])(
            function() {
              initFetchMethod()
            },
            [initFetchMethod]
          )
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _styles_js__WEBPACK_IMPORTED_MODULE_6__['Container'],
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _styles_js__WEBPACK_IMPORTED_MODULE_6__['Title'],
              null,
              'Movies'
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _styles_js__WEBPACK_IMPORTED_MODULE_6__['Wrapper'],
              null,
              props.movies.data.results
                ? props.movies.data.results.map(function(movie) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      _Movie__WEBPACK_IMPORTED_MODULE_5__['default'],
                      {
                        key: movie.id,
                        movie: movie
                      }
                    )
                  })
                : null
            )
          )
        }

        __signature__(
          List,
          'useDispatch{dispatch}\nuseCallback{initFetchMethod}\nuseEffect{}',
          function() {
            return [react_redux__WEBPACK_IMPORTED_MODULE_2__['useDispatch']]
          }
        )

        var mapStateToProps = function mapStateToProps(state) {
          console.log(state)
        }
        var mapDispatchToProps = function mapDispatchToProps(dispatch) {
          return Object(
            redux__WEBPACK_IMPORTED_MODULE_3__['bindActionCreators']
          )(
            _store_ducks_movies__WEBPACK_IMPORTED_MODULE_4__['Creators'],
            dispatch
          )
        }

        var _default = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_2__['connect']
        )(
          mapStateToProps,
          mapDispatchToProps
        )(List)

        /* harmony default export */ __webpack_exports__['default'] = _default
        List.propTypes = {
          getMovie:
            prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
          movies:
            prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
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
            List,
            'List',
            '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/components/List/index.js'
          )
          reactHotLoader.register(
            mapStateToProps,
            'mapStateToProps',
            '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/components/List/index.js'
          )
          reactHotLoader.register(
            mapDispatchToProps,
            'mapDispatchToProps',
            '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/components/List/index.js'
          )
          reactHotLoader.register(
            _default,
            'default',
            '/Users/pedro.nahime/Desktop/projects/tests/movie-app/src/components/List/index.js'
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
//# sourceMappingURL=5313d7c-main-wps-hmr.js.map
