import React, { useEffect, useState } from 'react'
import logo from "../images/logo-desktop.svg";
import logo2 from "../images/logo-mobile.svg";
import { Link } from 'react-router-dom';
import {BsGithub} from "react-icons/bs";
import {HiMenuAlt3} from "react-icons/hi";

const Navbar = () => {
    const [isSmall, setIsSmall] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsOpen(false);
            if(window.innerWidth < 800){
                setIsSmall(true);
            }
            else{
                setIsSmall(false);
            }
        });
        if(window.innerWidth < 800){
            setIsSmall(true);
        }
        else{
            setIsSmall(false);
        }
    }, []);
  return (
    <div className='Navbar'>
        {isSmall ? <img src={logo2} alt="" /> :<img src={logo} alt="" />}
        <nav>
            <ul>
                <li> <Link>challenges</Link> </li>
                <li> <Link>solutions</Link> </li>
                <li> <Link>resources</Link> </li>
                <li> <Link>unlock <span>pro</span></Link></li>
                <li> <Link><span className='git'>
                    link with github <BsGithub></BsGithub>
                </span></Link> </li>
            </ul>
        </nav>
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt3></HiMenuAlt3>
        </div>
        {isOpen && <div className="menu-tile">
            <nav>
                <ul>
                    <li onClick={() => setIsOpen(false)}> <Link>challenges</Link> </li>
                    <li onClick={() => setIsOpen(false)}> <Link>solutions</Link> </li>
                    <li onClick={() => setIsOpen(false)}> <Link>resources</Link> </li>
                    <li onClick={() => setIsOpen(false)}> <Link>unlock <span>pro</span></Link></li>
                    <li onClick={() => setIsOpen(false)}> <Link><span className='git'>
                        link with github <BsGithub></BsGithub>
                    </span></Link> </li>
                </ul>
            </nav>
        </div>}
    </div>
  )
}

export default Navbar