

  getRandomPos = function() {
    var left = 533 + Math.round(Math.random() * (240));
    var top = 50 + Math.round(Math.random() * (240));
    return{"left":left, "top":top};
  }


  function positionScene(_pos, data) {
    _new_pos = {
      left: _pos.left,
      top: _pos.top
    }
    if (_new_pos.left < 0) {
      _new_pos.left = 0;
    } else if (_new_pos.left > data.scene.width() - 120) {
      _new_pos.left = data.scene.width() - 120;
    } if (_new_pos.top < 0) {
      _new_pos.top = 0;
    } else if (_new_pos.top > data.scene.height() - 120) {
      _new_pos.top = data.scene.height() - 120;
    }
    return _new_pos;
  }


  function inScene(_pos, data) { // УСЛОВИЕ ДЛЯ СЦЕНЫ(ЯТО БЫ В ПРЕДЕЛАХ СЦЕНЫ ДРАГАЛСЯ)
    if ((_pos.left < 0) || (_pos.left > data.scene.width() - 120) ||
    (_pos.top < 0) || (_pos.top > data.scene.height() - 120)) {
      return false
    } else  {
      return true
    }
  };
  function returnPosition(elem) {
    pos = elem.data().begin_pos //Получить атрибут b.data({begin_pos: pos});
    elem.animate({left: pos.left, top: pos.top}, 1000, function(){});
    return pos;
  };




//Можно проверить по координатам
//Есть ли фрагмент с той же позицией, что и клетка
// Можно добавить клетке какой-нибудь класс, при размещении в ней фрагмента
// cell.addClass("placed")
// Затем проверять, заполнена ли клетка:
// if (cell.hasClass("placed")) {
// }

  // УСЛОВИЕ ДЛЯ КЛЕТОК
  function inCell(elem, cell) {
    // Позиция фрагмента
    pos = elem.position()
    // Позиция центра фрагмента
    center_pos = {
      left: pos.left + elem.width()/2,
      top: pos.top + elem.height()/2,
    }
    // Позиция клетки
    cell_pos = cell.data().cell_pos
    cell_size = {
      width: cell.width(),
      height: cell.height()
    }

    res = false

    if ((center_pos.left > cell_pos.left) && (center_pos.left < cell_pos.left + cell_size.width) &&
      (center_pos.top > cell_pos.top) && (center_pos.top < cell_pos.top + cell_size.height)) {
        res = true
      }

      return res;
    };

    //Общая функция, перемещает фрагмент в произвольную область
    function animateElemMove(elem, pos) {
      elem.animate({left: pos.left, top: pos.top}, 1000, function(){});
    }
