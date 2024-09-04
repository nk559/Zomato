import React from 'react'
import Wallpaper from '../Components/Wallpaper'
import Quiksearcher from '../Components/Quicksearcher'
import Filter from '../Components/Filter'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Wallpaper/>
                <Quiksearcher/>
            </div>
        )
    }
}
export default Home;