// ! Fetch Question API
// ! Match Question API ID's with the response API question_id

import "./App.css";
import React from "react";
import ShowRatings from "./components/RatingCards";
import CPSChart from "./components/CPSChart";
import axios from "axios";
import config from "./config";
import ResponseListIndex from "./components/ResponseList";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://business.stagingtalenthub.com/api/measurements/ab8b76b28aeb494992c47466fea7e49e/replies/bulk",
      headers: {
        Authorization: config.apiKey,
      },
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null; // if the data is not loading then respond with null to prevent it breaking

  return (
    <div className="App full-width">
      <div>
        <h1>Hello Talenthub.io</h1>
        <div className="m-10 shadow b-radius-4">
          <CPSChart />
        </div>
        <div>
          <ShowRatings data={data} />
        </div>
        <div>
          <ResponseListIndex data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
