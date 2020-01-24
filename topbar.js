(() => {
    let d = document.createElement("div");
    d.id = "topbar";
    d.innerHTML = /*html*/`
    <style>
        #topbar>div {
            padding: 10px;
            margin:auto;
        }
        #topbar>div:hover[data-pagetarget] {
            background: darkred;
            cursor:pointer;
        }
        #topbar {
            display: flex;
            flex-direction: row;
            position: fixed;
            width:100%;
            top: 0px;
            background: black;
            z-index: 100;
        }
        #topbar button.cta{
            margin:0;
            cursor: pointer;
        }
    </style>
    <div data-pagetarget="home"><img src="images/logo.png" style="height:2em"></div>
    <div data-pagetarget="whoweare">Who we are</div>
    <div data-pagetarget="events">Events</div>
    <div data-pagetarget="gallery">Gallery</div>
    <div data-pagetarget="sponsors">Sponsors</div>
    <div style="flex: 1 0 auto"></div>
    <div>
        <button class="cta involvebtn">Get involved</button>
        <button class="cta sponsorbtn">Sponsor Us</button>
    </div>
    `;
    document.body.appendChild(d);
    d.addEventListener("click", (e) => {
        let el = e.target;
        while (el != document.body) {
            if (el.dataset.pagetarget) {
                //sneaky adjust to make the scrolling align properly
                routeTo(el.dataset.pagetarget);
                window.location.href=window.location.href.split("#")[0]+"#"+el.dataset.pagetarget;
                break;
            }
            else {
                el = el.parentElement;
            }
        }

    })
})();

// Also add a mini hash router
function routeTo(pageName){
    let y=document.querySelector(`[data-page="${pageName}"]`).offsetTop- document.querySelector("#topbar").scrollHeight;
    window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
}