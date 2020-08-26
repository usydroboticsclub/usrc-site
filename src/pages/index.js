import React from "react"
import Header from "../components/header.js"

export default function Home() {
  return <div>
    <Header stylesheet="font.css">
    </Header>
    <style>{`
  #supertitle{
    text-align: center;

    top: 30%;
    font-family: the_led_display_stregular;
    font-weight: 100;
    font-size: 74px;
    letter-spacing: 20px;
    margin: auto 20px;
    text-shadow: 0 0 3px orange, 0 0 15px #f44336;
    color: white;
  }

  #toptext{
    position: absolute;
    top:70%;
    width:auto;
    margin:auto 300px;
    padding: 30px;
    color: white;
    font-size: 20px;
    text-align: center;
    background-color: rgb(0,0,0,0.5);
 }

 .parallax, .parallaxtitle{
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.parallax{
  min-height: 70%;
  text-align: center;
  color:white;
  height:500px;

}

.parallax span{
  font-size: 36px;
  font-weight: bold;
  margin:0px;
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-transform: capitalize;
  color:white;
}

.content h2{
  text-align: center;
}


.parallaxtitle{
  min-height: 120%;
}

.content{
  /* height:500px; */
  text-align: justify;
  padding: 50px 180px;
}

#join{
  padding:50px 180px;
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

#join .btn :hover{
  background-color: #f4183A;

}

#join .row{
  display:flex;
}

#join .row .column{
  flex:100%;
  margin:0px 30px;
  /* padding:80px; */
  font-size: 16px;

}

  @media only screen and (max-width:768px){
    #supertitle{
      top: 15%;
      font-size: 39px;
      margin: auto 18px;
    }

    #toptext{
      top:80%;
      margin: auto 50px;
      padding: 5px;
      font-size:16px;
    }

    .content{
      padding: 50px 100px;
      font-size: 16px;
    }
    #join{
      padding:50px 50px;
    }
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




    `}</style>
    <div className="top-container parallax" style={{
      backgroundImage: "url('images/build-night1.jpg')",
      height: "100vh"
    }}
    >
      <span className="supertitle" id="supertitle">
        USYD Robotics Club
            </span>

      <div id="toptext">
        A University of Sydney based group enhancing student interest and knowledge in robotics through practical projects and workshops.
            </div>
    </div>

    <div id="main" className="main">



      <div className="parallax" style={{
        backgroundImage: "url('images/bntwoo.jpg')"
      }}>
        <span className="border" >
          Delivering hands-on experience for the next generation of roboticists.
            </span>

      </div>

      <div className="content">
        <h2>What We Do</h2>

            USRC serves two primary functions: Supporting USYD Robotics teams in external competitions, and hosting USYD based robotics events.

            USRC was founded in 2017 with a mission to deliver a more hands on robotics experience to USYD students.

            Since then, we've grown to over 300 members and compete in over 5 robotics competitions every year.

            <h2>Supporting our teams</h2>

        <p>
          As an individual robotics student, it can be hard to know where to look to find challenging Robotics competitions. So, at USRC, we actively find and organise robotics teams to participate in external competitions.
            </p>
        <p>
          Additionally, University robotics teams are often temporary organisations, so USRC aims to help retain technical and logistical knowledge between competition teams.

            </p>




      </div>


      <div className="parallax" style={{
        backgroundImage: "url('images/vivid/IMG_20190712_132202.jpg')"
      }}>
        <a href="projects" style={{
          textDecoration: "none"
        }}><span>PROJECTS</span></a>
      </div>

      <div className="content">
        <h2></h2>

        <p>
          Our Robotics Club has supported many forms of projects, from competitions to design challenges and government supported opportunities.

          Most prominently, USRC has competed in the Droid Racing Challenge in Queensland, placing in the top three twice. We have also competed in the international RobotX Maritime Challenge, gaining recognition and reward for innovative design and discipline.

          Beyond competitions, we also support projects such as design submissions for the Sydney Vivid Light installation as well as holding Build Nights and Workshops for hobbyists and people getting into robotics.
            </p>


      </div>

      <div className="parallax" style={{
        backgroundImage: "url('images/us.png')"
      }}>
        <a href="aboutus" style={{
          textDecoration: "none"
        }}><span>JOIN US NOW</span></a>
      </div>





      <div id="join" className="content">
        <div className="row">
          <div className="column">
            <h2>Join Us!</h2>
            <p>
              As we continue to grow and engage in new projects, we are always looking for new people who share the same interest in robotics as we do. Come join us if you wish to take part in our projects or to expand your skills in robotics
                    </p>

            <a>
              <button className="btn" onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSc9QQoIaEmkkLqnC5TqP5IdDen-lymCtMb-Hd6SO8L9PXmY0g/viewform' }}>
                Sign up for the Team
                        </button>
            </a>

            <p>
              If you would like to create your own project or simply want like to learn more, send us an <a href="aboutus" style={{
                textDecoration: "none"
              }}>email</a>  or shoot us a message at our <a href="https://www.facebook.com/usydroboticsclub/" style={{
                textDecoration: "none"
              }}>Facebook page</a> .
                    </p>
          </div>

          <div className="column">
            <h2>Support Us!</h2>
            <p>
              Like what you see but you're not eligible to join? You can also help us by sponsoring what we do. Whether it be the club or a project, we always appreciate any kind of support you are able to provide. Check out our prospectus to see the best way you can support us!
                    </p>
            <button className="btn" onClick={() => { window.location.href = 'https://drive.google.com/file/d/1H0j3bRERh7y7lt87-FOnHwaOK_kXSSky/view?usp=sharing' }}>
              Prospectus
                    </button>
          </div>
        </div >
      </div >
    </div >

    <div id="footer">
      <ul>
        <li><a href="https://usydrobotics.club">Home</a></li>
        <li><b>&copy; USYD Robotics Club</b></li>
      </ul>
    </div>    

  </div >
}
