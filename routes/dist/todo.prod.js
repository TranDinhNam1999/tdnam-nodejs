"use strict";var _require=require("express"),Router=_require.Router,asyncHandler=require("express-async-handler"),router=new Router,Todo=require("../services/todo");router.get("/todo2",asyncHandler(function(e,r){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Todo.findAllNotDone());case 2:t=e.sent,r.render("todo2",{todos:t});case 4:case"end":return e.stop()}})})),router.get("/todo2/:id/done",asyncHandler(function(r,t){var n,o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.params.id,e.next=3,regeneratorRuntime.awrap(Todo.findById(n));case 3:if(o=e.sent)return e.next=7,regeneratorRuntime.awrap(o.markAsDone());e.next=7;break;case 7:t.redirect("/todo2");case 8:case"end":return e.stop()}})})),module.exports=router;