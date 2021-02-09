const Question = (props) => {
  return (
    <div class={`question${props.active === true ? ' active' : ''}`} id={props.number}>
      <p>{props.text}</p>
      <div>
        <input type="radio" name={`question${props.number}`} id={`${props.number}_1`} value={props.answer1score} />
        <label for={`${props.number}_1`}>{props.answer1}</label>
        <input type="radio" name={`question${props.number}`} id={`${props.number}_2`} value={props.answer2score} />
        <label for={`${props.number}_2`}>{props.answer2}</label>
        <input type="radio" name={`question${props.number}`} id={`${props.number}_3`} value={props.answer3score} />
        <label for={`${props.number}_3`}>{props.answer3}</label>
      </div>
      <div className="actions">
        <div>
          {props.number>1 ? <button className="prev" onClick={props.prevQuestion}>Previous</button> : null}
        </div>
        <div>
          {props.number<5 ? <button className="next" onClick={props.nextQuestion}>Next</button> : null}
          {props.number==5 ? <button className="submit">Submit</button> : null}
        </div>
    </div>
  </div>
  );
}

export default Question;