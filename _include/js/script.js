$(document).ready(function() {
  var data = {};
  data.scene = {
    self: $(".scene"),
    pos: {
      leftMin: null,
      leftMax: null,
      topMin: null,
      topMax: null
    }
  };
  var _scene_offset = data.scene.self.offset();
  data.box = data.scene.self.find(".box");
  data.setka = data.scene.self.find(".setka");
  data.c = [];
  data.s = [];

  var c = [];
  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" + i});
    pos = getRandomPos();
    b.css(pos);
    b.appendTo(data.box);
    data.c.push(b);
  }

  var elems = $(".box .img");
  var parent = data.scene.self;
  elems.on('mousedown', function(event) { //Событие нажатия
    var elem = $(this);
    var pos = {};
    pos.inner = { //Позиция курсора относительно элемента
      left: event.offsetX, top: event.offsetY
    };
    //$("body").on  //parent.on
    parent.on('mousemove', function(event) {  // запомнить позицию курсора относит элемента
      pos.parent = parent.offset(); //позиция родителя относитешльно экрана

      pos.cursor = { //Позиция курсора относительно экрана
        left: event.pageX, top: event.pageY
      };

      new_pos = { //Новая позиция элемента
        left: pos.cursor.left - pos.parent.left - pos.inner.left,
        top: pos.cursor.top - pos.parent.top - pos.inner.top
      }
      if (new_pos.left < 0) { //Условие для позиционирования left && top
        new_pos.left = 0;
      }
      else if (new_pos.left > data.scene.self.width() - 120) {
        new_pos.left = data.scene.self.width() - 120;
      }
      if (new_pos.top < 0) {
        new_pos.top = 0;
      }
      else if (new_pos.top > data.scene.self.height() - 120) {
        new_pos.top = data.scene.self.height() - 120;
      }
      elem.css(new_pos);
    });

  //   $(document).on('mouseup', function(event) {
  //
  //      $(document).off('mouseup');
  //      $(document).off('mousemove');
  //   ......
  // }
    //elems.on
    $("body").on('mouseup', function(event) {
    	var elem = $(this);
      elem.off("mouseup");  //Снять события перетаскивания и отжатия мыши
      parent.off("mousemove");
    });
  });

  var s = [];
  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" + i).appendTo(data.setka)
    data.s.push(a);
  }

  var button = {
    name: "Готово"
  };

});
