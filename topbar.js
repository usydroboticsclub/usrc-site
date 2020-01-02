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
                console.log(el.dataset.pagetarget);
                //sneaky adjust to make the scrolling align properly
                document.querySelector(`[data-page="${el.dataset.pagetarget}"]`).scrollIntoView({ behavior: "smooth" });
                let pastScroll = window.scrollY;
                function correctScroll() {
                    if (window.scrollY == pastScroll) {
                        if (window.scrollY) {
                            window.scroll(0, window.scrollY - document.querySelector("#topbar").scrollHeight);
                        }
                    } else {
                        pastScroll = window.scrollY;
                        setTimeout(correctScroll, 100);
                    }
                }
                setTimeout(correctScroll, 100);
                break;
            }
            else {
                el = el.parentElement;
            }
        }

    })
})();