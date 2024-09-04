import React from "react";
import '../Styles/Quicksearcher.css'
import Breakfast from '../Assets/breakfast.jpeg'
import Dinner from '../Assets/Dinner.jpeg'
import Drink from '../Assets/drinks.jpeg'
import Lunch from '../Assets/lunch.jpeg'
import Snacks from '../Assets/snaks.jpeg'
class Quicksearcher extends React.Component{
    render(){
        return(
            <div className="bottomSection">
                 <h1 class="qs-heading">Quick Searches</h1>
        <h3 class="qs-subheading">Discover restaurants by type of meal</h3>
        <div class="qs-boxes-container row">
            <div  class="qs-box qs-box-contents col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <img class="qs-image" src={Breakfast}/>
                <h4 class="qs-item-heading ">Breakfast</h4>
                <p class="qs-item-description">Start your day with exclusive breakfast options</p>
            </div>
            <div  class="qs-box qs-box-contents  col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <img class="qs-image" src={Lunch}/>
                <h4 class="qs-item-heading">Lunch</h4>
                <p class="qs-item-description">Start your day with exclusive lunch options</p>
            </div>
            <div  class="qs-box qs-box-contents  col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <img class="qs-image" src={Snacks}/>
                <h4 class="qs-item-heading">Snacks</h4>
                <p class="qs-item-description">Start your day with exclusive snacks options</p>
            </div>
            <div  class="qs-box qs-box-contents  col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <img class="qs-image" src={Drink}/>
                <h4 class="qs-item-heading">Drinks</h4>
                <p class="qs-item-description">Start your day with exclusive drinks options</p>
            </div>
            <div  class="qs-box qs-box-contents  col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <img class="qs-image" src={Dinner}/>
                <h4 class="qs-item-heading">Dinner</h4>
                <p class="qs-item-description">Start your day with exclusive dinner options</p>
            </div>
            <div  class="qs-box qs-box-contents  col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <img class="qs-image" src={Drink}/>
                <h4 class="qs-item-heading">Drinks</h4>
                <p class="qs-item-description">Start your day with exclusive drinks options</p>
            </div>
        </div>
            </div>
        )
    }
}
export default Quicksearcher;