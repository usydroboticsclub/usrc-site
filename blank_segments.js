addConveyorSegment("blank_ver-belt", {
    //don't accept anything, so we don't get chosen if there are any other options available
    acceptsState: (state) => false,
    location: "ver-belt",
    outputState: (inputstate) => inputstate,
    constructor: function (settings) {
        this.boxes = [];
        let beltRect = svg.rect(settings.w*0.8, settings.l).x(settings.x+settings.w*0.1).y(settings.y);
        let beltPos = 1;
        let beltSpacing = 3;
        let beltWidth = settings.w / 3;
        let pattern = svg.pattern(settings.w, beltWidth, () => { })
        beltRect.fill(pattern);
        this.update = () => {
            beltPos += 1;
            beltPos %= (beltWidth);
            pattern.update((add) => {
                add.rect(settings.w, beltPos).move(0, 0).fill("grey");
                add.rect(settings.w, beltSpacing).move(0, beltPos).fill("black");
                if (beltWidth - beltSpacing - beltPos > 0) add.rect(settings.w, beltWidth - beltSpacing - beltPos).move(0, beltPos + beltSpacing).fill("grey");
                add.rect(settings.w, beltSpacing).move(0, beltPos - beltWidth).fill("black");
            })
            this.boxes.forEach(i => {
                i.draw(settings.x + settings.w / 2, settings.y + i.position);
                i.position++;
            })
            this.boxes = this.boxes.filter(i => {
                if (i.position > settings.l) {
                    settings.postBox(i);
                    return false;
                }
                return true;
            })
        }
        this.addBox = (box) => {
            box.position = 0;
            this.boxes.push(box);
        }
    }
});

addConveyorSegment("blank_hor-belt", {
    //don't accept anything, so we don't get chosen if there are any other options available
    acceptsState: (state) => false,
    location: "hor-belt",
    outputState: (inputstate) => inputstate,
    constructor: function (settings) {
        let beltRect = svg.rect(settings.l, settings.w * 0.8).x(settings.x).y(settings.y + settings.w * 0.1);
        let beltPos = 1;
        let beltSpacing = 3;
        let beltWidth = settings.w / 3;
        let pattern = svg.pattern(beltWidth, settings.w, () => { })
        beltRect.fill(pattern);
        this.boxes = [];
        this.update = () => {
            if (settings.t) beltPos += 1;
            else beltPos += (beltWidth - 1);
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
                i.position++;
            })
            this.boxes = this.boxes.filter(i => {
                if (i.position > settings.l) {
                    settings.postBox(i);
                    return false;
                }
                return true;
            })
        }
        this.addBox = (box) => {
            box.position = 0;
            this.boxes.push(box);
        }
    }
});

addConveyorSegment("blank_corner", {
    //don't accept anything, so we don't get chosen if there are any other options available
    acceptsState: (state) => false,
    location: "corner",
    outputState: (inputstate) => inputstate,
    constructor: function (settings) {
        this.boxes = [];
        let beltRect = svg.rect(settings.l, settings.w).x(settings.x).y(settings.y);
        let beltPos = 1;
        let beltSpacing = 3;
        let beltWidth = settings.w / 3;
        let pattern;
        if ((settings.t % 2)) pattern = svg.pattern(settings.w, beltWidth, () => { })
        else pattern = svg.pattern(beltWidth, settings.w, () => { })
        beltRect.fill(pattern);
        this.update = () => {
            if (settings.t) beltPos += 1;
            else beltPos += (beltWidth - 1);
            beltPos %= (beltWidth);
            if (!(settings.t % 2)) {
                pattern.update((add) => {
                    add.rect(beltPos, settings.w).move(0, 0).fill("grey");
                    add.rect(beltSpacing, settings.w).move(beltPos, 0).fill("black");
                    if (beltWidth - beltSpacing - beltPos > 0) add.rect(beltWidth - beltSpacing - beltPos, settings.w).move(beltPos + beltSpacing, 0).fill("grey");
                    add.rect(beltSpacing, settings.w).move(beltPos - beltWidth, 0).fill("black");
                })
            } else {
                pattern.update((add) => {
                    add.rect(settings.w, beltPos).move(0, 0).fill("grey");
                    add.rect(settings.w, beltSpacing).move(0, beltPos).fill("black");
                    if (beltWidth - beltSpacing - beltPos > 0) add.rect(settings.w, beltWidth - beltSpacing - beltPos).move(0, beltPos + beltSpacing).fill("grey");
                    add.rect(settings.w, beltSpacing).move(0, beltPos - beltWidth).fill("black");
                })
            }
            //draw all boxes
            this.boxes.forEach(i => {
                if (i.position < settings.w / 2) {
                    switch (settings.t) {
                        case 0:
                        case 2:
                            //from up
                            i.draw(settings.x + settings.w / 2, settings.y + i.position);
                            break;
                        case 1:
                            i.draw(settings.x + settings.w - i.position, settings.y + settings.w / 2);
                            //from right
                            break;
                        case 3:
                            i.draw(settings.x + i.position, settings.y + settings.w / 2);
                            //from left
                            break;
                    }
                } else {
                    switch (settings.t) {
                        case 0:
                            //to left
                            i.draw(settings.x + settings.w - i.position, settings.y + settings.w / 2);
                            break;
                        case 1:
                        case 3:
                            // to down
                            i.draw(settings.x + settings.w / 2, settings.y + i.position);
                            break;
                        case 2:
                            i.draw(settings.x + i.position, settings.y + settings.w / 2);
                            //to right
                            break;
                    }
                }

                i.position++;
            })
            this.boxes = this.boxes.filter(i => {
                if (i.position > settings.w) {
                    settings.postBox(i);
                    return false;
                }
                return true;
            })
        }
        this.addBox = (box) => {
            box.position = 0;
            this.boxes.push(box);
        }
    }
});