

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
    }
    else if (_new_pos.left > data.scene.width() - 120) {
      _new_pos.left = data.scene.width() - 120;
    }
    if (_new_pos.top < 0) {
      _new_pos.top = 0;
    }
    else if (_new_pos.top > data.scene.height() - 120) {
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

  function inCell(cell_pos, _pos, data) { // УСЛОВИЕ ДЛЯ КЛЕТОК
    if ((cell_pos.left < _pos.left) || (cell_pos.left > data.setka.width() - 60) ||
    (cell_pos.top < _pos.top) || (cell_pos.top > data.setka.height() - 60)) {
      return false
    } else {
        return true
    }
  };
  function cellPosition(elem) {
    pos = elem.data().cell_pos
    elem.animate({left: pos.left, top: pos.top}, 1000, function(){});
    return pos;
  }
