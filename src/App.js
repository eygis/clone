import React from 'react';
import './App.css'
import cross from '/src/sponsors/cross.png'
import bmw from '/src/sponsors/bmwLogo150.jpg'
import adler from '/src/sponsors/adlerLogo150.jpg'
import rail from '/src/sponsors/britishRailwaysLogo150.jpg'

const App = () => {
    
    return (
        <div id='wrapper'>
         <div id='headerArea'>
             <div id='topArea'>
             <div id='logoArea'>
            <p id='logo' />
            <h3 id='topText' class='logoText'>FESTIVAL DE BUI</h3>
            <h5 id='bottomText' class='logoText'>April 3, 2022</h5>
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
                 <li className='hoverGold'>2022 FESTIVAL</li>
                 <li className='hoverGold'>FESTIVAL DE BUI</li>
                 <li className='hoverGold'>BUI COURT MÉTRAGE</li>
                 <li className='hoverGold'>JULIUS CINEMA</li>
                 <li className='hoverGold'>MARSH DU FILM</li>
                 <li className='hoverGold'>MARSH DU FILM ONLINE</li>
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
                     <ul id='newsList'> 
                        <li className='hoverGold navListItem'>DAY BY DAY</li>
                        <li className='hoverGold navListItem'>FESTIVAL NEWS</li>
                     </ul>
                     <li className='navItem'>2022 FESTIVAL</li>
                     <li className='navItem'>WHO WE ARE</li>
                     <li className='navItem'>75 EDITIONS</li>
                     <li className='navItem'>MEDIA</li>
                     <li className='navItem'>TAKE PART</li>
                     <li className='navItem'>PRESS AREA</li>
                 </ul>
                 <div id='search'>
                 <i class="fas fa-search icon"></i>SEARCH
                 </div>
             </nav>
         </div>
        </div>
    );
};

export default App;