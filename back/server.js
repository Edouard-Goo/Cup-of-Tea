import express from "express";
import session from "express-session";
import { connectDB } from "./config/database.js";
import router from "./routes/router.js";
import cors from "cors";
import * as Sentry from "@sentry/node";
const app = express();

connectDB;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
// Initialisation de SESSION  use.app(session({}))
app.use(
  session({
    name: "user", // le nom qui apparaitera dans les coockies
    secret: "neleditàpersonne",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // a mettre en true chez l'hebergeur/ en https
      maxAge: 1000 * 60, // une minute     3_600_000 pour 1H on peut léecrire comme ça
    },
  })
);



// Mon router
app.use(router);

// Sentry.init({ dsn: "https://<key>@sentry.io/<project>" });

// // The request handler must be the first middleware on the app
// app.use(Sentry.Handlers.requestHandler());

// // All controllers should live here
// app.get("/", function rootHandler(req, res) {
//   res.end("Hello world!");
// });

// // The error handler must be before any other error middleware and after all controllers
// app.use(Sentry.Handlers.errorHandler());

// // Optional fallthrough error handler
// app.use(function onError(err, req, res, next) {
//   // The error id is attached to `res.sentry` to be returned
//   // and optionally displayed to the user for support.
//   res.statusCode = 500;
//   res.end(res.sentry + " ");
// });

app.listen(7002, () => {
  console.log("Le serveur est exécuté: http://localhost:7002");
});
