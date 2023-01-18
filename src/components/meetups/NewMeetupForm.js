import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"
import {useRef} from "react";

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandle = (event) => {
        event.preventDefault();

        const meetupData = {
            title : titleInputRef.current.value,
            image : imageInputRef.current.value,
            address : addressInputRef.current.value,
            description : descriptionInputRef.current.value,
        };

        props.onAddMeetup(meetupData);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandle}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input ref={titleInputRef} type="text" required id='title'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input ref={imageInputRef} type="url" required id='image'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input ref={addressInputRef} type="text" required id='address'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea ref={descriptionInputRef} id="description" required rows="5"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )

}

export default NewMeetupForm;