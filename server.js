const express = require("express");
const mongoose = require("mongoose");
const { route: procurementRoute } = require("./routes/procurementRoutes");
const { route: usersRoute } = require("./routes/userRoutes");
const { route: cashSalesRoute } = require("./routes/cashSales");
const { route: creditSalesRoute } = require("./routes/creditSales");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const basicAuth = require("express-basic-auth");

const app = express();
app.use(express.json());

// Swagger documentation
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "KGL API",
    version: "1.0.0",
    description: "This is KGL API Documentation",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};
// Swagger options
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

// Swagger authentication
const swaggerAuth = basicAuth({
  users: { admin: "123456" },
  challenge: true,
  realm: "Swagger Documentation"
});

// Swagger specs
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerAuth, swaggerUi.serve, swaggerUi.setup(specs));

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Database connection
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfuly");
    //   Server Connection
    app.listen(
      PORT,
      ("/",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Server Running Successfuly on Port ${PORT}`);
        }
      }),
    );
  })
  .catch((err) => console.log(err));

// Routes
app.use(procurementRoute);
app.use(usersRoute);
app.use(cashSalesRoute);
app.use(creditSalesRoute);
