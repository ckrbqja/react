import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
    const ctx = useContext(FavoritesContext);

    const context = ctx.totalFavorites === 0
        ? <p>You got no favorites yes. Start adding some?</p>
        : <MeetupList meetups={ctx.favorites}/>;

    return <section>
        <h1>My Favorites</h1>
        {context}
    </section>
}

export default Favorites;