$(document).ready(function() {
  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = [];
  data.s = [];
  data.body = $("body")
  //ЦИКЛ ДЛЯ ФРАГМЕНТА
  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" + i});
    pos = getRandomPos();
    b.data({begin_pos: pos});     //Сохранить атрибут
    b.css(pos);
    b.appendTo(data.box);
    data.c.push(b);
  }
  //ЦИКЛ ДЛЯ СЕТКИ
  for (var i = 0; i < 9; i++) {
    var grit = $("<div>").addClass("b b" + i).appendTo(data.setka)
    data.s.push(grit);

    pos = grit.position(); //запомнить позицию клетки
    grit.data({cell_pos: pos}); //сохранение позиции клетки в дату
    pos = data.s[i].data().cell_pos
  }

  var button = {
    name: "Готово"
  };
  var body = data.body;
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

      _pos = { //Новая позиция элемента
        left: pos.cursor.left - pos.parent.left - pos.inner.left,
        top: pos.cursor.top - pos.parent.top - pos.inner.top
      }

      new_pos = positionScene(_pos, data);  //Отдельная функция(для сцены)
      elem.css(new_pos);
    });

    body.on('mouseup', function(event) {
      begin_pos = returnPosition(elem);
      cell_pos = cellPosition(elem);
      body.off('mouseup')    //Снять события перетаскивания и отжатия мыши
      body.off("mousemove")
    });
  });

});
