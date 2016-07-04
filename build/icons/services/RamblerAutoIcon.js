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

var RamblerAutoIcon = (0, _pure2.default)(_class = (_temp = _class2 = function () {
  function RamblerAutoIcon() {
    _classCallCheck(this, RamblerAutoIcon);
  }

  _createClass(RamblerAutoIcon, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        _SvgIcon2.default,
        null,
        React.createElement('path', { d: 'm-13-14h48v48h-48z' }),
        React.createElement(
          'g',
          { transform: 'matrix(1 0 0-1 0 20)' },
          React.createElement('path', { d: 'm9.74.74c-1.6.02-3.18.45-4.6 1.26-4.5 2.59-6 8.33-3.45 12.82 2.6 4.49 8.35 6 12.84 3.44 4.5-2.59 6-8.33 3.45-12.82-1.66-2.87-4.68-4.62-7.94-4.69h-.3-.01m.01 1.5h.28c2.73.06 5.27 1.53 6.66 3.95 2.18 3.77.88 8.59-2.9 10.77-3.78 2.18-8.61.88-10.79-2.89-2.18-3.77-.88-8.59 2.89-10.76 1.19-.68 2.52-1.04 3.87-1.06h-.01' }),
          React.createElement('path', { d: 'm9.1 1.49v6.27.75h1.5v-.75-6.27-.75h-1.5v.75' }),
          React.createElement('path', { d: 'm17.37 10.75h0 .63v-1.5h-.63-5.25-.63v1.5h.63' }),
          React.createElement('path', { d: 'm1.9 10.75h5.2.65v-1.5h-.65-5.2-.65v1.5h.65' }),
          React.createElement('path', { d: 'm9.81 6.96c-.54.01-1.07.15-1.55.43-1.52.87-2.04 2.81-1.16 4.33.88 1.52 2.82 2.03 4.33 1.16 1.52-.87 2.04-2.81 1.16-4.33-.56-.97-1.58-1.56-2.68-1.58h-.1-.01m.01 1.5h.08c.56.01 1.1.32 1.4.84.46.8.19 1.82-.61 2.28-.8.46-1.82.19-2.29-.61-.46-.8-.19-1.82.61-2.28.25-.15.53-.22.82-.23h-.01' })
        )
      );
    }
  }]);

  return RamblerAutoIcon;
}(), _class2.displayName = 'RamblerAutoIcon', _temp)) || _class;

exports.default = RamblerAutoIcon;