const locations = [{
        title: "Activities",
        url: "/activities",
        //sub:[] - if there are sub items
    }, {
        title: "Divisions",
        //url: "projects", //if url doesnt exist dont include it
        sub: [{
                title: "Droid Racing Competition",
                url: "/drc"
            },
            /*{
                title: "Swarm Competition",
                url: "https://swarmcomp.usydrobotics.club/"
            },*/
            {
                title: "RobotX",
                url: "https://robotx.usydrobotics.club/"
            }
        ]
    }, {
        title: "Gallery",
        url: "/gallery",
        //sub:[] - if there are sub items
    },
    /*{
        title: "About us",
        url: "",
        //sub:[] - if there are sub items
    }*/
];

var e = document.createElement("title")
e.innerText = "USYD Robotics club"
document.querySelector("head").append(e);

e = document.createElement("link")
e.rel = "stylesheet";
e.type = "text/css";
e.href = "/header.css"
document.querySelector("head").append(e);

e = document.createElement("link")
e.rel = "icon";
e.width = "auto";
e.href = "/images/logo.png"
document.querySelector("head").append(e);

e = document.createElement("script");
e.async = true;
e.src = "https://www.googletagmanager.com/gtag/js?id=UA-173263940-1";
document.querySelector("head").append(e);

var q = document.createElement("div");
q.id = "header";


function mkstring(arr) {
    let part = ``;
    for (let i of arr) {
        part += `<span><a ${i.url ? `href="${i.url}"` : ""}><span>${i.title}</span></a>`
        if (i.sub) {
            part += `<div>${mkstring(i.sub)}</div>`;
        }
        part += `</span>`
    }
    return part;
}
q.innerHTML = `
<span >
<a href="/" style="padding:10px; display:inline-block">

    <img src="/images/logo.png" style="height:2em;"/>
    </a>
</span>
${mkstring(locations)}
<div style="flex: 0 1 100%"></div>
<button class="cta sponsorbutton" onclick="goToSponsor()">Sponsor Us</button>
<button class="cta involvebutton" onclick="goToSignup()">Get Involved</button>
`;

document.body.appendChild(q);


if (typeof window != "undefined") {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-173263940-1');
}


let goToSponsor = () => {
    window.location.href =
        'https://drive.google.com/file/d/1H0j3bRERh7y7lt87-FOnHwaOK_kXSSky/view?usp=sharing'
}
let goToSignup = () => {
    window.location.href = 'https://forms.gle/cfR4zUj3CRKwmpcm8'
}