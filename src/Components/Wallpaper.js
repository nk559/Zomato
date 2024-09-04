import React from 'react'
import '../Styles/Wallpaper.css'
import Home from '../Assets/Home.jpeg'
//import Header from './Header'
// import search from '../Assets/search-icon.png'
class Wallpaper extends React.Component{
    render(){
        return(
            <div className=''>
                 <img src={Home} alt="Img not found" className="homeImage" />
    <div className="topSection container">
         <div className="logo">e!</div>
         <div className="headerText">Find the restaurants,cafes, and bars</div>
         <div className="searchingOptions">
            <span>
                <select className="locationBox">
                    <option selected disabled>----Select City-----</option>
                    <option value="DEL">Delhi</option>
                    <option value="MUM">Mumbai</option>
                    <option value="CHN">Chennai</option>
                    <option value="BAN">Bangalore</option>
                    <option value="KOL">Kolkata</option>
                </select>
            </span>
            <span className="searchBox">
                    <input type="text" className="searchInput" placeholder="Search for restaurants"/>
                
            </span>
         </div>
    </div>
            </div>
        )
    }

    
}
export default Wallpaper;