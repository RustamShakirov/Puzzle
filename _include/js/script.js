$(document).ready(function() {
  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = [];
  data.s = [];
  data.body = $(".body")

  var c = [];
  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" + i});
    pos = getRandomPos();
    b.css(pos);
    b.appendTo(data.box);
    data.c.push(b);
  }
  var s = [];
  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" + i).appendTo(data.setka)
    data.s.push(a);
  }

  var button = {
    name: "Готово"
  };
  var body = $("body");
  var elems = $(".box .img");
  var parent = data.scene;
  elems.on('mousedown', function(event) { //Событие нажатия
    var elem = $(this);
    var pos = {};
    pos.inner = { //Позиция курсора относительно элемента
      left: event.offsetX, top: event.offsetY
    };

    pos.parent = parent.offset(); //позиция родителя относитешльно экрана
    body.on('mousemove', function(event) {  // запомнить позицию курсора относит элемента

      pos.cursor = { //Позиция курсора относительно экрана
        left: event.pageX, top: event.pageY
      };

      new_pos = { //Новая позиция элемента
        left: pos.cursor.left - pos.parent.left - pos.inner.left,
        top: pos.cursor.top - pos.parent.top - pos.inner.top
      }
      new_pos = positionScene(new_pos, data);  //Отдельная функция(для сцены)
      elem.css(new_pos);
    });
    /*Если мышь отпустили за пределами сцены,
    перетаскиваемый фрагмент должен отлететь на исходную позицию */
    body.on('mouseup', function(event) {
    	var elem = $(this)
      elem.off("mouseup")  //Снять события перетаскивания и отжатия мыши
      body.off("mousemove")
    });
  });
});
