"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), _react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2zM19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"
}))), 'FilterCenterFocusTwoTone');

exports.default = _default;