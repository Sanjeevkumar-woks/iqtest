import React, { useState } from "react";
import Button from "@mui/material/Button";
import questions from "./questions.json";
import { useNavigate } from "react-router-dom";

export default function Testpage() {
  const [count, Setcount] = useState(0);
  const [selected, Setselected] = useState();
  const [answerselected, Setanswerselected] = useState([]);
  const navigate = useNavigate();

  const handelnext = () => {
    if (count !== questions.length - 1) {
      Setcount(count + 1);
    } else {
      navigate("/result");
    }
  };

  const handelanswer = (id) => {
    Setanswerselected(...answerselected, { count: id });
    console.log(answerselected);
    return;
  };
  return (
    <>
      <div className="question_head">
        <p>
          <span>{count}</span>/{questions.length}
        </p>
        <a href="/" className="exit-btn">
          ❌
        </a>
      </div>
      <div className="question_container">
        <img
          className="question_img"
          src={questions[count].url}
          alt="question_img"
        />
        <h4 className="question_title">
          1.
          <span className="question_text">
            Which shape should be in the rightmost cell with a question mark?
          </span>
        </h4>
        <div className="answer_list">
          {questions[count].answer_urls.map((answer, id) => (
            <img
              key={id}
              className="answer_img"
              onClick={handelnext}
              src={answer.answer_url}
              alt="answer_1_img"
            />
          ))}
        </div>
      </div>
      {count !== 0 ? (
        <Button variant="contained" onClick={() => Setcount(count - 1)}>
          ⬅
        </Button>
      ) : (
        ""
      )}
    </>
  );
}
