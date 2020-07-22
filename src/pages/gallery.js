import React from "react"
import Header from "../components/header.js"

const showableImages = [
    {
        url: "/images/back1.jpg",
        title: "USRC in 2018"
    },
    {
        url: "/images/bntwoo.jpg",
        title: "Build Night 2019S2"
    },
    {
        url: "/images/buildnight.jpg",
        title: "Build Night 2019S1"
    },
    {
        url: "/images/drcdrc.jpg",
        title: "Droid Racing Competition"
    }
]

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.selectedImage = {
            url: null,
            title: "Click on an image in the gallery below!"
        };
    }
    componentDidMount() {

    }
    render() {
        return <div style={{ background: "repeating-linear-gradient(-6deg, #222, #333, #222 60px)", color: "white", height: "100vh" }}>
            <Header>
            </Header>
            <style>{
                `
.slideshowContainer{
    display: flex;
    flex-wrap:wrap;
}
.slideshowContainer img{
    width: 200px;
    height: 200px;
    object-fit:cover;
    margin: 1px;
    box-sizing:border-box;
}
.slideshowContainer img:hover{
    border: 3px solid black;
}

        `}</style>
            <div style={{ padding: "0 5vw" }}>
                <h1>Gallery</h1>
                <div>
                    <img src={this.state.selectedImage.url} style={{ width: "50vw", height: "50vh" }}></img>
                    <h2>{this.state.selectedImage.title}</h2>
                    <div className="slideshowContainer">
                        {showableImages.map(i => <img key={i} src={i.url}
                            onClick={() => { this.setState({ selectedImage: i }) }}
                        ></img>)}
                    </div>
                </div>
            </div>
        </div >
    }
}