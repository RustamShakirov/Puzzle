$(document).ready(function() {
  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = [];
  data.s = [];
  data.body = $("body")
  data.button = $("button")


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
    grit.data({"number": i}) //цикл
    grit.data({index: i})
  };


  var button = data.button;
  var body = data.body;
  var elems = $(".box .img");
  var parent = data.scene;


  button.addClass("disabled")

  //Событие нажатия
  elems.on('mousedown', function(event) {
    var elem = $(this);
    active_cell = elem.data().cell
    if (typeof active_cell != "undefined") {  //cell в data фрагмента, условие на  наличие
      cell.removeClass("placed")

    }


    var pos = {};
    pos.inner = { //Позиция курсора относительно элемента
      left: event.offsetX, top: event.offsetY
    };
    pos.parent = parent.offset();
     //позиция родителя относитешльно экрана
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
      active_cell = false
      for (var i = 0; i < 9; i++){
        cell = data.s[i]
        if (inCell(elem, cell)) {
          active_cell = cell;
          break;
        }
      }

      if ((active_cell) && (!(active_cell.hasClass("placed")))) {
        elem.data({cell: active_cell})
        animateElemMove(elem, active_cell.data().cell_pos)
        cell.addClass("placed")
      }
      else {
        animateElemMove(elem, elem.data().begin_pos)
      }

      //Вызов функции button
      if (gridFull(data)){
        button.removeClass("disabled");
      }
      else {
        button.addClass("disabled")
      }

      //Снять события перетаскивания и отжатия мыши
      body.off('mouseup')
      body.off("mousemove")
    });


    data.button.on('click', function(event) {
      for (var i = 0; i < 9; i++) {
        elem = data.c[i]
        if (!(cellIsCorrect(elem, i))) {
          animateElemMove(elem, elem.data().begin_pos)
          cell.removeClass("placed");
        }
        //условие инвиза 
      };
      if (sceneInvisible(data)) {
        data.button.off('click')
        data.scene.fadeOut(2000)

      }
      else {
        buttonDanger(button);
        elemsDisabled(elems);
        setTimeout(function() {
         $(".message").fadeIn(1000);
       }, 2000);
      }
    });


  });
});
