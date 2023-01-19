import {createContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: () => {
    },
    removeFavorites: () => {
    },
    itemIsFavorites: () => {
    },
});

export function FavoritesContextProvider(props) {
    const [useFavorites, setUseFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup) => setUseFavorites(prevUserFavorites =>
        prevUserFavorites.concat(favoriteMeetup)
    )
    const removeFavoritesHandler = (meetupId) =>
        setUseFavorites(prevState => prevState.filter((d) => d.id !== meetupId))
    const itemIsFavoritesHandler = (meetupId) => useFavorites.some(d => d.id === meetupId)

    const context = {
        favorites: useFavorites,
        totalFavorites: useFavorites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        itemIsFavorites: itemIsFavoritesHandler,
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;