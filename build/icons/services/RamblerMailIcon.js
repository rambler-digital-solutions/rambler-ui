'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _SvgIcon = require('../../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RamblerMailIcon = (0, _pure2.default)(_class = (_temp = _class2 = function () {
  function RamblerMailIcon() {
    _classCallCheck(this, RamblerMailIcon);
  }

  _createClass(RamblerMailIcon, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        _SvgIcon2.default,
        null,
        React.createElement('path', { d: 'm-14-14h48v48h-48z' }),
        React.createElement(
          'g',
          null,
          React.createElement('path', { d: 'm1 3.75h18l-.75-.75v13.1l.75-.75h-18l.75.75v-13.1l-.75.75m0-1.5c-.41 0-.75.34-.75.75v13.1c0 .41.34.75.75.75h18c.41 0 .75-.34.75-.75v-13.1c0-.41-.34-.75-.75-.75h-18' }),
          React.createElement('path', { d: 'm3.88 6.88l5.71 3.65.4.26.4-.26 5.72-3.65-.81-1.26-5.72 3.65h.81l-5.71-3.65-.81 1.26' })
        )
      );
    }
  }]);

  return RamblerMailIcon;
}(), _class2.displayName = 'RamblerMailIcon', _temp)) || _class;

exports.default = RamblerMailIcon;