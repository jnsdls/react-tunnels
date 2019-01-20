"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TunnelState = function () {
  function TunnelState() {
    _classCallCheck(this, TunnelState);

    this.tunnels = {};
    this.listeners = {};
    this.tunnelsDict = {};
  }

  _createClass(TunnelState, [{
    key: "getListeners",
    value: function getListeners(id) {
      return this.listeners[id] || [];
    }
  }, {
    key: "subscribe",
    value: function subscribe(id, fn) {
      this.listeners[id] = [].concat(_toConsumableArray(this.getListeners(id)), [fn]);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id, fn) {
      this.listeners[id] = this.getListeners(id).filter(function (listener) {
        return listener !== fn;
      });
    }
  }, {
    key: "setTunnelProps",
    value: function setTunnelProps(id, itemId, props) {
      this.tunnels[id] = this.tunnels[id] || [];
      this.tunnelsDict[id] = this.tunnelsDict[id] || {};

      if (props !== null) {
        if (!this.tunnelsDict[id][itemId]) {
          this.tunnels[id].push(itemId);
        }
        this.tunnelsDict[id][itemId] = props;
      } else {
        delete this.tunnelsDict[id][itemId];
        var idx = this.tunnels[id].indexOf(itemId);
        this.tunnels[id] = [].concat(_toConsumableArray(this.tunnels[id].slice(0, idx)), _toConsumableArray(this.tunnels[id].slice(idx + 1)));
      }

      if (this.listeners[id]) {
        this.listeners[id].forEach(function (fn) {
          return fn(props);
        });
      }
    }
  }, {
    key: "getTunnelProps",
    value: function getTunnelProps(id) {
      var _this = this;

      if (this.tunnels[id]) {
        return this.tunnels[id].length < 2 ? this.tunnelsDict[id][this.tunnels[id][0]] : this.tunnels[id].map(function (i) {
          return _this.tunnelsDict[id][i];
        });
      }

      return null;
    }
  }]);

  return TunnelState;
}();

exports.default = TunnelState;