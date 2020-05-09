"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var bcrypt=require("bcrypt"),db=require("./db"),Sequelize=require("sequelize"),Model=Sequelize.Model,User=function(){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,_getPrototypeOf(r).apply(this,arguments))}return _inherits(r,Model),_createClass(r,null,[{key:"findUserById",value:function(t){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.findByPk(t));case 1:case"end":return e.stop()}})}},{key:"findUserByEmail",value:function(t){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.findOne({where:{email:t}}));case 1:case"end":return e.stop()}})}},{key:"hashPassword",value:function(e){return bcrypt.hashSync(e,10)}},{key:"verifyPassword",value:function(e,t){return bcrypt.compareSync(e,t)}}]),r}();User.init({email:{type:Sequelize.STRING,allowNull:!1,unique:!0},displayName:{type:Sequelize.STRING,allowNull:!1},password:{type:Sequelize.STRING,allowNull:!1}},{sequelize:db,modelName:"users"}),module.exports=User;