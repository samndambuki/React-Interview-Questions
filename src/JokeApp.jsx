import { useEffect, useState } from "react";

const JokeApp = () => {
  const [joke, setJoke] = useState("");
  const fetchJoke = async () => {
    //fetch makes a request to the API
    //await waits for the response before moving to the next line
    //response stores data from the API
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    //we convert the response to json
    //.json() - converts response from text to js object
    const data = await response.json();
    console.log(data);
    setJoke(`${data.setup}-${data.punchline}`);
  };
  useEffect(() => {
    //runs automatically when page loads
    fetchJoke();
  }, []);
  return (
    <>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get another joke</button>
    </>
  );
};

export default JokeApp;
