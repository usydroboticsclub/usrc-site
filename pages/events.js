(() => {
    let page = document.createElement("div");
    page.innerHTML = /*html*/`
    <div style="min-height:500px" data-page="events">
        <h1>Events</h1>
        <p>Coming soon!</p>
    </div>
    `
    addPage(page);
    cycleImage(page);

})()