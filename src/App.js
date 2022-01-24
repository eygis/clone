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
import computer from '/src/pictures/computer.jpg'
import uke from '/src/pictures/uke.jpg'
import forest from '/src/pictures/forest.jpg'
import mushrooms from '/src/pictures/mushrooms.jpg'
import flower from '/src/pictures/flower.jpg'

const App = () => {
    
    const [previousTab, setTab] = useState('pictureText1');

    let accordionFunction = (picture, pictureText) => {
        document.getElementsByClassName('openTab')[0].classList.remove('openTab');
        document.getElementById(picture).classList.add('openTab');
        setTimeout(()=>{document.getElementById(pictureText).style.bottom='-1em'}, 275);
        if (pictureText==previousTab) return;
        document.getElementById(previousTab).style.bottom='-5em';
        setTab(pictureText);
    }
    
    
    useEffect(() => { 
    const images = document.querySelectorAll('.showOnScroll');
    const options1 = {
        threshold: .85
    }
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('isVisible')
            }
        })
    }, options1)
    
    images.forEach(image => {
    observer1.observe(image);
    });

    const selectionTiles = document.querySelectorAll('.holdLeft');
    const options2 = {
        threshold: 1
    }
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('holdLeft')
            }
        })
    }, options2)

    selectionTiles.forEach(tile => {
        observer2.observe(tile);
    });

    const scrollPhotos = document.querySelectorAll('.scrollPhotoDiv');

    let scrollFade = (element) => {
        if (element) {
            let topDistance = window.pageYOffset + element.getBoundingClientRect().top;
            let elementHeight = element.offsetHeight;
            let scrollTop = document.documentElement.scrollTop;
            let opacity = 1;
            if (scrollTop > topDistance) {
                opacity = 1 - (scrollTop - topDistance) / elementHeight;
            }
            if (opacity >= 0) {
                element.style.opacity = opacity;
            }
        }
    }

    let scrollHandler = () => {
        scrollPhotos.forEach(photo => {
            scrollFade(photo)
        })
    }

    window.addEventListener('scroll', scrollHandler);

    const scalePhoto = document.querySelector('#scalingPictureArea');

    let scrollScale = (element) => {
        if (element) {
            let topDistance = window.pageYOffset + element.getBoundingClientRect().top;
            let elementHeight = element.offsetHeight + 400;
            let scrollTop = document.documentElement.scrollTop;
            let scale = 1;
            if (scrollTop < topDistance) {
                scale = 1 + (scrollTop - topDistance) / elementHeight;
            }
            if (scale >= .3) {
                element.style.transform = `scale(${scale})`;
            }
        }
    }

    let scaleHandler = () => {
        scrollScale(scalePhoto)
    }

    window.addEventListener('scroll', scaleHandler);
});

    let videoClick = (video, button) => {
        let selectedVideo = document.getElementById(video);
        document.getElementById(button).style.display = 'none'
        selectedVideo.play();
        selectedVideo.controls = true;
    }

    const [previousVideo, setVideo] = useState('selection1');
    const [previousSelectionItem, setSelectionItem] = useState('selectionItem1')

    let videoChange = (video, selectionItem) => {
        let selectedVideo = document.getElementById(video);
        let selectedSelectionItem = document.getElementById(selectionItem);
        if (selectedVideo === previousVideo) return
        if (selectedSelectionItem === previousSelectionItem) return
        document.getElementById(previousSelectionItem).classList.remove('selectionBorder');
        document.getElementById(previousVideo).style['z-index'] = -1;
        document.getElementById(previousVideo).style.opacity = 0;
        selectedSelectionItem.classList.add('selectionBorder');
        selectedVideo.style['z-index'] = 1;
        selectedVideo.style.opacity = 1
        setSelectionItem(selectionItem);
        setVideo(video);
    }
    
    return (
        <div id='wrapper'>
         <div id='headerArea'>
             <div id='topArea'>
             <div id='logoArea'>
            <p className='logo' />
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
            <div id='articleArea'>
            <p id='articleHeader'>ALL THE LATEST NEWS</p>
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
            <p id='featuredVideoHeader'>FEATURED VIDEO</p>
            <div id='featuredVideoArea'>
                <div className='showOnScroll' id='featuredVideoTile'>
                <video id='featuredVideo' poster={sad} playsInline="" controlsList="nodownload" disablePictureInPicture={true}><source src="https://cdn.videvo.net/videvo_files/video/free/2013-07/large_watermarked/HS045_preview.mp4" type="video/mp4" /></video>
                    <a id='featuredVideoButton' className='seeVideo' onClick={()=>videoClick('featuredVideo', 'featuredVideoButton')}><span className='fas fa-play'></span><span className='seeVideoText'>SEE THE VIDÉO</span></a>
                    <div id='featuredVideoTextArea'>
                    <div id='featuredVideoTextAreaLeft'>
                        74e Festival de Bui Worst-of
                    </div>
                    <div id='featuredVideoTextAreaRight'>
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
            <div id='selectionArea'>
            <div id='stickyYear'>2022</div>
            <p id='selectionHeader'>HIGHLIGHT ON THE OFFICIAL SELECTION</p>
            <div className='selection' id='selection1'>
                <div className='selectionDetails'>
                    <span className='selectionReleaseDate'>RELEASED ON : 01.18.2022</span>
                    <span className='selectionMovieTitle'>HAL</span>
                    <span className='selectionDirector'>Ting FOO, Leo POTT</span>
                </div>
                <div className='selectionVideoDiv'>
                <video id='selectionVideo1' className='selectionVideo' poster={computer} playsInline="" controlsList="nodownload" disablePictureInPicture={true}><source src="https://cdn.videvo.net/videvo_files/video/free/2020-05/large_watermarked/3d_ocean_1590675653_preview.mp4" type="video/mp4" /></video>
                <a id='selectionVideoButton1' className='seeVideo' onClick={()=>videoClick('selectionVideo1', 'selectionVideoButton1')}><span className='fas fa-play'></span><span className='seeVideoText'>SEE THE VIDÉO</span></a>
                </div>
            </div>
            <div className='selection' id='selection2'>
                <div className='selectionDetails'>
                    <span className='selectionReleaseDate'>RELEASED ON : 01.25.2022</span>
                    <span className='selectionMovieTitle'>ON MONDO</span>
                    <span className='selectionDirector'>Laura VANDAL</span>
                </div>
                <div className='selectionVideoDiv'>
                <video id='selectionVideo2' className='selectionVideo' poster={forest} playsInline="" controlsList="nodownload" disablePictureInPicture={true}><source src="https://cdn.videvo.net/videvo_files/video/free/2020-08/large_watermarked/Sunsat___8_1596540777_preview.mp4" type="video/mp4" /></video>
                <a id='selectionVideoButton2' className='seeVideo' onClick={()=>videoClick('selectionVideo2', 'selectionVideoButton2')}><span className='fas fa-play'></span><span className='seeVideoText'>SEE THE VIDÉO</span></a>
                </div>
            </div>
            <div className='selection' id='selection3'>
                <div className='selectionDetails'>
                    <span className='selectionReleaseDate'>RELEASED ON : 01.04.2022</span>
                    <span className='selectionMovieTitle'>MESSY FRIENDS AND ME</span>
                    <span className='selectionDirector'>Yohan MANCA</span>
                </div>
                <div className='selectionVideoDiv'>
                <video id='selectionVideo3' className='selectionVideo' poster={uke} playsInline="" controlsList="nodownload" disablePictureInPicture={true}><source src="https://cdn.videvo.net/videvo_files/video/free/2014-08/large_watermarked/Earth_Zoom_In_preview.mp4" type="video/mp4" /></video>
                <a id='selectionVideoButton3' className='seeVideo' onClick={()=>videoClick('selectionVideo3', 'selectionVideoButton3')}><span className='fas fa-play'></span><span className='seeVideoText'>SEE THE VIDÉO</span></a>
                </div>
            </div>
            <div className='selection' id='selection4'>
                <div className='selectionDetails'>
                    <span className='selectionReleaseDate'>RELEASED ON : 01.11.2022</span>
                    <span className='selectionMovieTitle'>PANE JAR CHARLOTTE</span>
                    <span className='selectionDirector'>Charlotte GAINSBOURG</span>
                </div>
                <div className='selectionVideoDiv'>
                <video id='selectionVideo4' className='selectionVideo' poster={mushrooms} playsInline="" controlsList="nodownload" disablePictureInPicture={true}><source src="https://cdn.videvo.net/videvo_files/video/free/2015-03/large_watermarked/fire_background_loop2_videvo2_preview.mp4" type="video/mp4" /></video>
                <a id='selectionVideoButton4' className='seeVideo' onClick={()=>videoClick('selectionVideo4', 'selectionVideoButton4')}><span className='fas fa-play'></span><span className='seeVideoText'>SEE THE VIDÉO</span></a>
                </div>
            </div>
            <ul id='selectionList'>
                <li className='selectionItem holdLeft selectionBorder' id='selectionItem1' onClick={()=>videoChange('selection1', 'selectionItem1')}><img className='selectionTile' src={computer} /></li>
                <li className='selectionItem holdLeft' id='selectionItem2' onClick={()=>videoChange('selection2', 'selectionItem2')}><img className='selectionTile' src={forest} /></li>
                <li className='selectionItem holdLeft' id='selectionItem3' onClick={()=>videoChange('selection3', 'selectionItem3')}><img className='selectionTile' src={uke} /></li>
                <li className='selectionItem holdLeft' id='selectionItem4' onClick={()=>videoChange('selection4', 'selectionItem4')}><img className='selectionTile' src={mushrooms} /></li>
            </ul>
            </div>
            <div id="scrollArea">
            <div id='scrollPhotoArea'>
                <div className='scrollPhotoDiv'><img className='scrollPhoto' src={mushrooms} /></div>
                <div className='scrollPhotoDiv'><img className='scrollPhoto' src={forest} /></div>
                <div className='scrollPhotoDiv'><img className='scrollPhoto' src={uke} /></div>
            </div>
            <div id='scrollInfoWrapper'>
                <div id='scrollInfoArea'>
                <p id='scrollInfoHeader'>Because more than anything, the festival...</p>
                <p id='scrollInfoHeaderSubtext'>finds and displays mid quality films that improve the growth of film, promotes the growth of the local film industry and celebrates the 6th art citywide.</p>
                <div className='scrollInfoRow'>
                    <div className='scrollInfoBox'>
                        <div className='scrollInfoNumber'><span className='number'>73</span> years</div>
                        <div className='scrollInfoGold'>OF FINDING NEW FILMS</div>
                    </div>
                    <div className='scrollInfoBox'>
                        <div className='scrollInfoNumber'><span className='number'>11</span> days</div>
                        <div className='scrollInfoGold'>OF CITY PREMIER SCREENINGS</div>
                    </div>
                </div>
                <div className='scrollInfoRow'>
                    <div className='scrollInfoBox'>
                        <div className='scrollInfoNumber'><span className='number'>169</span> countries</div>
                        <div className='scrollInfoGold'>REPRESENTED IN 2018 BY 39,999 DISCREDITED FESTIVAL-ATTENDERS</div>
                    </div>
                    <div className='scrollInfoBox'>
                        <div className='scrollInfoNumber'><span className='number'>12499</span> Movie Amateurs</div>
                        <div className='scrollInfoGold'>ASSEMBLED AT THE MARSH DU FILM</div>
                    </div>
                </div>
                <div className='scrollInfoRow'>
                    <div className='scrollInfoBox'>
                        <div className='scrollInfoNumber'><span className='number'>23</span> blue concrete steps</div>
                        <div className='scrollInfoGold'>TO GREET THE CREME DE LA CREME IN THE FILM INDUSTRY</div>
                    </div>
                </div>
                <div id="scrollInfoLogoRow">
                    <p className='logo' />
                </div>
            </div>
            </div>
            </div>
            <div id='scrollingYearArea'>
                <div id='scrollingYearDiv'>
                    <span id='scrollingYear'>2021</span>
                </div>
                <div id='scalingPictureArea'>
                    <img id='scalingPicture' src={flower} />
                    <a id='scalingPictureButton'><span>SEE THE HIGHLIGHTS</span></a>
                </div>
            </div>
            <div id='lastArea'>
                <p id='lastAreaHeader' className='lastAreaText'>
                    Visit our Xanga for the latest news from the Festival de Bui
                </p>
                <div id='emailInputDiv'>
                <input id='emailInput' type='text' placeholder='Enter Your AIM SN'></input><span id='emailArrow' className='fas fa-angle-right' />
                </div>
                <p className='lastAreaText'>Stay far from Festival de Bui</p>
                <p className='lastAreaText'>Follow us on <a>Xanga</a>, <a>Friendster</a>, and <a>AIM</a></p>
                <p className='lastAreaText'>Download the <a>Free Bui Background</a></p>
                <div id='footer'>
                    <ul id='footerList'>
                        <li class='footerLink'>Credit</li>
                        <li class='footerLink'>Contacts</li>
                        <li class='footerLink'>SAQ</li>
                        <li class='footerLink'>Siteatlas</li>
                        <li class='footerLink'>Public policy</li>
                        <li class='footerLink'>Legality</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;