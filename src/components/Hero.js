import React from 'react'
import {BsGithub} from "react-icons/bs";
import heroImage from "../images/homepage-hero.webp";

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="left-side">
            <p className="hero-headertext">
                Improve your front-end coding skills by building real projects
            </p>
            <p className="hero-desctext">
                Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 634,266 developers building projects, reviewing code, and helping each other get better.
            </p>
            <button>log in with github <BsGithub></BsGithub></button>
        </div>
        <div className="right-side">
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero