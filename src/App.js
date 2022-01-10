import React from 'react';
import './App.css'
import cross from '/src/pictures/cross.png'
import bmw from '/src/pictures/bmwLogo150.jpg'
import adler from '/src/pictures/adlerLogo150.jpg'
import rail from '/src/pictures/britishRailwaysLogo150.jpg'
import phone from '/src/pictures/phone.jpg'
import film from '/src/pictures/film.jpg'
import buifilms from '/src/pictures/buifilms.jpg'
import kaigan from '/src/pictures/kaigan.jpg'

const App = () => {
    
    let accordionFunction = (input) => {
        let open = document.getElementsByClassName('openTab');
        open[0].classList.remove('openTab')
        document.getElementById(input).classList.add('openTab');
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
                     <li className='accordionItem accordionPicture openTab' id='picture1'><span id='pictureText'>The Festival de Bui has signed a memorandum of understanding with Earth Telephones and the media company Bruh</span><img className='picture' src={phone} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture1')}><span className='accordionNumber'>1</span><span className='itemText'>The Festival de Bui has signed a memorandum of understanding with Earth Telephones and the media company Bruh</span></li>
                     <li className='accordionItem accordionPicture' id='picture2'><span id='pictureText'>The 75th edition will take place on April 3rd, 2022. Registration of films is closed!</span><img className='picture' src={film} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture2')}><span className='accordionNumber'>2</span>The 75th edition will take place on April 3rd, 2022. Registration of films is closed!</li>
                     <li className='accordionItem accordionPicture' id='picture3'><span id='pictureText'>The Bui Films en route for the 2022 Knopes</span><img className='picture' src={buifilms} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture3')}><span className='accordionNumber'>3</span>The Bui Films en route for the 2022 Knopes</li>
                     <li className='accordionItem accordionPicture' id='picture4'><span id='pictureText'>"The Belmonts are vampires!" Terry Fromage's sudden and unfounded claim about the Family</span><img className='picture' src={kaigan} /></li>
                     <li className='accordionItem' onClick={()=>accordionFunction('picture4')}><span className='accordionNumber'>4</span>"The Belmonts are vampires!" Terry Fromage's sudden and unfounded claim about the Family</li>
                 </ul>
             </div>
         </div>
        </div>
    );
};

export default App;