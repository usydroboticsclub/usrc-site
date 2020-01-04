(() => {
    let page = document.createElement("div");
    page.innerHTML = /*html*/`
    <style>
    #stafftiles {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    #stafftiles>* {
        flex: 0 0 18vw;
        margin: 10px;
        padding: 10px;
        box-shadow: 5px 10px 0px 0px black;
        border: 1px solid black;
        background:rgba(100,100,100,0.7);
    }
    #stafftiles img{
        width:16vw;
        height:300px;
        margin: 0 auto;
        display: block;
    }
</style>
<div data-page="whoweare">
    <div>
        <h1>Who we are</h1>
        <p>USRC was founded in 2017 with a mission to deliver a more hands on robotics experience to USYD
            students.
        </p>
        <p>Since then, we've grown to over 50 members and run up to 5 robotics teams every year.</p>
    </div>
    <div>
        <h2>Our community</h2>
        <p>USRC meets on a fortnightly basis, where our members come together to discuss topics in robotics over
            light refreshments. </p>
        <p>We welcome members from all stages and backgrounds, from first-year to postgraduate, and beyond!</p>
    </div>
    <div>
        <h2>Our staff</h2>
        <p>Our executive team is there to handle logistics and organisation of our hosted events and to help
            facilitate and train others for competitions and more.</p>
        <div id="stafftiles">
            <div>
                <img src="staffpics/livy.jpg">
                <h3>Livy Smith</h3>
                <p>President</p>
            </div>
            <div>
                <img src="staffpics/nathan.jpg">
                <h3>Nathan Zhang</h3>
                <p>Vice president</p>
            </div>
            <div>
                <img src="staffpics/victor.jpg">
                <h3>Victor Kuo</h3>
                <p>Treasurer</p>
            </div>
            <div>
                <img src="staffpics/marco.png">
                <h3>Marco Tupaz</h3>
                <p>Secretary</p>
            </div>
            <div>
                <img src="staffpics/kyte.jpg">
                <h3>Kyte Gurner</h3>
                <p>Communications</p>
            </div>
            <div>
                <img src="staffpics/frankshen.png">
                <h3>Frank Shen</h3>
                <p>General Exec</p>
            </div>
            <div>
                <img src="staffpics/steven.png">
                <h3>Steven Liu</h3>
                <p>General Exec</p>
            </div>
            <div>
                <img src="staffpics/tommcabe.png">
                <h3>Tom Mcabe</h3>
                <p>General Exec</p>
            </div>
            <div>
                <img src="staffpics/johnsumskas.jpg">
                <h3>John Sumskas</h3>
                <p>RobotX Lead</p>
            </div>
        </div>
    </div>
</div>
    `
    addPage(page);
    cycleImage(page);
})()