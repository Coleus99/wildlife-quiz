import React from 'react'
import { Link } from 'react-router-dom'

const Question = (props) => {
  return (
    <div className={`question${props.active === true ? ' active' : ''}`} id={props.number}>
      <p>{props.text}</p>
      <div>
        <input type="radio" name={`question${props.number}`} id={`q${props.number}_1`} value={props.answer1score} />
        <label htmlFor={`q${props.number}_1`}>{props.answer1}</label>
        <input type="radio" name={`question${props.number}`} id={`q${props.number}_2`} value={props.answer2score} />
        <label htmlFor={`q${props.number}_2`}>{props.answer2}</label>
        <input type="radio" name={`question${props.number}`} id={`q${props.number}_3`} value={props.answer3score} />
        <label htmlFor={`q${props.number}_3`}>{props.answer3}</label>
      </div>
      <div className="actions">
        <div>
          {props.number>1 ? <button className="prev" onClick={props.prevQuestion}>Previous</button> : null}
        </div>
        <div>
          {props.number<5 ? <button className="next" onClick={props.nextQuestion}>Next</button> : null}
          {props.number==5 ? <Link to='/wildlife-quiz/results'><button className="submit">Submit</button></Link> : null}
        </div>
    </div>
  </div>
  );
}

export default Question;