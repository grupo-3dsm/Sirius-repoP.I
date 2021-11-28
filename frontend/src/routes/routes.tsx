import { Route, BrowserRouter } from "react-router-dom";
import CarouselSat from "../pages/carouselResults/carouselResults";
import MapFeatures from '../pages/HomeMap/menuMap';
import MenuLogout from "../pages/MenuLogout/MenuLogout";
import SearchPage from "../pages/Search/PageSearch";
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { UserLogin } path="/" exact/>
            <Route component = { UserRegister } path="/register" />
            <Route component = { MapFeatures } path="/map" />
            <Route component = { CarouselSat } path="/results" />
            <Route component = { SearchPage } path="/search" />
            <Route component = { MenuLogout } path="/exit" />
        </BrowserRouter>
    )
}
 
export default Routes;  