// ! convert variables to an array of objects
// ! map the values to question_id in array of objects
// ! map the comments to the question_id in array of objects

function ShowRatings({ data }) {
  // Calculate Total Average CPS

  let avgRatings = [];
  // Question 2 Ratings
  let question2Ratings = [];
  let question2Sum = 0;
  let question2Avg = 0;
  // Question 3 Variables
  let question3Ratings = [];
  let question3Sum = 0;
  let question3Avg = 0;
  // Question 204 Variables
  let question204Ratings = [];
  let question204Sum = 0;
  let question204Avg = 0;
  // Question 44 Variables
  let question44Ratings = [];
  let question44Sum = 0;
  let question44Avg = 0;

  data.data.map((replies) => {
    replies.reply_questions.map((reply) => {
      if (reply.question_id === 2) {
        question2Ratings.push(reply.value);
        question2Sum += reply.value;
        question2Avg = question2Sum / question2Ratings.length;
      } else if (reply.question_id === 3) {
        question3Ratings.push(reply.value);
        question3Sum += reply.value;
        question3Avg = question3Sum / question3Ratings.length;
      } else if (reply.question_id === 204) {
        question204Ratings.push(reply.value);
        question204Sum += reply.value;
        question204Avg = question204Sum / question204Ratings.length;
      } else if (reply.question_id === 44) {
        question44Ratings.push(reply.value);
        question44Sum += reply.value;
        question44Avg = question44Sum / question44Ratings.length;
      }
    });
  });

  avgRatings.push(
    Math.round(question2Avg * 10) / 10,
    Math.round(question3Avg * 10) / 10,
    Math.round(question204Avg * 10) / 10,
    Math.round(question44Avg * 10) / 10
  );

  let highestToLowestRatings = avgRatings.sort((a, b) => b - a);
  let lowestToHighestRatings = avgRatings.sort((a, b) => a - b);

  return (
    <div className="flex flex-direction-row flex-center flex-wrap m-top-20">
      <div className="card shadow m-10 b-radius-4">
        <div className="flex flex-direction-col h-60 m-10">
          <div className="flex flex-direction-row">
            <div className="flex flex-center">
              <img
                className="icon"
                alt="Strengths"
                src="http://business.stagingtalenthub.com/images/svg/reward.svg"
              />
            </div>
            <div className="flex flex-direction-col text-align-left">
              <h3>Strengths</h3>
              <p>Your three best-performing questions</p>
            </div>
          </div>
          <div className="flex flex-center m-top-20">
            <div className="flex flex-direction-col w-33">
              <h3>Question</h3>
              <p>Question 1</p>
              <p>Question 2</p>
              <p>Question 3</p>
              <p>Question 4</p>
            </div>
            <div className="flex flex-direction-col w-33">
              <h3>Score</h3>
              {highestToLowestRatings.map((value) => {
                return <div key={value}>☆{value}</div>;
              })}
            </div>
            <div className="flex flex-direction-col w-33">
              <h3>Comments</h3>
              <a href="#">💬 + 2</a>
              <a href="#">💬 + 0</a>
              <a href="#">💬 + 5</a>
              <a href="#">💬 + 6</a>
            </div>
          </div>
        </div>
      </div>

      {/* IMPROVEMENTS */}
      <div className="card shadow m-10 b-radius-4">
        <div className="flex flex-direction-col h-60 m-10">
          <div className="flex flex-direction-row">
            <div className="flex flex-center">
              <img
                className="icon"
                alt="Improvement Areas"
                src="http://business.stagingtalenthub.com/images/svg/trend-down.svg"
              />
            </div>
            <div className="flex flex-direction-col text-align-left">
              <h3>Areas for improvement</h3>
              <p>Your three worst-performing questions</p>
            </div>
          </div>
          <div className="flex flex-center m-top-20">
            <div className="flex flex-direction-col w-33">
              <h3>Question</h3>
              <p>Question 1</p>
              <p>Question 2</p>
              <p>Question 3</p>
              <p>Question 4</p>
            </div>
            <div className="flex flex-direction-col w-33">
              <h3>Score</h3>
              {lowestToHighestRatings.map((value) => {
                return <div key={value}>☆{value}</div>;
              })}
            </div>
            <div className="flex flex-direction-col w-33">
              <h3>Comments</h3>
              <a href="#">💬 + 2</a>
              <a href="#">💬 + 0</a>
              <a href="#">💬 + 5</a>
              <a href="#">💬 + 6</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRatings;
