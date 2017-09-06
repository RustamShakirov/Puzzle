$(document).ready(function() {
  // При загрузке страницы выполнится весь написанный здесь код
  // alert("Привет!!!");

  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = data.scene.find(".box");
  data.s = data.scene.find(".setka");


  var c = []
  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" + i});
    b.css({left: 0  , top: 0});
    b.appendTo(data.box);
    c.push(b)
  }
  /*c[0].css({left: 120})
  c[1].css({left: 240})
  c[2].css({left: 360}) */



  //c[3].css({left: 400})
  console.log(data)

  var s = []
  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" + i).appendTo(data.setka)
    s.push(b)
  }
});
