import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["POST", "GET"],
      credentials: true,
    })
  );

app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup",
  });

  app.post("/", (req, res) => {
    const sql = "SELECT * FROM userdetails WHERE email = ? and password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.json({ Message: "server side error" });
      if (data.length > 0) {
        const name = data[0].name;
        console.log("hello", name);
        const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
          expiresIn: "1d",
        });
        res.cookie("token", token);
        return res.json({ Status: "Success" });
      } else {
        return res.json({ Message: "No Record Existed" });
      }
    });
  });


app.listen(8081, () => {
    console.log("Running....")
})