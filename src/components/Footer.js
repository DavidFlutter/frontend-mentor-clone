import React from 'react'
import {BsDiscord, BsTwitter, BsLinkedin, BsFacebook} from "react-icons/bs";
import logo from "../images/logo-desktop.svg";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="upper">
            <img src={logo} alt="" />
            <div className='socials'>
                <BsDiscord></BsDiscord>
                <BsTwitter></BsTwitter>
                <BsLinkedin></BsLinkedin>
                <BsFacebook></BsFacebook>
            </div>
        </div>
        <div className="middle">
            <div>
                <h3>Stay up to date</h3>
                <p>with new challenges, featured solutions, selected articles and our latest news</p>
                <input type="text" placeholder='email@example.com' />
                <button>subscribe</button>
            </div>
        </div>
        <div className="lower">
            &copy; Frontend Mentor 2019 - 2023 
            <div className="end">
                <span>Terms</span>
                <span>Cookie Policy</span>
                <span>Privacy</span>
                <span>License</span>
            </div>
        </div>
    </div>
  )
}

export default Footer