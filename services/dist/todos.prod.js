"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var db=require("./db"),Sequelize=require("sequelize"),User=require("./users"),Model=Sequelize.Model,Todo=function(){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,Model),_createClass(n,[{key:"markAsDone",value:function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return this.done=!0,e.abrupt("return",this.save());case 2:case"end":return e.stop()}},null,this)}}],[{key:"findAllNotDone",value:function(t){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.findAll({where:{done:!1,userId:t}}));case 1:case"end":return e.stop()}})}},{key:"findById",value:function(t){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.findByPk(t));case 1:case"end":return e.stop()}})}},{key:"add",value:function(t,r){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.create({name:t,done:!1,userId:r}));case 1:case"end":return e.stop()}})}}]),n}();Todo.init({name:{type:Sequelize.STRING,allowNull:!1},done:{type:Sequelize.BOOLEAN,allowNull:!1,defaultValue:!1}},{sequelize:db,modelName:"todos"}),User.hasMany(Todo),Todo.belongsTo(User),module.exports=Todo;