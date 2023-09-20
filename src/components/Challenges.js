import React from 'react'

const Challenges = () => {
    const images = [];
    const titles = [
        "Link-sharing app", "Newsletter sign-up form with success message",
        "Body Mass Index calculator","Age calculator app",
        "Workit landing page","Results summary component"
    ];
    const descs = [
        "In this project, you'll build a fully-functional link-sharing app for developers! You'll practice working with image uploads, repeater fields, drag-and-drop, and more!",
        "This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
        "This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!",
        "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
        "This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!",
        "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS."
    ]
    for(let i = 1; i<= 6; i++){
        images.push(require(`../images/image${i}.webp`));
    }
  return (
    <div className='Challenges'> 
        <div className="blue-back">
            <span className="text">lastest challenges</span>
        </div>
        {titles.map((title, index) => (
            <div className='tile' key={index}>
                <img src={images[index]} alt="" />
                <div className="not-image">
                    <span className='title'>{title}</span>
                    <div className="mid">
                        <div className='langs'>
                            <span className='h'>HTML</span>
                            <span className='c'>CSS</span>
                            <span className='j'>JS</span>
                        </div>
                        <div className='level'>
                            <div className='num'>5</div>
                            <div className='word'>GURU</div>
                        </div>
                    </div>
                    <div className="desc">
                        {descs[index]}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Challenges