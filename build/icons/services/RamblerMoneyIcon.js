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

var RamblerMoneyIcon = (0, _pure2.default)(_class = (_temp = _class2 = function () {
  function RamblerMoneyIcon() {
    _classCallCheck(this, RamblerMoneyIcon);
  }

  _createClass(RamblerMoneyIcon, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        _SvgIcon2.default,
        null,
        React.createElement('path', { d: 'm-14-14h48v48h-48z' }),
        React.createElement(
          'g',
          null,
          React.createElement('path', { d: 'm10 19.69c5.35 0 9.69-4.34 9.69-9.69 0-5.35-4.34-9.69-9.69-9.69-5.35 0-9.69 4.34-9.69 9.69 0 5.35 4.34 9.69 9.69 9.69m0-1.35c-4.6 0-8.34-3.73-8.34-8.34 0-4.6 3.73-8.34 8.34-8.34 4.6 0 8.34 3.73 8.34 8.34 0 4.6-3.73 8.34-8.34 8.34' }),
          React.createElement('path', { d: 'm8.97 7.1h1.72c.49 0 .86.13 1.11.4.25.27.37.61.37 1 0 .4-.12.74-.37 1-.25.26-.62.39-1.11.39h-1.72v-2.81m.56 3.87h1.16c.88 0 1.57-.22 2.06-.67.5-.45.75-1.05.75-1.79 0-.74-.25-1.34-.75-1.79-.5-.45-1.18-.68-2.06-.68h-3.05v3.87h-.65v1.06h.65v.59h-.65v1.07h.65v1.36h1.33v-1.36h2.24v-1.07h-2.24v-.59h.56' })
        )
      );
    }
  }]);

  return RamblerMoneyIcon;
}(), _class2.displayName = 'RamblerMoneyIcon', _temp)) || _class;

exports.default = RamblerMoneyIcon;