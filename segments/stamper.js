
addConveyorSegment("stamper", {
    //don't accept anything, so we don't get chosen if there are any other options available
    acceptsState: (state) => (state == "solid"),
    location: "hor-belt",
    outputState: (inputstate) => "stamped",
    constructor: function (settings) {
        let anteTick = 0;
        let beltRect = svg.rect(settings.l, settings.w * 0.8).x(settings.x).y(settings.y + settings.w * 0.1);
        let beltPos = 1;
        let beltSpacing = 3;
        let beltWidth = settings.w / 3;
        let pattern = svg.pattern(beltWidth, settings.w, () => { })
        beltRect.fill(pattern);
        this.boxes = [];
        let press = svg.group();
        let pressHammer = svg.rect(settings.w * 2.5, settings.w / 4).y(-10).x(settings.w * 0.25).fill("lightgrey");
        press.add(svg.rect(settings.w * 3, settings.w).fill("maroon"));
        press.add(pressHammer);
        press.cx(settings.x + settings.l / 2).y(settings.y)
        let boxToFill = undefined;
        this.update = () => {
            if (anteTick % 100 < 50) {
                if (settings.t) beltPos += 2;
                else beltPos += (beltWidth - 2);
                beltPos %= (beltWidth);
                pattern.update((add) => {
                    add.rect(beltPos, settings.w).move(0, 0).fill("grey");
                    add.rect(beltSpacing, settings.w).move(beltPos, 0).fill("black");
                    if (beltWidth - beltSpacing - beltPos > 0) add.rect(beltWidth - beltSpacing - beltPos, settings.w).move(beltPos + beltSpacing, 0).fill("grey");
                    add.rect(beltSpacing, settings.w).move(beltPos - beltWidth, 0).fill("black");
                })
                this.boxes.forEach(i => {
                    if (settings.t) i.draw(settings.x + i.position, settings.y + settings.w / 2);
                    else i.draw(settings.x + settings.l - i.position, settings.y + settings.w / 2);
                    i.position += 2;
                })
                this.boxes = this.boxes.filter(i => {
                    if (i.position > settings.l) {
                        settings.postBox(i);
                        return false;
                    }
                    return true;
                })
                press.front();
            } else {
                //schtomp
                let downstrokeKeyframe = 65;
                let upstrokeKeyframe = 80;
                let downstrokeAmt = 50;
                if (anteTick % 100 == 50) {
                    boxToFill = this.boxes.reduce((p, i) => {
                        if (Math.abs(settings.l / 2 - i.position) < settings.w / 4) return i;
                        else return p;
                    }, undefined);
                }
                if (anteTick % 100 < downstrokeKeyframe && boxToFill) {
                    pressHammer.y(downstrokeAmt * (anteTick % 100 - 51) / (downstrokeKeyframe - 50))
                } else if (anteTick % 100 < upstrokeKeyframe && boxToFill) {
                    pressHammer.y(downstrokeAmt * (1 - (anteTick % 100 - downstrokeKeyframe) / (upstrokeKeyframe - downstrokeKeyframe)));
                } else if (anteTick % 100 == upstrokeKeyframe && boxToFill) {
                    pressHammer.y(-10);
                    boxToFill.drawables.rect.add(svg.image("images/stamp.png").size(100, 60));
                }
            }
            anteTick++;
        }
        this.addBox = (box) => {
            box.position = 0;
            this.boxes.push(box);
        }
    }
});