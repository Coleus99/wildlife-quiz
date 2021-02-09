const Question = (props) => {
  return (
    <div class={`question${props.active === true ? ' active' : ''}`} id={props.number}>
      <p>{props.text}</p>
      <div>
        <input type="radio" name={`question${props.number}`} id={`${props.number}_1`} data-value={props.answer1score} />
        <label for={`${props.number}_1`}>{props.answer1}</label>
        <input type="radio" name={`question${props.number}`} id={`${props.number}_2`} data-value={props.answer2score} />
        <label for={`${props.number}_2`}>{props.answer2}</label>
        <input type="radio" name={`question${props.number}`} id={`${props.number}_3`} data-value={props.answer3score} />
        <label for={`${props.number}_3`}>{props.answer3}</label>
      </div>
    </div>
  );
}

export default Question;