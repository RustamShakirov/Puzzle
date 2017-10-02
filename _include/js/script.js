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
  }

  var button = data.button;
  var body = data.body;
  var elems = $(".box .img");
  var parent = data.scene;


  elems.on('mousedown', function(event) { //Событие нажатия
    var elem = $(this);


    active_cell = elem.data().cell
    if (typeof active_cell != "undefined") {  //cell в data фрагмента, условие на  наличие
      active_cell.removeClass("placed")
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
        cell.data({index: i})
        animateElemMove(elem, active_cell.data().cell_pos)
        active_cell.addClass("placed")
      }
      else {
        animateElemMove(elem, elem.data().begin_pos)
      }


      function gridFull(data){
        var res = false

         for (i = 0; i < 9; i++) {
           elem = data.c[i]
           cell = elem.data().cell;
           if (cell == undefined) {
             res = true
             break;
           }
         }

         return res;
         }

         if (gridFull(data)){
           button.addClass("disabled")
         }
         else {
           button.removeClass("disabled")
         }


      body.off('mouseup')    //Снять события перетаскивания и отжатия мыши
      body.off("mousemove")
    });

    button.on('click', function(event) {
      for (var i = 0; i < 9; i++) {
        elem = data.c[i]
        cell = elem.data().cell

        cell_index = cell.data().index
        if (i == cell_index) {
          true
        }
        else {
          animateElemMove(elem, elem.data().begin_pos)
          cell.removeClass("placed");
        }
      }
      button.off('click')
   });


  });
});
