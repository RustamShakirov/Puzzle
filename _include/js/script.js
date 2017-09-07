$(document).ready(function() {
  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = []
  data.s = []
  //data.start = []
  //data.direction = []
  var c = []
  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" + i});
    b.css({left: 0  , top: 0});
    b.appendTo(data.box);
    c.push(b);
    data.c.push(b);
  //let direction = []
    var left = Math.round(Math.random() * (240))  + 'px';
    var top = Math.round(Math.random() * (240))  + 'px';
    c[i].css({left: left, top: top});
    //data.direction.push(left,top);
  }
//c[0].css({left: 120})
  var s = []
  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" + i).appendTo(data.setka)
    s.push(a);
    data.s.push(a);
  }
  //var start = []
  var button = {
    name: "Готово"
    //data.start.push(button);
  };
  console.log(data)
});
