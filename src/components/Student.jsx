import Score from './Score';

function Student(props) {
  console.log(props.studentObj.scores);

  const scores = props.studentObj.scores;

  // Loop through the array of scores for one student
  // and creating an array of Score components
  // output => [<Score />, <Score />, <Score />]
  const scoreComps = scores.map((scoreInfo) => {
    return <Score scoreInfo={scoreInfo} />;
  })

  return (
    <div>
      <h2>{props.studentObj.name}</h2>
      <p>{props.studentObj.bio}</p>
      <ul>
        { scoreComps }
      </ul>
    </div>
  )
}

export default Student;