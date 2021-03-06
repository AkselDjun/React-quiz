import React from 'react'
import classes from "./AnswersList.module.css"
import AnswersItem from "./AnswerItem/AnswerItem"

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswersItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
            <li></li>
        </ul>
    )
}

export default AnswersList