(() => {
    let d = document.createElement("div");
    d.id = "topbar";
    d.innerHTML = /*html*/`
    <style>
        #topbar>div {
            padding: 10px;
        }
        #topbar {
            display: flex;
            flex-direction: row;
            position: sticky;
            top: 0px;
            background: black;
            z-index: 100;
        }
    </style>
    <div>LOGO</div>
    <div>Who we are</div>
    <div>Gallery</div>
    <div>Events</div>
    <div>Sponsors</div>
    <div style="flex: 1 0 auto"></div>
    <div>
        <button>Get involved</button>
        <button>Sponsor Us</button>
    </div>
    `;
    document.body.appendChild(d);
})();