
  getRandomPos = function() {
    var left = 533 + Math.round(Math.random() * (240));
    var top = 50 + Math.round(Math.random() * (240));
    return{"left":left, "top":top};
  }


  function positionScene(new_pos, data) {
    if (new_pos.left < 0) {
      new_pos.left = 0;
    }
    else if (new_pos.left > data.scene.width() - 120) {
      new_pos.left = data.scene.width() - 120;
    }
    if (new_pos.top < 0) {
      new_pos.top = 0;
    }
    else if (new_pos.top > data.scene.height() - 120) {
      new_pos.top = data.scene.height() - 120;
    }
    return new_pos;
  }
