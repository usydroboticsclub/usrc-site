(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{yp8A:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n("dI71"),l=n("q1tI"),a=n.n(l),r=n("LbRr"),o=[{url:"/images/back1.jpg",title:"USRC in 2018"},{url:"/images/bntwoo.jpg",title:"Build Night 2019S2"},{url:"/images/buildnight.jpg",title:"Build Night 2019S1"},{url:"/images/drcdrc.jpg",title:"Droid Racing Competition"}],c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.state.selectedImage={url:null,title:"Click on an image in the gallery below!"},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.render=function(){var e=this;return a.a.createElement("div",{style:{background:"repeating-linear-gradient(-6deg, #222, #333, #222 60px)",color:"white",height:"100vh"}},a.a.createElement(r.a,null),a.a.createElement("style",null,"\n.slideshowContainer{\n    display: flex;\n    flex-wrap:wrap;\n}\n.slideshowContainer img{\n    width: 200px;\n    height: 200px;\n    object-fit:cover;\n    margin: 1px;\n    box-sizing:border-box;\n}\n.slideshowContainer img:hover{\n    border: 3px solid black;\n}\n\n        "),a.a.createElement("div",{style:{padding:"0 5vw"}},a.a.createElement("h1",null,"Gallery"),a.a.createElement("div",null,a.a.createElement("img",{src:this.state.selectedImage.url,style:{width:"50vw",height:"50vh"}}),a.a.createElement("h2",null,this.state.selectedImage.title),a.a.createElement("div",{className:"slideshowContainer"},o.map((function(t){return a.a.createElement("img",{key:t,src:t.url,onClick:function(){e.setState({selectedImage:t})}})}))))))},t}(a.a.Component)}}]);
//# sourceMappingURL=component---src-pages-gallery-js-4957897534828e2d50ce.js.map