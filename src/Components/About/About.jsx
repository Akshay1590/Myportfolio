import React from 'react'
import './About.css'
import Pattern from '../../assets/theme_pattern.svg'
import Proimg from '../../assets/about_profile.svg'


const About = () => {
    return (
        <div className='about-me-container' id='about'>
            <div className="AboutT">
                <h1>About Me</h1>
                <img src={Pattern} alt="" />
            </div>

            <div className="About-section">
                <div className="AboutL">
                    <img src={Proimg} alt="" />
                </div>
                <div className="AboutR">

                    <div className="Apara">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam enim assumenda qui repudiandae eveniet iste excepturi blanditiis suscipit iure?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi vitae beatae harum excepturi officiis repellat.</p>
                    </div>

                    <div className="AboutSkills">
                        <div className="Aboutskill"><p>HTML & CSS</p><hr style={{ width: "80%" }} className='p1' /></div>
                        <div className="Aboutskill"><p>React Js\</p><hr style={{ width: "70%" }} className='p1' /></div>

                        <div className="Aboutskill"><p>JavaScript</p><hr style={{ width: "60%" }} className='p1'/></div>

                        <div className="Aboutskill"><p>Mongodb</p><hr style={{ width: "90%" }} className='p1'/></div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default About
