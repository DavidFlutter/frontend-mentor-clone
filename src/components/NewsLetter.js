import React from 'react'
import {BsDiscord} from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <div className="content">
            <span className='discord'>
                <BsDiscord></BsDiscord> discord
            </span>
            <h3> join our discord community</h3>
            <p>
                Join other Frontend Mentor community members taking the challenges, sharing resources, helping each other, and chatting about all things front-end!
            </p>
            <button>Join our discord</button>
        </div>
    </div>
  )
}

export default NewsLetter