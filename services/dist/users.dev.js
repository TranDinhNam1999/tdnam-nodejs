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

var bcrypt = require('bcrypt');

var db = require('./db');

var Sequelize = require('sequelize');

var Model = Sequelize.Model;

var User =
/*#__PURE__*/
function (_Model) {
  _inherits(User, _Model);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
  }

  _createClass(User, null, [{
    key: "findUserById",
    value: function findUserById(id) {
      return regeneratorRuntime.async(function findUserById$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", User.findByPk(id));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "findAllUser",
    value: function findAllUser() {
      return regeneratorRuntime.async(function findAllUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", User.findAll({}));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "findUserByEmail",
    value: function findUserByEmail(email) {
      return regeneratorRuntime.async(function findUserByEmail$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", User.findOne({
                where: {
                  email: email
                }
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "hashPassword",
    value: function hashPassword(password) {
      return bcrypt.hashSync(password, 10);
    }
  }, {
    key: "verifyPassword",
    value: function verifyPassword(password, hashPassword) {
      return bcrypt.compareSync(password, hashPassword);
    }
  }]);

  return User;
}(Model);

;
User.init({
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  displayName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tooken: {
    type: Sequelize.STRING
  }
}, {
  sequelize: db,
  modelName: 'users'
}); // const users = [{
//         id: 1,
//         email: 'tdnam.17ck1@gmail.com',
//         displayName: 'Dinh Nam',
//         password: '$2b$10$IQDbGnVrTAuMaobZ3dB4zeJ/RSxpE17BK6JCBOGaoeW6Vtrq4EF5i',
//     },
//     {
//         id: 2,
//         email: 'namhandsomefap@gmail.com',
//         displayName: 'Nam Handsome',
//         password: '$2b$10$PgHIn7eJkefZcserSc.MIuYf2PSqaf17d8PcWAHdwv4Op4bJw3MQO',
//     },
// ];
// function findUserByEmail(email) {
//     return users.find(x => x.email === email);
// }
// function findUserById(id) {
//     return users.find(u => u.id === id);
// }
// function hashPassword(password) {
//     return bcrypt.hashSync(password, 10);
// }
// function verifyPassword(password, hashPassword) {
//     return bcrypt.compareSync(password, hashPassword);
// }

module.exports = User;