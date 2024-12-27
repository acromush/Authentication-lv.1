import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: <database>,
  password: <password>,
  port: <port>,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs"); 
});

app.get("/login", (req, res) => {
  res.render("login.ejs",{
    header:"LOGIN",
    header2:":)"
  });
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await db.query(`
    INSERT INTO users (email, password)
    VALUES ('${username}' , '${password}');
    `);
    res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const users = await db.query(`SELECT email FROM users WHERE password = '${password}'`);
      if(users.rows.length > 0){
        if(users.rows[0].email === username){
          res.render("secrets.ejs")
        }
        else{
          res.render("login.ejs",{
            header:"INCORRECT PASSWORD OR USERNAME",
            header2:"TRY AGAIN :("
          });
        }
      }
      else{
        res.render("login.ejs",{
          header:"INCORRECT PASSWORD OR USERNAME",
          header2:"TRY AGAIN :("
        });
      }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
