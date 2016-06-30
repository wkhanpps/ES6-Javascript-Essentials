"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Database = exports.Database = function () {
  function Database() {
    _classCallCheck(this, Database);
  }

  _createClass(Database, [{
    key: "find",
    value: function find(callback) {
      var data = [{
        id: 1,
        name: "Max Kaplan"
      }, {
        id: 2,
        name: "John Doe"
      }, {
        id: 3,
        name: "Ben Smith"
      }];
      callback(data);
    }
  }]);

  return Database;
}();