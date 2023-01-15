import React from "react"


const NewBeer = () => {

    return(

        <div>

        <form className="newbeerframe">
        <label>Name</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <label>Tagline</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <label>Description</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <label>First Brewed</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <label>Brewers Tips</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <label>Attenuation Level</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <label>Contributed By</label>
        <input type="text"  onChange={(e)=> e.target.value}/>
        <button type="submit">Add New Beer</button>
        </form>

        </div>
    )
    }
    
    export default NewBeer