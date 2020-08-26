import React from "react"
import Header from "../components/header.js"
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        var frameNumber = 0, // start video at frame 0
            // lower numbers = faster playback
            playbackConst = 800,
            // select video element
            vid = document.getElementById('v0');

        // Use requestAnimationFrame for smooth playback
        function scrollPlay() {
            var frameNumber = window.pageYOffset / playbackConst;
            vid.currentTime = frameNumber;
        }

        window.addEventListener("wheel", scrollPlay);

        // console.log(setHeight.style.height);
    }
    render() {
        return <div>
            <Header>
            </Header>
            <style>{`
    
    /* HEADER */
    #header{
        grid-area:header;
        display:flex;
        padding:8px 0px 0px 0px;
        background-color: black;
        flex-direction: row;
        position: relative;
        width:100%;
        top: 0px;
        background: black;
        z-index: 100;
    }

    .dropbtn {
        background-color: black;
        color: white;
        padding: 10px;
        margin:auto;
        font-size: 16px;
        border: none;
        cursor: pointer;
        z-index: 100;
    }

    /* The container <div> - needed to position the dropdown content */
    .homepage {
        /* margin: 5px; */
        float:left;
        padding:20px 10px 20px 10px;
        position: relative;
        display: inline-block;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        margin:auto 5px auto 5px;
        float:left;
        position: relative;
        display: inline-block;
    }

    .dropbtn a{
        color: white;
        text-decoration: none;
        display: block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        right:0px;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #f1f1f1}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        background-color: #da0000;
    }

    .header_link{
        margin:auto 20px auto 20px;
    }

    /* For the Red link buttones */
    #header button.cta{
        margin:0;
        cursor: pointer;
        float:right;
        background: #da0000;
        color: white;
        border: none;
        border-radius: 0.5em;
        padding: 10px;
        font-size: 1em;
        margin: 10px;
        cursor:pointer;
    }


    #v0 {
        position: fixed;
        bottom: 0;
        right: 0;
        top:0;
        z-index:-1;
    }

    /* MAIN */

    .main {
        background-color: #c6d7de;
        /* font-family: 'Montserrat'; */
        font-family: 'Lato';
        padding: 3em;
        z-index:-1;
        position:relative;
    }

    .main section {
        z-index: 1;
        position: relative;
    }

    .main .content {
        position: sticky;
        position: -webkit-sticky;
        width: 100%;
        top: 33.3%;
    }

    .main h1 {
        font-size: 3em;
        background: #fff;
        display: inline-block;
        padding: 10px 15px;
        border-radius: 5px;
        margin: 0;
    }

    .main .subcontent {
        position: sticky;
        position: -webkit-sticky;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);    
    }



    .main p { font-size: 1.5em; }

    .main section:not(:last-of-type) {
        margin-bottom: 40vh;
    }
    .main section{
        height: 100vh;
    }

    .connect{
        /*margin:0px 8px;*/
        font-family: Lato;
        flex-direction: row;
        position: relative;
        width:100%;
        top: 0px;
        z-index: 100;
    }


    #learn{
        padding:10px;
        background-color: #fc7777;
    }

    #learn #text{
        padding:0px 200px;
        font-size: 20px;
    }




    #youtube{
        padding:10px;
        background-color: #ffc966;
    }

    #youtube #text{
        text-align: center;
        font-size: 20px;

        /* padding:0px 200px; */
    }

    #join{
        padding:10px;
        background-color: #f4ff56;
        text-align: center;
    }

    #join .btn{
        background-color: #f44336;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
    }



    #join .row .column{
        flex:50%;
        padding:80px;
        font-size: 20px;

    }

    #sponsor{
        padding:10px;
        background-color: #c6d7de;
    }



    #sponsor h1{
        font-size: 3em;
        font-weight: bolder;
    }

    #sponsor .row .column{
        flex:40%;
        padding:80px;
    }

    #sponsor img{
        max-width:300px;
    }


    /* FOOTER */
    #footer{
        font-family: Lato;
    }

    #footer .selected{
        font-weight:bold;
    } 

    #footer ul {
        list-style-type: none;
        margin: 0px 0px;
        /* padding: 0; */
        overflow: hidden;
        background-color: #333333;
    }

    #footer li a {
        float:left;
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
    
    #footer li a:hover {
        background-color: #111111;
    }

    #footer li b {
        float:right;
        display: block;
        color: white;
        text-align: right;
        padding: 16px;
        text-decoration: none;
    }

    #youtube #ytube{
        width:800px;
        height:500px; 
    }

    .main .subcontent p{
        background: rgba(255, 255, 255, 0.6); 
        display: inline-block;
        padding: 10px 15px;
        border-radius: 5px;
        margin: 0 55% 0 0;
    }
    
    #join .row{
        display:flex;
    }

    #sponsor .row{
        display:flex;
    }


    @media only screen and (min-width:800px){
        #youtube #ytube{
            width:320px;
            height:200px; 
        }
        .main .subcontent p{
            margin: 0 55% 0 0;
        }
        #sponsor .row .column{
            padding:30px;
        }
        #join .row .column{
            padding:20px;
        }
        #learn{
            padding:30px;
        }
    }
    `}</style>
            <div id="main" className="main">
                <section className="container">
                    <div className="content">
                        <h1>DROID RACING COMPETITION</h1>
                        <p>Hosted by the Queensland <br /> University of Technology</p>
                    </div>
                </section>
                <section className="container">
                    <div className="subcontent">
                        <p>
                            Hosted by the Queensland University of Technology, the Droid Racing Challenge is a competition where universities around Australia build their own self-driving droids that race around a track.&nbsp;Each droid incorporates computer vision that lets it avoid obstacles and drive around the course. Our first entry to this competition was in 2018, where we placed 7th out of 8 teams, however with the challenge being quite difficult, numerous teams had dropped out before the races even began. Not a bad result for our first year!&nbsp;
                        </p>
                    </div>
                </section>
                <section className="container">
                    <div className="subcontent">
                        <p className="" style={{ whiteSpace: "pre-wrap" }}>Improving on what we learnt that year, we stepped up to the 2019 challenge with three new teams which saw veterans and enthusiasts join the race. This time around, two of our teams succeeded in placing second and third!</p>
                    </div>
                </section>
                <section className="container">
                    <div className="subcontent">
                        <h1>What Next?</h1>
                        <p className="" style={{ whiteSpace: "pre-wrap" }}>With the 2020 DRC just around the corner, we are eager to prove how we've improved. USRC will continue to foster keen new competitors as well as alumni to compete in this challenge. We are excited to explore what the future of QUT's Droid Racing Challenge offers and look forward to competing again.</p>
                    </div>
                </section>
                <video id="v0" tabIndex="0" autobuffer preload>
                    <source type='video/webm' src="/videos/v1.webm"></source>
                </video>
            </div>

            <div className="connect">
                <div id="learn">
                    <div id="text">
                        <h1>What Does it Involve?</h1>
                        <p>Teams of six to eight build a droid either from an existing framework or from scratch. By integrating their own onboard computers, motors electronic speed control (ESC) and out provided Intel REALSENSE camera, teams design their robots to perform simple tasks as quickly as possible.</p>
                        <p>
                            The objective is to race between two colour indicated tracks to beat an opposing team, whilst also avoiding coloured obstacles. Scores are based on the teams ability to stay within the track, avoid obstacles and beat the opposing droid.</p>
                        <p>
                            Focusing on mechanical, software and electrical engineering, the competition applies and extends what is learnt at university. It offers a fun and challenging way to approach engineering while working in teams.
                            Individuals also get the opportunity to travel to Queensland to compete in the challange.</p>
                        <p>
                            If you wish to learn more, feel free to get in contact with us!</p>
                    </div>
                </div>
            </div>
            <div id="youtube">
                <div id="text">
                    <h1>Check Out Our Videos</h1>
                    <p>
                        See how our past teams have learnt from the competition and what they wish they could have done better.</p>
                    <h2>2018</h2>
                    <iframe id="ytube" src="https://www.youtube.com/embed/j2ZLJJhJBtY" frameBorder="0"></iframe>

                    <h2>2019</h2>
                    <iframe id="ytube" src="https://www.youtube.com/embed/GxNKoEK7OHs" frameBorder="0"></iframe>
                </div>
            </div>

            <div id="join">
                <div className="row">
                    <div className="column">
                        <h1>Interested in Joining?</h1>
                        <p>
                            Think you've got what it takes to build a droid to win the race? Keen on learning new things about robotics or apply what you've learnt? Come join us at the USYD Robotics Club and sign up to compete in the 2020 Challange!</p>
                        <button className="btn" disabled>
                            Registrations closed for 2020 :(</button>
                    </div>
                    <div className="column">
                        <h1>Interested in Supporing Us?</h1>
                        <p>
                            Like what you see but you're not eligible to join? You can also help us by sponsoring what we do. Whether it be the club or a project, we always appreciate any kind of support you are able to provide. Check out our prospectus to see the best way you can support us!
            </p>
                        <button className="btn" onClick={() => window.open('https://drive.google.com/file/d/1H0j3bRERh7y7lt87-FOnHwaOK_kXSSky/view?usp=sharing', "_blank")}>
                            Prospectus</button>
                    </div>
                </div>
            </div>
            <div id="sponsor">
                <div className="row">
                    <div className="column">
                        <h3>2019 Competition Sponsored By:</h3>
                        <br />
                        <h1>NSW Chief Scientist &amp; Engineer</h1>
                    </div>

                    <div className="column">
                        <img src="/images/sponsors/nsw_govt_col.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div id="footer">
                    <ul>
                        <li><a href="usydrobotics.club">Home</a></li>
                        <li><b>&copy; USYD Robotics Club</b></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}