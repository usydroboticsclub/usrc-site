import React from "react"
import Header from "../components/header.js"

export default function Home() {
  return <div>
    <Header stylesheet="index.css font.css">
    </Header>
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

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9QQoIaEmkkLqnC5TqP5IdDen-lymCtMb-Hd6SO8L9PXmY0g/viewform">
              <button className="btn">
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

            <button className="btn" onclick="window.location.href = 'https://drive.google.com/file/d/1H0j3bRERh7y7lt87-FOnHwaOK_kXSSky/view?usp=sharing';">
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

    <script src="js/index.js" charset="utf-8"></script>


  </div >
}
