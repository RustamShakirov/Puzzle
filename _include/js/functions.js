

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


  function inScene(_pos, data) {
    //console.log(_pos)
    if ((_pos.left < 0) || (_pos.left > data.scene.width() - 120) ||
    (_pos.top < 0) || (_pos.top > data.scene.height() - 120)) {
      return false
    } else {
      return true
    }
  };


  function returnPosition(elem) {
    pos = elem.data().begin_pos //Получить атрибут
    elem.animate({left: pos.left, top: pos.top}, 1000, function(){});
    return pos;
  };
