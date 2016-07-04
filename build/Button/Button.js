'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _compact = require('lodash/compact');

var _compact2 = _interopRequireDefault(_compact);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonCss = require('./Button.css.js');

var _ButtonCss2 = _interopRequireDefault(_ButtonCss);

require('./Button.compiled.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp = _class = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'mapThemeToIconColor',
    value: function mapThemeToIconColor(theme) {
      return {
        blue: 'light',
        dark: 'light',
        red: 'light'
      }[theme];
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon) {
      if (icon) {
        var iconProps = {
          size: this.props.size,
          color: this.mapThemeToIconColor(this.props.theme)
        };

        return React.createElement(
          'span',
          { className: _ButtonCss2.default.Button__icon },
          (0, _react.cloneElement)(icon, _extends({}, iconProps, icon.props || {}))
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var icon = _props.icon;
      var children = _props.children;
      var size = _props.size;
      var theme = _props.theme;
      var href = _props.href;
      var container = _props.container;
      var buttonType = _props.buttonType;

      var other = _objectWithoutProperties(_props, ['className', 'icon', 'children', 'size', 'theme', 'href', 'container', 'buttonType']);

      var content = (0, _compact2.default)((0, _flatten2.default)([this.renderIcon(icon), children]));
      var resultClassName = (0, _classnames2.default)(className, _ButtonCss2.default.Button, _ButtonCss2.default['Button--theme-' + theme], _ButtonCss2.default['Button--size-' + size]);

      var buttonProps = _extends({}, other, { className: resultClassName });

      return (0, _react.isValidElement)(container) ? (0, _react.cloneElement)(container, buttonProps, content) : href ? React.createElement(
        'a',
        _extends({ href: href }, buttonProps),
        content
      ) : React.createElement(
        'button',
        _extends({ type: buttonType }, buttonProps),
        content
      );
    }
  }]);

  return Button;
}(_react.Component), _class.propTypes = {
  /**
   * Если указан href, то кнопка будет ссылкой
   */
  href: _react.PropTypes.string,
  /**
   * Атрибут target для ссылки, если указан атрибут href
   */
  target: _react.PropTypes.string,
  /**
   * Css-класс
   */
  className: _react.PropTypes.string,
  /**
   * Inline-стили
   */
  style: _react.PropTypes.object,
  /**
   * Контент для кнопки
   */
  children: _react.PropTypes.node,
  /**
   * Иконка для кнопки
   */
  icon: _react.PropTypes.node,
  /**
   * Размер кнопки
   */
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Вид отображения кнопки
   */
  theme: _react.PropTypes.oneOf(['blue', 'dark', 'red']),
  /**
   * Обработчик клика
   */
  onClick: _react.PropTypes.func,
  /**
   * Элемент, который содержит контент, например `<Link />`
   * в случае с `react-router`
   */
  container: _react.PropTypes.element,
  /**
   * Атрибут `type` на кнопке
   */
  buttonType: _react.PropTypes.string
}, _class.defaultProps = {
  size: 'medium',
  theme: 'blue',
  buttonType: 'button'
}, _temp);
exports.default = Button;