import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage"
import AllBeers from "./components/AllBeers"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import { useLocation } from "react-router-dom"
import App from "./App"
import Header from "./components/Header"
import BeerDetails from "./components/BeerDetails"

const Router = () => {

const location = useLocation()

return(
 <>

{location.pathname !== "/" ? <Header />:null} 


<Routes>


<Route path="/" element={<Homepage />} />

 
    <Route path="/allbeers" element={<AllBeers />} />
    <Route path="/randombeer" element={<RandomBeer />} />
    <Route path="/new-beer" element={<NewBeer />} />
    <Route path="/allbeers/:beerid" element={<BeerDetails />} />



</Routes>
</>
)
}

export default Router