var elemOpen, elemClose, elemToggle, elemDir, elemPane;
var elemOpen2, elemClose2, elemToggle2, elemDir2, elemPane2;
var dir = 1;
var dir2 = -1;

$(function () {

  elemOpen = document.querySelector(".open");
  elemClose = document.querySelector(".close");
  elemToggle = document.querySelector(".toggle");
  elemDir = document.querySelector(".dir");
  elemPane = document.querySelector(".pane");

  elemOpen2 = document.querySelector(".open2");
  elemClose2 = document.querySelector(".close2");
  elemToggle2 = document.querySelector(".toggle2");
  elemDir2 = document.querySelector(".dir2");
  elemPane2 = document.querySelector(".pane2");

  // Pane instanciation
  var pane = new Pane(elemPane, { animClasses: ["bounceInRight", "bounceOutLeft", "bounceInLeft", "bounceOutRight"] });
  var pane2 = new Pane(elemPane2, { animClasses: ["bounceInUp", "bounceOutDown", "bounceInDown", "bounceOutUp"] });

  // DOM Event bindings
  $(elemOpen).on("click", function () { pane.open(dir); });
  $(elemClose).on("click", function () { pane.close(dir); });
  $(elemToggle).on("click", function () { pane.toggle(dir); });
  $(elemDir).on("click", function () { dir = -dir; });

  $(elemOpen2).on("click", function () { pane2.open(dir2); });
  $(elemClose2).on("click", function () { pane2.close(dir2); });
  $(elemToggle2).on("click", function () { pane2.toggle(dir2); });
  $(elemDir2).on("click", function () { dir2 = -dir2; });

});