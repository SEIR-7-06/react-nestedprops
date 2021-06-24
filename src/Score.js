export default function Scores(props) {
    return (
        <div>
            {props.scores.map((score) => {
                return (
                    <>
                        <h3>{score.date}</h3>
                        <p>{score.score}</p>
                    </>
                )
            })}
        </div>
    )
}