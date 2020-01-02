addConveyorSegment("starter", {
    //don't accept anything, so we don't get chosen if there are any other options available
    acceptsState: (state) => state == "",
    //acceptsState: (state) => true,
    location: "ver-belt",
    outputState: (inputstate) => "solid",
    constructor: function (settings) {
        this.boxes = [];
        let beltRect = svg.rect(settings.w * 0.8, settings.l).x(settings.x + settings.w * 0.1).y(settings.y);
        let beltPos = 1;
        let beltSpacing = 3;
        let beltWidth = settings.w / 3;
        let pattern = svg.pattern(settings.w, beltWidth, () => { })
        beltRect.fill(pattern);
        //create the input tunnel
        let inputTunnel = svg.group();
        inputTunnel.add(svg.rect(settings.w, settings.w / 2).fill("lightgrey"));
        inputTunnel.add(svg.text("V").cx(settings.w / 2).cy(settings.w / 4).fill("red"));
        inputTunnel.move(settings.x, settings.y);
        svg.rect(settings.w, settings.w / 4).move(settings.x, settings.y + settings.w / 2).fill({ color: "lightgrey", opacity: 0.5 });

        //create the dolloper
        let dolloper = svg.group();
        dolloper.add(svg.rect(settings.w, settings.w / 2).fill("lightgrey"));
        dolloper.add(svg.rect(settings.w / 2, settings.w / 4).move(settings.w / 4, settings.w / 2).fill("darkgrey"));
        dolloper.move(settings.x, settings.y + settings.l / 2);
        let boxToFill;
        let dolloperBeam;

        let anteTick = 0;
        this.update = () => {
            anteTick++;
            if (anteTick % 100 < 50) {
                beltPos += 2;
                beltPos %= (beltWidth);
                pattern.update((add) => {
                    add.rect(settings.w, beltPos).move(0, 0).fill("grey");
                    add.rect(settings.w, beltSpacing).move(0, beltPos).fill("black");
                    if (beltWidth - beltSpacing - beltPos > 0) add.rect(settings.w, beltWidth - beltSpacing - beltPos).move(0, beltPos + beltSpacing).fill("grey");
                    add.rect(settings.w, beltSpacing).move(0, beltPos - beltWidth).fill("black");
                })
                this.boxes.forEach(i => {
                    i.draw(settings.x + settings.w / 2, settings.y + i.position);
                    i.position += 2;
                })
                this.boxes = this.boxes.filter(i => {
                    if (i.position > settings.l) {
                        settings.postBox(i);
                        return false;
                    }
                    return true;
                });
                //dolloper
            } else {
                if (anteTick % 100 == 51) {
                    boxToFill = this.boxes.reduce((p, i) => {
                        if (Math.abs(settings.l / 2 + settings.w - i.position) < settings.w / 4) return i;
                        else return p;
                    }, undefined);
                    if (boxToFill) {
                        dolloperBeam = svg.rect(30, 1).fill("red").cx(settings.x + settings.w / 2).y(settings.y + settings.l / 2 + settings.w * 0.75);
                    }
                }
                if (boxToFill) {
                    let fallKeyframe = 75;
                    let fillKeyframe = 90;
                    if (anteTick % 100 < fallKeyframe) {
                        //lower the dolloper beam
                        let dolloperBeamFullLength = boxToFill.position - (settings.l / 2 + settings.w * 0.75);
                        dolloperBeam.size(30, ((anteTick % 100) - 50) / (fallKeyframe - 50) * dolloperBeamFullLength);
                    } else if (anteTick % 100 == fallKeyframe) {
                        let g = svg.group();
                        boxToFill.tempInnerRect = svg.rect(96, 1).fill("red").y(59).x(2);
                        boxToFill.drawables.rect.add(boxToFill.tempInnerRect);
                        boxToFill.draw(settings.x + settings.w / 2, settings.y + boxToFill.position);
                        dolloper.front();
                    } else if (anteTick % 100 < fillKeyframe) {
                        let boxSize = ((anteTick % 100) - fallKeyframe) / (fillKeyframe - fallKeyframe) * 60;
                        boxToFill.tempInnerRect.size(96, boxSize).y(60 - boxSize);
                        boxToFill.draw(settings.x + settings.w / 2, settings.y + boxToFill.position);
                        dolloperBeam.front();
                        //fill the container
                    } else if (anteTick % 100 == fillKeyframe) {
                        let g = svg.group();
                        g.add(svg.rect(100, 60).fill("red"));
                        g.add(svg.rect(100, 20).y(60).fill("darkred"));
                        boxToFill.drawables.rect.remove();
                        boxToFill.drawables.rect = g;
                        boxToFill.draw(settings.x + settings.w / 2, settings.y + boxToFill.position);
                        //top it off
                    }
                }
                if (anteTick % 100 == 99 && dolloperBeam) dolloperBeam.remove();
            }
            inputTunnel.front();
            dolloper.front();

        }
        this.addBox = (box) => {
            box.position = 0;
            let g = svg.group();
            g.add(svg.rect(100, 20).fill("darkgrey"));
            g.add(svg.rect(100, 20).y(60).fill("darkgrey"));
            g.add(svg.rect(2, 60).fill("white"));
            g.add(svg.rect(2, 60).x(98).fill("white"));
            if (box.drawables.rect) box.drawables.rect.remove();
            box.drawables.rect = g;
            box.draw(settings.x + settings.w / 2, settings.y + box.position);
            this.boxes.push(box);
        }
    }
});