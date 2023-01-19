import classes from "./MeetupItems.module.css"
import Card from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItems(props) {

    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorites = favoriteCtx.itemIsFavorites(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorites) {
            favoriteCtx.removeFavorites(props.id)
            return;
        }
        favoriteCtx.addFavorites({...props})

        console.log(itemIsFavorites)
        console.log(favoriteCtx)

    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}><img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button
                        onClick={toggleFavoriteStatusHandler}>{itemIsFavorites ? 'Remove from Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>


    )
}

export default MeetupItems;