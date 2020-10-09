"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _logReducers = _interopRequireDefault(require("./logReducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//smua reducer digabung disini
var _default = (0, _redux.combineReducers)({
  log: _logReducers.default
}); //nama log: logEducers ,yaitu sblha kiri tanda : ini yg akan jadi props
//dan mrupakan state yg direfeenesikan ke const MapStateToProps di component
//yaitu namanya state.log ,jadi namanya managacu pada nama ini ya yg ada di combine reducers


exports.default = _default;