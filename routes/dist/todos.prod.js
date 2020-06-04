"use strict";var _require=require("express"),Router=_require.Router,asyncHandler=require("express-async-handler"),router=new Router,Todo=require("../services/todos");router.get("/",asyncHandler(function(r,n){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Todo.findAllNotDone(r.user.id));case 2:t=e.sent,n.render("todo",{todos:t});case 4:case"end":return e.stop()}})})),router.get("/:id/done",asyncHandler(function(r,n){var t,o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params.id,e.next=3,regeneratorRuntime.awrap(Todo.findById(t));case 3:if((o=e.sent)&&o.userId===r.currentUser.id)return e.next=7,regeneratorRuntime.awrap(o.markAsDone());e.next=7;break;case 7:n.redirect("/todo");case 8:case"end":return e.stop()}})})),router.post("/",asyncHandler(function(r,n){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.body.nametodo)return e.next=4,regeneratorRuntime.awrap(Todo.add(t,r.user.id));e.next=5;break;case 4:n.redirect("/todo");case 5:case"end":return e.stop()}})})),module.exports=router;