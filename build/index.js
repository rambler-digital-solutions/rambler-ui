'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = exports.Button = exports.version = undefined;

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

var _icons2 = require('./icons');

var _icons = _interopRequireWildcard(_icons2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = exports.version = '1.0.0';
exports.Button = _Button3.default;
exports.icons = _icons;