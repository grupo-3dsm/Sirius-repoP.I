import { Route, BrowserRouter } from "react-router-dom";
import MapFeatures from '../pages/HomeMap';
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { UserLogin } path="/" exact/>
            <Route component = { UserRegister } path="/register" />
            <Route component = { MapFeatures } path="/map" />
        </BrowserRouter>
    )
}
 
export default Routes;  