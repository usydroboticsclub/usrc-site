(() => {
    let page = document.createElement("div");
    page.innerHTML = /*html*/`
    <div style="min-height:500px" data-page="gallery">
        <h1>Gallery</h1>
        <p>Coming soon!</p>
    </div>
    `
    addPage(page);
    cycleImage(page);

})()