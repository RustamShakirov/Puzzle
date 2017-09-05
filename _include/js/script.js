$(document).ready(function() {
  // При загрузке страницы выполнится весь написанный здесь код
  // alert("Привет!!!");
var data = {};
data.scene = $(".scene");
data.box = data.scene.find(".box");

var b = $("<div>", {class: "img img1"})
b.css({left: 0  , top: 0})
b.appendTo(data.box)

var b = $("<div>", {class: "img img2"})
b.css({left: 125, top: 0})
b.appendTo(data.box)

var b = $("<div>", {class: "img img3"})
b.css({left: 250, top: 0})
b.appendTo(data.box)

var b = $("<div>", {class: "img img4"})
b.css({left: 0, top: 125})
b.appendTo(data.box)

var b = $("<div>", {class: "img img5"})
b.css({left: 125, top: 125})
b.appendTo(data.box)

var b = $("<div>", {class: "img img6"})
b.css({left: 250, top: 125})
b.appendTo(data.box)

var b = $("<div>", {class: "img img7"})
b.css({left: 0, top: 250})
b.appendTo(data.box)

var b = $("<div>", {class: "img img8"})
b.css({left: 125, top: 250})
b.appendTo(data.box)

var b = $("<div>", {class: "img img9"})
b.css({left: 250, top: 250})
b.appendTo(data.box)



var data = {};
data.scene = $(".scene");
data.setka = data.scene.find(".setka");

var a = $("<div>").addClass("b b1").appendTo(data.setka)
var a = $("<div>").addClass("b b2").appendTo(data.setka)
var a = $("<div>").addClass("b b3").appendTo(data.setka)
var a = $("<div>").addClass("b b4").appendTo(data.setka)
var a = $("<div>").addClass("b b5").appendTo(data.setka)
var a = $("<div>").addClass("b b6").appendTo(data.setka)
var a = $("<div>").addClass("b b7").appendTo(data.setka)
var a = $("<div>").addClass("b b8").appendTo(data.setka)
var a = $("<div>").addClass("b b9").appendTo(data.setka)







});
