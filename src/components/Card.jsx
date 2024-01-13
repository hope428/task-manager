import classes from "./Card.module.css"

export default function Card(){
    return (
        <div className={classes.card}>
            <span>Low Priority</span>
            <p>Company website redesign.</p>
            <span></span>
        </div>
    )
}