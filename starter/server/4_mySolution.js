// You get to write some JS!

// TODO: Set up Express and axios
const axios = require("axios");
const { differenceInDays } = require("date-fns");
const express = require("express");
const app = express();
const port = 3000; // Change this if necessary

const callback = async (req, res, next) => {
  // TODO: Use axios to fetch the specified module's data
  const { modcode } = req.params;
  try {
    const modRequestResult = await axios.get(
      `https://api.nusmods.com/2018-2019/2/modules/${modcode}.json`
    );

    // TODO: Retrieve the exam date from the fetched data
    const examDate = modRequestResult.data.ExamDate;

    // TODO: Calculate the countdown (hint: you can use packages from NPM, e.g. date-fns)
    const days = differenceInDays(examDate, new Date());

    // TODO: Respond with the countdown result
    res.send({ days });
  } catch (e) {
    next(e);
  }
};

// TODO: Set up a route for Express
// Support routes like these: /exam/CS1231 and /exam/ACC1701X
app.get("/exam/:modcode", callback);

// TODO: Start the Express server
app.listen(port, () => console.log(`Listening ${port}`));