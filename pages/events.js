(() => {
    let page = document.createElement("div");
    page.style.minHeight="300px";
    page.innerHTML = /*html*/`
    <style>
    #events_list>div{
        height: 1.5em;
        background: rgba(255,225,0,0.5);
        padding: 0.5em;
        border-radius: 10px 0px 0px 10px;
    }
    #events_list>div.selected{
        background: rgba(255,135,0,0.5);
    }
    #event_space{
        background: rgba(255,135,0,0.5);
    }
    </style>
    <div style="min-height:500px" data-page="events">
        <h1>Events</h1>
        <div style="display:flex; min-height:500px; width: 100%;">
            <div style="display:flex; flex-direction:column; flex:0 0 10vw" id="events_list">
            </div>
            <div style="padding: 0.5em; min-height:500px; flex-grow:1" id="event_space">
            </div>
        </div>
    </div>
    `
    cycleImage(page);

    let events = [
        {
            title: "RobotX",
            Frequency: "Year-long",
            description:
                `The University of Sydney's Maritime RobotX program revolves around developing a self-driving boat for use in marine navigation and tasks. 
Our team works with the Australian Centre for Field Robotics' underwater robotics division, who mentor us and provide us with a workspace to maintain the boat's codebase and hardware (motors, sensors and power train).
The boat is a roughly car-sized vehicle and relies on technologies such as IMU, GPS, Lidar and Computer Vision.`
        },
        {
            title: "Workshops",
            Frequency: "Year-long, fortnightly",
            description:
                `Whether you're doing mechatronics or Law, Design or Commerce, if you've ever wanted to make robots but have no idea where to start, our workshops are for you! We cover topics ranging from Arduino to coding in Python and more!`
        },
        {
            title: "DRC",
            Frequency: "Annual",
            description:
                `USRC regularly participates in Queensland University of Technology's annual Drone Racing Competition, where we design, build and code a small car to go as fast as possible... without a driver! We use computing boards (such as the raspberry pi), computer vision, and RC racecar parts such as LiPo batteries and AC motors.`
        },
        {
            title: "Build Night",
            Frequency: "Once per semester",
            description:
                `A one day build-a-thon to get a robot up and running from scratch. We'll provide parts, instructions and support, for you to get your journey started!`
        }
    ]

    function populateEventsList() {
        events.forEach((v, i) => {
            page.querySelector("#events_list").appendChild(htmlwrap(`<div data-index="${i}">${v.title}</div>`));
        })
    }
    populateEventsList();

    page.querySelector("#events_list").addEventListener("click", (e) => {
        if (e.target.dataset.index) focusOnEvent(e.target.dataset.index);
    })

    function focusOnEvent(index) {
        let generatedHTML = "";
        let _renderOrder = ["title", "*", "description"];
        let renderOrder = [];
        for (let i in events[index]) {
            if (!_renderOrder.includes(i) && i != "description" && i != "title") renderOrder.push(i);
        }
        let starseen = false;
        _renderOrder.forEach(i => {
            if (i == "*") starseen = true;
            else if (starseen) {
                renderOrder.push(i);
            } else {
                renderOrder.unshift(i);
            }
        })
        renderOrder.forEach(i => {
            switch (i) {
                case "title":
                    generatedHTML += `<h1>${events[index].title}</h1>`;
                    break;
                case "description":
                    generatedHTML += `<div>${events[index].description}</div>`;
                    break;
                default:
                    generatedHTML += `<p><u>${i}</u>: ${events[index][i]}</p>`;

            }
        })
        Array.from(page.querySelectorAll(`#events_list>div[data-index]`)).forEach(i => i.classList.remove("selected"));
        page.querySelector(`#events_list>div[data-index='${index}']`).classList.add("selected");
        page.querySelector("#event_space").innerHTML = generatedHTML;
    }
    focusOnEvent(0);
    addPage(page);
})()