import AllMeetups from "./pages/AllMeetups";
import {Route} from "react-router-dom";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/Layout/MainNavigation";

function App() {
    return <div>
        <MainNavigation/>
        <switch>
            <Route path='/' exact>
                <AllMeetups/>
            </Route>
            <Route path='/new-meetup'>
                <NewMeetup/>
            </Route>
            <Route path='/favorites'>
                <Favorites/>
            </Route>
        </switch>
    </div>
}

export default App;
