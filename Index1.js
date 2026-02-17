const express = require("express")
const app = express();
app.use(express.json());

let users = [
    {id:1, name: "Rohith", age: 21},
    {id: 2, nmae: "Neha", age: 19},
];

app.post("/users",(req,res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    user.push(newUser);
    res.send(newUser);
});
app.get("/users", (req, res) => {
  res.send(users);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).send("User not found");

  res.send(user);
});
// PUT /users/:id
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  user.age = req.body.age;

  res.send(user);
});
// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send("User deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



app.listen(9000,()=>console.log("API Started listening..."));
