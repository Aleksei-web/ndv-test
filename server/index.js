const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

const user = {
  email: "aleksei@user.com",
  password: "userpass",
};

let contacts = [];

app.use(cors());
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (user.email === email && user.password === password) {
    res.send(user.email);
  } else {
    res.status(400).send("Неверные данные");
  }
});

app.get("/api/contacts", (req, res) => {
  res.send(contacts);
});

app.post("/api/contact", (req, res) => {
  const { name, phone } = req.body;
  const id = uuidv4();
  contacts.push({ id, name, phone });
  res.send({ id, name, phone });
});

app.delete("/api/contact/:id", (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((el) => el.id !== id);
  res.send(id);
});

app.put("/api/contact", (req, res) => {});

app.listen(3001, () => {
  console.log("Server running on PORT 3001");
});
