var d = document.createElement("div");
d.style.cssText = `
position:absolute; top: 0; left: 0;height:100%;width:100%;z-index:20`;
document.body.appendChild(d);
var svg = SVG(d);

var pages = [];
function addPage(div) {
    pages.push(div);
    div.style.height="100%";
}

var segments = {};
function addConveyorSegment(segment_name, segment) {
    segments[segment_name] = segment;
    /*
    segment={
        acceptsState: (state)=>{true or false, depending on whether or not it can take a given state}
        location: "ver-belt" || "hor-belt" || "corner"
        outputState: (inputstate)=>{outputstate},
        constructor:function (settings){
            //settings containes:
            - cx: x-centre of the anchorpoint
            - cy: y-centre of where you're drawing
            - w: belt width
            - l: belt length
            - o: orientation of horizontal or corner section. o=1: left to right; o=2: right to left. 
            For corners, o=1,2,3 or 4, for each of 4 corner positions. 0 and 1 are left to right, 2 and 3 are right to left.
            - boxOff: Call boxOff.send(box) to send your box to the next segment.
            this.update(); //called once per tick
            this.addBox(box);
        }
    }
    
    */
}

/**Boxes:
 * {
 *  drawables:{
 *      rect: the svg.rect() of the box.
 *      + any other properties to be drawn.
 *  }
 *  draw: (x,y)=>{
 *   //draw all drawables
 *  }
 * }
 */
async function wait(t) {
    return new Promise((res) => setTimeout(res, t));
}

async function generate() {
    //create the pages
    let page_proportion = 0.9;
    let pagedimensions = [];
    let cumulativeHeight = document.querySelector("#topbar").scrollHeight;
    let conveyorWidth = (1 - page_proportion) * document.body.clientWidth;
    let shadowAllocation = 50;
    for (let i=0;i<pages.length;i++){
        let v=pages[i];
        //create an element for it
        let myContainer = svg.foreignObject(page_proportion * document.body.clientWidth, 0)
            .move((i % 2) * (1 - page_proportion) * document.body.clientWidth, cumulativeHeight);
        myContainer.appendChild(v);
        await wait(100);
        let myHeight = v.scrollHeight + shadowAllocation;
        myContainer.height(v.scrollHeight);
        cumulativeHeight += myHeight + conveyorWidth;
        pagedimensions.push(myHeight);
    }
    svg.node.style.height = cumulativeHeight;

    //layout the conveyor segments
    let currentState = "";
    let locations = ["ver-belt", "corner", "hor-belt", "corner"];
    let sectionCount = 0;
    let actualSegments = [];
    let locIndex = 0;
    let currentLocation = locations[locIndex];
    cumulativeHeight = document.querySelector("#topbar").scrollHeight;
    while (sectionCount < pages.length) {
        let candidates = []
        for (let i in segments) {
            if (segments[i].location == currentLocation && segments[i].acceptsState(currentState)) {
                //we can use this
                candidates.push(segments[i]);
            }
        }
        let selection;
        if (candidates.length > 0) {
            selection = candidates[Math.floor(Math.random() * candidates.length)];
        } else {
            selection = segments["blank_" + currentLocation];
        }
        let nextSettings = {};
        switch (locIndex % locations.length) {
            case 1: //corner 1
                nextSettings = { w: conveyorWidth, l: conveyorWidth, x: (sectionCount % 2) ? 0 : page_proportion * document.body.clientWidth, y: cumulativeHeight + pagedimensions[sectionCount], t: (sectionCount % 2) * 2 + Math.floor((locIndex % locations.length) / 2) };
                break;
            case 0: //ver-belt
                nextSettings = { w: conveyorWidth, l: pagedimensions[sectionCount], x: (sectionCount % 2) ? 0 : page_proportion * document.body.clientWidth, y: cumulativeHeight };
                break;
            case 3: //corner 2
                nextSettings = { w: conveyorWidth, l: conveyorWidth, x: (sectionCount % 2) ? page_proportion * document.body.clientWidth : 0, y: cumulativeHeight + pagedimensions[sectionCount], t: (sectionCount % 2) * 2 + Math.floor((locIndex % locations.length) / 2) };
                break;
            case 2: //hor-belt
                nextSettings = { w: conveyorWidth, l: document.body.clientWidth - (2 * conveyorWidth), x: conveyorWidth, y: cumulativeHeight + pagedimensions[sectionCount], t: sectionCount % 2 };
                break;
        }
        function createNextPusher(index) {
            return (box) => { if (actualSegments[index + 1]) actualSegments[index + 1].addBox(box) };
        }
        nextSettings.postBox = createNextPusher(locIndex);
        actualSegments.push(new selection.constructor(nextSettings));
        currentState = selection.outputState(currentState);
        locIndex++;
        currentLocation = locations[locIndex % locations.length];
        if (currentLocation == "ver-belt") {
            cumulativeHeight += pagedimensions[sectionCount] + conveyorWidth;
            sectionCount++;
        }
    }
    let boxCountdown = 10;
    function box() {
        this.drawables = {
        }
        this.draw = (x, y) => {
            for (let i in this.drawables) {
                this.drawables[i].cx(x).cy(y).front();
            }
        }

    }
    function flow() {
        boxCountdown--;
        if (boxCountdown == 0) {
            boxCountdown = 200;
            actualSegments[0].addBox(new box());
        }
        actualSegments.forEach(i => i.update());
        requestAnimationFrame(flow);
    }
    requestAnimationFrame(flow);
}


function cycleImage(page) {
    let images = [
        "images/back1.jpg",
        "images/buildnight.jpg",
        "images/bntwoo.jpg",
        "images/drcdrc.jpg",
        "images/nyoom.png"
    ];
    let imgIndex = Math.floor(Math.random() * images.length);
    let pageback = page.querySelector("[data-page]");
    setInterval(() => {
        imgIndex++;
        pageback.style.background = `url(${images[imgIndex % images.length]})`;
        pageback.style.backgroundSize = `100% 100%`;
    }, 5000);
    pageback.style.background = `url(${images[imgIndex]})`;
    let middleDiv = document.createElement("div");
    middleDiv.style.cssText = `background: rgba(0,0,0,0.4)`;
    Array.from(pageback.children).forEach(i => middleDiv.appendChild(i));
    pageback.appendChild(middleDiv);
}