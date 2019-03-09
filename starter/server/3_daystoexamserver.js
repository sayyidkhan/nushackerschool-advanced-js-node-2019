// You get to write some JS!

// TODO: Set up Express and axios

const callback = async (req, res, next) => {
  try {
    // TODO: Use axios to fetch the specified module's data
    // TODO: Retrieve the exam date from the fetched data
    // TODO: Calculate the countdown (hint: you can use packages from NPM, e.g. date-fns)
    // TODO: Respond with the countdown result
  } catch (e) {
    // Pass on any errors to be handled correctly by Express
    next(e);
  }
};

// TODO: Set up a route for Express
// Support routes like these: /exam/CS1231 and /exam/ACC1701X

// TODO: Start the Express server
