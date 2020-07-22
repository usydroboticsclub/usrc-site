(() => {
    let page = document.createElement("div");
    page.innerHTML = /*html*/`
    <div style="min-height:500px" data-page="sponsors">
        <h1>Sponsors</h1>
        <p>Coming soon!</p>
    </div>
    `
    addPage(page);
    cycleImage(page);
})()