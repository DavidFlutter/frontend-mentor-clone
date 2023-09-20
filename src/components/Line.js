import React from 'react';
import {BsChat, BsCodeSlash, BsDownload} from "react-icons/bs";
import {IoIosGitNetwork} from "react-icons/io";


const Line = () => {
  return (
    <div className='Line'>
        <p className="line-header">
            how it works
        </p>
        <div className="actions">
            <div className="action">
                <BsDownload></BsDownload>
                <h3>
                    Choose your challenge
                </h3>
                <p>
                    Post your solution on the platform for everyone to see and get feedback on your code from other developers in the community.
                </p>
            </div>
            <div className="action">
                <BsCodeSlash></BsCodeSlash>
                <h3>
                    Code the design
                </h3>
                <p>
                    Have a look through our collection of web designs. Pick one that you feel will be a nice challenge for you at this stage.
                </p>
            </div>
            <div className="action">
                <IoIosGitNetwork></IoIosGitNetwork>
                <h3>
                    Submit your solution
                </h3>
                <p>
                    Start the challenge and download all the starter files. We provide all the files you’ll need to complete the challenge. Building it is up to you!
                </p>
            </div>
            <div className="action">
                <BsChat></BsChat>
                <h3>
                    Give others feedback
                </h3>
                <p>
                    Thinking critically about other people’s code is a crucial skill. Help others while deepening your own knowledge by giving feedback on solutions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Line