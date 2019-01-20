'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqueId = require('./uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tunnel = function (_Component) {
  _inherits(Tunnel, _Component);

  function Tunnel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tunnel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tunnel.__proto__ || Object.getPrototypeOf(Tunnel)).call.apply(_ref, [this].concat(args))), _this), _this.itemId = (0, _uniqueId2.default)(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tunnel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTunnelProps(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setTunnelProps(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var id = this.props.id;
      var tunnelState = this.context.tunnelState;

      tunnelState.setTunnelProps(id, this.itemId, null);
    }
  }, {
    key: 'setTunnelProps',
    value: function setTunnelProps(newProps) {
      var id = newProps.id,
          props = _objectWithoutProperties(newProps, ['id']);

      var tunnelState = this.context.tunnelState;

      tunnelState.setTunnelProps(id, this.itemId, props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Tunnel;
}(_react.Component);

Tunnel.propTypes = {
  id: _propTypes2.default.string,
  render: _propTypes2.default.func
};
Tunnel.contextType = _context.TunnelContext;
exports.default = Tunnel;