import Score from './Score'

export default function Student(props) {
    return (
        <div>
            <h2>{props.student.name}</h2>
            <p>{props.student.bio}</p>
            <Score scores={props.student.scores} />
            <p> ---- </p>
        </div>
    )
}