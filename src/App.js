import AllMeetups from "./pages/AllMeetups";
import {Route} from "react-router-dom";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";

function App() {
    return(
    <Layout>
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
    </Layout>)
}

export default App;
