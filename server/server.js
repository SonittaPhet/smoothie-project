const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

//MIDDLEWARE
app.use(cors());

//ROUTE CONSTANTS
const SmoothieListingRoute = require("./Routes/SmoothieListing/SmoothieListing");
const SmoothieFetchRoute = require("./Routes/SmoothieFetchRoutes/SmoothieFetch");
const ContactFormRoute = require("./Routes/EmailRoute/Email");

//API ENDPOINTS
app.use(SmoothieListingRoute);
app.use(SmoothieFetchRoute);
app.use(ContactFormRoute);

//Setting up for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}

//SERVER'S ENTRY POINT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});