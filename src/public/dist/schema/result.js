class Result {
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

    show(p, img) {
        console.log('xxx');
        p.noStroke();
        p.texture(img);
        p.rect(this.x, this.y, this.w, this.h);
    }
}