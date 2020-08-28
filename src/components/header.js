import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
class Head extends React.Component {

    render() {
        if (typeof document != "undefined") {
            return ReactDOM.createPortal(this.props.children, document.head);
        } else return null;
    }
}

const locations = [
    {
        title: "Activities",
        url: "/activities",
        //sub:[] - if there are sub items
    },
    {
        title: "Divisions",
        //url: "projects", //if url doesnt exist dont include it
        sub: [{
            title: "Droid Racing Competition",
            url: "/drc"
        },
        /*{
            title: "Swarm Competition",
            url: "https://swarmcomp.usydrobotics.club/"
        },*/ {
            title: "RobotX",
            url: "https://robotx.usydrobotics.club/"
        }]
    },
    {
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

let Div = styled.div`
z-index:100;
display:flex;
background-color: black;
flex-direction: row;
position: sticky;
width:100%;
top: 0px;
left: 0px;
background: black;

>*{
    flex: 1 0 auto;
}

a{
    text-decoration: none;
    user-select:none;
}
>span{
    display: inline-block;
    margin:auto;
    position: relative;
    padding: 10px;
}
>span>a {
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

>span:hover{
    background-color: #f10000;
}

>span:hover>div{
    display:block;
    position: absolute;
    left:0;
}

>span>div{
    display:none;
    min-width: 160px;
    padding: 1px;
    z-index:100;
    top: calc(20px + 1em);
}

>span>div>a{
    padding: 10px;
    background-color:white;
    color:black;
    display:inline-block;
    width: 100%;
}

>span>div>a:hover{
    background-color:black;
    color:white;
}

button.cta{
    cursor: pointer;
    background: #da0000;
    color: white;
    border: none;
    border-radius: 0.5em;
    padding: 10px;
    font-size: 1em;
    margin: auto 10px;
    cursor:pointer;
}
`;

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (typeof window != "undefined") {
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-173263940-1');
        }
    }

    render() {
        function isNotHere(href) {
            if (typeof window != "undefined") {
                /*https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-definedz*/
                if (href == window.location.pathname) return null;
                else return href;
            }
            return href;
        }

        return <Div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>USYD Robotics Club</title>
                <link rel="icon" width="auto" href="/images/logo.png?1" />
                {this.props.style}
                {this.props.stylesheet ? this.props.stylesheet.split(" ").map(i =>
                    <link key={i} rel="stylesheet" href={"/css/" + i}></link>
                ) : null}




                {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173263940-1"></script>
                <style>{`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
body{
    margin: 0px;
    font-family: Lato, sans-serif;
    width:100%;
}
body,html{
    height:100%;
}

`}</style>

            </Head>
            <span>
                <a href={isNotHere("/")}><img src="/images/logo.png?1" style={{ height: "2em" }} /></a>
            </span>
            {locations.map(i => <span><a href={i.url ?
                isNotHere(i.url)
                : null} >{i.title}</a>
                {i.sub ? <div>
                    {i.sub.map(i => <a href={i.url ? isNotHere(i.url) : null}>{i.title}</a>)
                        /*if need be we can turn this into a function for more recursion, but 2 levels should be fine for now */
                    }
                </div> : null}</span>
            )}
            <div style={{ flex: "0 1 100%" }}></div>
            <button className="cta sponsorbtn">Sponsor Us</button>
            <button className="cta involvebtn">Get involved</button>
        </Div >
    }
}