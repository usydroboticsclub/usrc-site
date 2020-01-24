var d = document.createElement("div");
d.style.cssText = `
position:absolute; top: 0; left: 0;height:100%;width:100%;z-index:20`;
document.body.appendChild(d);

var pages = [];
function addPage(div) {
    pages.push(div);
    //div.style.height="100%";
}

function generate() {
    pages.forEach(i => {
        document.body.appendChild(i);
    });
    if (window.location.href.indexOf("#")){
        routeTo(window.location.href.split("#")[1]);
    }
    
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
    pageback.style.backgroundSize = `100% 100%`;
    let middleDiv = document.createElement("div");
    middleDiv.style.cssText = `background: rgba(0,0,0,0.4)`;
    middleDiv.style.display = `flex`;
    middleDiv.style.flexDirection = `column`;
    Array.from(pageback.children).forEach(i => middleDiv.appendChild(i));
    pageback.appendChild(middleDiv);
}