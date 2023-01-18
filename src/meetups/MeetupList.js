import classes from "./MeetupList.module.css";
import MeetupItems from "./MeetupItems";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(d =>
                <MeetupItems
                    key={d.id}
                    id={d.id}
                    image={d.image}
                    title={d.title}
                    address={d.address}
                    description={d.description}/>)
            }
        </ul>
    )
}

export default MeetupList;
