import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetupPage() {
    const history = useHistory();
    const addMeetupHandler = (meetupData) => {
        fetch('https://react-getting-start-18e6c-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => {
            history.replace('/');
        });
    };
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;