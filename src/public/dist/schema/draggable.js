// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
    constructor(x, y, w, h) {
        this.dragging = false; // Is the object being dragged?
        this.rollover = false; // Is the mouse over the ellipse?
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    over(canW, canH, mouseX, mouseY) {
        // console.log('over');
        // Is mouse over object
        if (mouseX > this.x + canW / 2 && mouseX < this.x + canW / 2 + this.w && mouseY > this.y + canH / 2 && mouseY < this.y + canH / 2 + this.h) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    update(mouseX, mouseY) {
        // Adjust location if being dragged
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    show(p, img) {
        // console.log('show');
        p.noStroke();
        p.texture(img);
        // Different fill based on state
        if (this.dragging) {
            p.stroke(0);
        } else if (this.rollover) {
            //p.fill(100);
        } else {
            //p.fill(175, 200);
        }
        p.rect(this.x, this.y, this.w, this.h);
    }

    pressed(canW, canH, mouseX, mouseY) {
        // Did I click on the rectangle?
        if (mouseX > this.x + canW / 2 && mouseX < this.x + canW / 2 + this.w && mouseY > this.y + canH / 2 && mouseY < this.y + canH / 2 + this.h) {
            // console.log('rect press');
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    released() {
        // Quit dragging
        this.dragging = false;
    }
}