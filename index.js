import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.static("public")
);


app.get("/", async (req, res) => {
  const joke =  await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart')
  res.render('index', { joke : joke.data.setup , delivery: joke.data.delivery});

}

);

app.listen(PORT, () => {
    console.log(`Joke API is running on port ${PORT}`);
}
);