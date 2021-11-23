class Back {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.offsetX = 0;
      this.offsetY = 0;
      this.dragging = false;
      this.rollover = false;
    }
  
    show(img) {
      texture(img);
      rect(this.x, this.y, this.w, this.h);
    }
  }