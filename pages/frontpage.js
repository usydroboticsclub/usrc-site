(() => {
    let page = document.createElement("div");
    page.innerHTML = /*html*/`
    <style>
        #supertitle {
            font-family: the_led_display_stregular;
            font-weight: 100;
            font-size: 100px;
            letter-spacing: 20px;
            margin: 20px;
            min-height:350px;
        }
    </style>
    <div data-page="home" style="background:grey; box-shadow: 10px 20px 0px 0px black;">    
            <div>
                <h1 id="supertitle">USYD Robotics Club</h1>
                <h3>Delivering hands-on experience for the next generation of roboticists.</h3>
                <button class="involveBtn">Get involved</button><button class="sponsorbtn">Sponsor us</button>
            </div>
            <div>
                <h2>What we do</h2>
                <p>USRC serves two primary functions: Supporting USYD Robotics teams in external competitions, and hosting
                    USYD
                    based robotics events.</p>
            </div>
            <div>
                <h2>Supporting our teams</h2>
                <p>As an individual robotics student, it can be hard to know where to look to find challenging Robotics
                    competitions. So, at USRC, we actively find and organise robotics teams to participate in external
                    competitions.</p>
                <p>Additionally, University robotics teams are often temporary organisations, so USRC aims to help
                    retain
                    technical and logistical knowledge between competition teams.</p>
            </div>
            <div>
                <h2>Hosting USYD Robotics Events</h2>
                <p>Aside from helping teams join external events, we also run regular workshops, help add robotics to
                    USYD's
                    open days, and even run our own inter-uni competition, the <a href="swarmcomp">USRC Swarm Robotics
                        Competition.</a></p>
            </div>
    </div>
    `
    addPage(page);
    cycleImage(page);
})()