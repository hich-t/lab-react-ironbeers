import React from "react"
import allbeers from "../assets/beers.png"
import randombeer from "../assets/random-beer.png"
import newbeer from "../assets/new-beer.png"
import {Link} from "react-router-dom"

const Homepage = () => {

return(
    
    <div className='homepage'>
 
 <div>
        <Link to="/allbeers">
        <img className="homepageimg"src={allbeers} alt='beers' />
        </Link>
        <Link to="/allbeers">
        <h1 className="homepagetitles">All Beers</h1>
        </Link>

        <p className="homepagetexts">Get ready for some brewy business ! <br/>
        Here are all the beers available at IronBeers</p>
</div>


<div>
        <Link to="/randombeer">
        <img className="homepageimg"src={randombeer} alt='beers' />
        </Link>
        <Link to="/randombeer">
        <h1 className="homepagetitles">Random Beer</h1>
        </Link>
        <p className="homepagetexts">Don't know what to choose ? <br/>
        Let the power of the brew come to you. one random beer coming up !</p>
</div>

<div>
        <Link to="/new-beer">
        <img className="homepageimg"src={newbeer} alt='beers' />
        </Link>
        <Link to="/new-beer">
        <h1 className="homepagetitles">New Beer</h1>
        </Link>
        <p className="homepagetexts">You cheeky weasel !<br/>
        You know of some beer that we don't ? add it at once ! </p>
</div>




    </div>

)
}

export default Homepage