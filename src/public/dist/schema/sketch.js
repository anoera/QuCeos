
// save this file as sketch.js
// Porte à  1 qubit
var s = function (p) { // p could be any variable name
    var canW = 1200;
    var canH = 400;
    var bgW = 600;
    var bgH = 250;
    let pps;
    let rlist = [];
    let bg;
    var on = false;
    var oni = 0;

    p.setup = function () {

        p.createCanvas(canW, canH, p.WEBGL);

        bg = p.loadImage('/assets/dist/schema/images/bg.jpg');
        ph = p.loadImage('/assets/dist/schema/images/h.jpg');
        px = p.loadImage('/assets/dist/schema/images/x.jpg');
        py = p.loadImage('/assets/dist/schema/images/y.jpg');
        pz = p.loadImage('/assets/dist/schema/images/z.jpg');

        pps = [ph, px, py, pz];

        rh = p.loadImage('/assets/dist/schema/images/hdescg.png');
        rx = p.loadImage('/assets/dist/schema/images/xdescg.png');
        ry = p.loadImage('/assets/dist/schema/images/ydescg.png');
        rz = p.loadImage('/assets/dist/schema/images/zdescg.png');

        results = [rh, rx, ry, rz];

        //console.log(rlist);

        back = new Back(-canW / 2, -canH / 2, bgW, bgH);
        result = new Result(50, -175, 500, 228);

        for (i = 0; i < 4; i++) {
            rlist.push(new Draggable(i * 150 - (canW / 2 - 25), 75, 100, 100))
            // console.log(rlist);
        }
    };

    p.draw = function () {

        p.background(p.color(200, 200, 200));
        back.show(p, bg);
        for (i = 0; i < rlist.length; i++) {
            //console.log(rlist[i]);
            rlist[i].over(canW, canH, p.mouseX, p.mouseY);
            rlist[i].update(p.mouseX, p.mouseY);
            rlist[i].show(p, pps[i]);
        }

        if (on) {
            result.show(p, results[oni]);
        }
        else {

        }

        // shape1.over(canW, canH, p.mouseX, p.mouseY);
        // shape1.update(p.mouseX, p.mouseY);
        // shape1.show(p, pps[0]);
        // shape2.over(canW, canH, p.mouseX, p.mouseY);
        // shape2.update(p.mouseX, p.mouseY);
        // shape2.show(p, pps[1]);
    };

    p.mousePressed = function () {
        for (let i = 0; i < rlist.length; i++) {
            if (rlist[i].x == -400 && rlist[i].y == -150) {
                rlist[i].x = - (canW / 2 - 25) + i * 150;
                rlist[i].y = 75;
                on = false;
            }
            // console.log(rlist.length);
            for (let i = 0; i < rlist.length; i++) {
                rlist[i].pressed(canW, canH, p.mouseX, p.mouseY);
            }
        }
    };

    p.mouseReleased = function () {
        for (i = 0; i < rlist.length; i++) {
            rlist[i].released();
            // console.log(i + ' -- ' + rlist[i].y);
            if (rlist[i].x > - 425 && rlist[i].x < - 375 && rlist[i].y > -175 && rlist[i].y < -125) {

                rlist[i].x = -400;
                rlist[i].y = -150;

                on = true;
                oni = i;
                // console.log(oni + ' -- ' + on);
            }
            else {
                rlist[i].x = - (canW / 2 - 25) + i * 150;
                rlist[i].y = 75;
            }
        }
    };
};
var myp5 = new p5(s, 'sketch-holder1');

// BB84
var t = function (p) {
    var canW = 1200;
    var canH = 700;
    var bgW = 800;
    var bgH = 500;
    let back;

    let eveIcon;

    bg = p.loadImage('/assets/dist/schema/images/bb84-bg.png');
    eve = p.loadImage('/assets/dist/schema/images/bb84-eve.png');
    calice = p.loadImage('/assets/dist/schema/images/choix-alice.png');
    ceve = p.loadImage('/assets/dist/schema/images/choix-eve.png');
    cbob_noEve = p.loadImage('/assets/dist/schema/images/choix-bob-bon.png');
    cbob_Eve = p.loadImage('/assets/dist/schema/images/choix-bob-esp.png');

    aliceOn = false;
    eveOn = false;
    bobOn = 0;

    p.setup = function () {
        p.createCanvas(canW, canH, p.WEBGL);
        back = new Back(-canW / 2, -canH / 2, bgW, bgH);

        eveIcon = new Draggable(-(canW / 2 - 25), 150, 150, 75)
        choixAlice = new Result(-575, -200, 115, 320);
        choixEve = new Result(-257, -200, 115, 320);
        choixBob = new Result(60, -200, 115, 320);
    };

    p.draw = function () {
        p.background(p.color(200, 200, 200));
        back.show(p, bg);
        eveIcon.over(canW, canH, p.mouseX, p.mouseY);
        eveIcon.update(p.mouseX, p.mouseY);
        eveIcon.show(p, eve);

        if (aliceOn) {
            choixAlice.show(p, calice)
        }
        if (aliceOn && eveOn) {
            choixEve.show(p, ceve);
        }
        if (bobOn) {
            if (aliceOn) {
                if (eveOn) {
                    choixBob.show(p, cbob_Eve);
                }
                else {
                    choixBob.show(p, cbob_noEve);
                }
            }
        }
    };

    p.mousePressed = function () {

        if (eveIcon.x == -400 && eveIcon.y == -150) {
            eveIcon.x = - (canW / 2 - 25) + i * 150;
            eveIcon.y = 75;
        }
        eveIcon.pressed(canW, canH, p.mouseX, p.mouseY);
    };

    p.mouseReleased = function () {
        eveIcon.released();
        // console.log(eveIcon.x + ' -- ' + eveIcon.y);
        if (eveIcon.x > -300 && eveIcon.x < - 250 && eveIcon.y > -337 && eveIcon.y < -287) {
            // console.log('in place');
            eveIcon.x = -275;
            eveIcon.y = -312;
            eveOn = true;
            // if (bobOn) {
            //     bobOn = !bobOn;
            // }
        }
        else {
            eveIcon.x = -(canW / 2 - 25);
            eveIcon.y = 150;
            eveOn = false;
        }

        //Click Alice
        if (p.mouseX > 33 && p.mouseX < 133 && p.mouseY > 25 && p.mouseY < 125) {
            console.log('click A');
            aliceOn = !aliceOn;
            if (eveOn) {
                eveOn = !eveOn;
            }
            if (bobOn) {
                bobOn = !bobOn;
            }
        }

        //Click Bob
        if (p.mouseX > 668 && p.mouseX < 768 && p.mouseY > 25 && p.mouseY < 125) {
            bobOn = !bobOn;
        }
    };
};

var myp5 = new p5(t, 'sketch-holder2');