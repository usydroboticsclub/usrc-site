import React from "react"
import Header from "../components/header.js"

export default function Home() {
    return <div className="activities">
        <Header>
        </Header>
        <style>{`
    *{
        font-family: sans-serif
    }
    .activities .inner_body{
        padding: 10px;
    }

    `}</style>
        <div class="inner_body">
            <h1>Our Current Activities</h1>
            <p>Want to engage with us? There are four ways to start:</p>
            <ol>
                <li>Come to our weekly robotics meetups, on Monday 2:00pm - 3:00pm in one of the PNR pods</li>
                <li>Kit hire: want to do hands on work in your own time? Check out our kits for hire and let us know what you want to pick up on Discord (Free for members!)</li>
                <li>Run with our online tutorials on Git, Python and more, on our github: <a href="https://github.com/usydroboticsclub">https://github.com/usydroboticsclub</a></li>
                <li>Join us on discord and start a conversation, help us write our blog, and come to our social events: <a href="https://discord.gg/kDqrqvd">https://discord.gg/kDqrqvd</a></li>
            </ol>

            <h2>Weekly Robotics meetups: Monday 2:00pm-3:00pm in PNR pod (one of them)</h2>
            <p>In these meetups, we go through some hands-on robotics projects which are beginner friendly - all equipment supplied!</p>
            <ol>
                <li>Week 2: System design of a Self Driving Car</li>
                <li>Week 3: Soldering and connectors (provided parts come in, otherwise we'll do arduino self-driving car)</li>
                <li>Week 4: Linux and SSH</li>
                <li>Week 5: GPS sensor and localisation</li>
                <li>Week 6: Robot assembly</li>
                <li>Week 7: Robot test drive</li>
                <li>Week 8: Buffer (otherwise computer vision)</li>
                <li>Week 9: Buffer (otherwise gazebo tank)</li>
                <li>Week 10: Buffer (otherwise next semester planning meeting)</li>
            </ol>



            <h2>Kits for hire</h2>
            <p>You can hire out kits if you want to try robotics in a group. All kits come with all the necessary parts and instructions for you to start from scratch; at a fraction of the price of the original parts!</p>
            <p>This is still a work in progress. We're planning to have the following kits available:</p>
            <ul>
                <li>Arduino 101: Build a bluetooth-controlled arduino-based robot car! Kit RRP: ~$30, Deposit: $10, Hire cost: Free</li>
                <li>Self-driving car: Build a model car that uses GPS to navigate its way around the uni. Kit RRP: ~$200, Deposit: $30, Hire cost: $10</li>
                <li>Computer vision kit: Use a stereo camera to perform depth detection and perform a 3d scan. Kit RRP: ~$110, Deposit: $20, Hire cost: $5</li>
                <li>Hexapod kit: Experiment with inverse kinematics and alternative modes of locomotion with our spiderbot kit! Kit RRP: ~$200, Deposit: $30, Hire cost: $10</li>
            </ul>

            <h2>Online tutorials</h2>
            <p>Our online tutorials can be accessed anytime, and take about a semester to work through. They were made to fit in an hour every session. The recommended order is below:</p>
            <ol>
                <li><a href="https://github.com/usydroboticsclub/intro">Introduction to git: How to use git and github for versioning</a></li>
                <li><a href="https://github.com/usydroboticsclub/tinkercad">Tinkercad: a free platform for doing Arduino experiments!</a></li>
                <li><a href="https://github.com/usydroboticsclub/tinkercad2">More projects with tinkercad: Build a hand sanitiser robot!</a></li>
                <li><a href="https://github.com/usydroboticsclub/tinkercad">Tinkercad: a free platform for doing Arduino experiments!</a></li>
                <li><a href="https://github.com/usydroboticsclub/python">An introduction to Python.</a></li>
                <li><a href="https://github.com/usydroboticsclub/py_harder">A harder python tutorial teaching more python concepts.</a></li>
                <li><a href="https://github.com/usydroboticsclub/intro-to-opencv">A tutorial in OpenCV: a popular computer vision framework.</a></li>
                <li><a href="https://github.com/usydroboticsclub/machineLearningTutorial">Machine learning 101: High-level overview of machine learning categories for robotics</a></li>
                <li><a href="https://colab.research.google.com/drive/1dlLMwwqqApU5Fk0gSlH2lDMIVNJ0aXMj">Reinforcement learning: A closer look at a popular approach to robotic machine learning</a> (Courtesy of Josiah Tan)</li>
                <li><a href="https://colab.research.google.com/drive/16NDP5Mdf0wE-rOgswobqSwkvWJ8cnLZ5">K-armed bandits: Fundamental theory and mathematics behind Reinforcement Learning </a> (Courtesy of Josiah Tan, solutions <a href="https://colab.research.google.com/drive/1z_DObHZXpmkQmtnDU2KsHw3sC0SLsxE8?usp=sharing">here</a>)</li>
                <li><a href="https://colab.research.google.com/drive/1UFnCMmy0yjaRMMG75FU_aPE3uJfE_dCv">Markov Decision Processes: A more pragmatic Reinforcement Learning approach</a> (Courtesy of Josiah Tan)</li>
                <li><span>[WIP] Linux tutorial: How to install a linux operating system on your computer</span></li>
                <li><a href="https://github.com/usydroboticsclub/DRCSimulator">Feeling confident with Python and computer vision? Try and make a self-driving algorithm for our DRC simulator!</a></li>
                <li><a href="https://github.com/usydroboticsclub/ROS">ROS tutorial: How to use ROS for modular robotics</a></li>
            </ol>

            <h2>Get in touch</h2>
            <p>We hold fun social events from time to time, announced on our <a href="https://www.facebook.com/usydroboticsclub">Facebook</a> and <a href="https://discord.gg/kDqrqvd">Discord</a>.</p>
            <p>Coming up is our online Mafia game night on Friday 4th September at  - head to our Facebook page or message us to find out more!</p>
        </div>

    </div>
}
