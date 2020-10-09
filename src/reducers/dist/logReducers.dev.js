"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _types = require("../actions/types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  logs: null,
  //brupa nilai state ini ada di component level state addLog dll /sejenisnya
  current: null,
  //nilai skrg ini dipakai utk update atau edit log!
  loading: false,
  //true nnti jika data fecth ada
  error: null //error jika ada error dari server

}; //stiap return dari reducer ini utk upate state itu sndir yg ada distore
//yaitu initial state diatas yg udah kita declare

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.SET_LOADING:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types.LOGS_ERROR:
      return _objectSpread({}, state, {
        error: action.payload
      });
    //case jika data logs ditrima

    case _types.GET_LOGS:
      return _objectSpread({}, state, {
        logs: action.payload,
        //ingat variable yg direturn ke reducer dan ke komponet mesti sama!
        loading: false //payload brupa data

      });
    //case add log

    case _types.ADD_LOG:
      return _objectSpread({}, state, {
        //artinya tampilkan keadaan smua state sblunya logs[],loadng,error etc
        logs: [].concat(_toConsumableArray(state.logs), [action.payload]),
        //logs akan ditammbah caranya: -...state.logs tampikan sluruh array logs peridividu sd sblum ditambahkan
        //,action.payload -->tambahkan dgn aray yg baru dari actionpayload ini
        loading: false
      });

    case _types.DELETE_LOG:
      return _objectSpread({}, state, {
        logs: state.logs.filter(function (log) {
          return log.id !== action.payload;
        }),
        loading: false
      });

    case _types.SET_CURRENT:
      return _objectSpread({}, state, {
        current: action.payload //current adalah initial state yg ada di logs lihat declasaris diatas

      });

    case _types.CLEAR_CURRENT:
      return _objectSpread({}, state, {
        current: null //current adalah initial state yg ada di logs lihat didieklarasikan diatas

      });

    case _types.UPDATE_LOG:
      return _objectSpread({}, state, {
        logs: state.logs.map(function (log) {
          return log.id === action.payload.id ? action.payload : log;
        }),
        loading: false
      });

    default:
      return state;
  }
}; //////KETERANGAN DISPRATE  trutama utk state

/*ARTI ...state : maksudnya adalah tampilkan seluruh keadaan state sblumnya 
per-individu baik itu state yg sblumnya maupun juga props2 seblumnya yg ada distate tersebut
dalam hal ini ...state ini adalah mencakups 

jadi didalam ...state adalah  keadaan state2 saat ini  yaitu :logs,current,.oading ,error
sblum ada action utk ubahnya jadi ditampilkan keadaan sblum diubah atau sstatus terakhir sissate2 tadi 
*/


exports.default = _default;