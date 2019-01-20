'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TunnelPlaceholder = function (_Component) {
  _inherits(TunnelPlaceholder, _Component);

  function TunnelPlaceholder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TunnelPlaceholder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TunnelPlaceholder.__proto__ || Object.getPrototypeOf(TunnelPlaceholder)).call.apply(_ref, [this].concat(args))), _this), _this.handlePropsChange = function () {
      _this.forceUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TunnelPlaceholder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.id;
      var tunnelState = this.context.tunnelState;


      tunnelState.subscribe(id, this.handlePropsChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var id = this.props.id;
      var tunnelState = this.context.tunnelState;

      tunnelState.unsubscribe(id, this.handlePropsChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var tunnelState = this.context.tunnelState;
      var _props = this.props,
          id = _props.id,
          renderChildren = _props.children,
          Tag = _props.component,
          multiple = _props.multiple;

      var tunnelProps = tunnelState.getTunnelProps(id);

      if (renderChildren) {
        if (Array.isArray(tunnelProps) || multiple) {
          return !tunnelProps ? renderChildren({ items: [] }) : renderChildren({
            items: Array.isArray(tunnelProps) ? tunnelProps : [tunnelProps]
          });
        } else {
          return renderChildren(tunnelProps || {});
        }
      }

      if (!tunnelProps) {
        return null;
      }

      return _react2.default.createElement(
        Tag,
        null,
        tunnelProps.children
      );
    }
  }]);

  return TunnelPlaceholder;
}(_react.Component);

TunnelPlaceholder.propTypes = {
  children: _propTypes2.default.func,
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.symbol]),
  id: _propTypes2.default.string.isRequired,
  multiple: _propTypes2.default.bool
};
TunnelPlaceholder.defaultProps = {
  component: _react.Fragment
};
TunnelPlaceholder.contextType = _context.TunnelContext;
exports.default = TunnelPlaceholder;