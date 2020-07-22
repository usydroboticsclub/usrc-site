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
        title: "Projects",
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
    /*{
        title: "Workshops",
        url: "",
        //sub:[] - if there are sub items
    }*/,
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
                <link rel="icon" width="auto" href="/images/logo.png" />
                <style>{`
                body{margin:0;}
                *{font-family: sans-serif;}
                `}</style>
                {this.props.style}
                {this.props.stylesheet ? this.props.stylesheet.split(" ").map(i =>
                    <link key={i} rel="stylesheet" href={"css/" + i}></link>
                ) : null}
            </Head>
            <span>
                <a href={isNotHere("/")}><img src="/images/logo.png" style={{ height: "2em" }} /></a>
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