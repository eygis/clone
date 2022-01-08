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
             <div id='logoArea'>
            <p id='logo' />
            <h2 id='top' class='logoText'>Bui Film Festival</h2>
            <h4 id='bottom' class='logoText'>April 3, 2022</h4>
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
                 THE BUI FILM FESTIVAL WORLD
                 </span>
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
        </div>
    );
};

export default App;