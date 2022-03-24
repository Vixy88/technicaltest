// I was playing around with being able to display cards containing the individual responses

import React from "react";

function ResponseListIndex({ data }) {
  return (
    <div>
      <h2 className="m-10">List of Responses</h2>
      <div className="flex flex-direction-row flex-center flex-wrap">
        {/* Use map function to get the array of candidates */}
        {data.data.map((response) => {
          return (
            <div className="response-card shadow m-10" key={response.id}>
              {/* Use 2nd map function to get the name and job title of candidate */}
              {response.custom_variables.map((reply) => {
                return <h3 key={reply.custom_variable_id}>{reply.value}</h3>;
              })}
              {/* Use 3rd map function to get the question id and rating of the candidate  */}
              {response.reply_questions.map((data) => {
                return (
                  <div key={data.question_id} id={data.question_id}>
                    <h4>Question ID: {data.question_id}</h4>
                    <span>Rating: {data.value}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResponseListIndex;
