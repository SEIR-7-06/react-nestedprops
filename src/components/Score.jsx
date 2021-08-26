function Score(props) {
  console.log('props in Score =>', props.scoreInfo);

  return (
    <div>
      <p>Score: {props.scoreInfo.score}</p>
      <p>Date: {props.scoreInfo.date}</p>
      <hr />
    </div>
  )
}

export default Score;