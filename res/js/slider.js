function Slider(wrapperClass) {
  var base = {
    defaultOpts: {
      wrapperClass: ".wrapper"
    },
    wrapper: undefined,
    dragging: false,
    init: function(wrapperClass) {
      this.wrapperClass =
        wrapperClass === undefined
          ? this.defaultOpts.wrapperClass
          : wrapperClass;
      this.wrapper = document.body.querySelector(this.wrapperClass);
      this.wrapper.addEventListener("click", handleClick);
      this.wrapper.addEventListener("mousedown", handleMouse);
      this.wrapper.addEventListener("mousemove", handleMouse);
      this.wrapper.addEventListener("mouseup", handleMouse);
    }
  };
  function handleMouse(ev) {
    switch (ev.type) {
      case "mousemove":
        if (base.dragging === true) {
          handleClick(ev, this);
        }
        break;
      case "mouseup":
      case "mousedown":
        base.dragging = ev.type === "mousedown";
        break;
    }
  }

  function handleClick(ev, self) {
    var me = self === undefined ? this : self;
    var p = ev.offsetX / me.offsetWidth * 100;
    if (p > 97) {
      p = 100;
    } else if (p < 3) {
      p = 0;
    }
    //Do shit here with max-value
    if (p > 97) {
      p = 97;
    } else if (p < 3) {
      p = 3;
    }
    //Do shit here with max-value
    me.children[0].style.width = `${p}%`;
    console.log(me.children[0].style.width);
  }
  base.init(wrapperClass)
  return {
    wrapperClass: base.wrapperClass
  };
}
