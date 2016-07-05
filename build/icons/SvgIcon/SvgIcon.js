'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _variables = require('../../variables');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SvgIcon = (_temp = _class = function () {
  function SvgIcon() {
    _classCallCheck(this, SvgIcon);

    this.sizeMap = {
      small: 12,
      medium: 20,
      large: 30
    };
  }

  _createClass(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var color = _props.color;
      var size = _props.size;
      var style = _props.style;
      var viewBox = _props.viewBox;

      var other = _objectWithoutProperties(_props, ['children', 'color', 'size', 'style', 'viewBox']);

      var resultColor = _variables.colors[color] || color;
      var resultSize = this.sizeMap[size] || size;
      var resultStyle = _extends({
        width: resultSize,
        height: resultSize,
        display: 'inline-block',
        userSelect: 'none'
      }, style);

      return React.createElement(
        'svg',
        _extends({}, other, {
          fill: resultColor,
          viewBox: viewBox,
          style: resultStyle }),
        children
      );
    }
  }]);

  return SvgIcon;
}(), _class.propTypes = {
  /**
   * Дополнительный класс для иконки
   */
  className: _react.PropTypes.string,
  /**
   * Дополнительные инлайновые стили для иконки
   */
  style: _react.PropTypes.object,
  /**
   * Цвет иконки
   */
  color: _react.PropTypes.string,
  /**
   * Элементы, которые отрисуются внутри svg-элемента
   */
  children: _react.PropTypes.node,
  /**
   * Размер иконки. Может быть строкой или значением в пикселях
   */
  size: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['small', 'medium', 'large']), _react.PropTypes.number])
}, _class.defaultProps = {
  color: 'dark',
  viewBox: '0 0 24 24',
  size: 'medium',
  style: {}
}, _temp);
exports.default = SvgIcon;