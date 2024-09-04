import React from "react";

class Details extends React.Component{
    render(){
        return(
            <div>  <div className="container">
            <div className="row heading">
                Breakfast places in Mumbai
            </div>
            <div className="row">
                <div className="col-3 col-sm-12 col-md-4 col-lg-3">
                    <div className="filterpanel">
                    <div className="filterPanelHeading">
                        Filters
                    </div>
                    <div className="filterPanelSubHeading">
                        Search Location
                    </div>
                    <select className="filterPanelSubHeading">
                        <option disabled selected>Select Location</option>
                        <option value="DEL">Delhi</option>
                        <option value="MUM">Mumbai</option>
                        <option value="KOL">Kolkata</option>
                        <option value="CHE">Chennai</option>
                    </select>
                    <div className="filterPanelSubHeading">
                        Cuisine
                    </div>
                    <input type="checkbox" className="cuisinOption">
                        <label>North Indian</label>
                   </input>
                   <br/>
                   <input type="checkbox" className="cuisinOption">
                   <label>South Indian</label>
                   </input>
                   <br/>
                   <input type="checkbox" className="cuisinOption">
                   <label>Chinese</label>
                   </input>
                   <br/>
                   <input type="checkbox" className="cuisinOption">
                   <label>Fast Food</label>
                   </input>
                   <br/>
                   <input type="checkbox" className="cuisinOption">
                   <label>Street Food</label>
                   </input>
                   <br/>
                   <input type="checkbox" className="cuisinOption">
                   <label>Chat items</label>
                   </input>
                  
                   <div className="filterPanelSubHeading">
                        Cost for two
                   </div>
                   <input type="radio" className="cuisinOption" name="cost">
                   <label>Less than &#8377; 500</label>
                   </input>
                   <br/>
                   <input type="radio" className="cuisinOption" name="cost">
                   <label>500 to &#8377; 1000</label>
                   </input>
                   <br/>
                   <input type="radio" className="cuisinOption" name="cost">
                   <label>1000 to &#8377; 1500</label>
                   </input>
                   <br/>
                   <input type="radio" className="cuisinOption" name="cost">
                   <label>1500 to &#8377; 2000</label>
                   </input>
                   <br/>
                   <input type="radio" className="cuisinOption" name="cost">
                   <label>&#8377; 2000+</label>
                   </input>
                   <br/>
                   <div className="filterPanelHeading">
                    Sort
                   </div>
                   <input type="radio" className="cuisinOption" name="price">
                   <label>Price low to high</label>
                   </input>
                   <br/>
                   <input type="radio" className="cuisinOption" name="price">
                   <label>Price high to low</label>
                   </input>
                </div></div>
            
       <div className="col-9 col-sm-12 col-md-8 col-lg-9">
            <div className="resultsPanel">
                <div className="row upperSection">
                <div className="col-2">
                    <img src="./images/breakfast.jpeg" className="resultsImage" alt="Image not found"/>
                </div>
                <div className="col-10">
                    <div className="resultsHeading">The Big Chill Cake</div>
                    <div className="resultsSubHeading">FORT</div>
                    <div className="resultsAddress">Shop 1,plot d,Samruddhi,Mumbai</div>
    
                </div>
               </div>
                <hr/>
                <div className="row lowerSection">
                    <div className="col-2">
                        <div className="resultsAddress">CUISINES:</div>
                        <div className="resultsAddress">COST FOR TWO</div>
                    </div>
                    <div className="col-10">
                        <div className="resultsSubHeading">Bakery:</div>
                        <div className="resultsHeading">&#8377;700</div>
                    </div>
                </div>
            </div>
            <div className="resultsPanel">
                <div className="row upperSection">
                <div className="col-2">
                    <img src="./images/breakfast.jpeg" className="resultsImage" alt="Image not found"/>
                </div>
                <div className="col-10">
                    <div className="resultsHeading">The Big Chill Cake</div>
                    <div className="resultsSubHeading">FORT</div>
                    <div className="resultsAddress">Shop 1,plot d,Samruddhi,Mumbai</div>
    
                </div>
               </div>
                <hr/>
                <div className="row lowerSection">
                    <div className="col-2">
                        <div className="resultsAddress">CUISINES:</div>
                        <div className="resultsAddress">COST FOR TWO</div>
                    </div>
                    <div className="col-10">
                        <div className="resultsSubHeading">Bakery</div>
                        <div className="resultsHeading">&#8377;700</div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <div className="paginationButton"> 0</div>
                <div className="paginationButton">1</div>
                <div className="paginationButton">2</div>
                <div className="paginationButton">3</div>
                <div className="paginationButton">4</div>
                <div className="paginationButton">5</div>
                <div className="paginationButton">6</div>
            </div>
    
    </div>
    </div></div>
        </div> 
        )
    }
}
export default Details;