"use strict";var User=require("../services/users"),asyncHandler=require("express-async-handler");module.exports=asyncHandler(function(r,n,s){var t,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.session.userId,n.locals.currentUser=null,t){e.next=4;break}return e.abrupt("return",s());case 4:return e.next=6,regeneratorRuntime.awrap(User.findUserById(t));case 6:if(a=e.sent){e.next=9;break}return e.abrupt("return",s());case 9:r.currentUser=a,n.locals.currentUser=a,s();case 12:case"end":return e.stop()}})});