"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var db = require('./db');

var Sequelize = require('sequelize');

var User = require('./users');

var Model = Sequelize.Model;

var Todo =
/*#__PURE__*/
function (_Model) {
  _inherits(Todo, _Model);

  function Todo() {
    _classCallCheck(this, Todo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Todo).apply(this, arguments));
  }

  _createClass(Todo, [{
    key: "markAsDone",
    value: function markAsDone(todo) {
      return regeneratorRuntime.async(function markAsDone$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.done = true;
              return _context.abrupt("return", this.save());

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }], [{
    key: "findAllNotDone",
    value: function findAllNotDone(userId) {
      return regeneratorRuntime.async(function findAllNotDone$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Todo.findAll({
                where: {
                  done: false,
                  userId: userId
                }
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "findById",
    value: function findById(id) {
      return regeneratorRuntime.async(function findById$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", Todo.findByPk(id));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "add",
    value: function add(name, userId) {
      return regeneratorRuntime.async(function add$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", Todo.create({
                name: name,
                done: false,
                userId: userId
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return Todo;
}(Model);

;
Todo.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize: db,
  modelName: 'todos'
});
User.hasMany(Todo);
Todo.belongsTo(User);
module.exports = Todo;