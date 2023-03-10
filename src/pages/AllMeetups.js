import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

function AllMeetups() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch('https://react-getting-start-18e6c-default-rtdb.firebaseio.com/meetups.json')
            const meetups = Object.entries(await data.json()).map(d => ({
                id: d[0],
                ...d[1]
            }));
            setLoadedMeetups(meetups)
            setIsLoading(false)
        })()
    }, []);


    return isLoading ?
        <section><p>Loading...</p></section>
        : (
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={loadedMeetups}/>
            </section>)
}

export default AllMeetups;