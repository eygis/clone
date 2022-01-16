import React, { useState, useEffect} from 'react';
import './App.css'
import cross from '/src/pictures/cross.png'
import bmw from '/src/pictures/bmwLogo150.jpg'
import adler from '/src/pictures/adlerLogo150.jpg'
import rail from '/src/pictures/britishRailwaysLogo150.jpg'
import phone from '/src/pictures/phone.jpg'
import film from '/src/pictures/film.jpg'
import buifilms from '/src/pictures/buifilms.jpg'
import kaigan from '/src/pictures/kaigan.jpg'
import sad from '/src/pictures/sad.jpg'

const App = () => {
    
    const [previousTab, setTab] = useState('pictureText1')

    let accordionFunction = (picture, pictureText) => {
        document.getElementsByClassName('openTab')[0].classList.remove('openTab');
        document.getElementById(picture).classList.add('openTab');
        setTimeout(()=>{document.getElementById(pictureText).style.bottom='-1em'}, 275);
        if (pictureText==previousTab) return
        document.getElementById(previousTab).style.bottom='-5em';
        setTab(pictureText);
    }
    
    
    useEffect(() => { 
    const images = document.querySelectorAll('.showOnScroll');
    const options = {
        threshold: .75
    }
    const observer = new IntersectionObserver(entries => {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('isVisible')
            IntersectionObserver.unobserve(entry);
            }
        })
    }, options)
    
    images.forEach(image => {
    observer.observe(image);
    });
});

    let videoClick = () => {
        let video = document.getElementById('video');
        document.getElementById('seeVideo').style.display = 'none'
        video.play();
        video.controls = true;
    }
    
    return (
        <div id='wrapper'>
         <div id='headerArea'>
             <div id='topArea'>
             <div id='logoArea'>
            <p id='logo' />
            <h3 id='topText' className='logoText'>FESTIVAL DE BUI</h3>
            <h5 id='bottomText' className='logoText'>April 3, 2022</h5>
             </div>
             <div id='rightSide'>
             <div id='worldBar'>
                 <span id='account' className='tabText hoverGold'>
                     MY ACCOUNT
                 </span>
                 <span id='language' className='tabText hoverGold'>
                     EN
                 </span>
                 <span id='world'> 
                 <i className="fas fa-th icon"></i>THE BUI FILM FESTIVAL WORLD
                 </span>
                 <ul id='world2'> 
                 <li className='hoverGold worldListItem'>2022 FESTIVAL</li>
                 <li className='hoverGold worldListItem'>FESTIVAL DE BUI</li>
                 <li className='hoverGold worldListItem'>BUI COURT MÉTRAGE</li>
                 <li className='hoverGold worldListItem'>JULIUS CINEMA</li>
                 <li className='hoverGold worldListItem'>MARSH DU FILM</li>
                 <li className='hoverGold worldListItem'>MARSH DU FILM ONLINE</li>
                 </ul>
             </div>
             <div id='sponsors'>
                <ul id='sponsorsList'>
                    <li><img className='sponsor' src={cross} /></li>
                    <li><img className='sponsor' src={bmw} /></li>
                    <li><img className='sponsor' src={adler} /></li>
                    <li><img className='sponsor' src={rail} /></li>
                </ul>
             </div>
             </div>
             </div>
             <nav id='navArea'>
                 <ul id='navList'>
                     <li id='newsNav' className='navItem'>NEWS</li>
                     <ul id='newsList' className='navList'> 
                        <li className='hoverGold navListItem'>DAY BY DAY</li>
                        <li className='hoverGold navListItem'>FESTIVAL NEWS</li>
                     </ul>
                     <li className='navItem'>2022 FESTIVAL</li>
                     <li id='weNav' className='navItem'>WHO WE ARE</li>
                     <ul id='weList' className='navList'> 
                        <li className='hoverGold navListItem'>FESTIVAL DE BUI</li>
                        <li className='hoverGold navListItem'>BUI COURT MÉTRAGE</li>
                        <li className='hoverGold navListItem'>JULIUS CINEMA</li>
                        <li className='hoverGold navListItem'>MARSH DU FILM</li>
                        <li className='hoverGold navListItem'>VILLAGE DOMESTIC</li>
                        <li className='hoverGold navListItem'>A FESTIVAL WITH A CONCIERGE</li>
                        <li className='hoverGold navListItem'>THE DREAM</li>
                        <li className='hoverGold navListItem'>DETECTION COMMITTEE</li>
                     </ul>
                     <li id='sevenNav' className='navItem'>75 EDITIONS</li>
                     <ul id='sevenList' className='navList'> 
                        <li className='hoverGold navListItem'>PROSPECTIVE</li>
                        <li className='hoverGold navListItem'>THE FUTURE OF THE FESTIVAL</li>
                        <li className='hoverGold navListItem'>THE PALM DOOR</li>
                        <li className='hoverGold navListItem'>LESS ARCHIVES</li>
                     </ul>
                     <li className='navItem'>MEDIA</li>
                     <li className='navItem'>TAKE PART</li>
                     <li className='navItem'>PRESS AREA</li>
                 </ul>
                 <div id='search'>
                 <i className="fas fa-search icon"></i>SEARCH
                 </div>
             </nav>
             <div id='newsAccordion'>
                 <ul id='accordionList'>
                     <li className='accordionItem accordionPicture openTab' id='picture1'><span className='pictureText slideText' id='pictureText1'>The Festival de Bui has signed a memorandum of understanding with Earth Telephones and the media company Bruh</span><img className='mainPicture' src={phone} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture1', 'pictureText1')}><span className='accordionNumber'>1</span><span className='itemText'>The Festival de Bui has signed a memorandum of understanding with Earth Telephones and the media company Bruh</span></li>
                     <li className='accordionItem accordionPicture' id='picture2'><span className='pictureText' id='pictureText2'>The 75th edition will take place on April 3rd, 2022. Registration of films is closed!</span><img className='mainPicture' src={film} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture2', 'pictureText2')}><span className='accordionNumber'>2</span>The 75th edition will take place on April 3rd, 2022. Registration of films is closed!</li>
                     <li className='accordionItem accordionPicture' id='picture3'><span className='pictureText' id='pictureText3'>The Bui Films en route for the 2022 Knopes</span><img className='mainPicture' src={buifilms} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture3', 'pictureText3')}><span className='accordionNumber'>3</span>The Bui Films en route for the 2022 Knopes</li>
                     <li className='accordionItem accordionPicture' id='picture4'><span className='pictureText' id='pictureText4'>"The Belmonts are vampires!" Terry Fromage's sudden and unfounded claim about the Family</span><img className='mainPicture' src={kaigan} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture4', 'pictureText4')}><span className='accordionNumber'>4</span>"The Belmonts are vampires!" Terry Fromage's sudden and unfounded claim about the Family</li>
                 </ul>
             </div>
         </div>
            <p id='articleHeader'>ALL THE LATEST NEWS</p>
            <div id='articleArea'>
            <div className='article showOnScroll' id='article1'>
            <div className='articlePictureDiv'><img className='articlePicture' src={phone} /></div>
            <p className='articleText classification'><span className='goldType'>OFFICIAL RELEASE</span><span className='date'>12.17.2021</span></p>
            <p className='articleText playfair'>The Festival de Bui has signed a memorandum of understanding with Earth Telephones and the media company Bruh</p>
            <p className='articleText'>The Festival de Bui would like to react to different information that has recently appeared on the subject of the cancellation of its audiovisual partnership and to provide the following clarifications.</p>
            </div>
            <div className='article showOnScroll' id='article2'>
            <div className='articlePictureDiv'><img className='articlePicture' src={film} /></div>
            <p className='articleText classification'><span className='goldType'>75TH EDITION</span><span className='date'>12.1.2021</span></p>
            <p className='articleText playfair'>The 75th edition will take place on April 3rd, 2022. Registration of films is closed!</p>
            <p className='articleText'>You cannot submit your films for the 2022 Official Selection. The registration deadline was set for 1 January 2022.</p>
            </div>
            <div className='article showOnScroll' id='article3'>
            <div className='articlePictureDiv'><img className='articlePicture' src={buifilms} /></div>
            <p className='articleText classification'><span className='goldType'>74TH EDITION</span><span className='date'>11.03.2021</span></p>
            <p className='articleText playfair'>The Bui Films en route for the 2022 Knopes</p>
            <p className='articleText'>The first of December was the deadline for a film to be submitted as a candidate for "Best National Feature Film" for the 2022 Knopes.</p>
            </div>
            <div className='article showOnScroll' id='article4'>
            <div className='articlePictureDiv'><img className='articlePicture' src={kaigan} /></div>
            <p className='articleText classification'><span className='goldType'>GOSSIP</span><span className='date'>10.09.21</span></p>
            <p className='articleText playfair'>"The Belmonts are vampires!" Terry Fromage's sudden and unfounded claim about the Family</p>
            <p className='articleText'>While the relationship between Fromage and the Belmont family has always been tense, his latest claim appears to be a bizarre and baseless claim.</p>
            </div>
            <p id='seeMore'>SEE + ARTICLES</p>
            </div>
            <p id='videoHeader'>FEATURED VIDEO</p>
            <div id='videoArea'>
                <div className='showOnScroll' id='videoTile'>
                <video id='video' poster={sad} playsinline="" controlslist="nodownload" disablepictureinpicture="true"><source src="https://cdn.videvo.net/videvo_files/video/free/2013-07/large_watermarked/HS045_preview.mp4" type="video/mp4" /></video>
                    <a id='seeVideo' onClick={()=>videoClick()}><span className='fas fa-play'></span><span id='seeVideoText'>SEE THE VIDÉO</span></a>
                    <div id='videoTextArea'>
                    <div id='videoTextAreaLeft'>
                        74e Festival de Bui Worst-of
                    </div>
                    <div id='videoTextAreaRight'>
                        <span id='rightGold'>
                            74TH EDITION
                        </span>
                        <span id='rightDate'>
                            7.16.2021
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;