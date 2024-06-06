require("dotenv").config();
let PORT = process.env.PORT || 5090;
let express = require("express");
let app = express();
app.use(express.json());
let booklist = [];
// post
app.post("/add", (req, res) => {
  let { id, name, price } = req.body;
  let book = { id, name, price };
  booklist.push(book);
  res.status(201).send(book);
});
// get
app.get("/get", (req, res) => {
  res.status(200).send(booklist);
});
// get Single
app.get("/get/:id", (req, res) => {
  let singleData = booklist.find((book) => book?.id === req.params.id);
  if (singleData) {
    res.send(singleData);
  } else {
    console.log("Book not found");
  }
});
// put
app.put("/update/:id", (req, res) => {
  let { name, price } = req.body;
  let indexToEdit = booklist.findIndex((book) => book?.id === req?.params?.id);

  if (indexToEdit !== -1) {
    booklist[indexToEdit] = {
      ...booklist[indexToEdit],
      name: name ? name : booklist[indexToEdit]?.name,
      price: price ? price : booklist[indexToEdit]?.price,
    };
  }
  res.send(booklist[indexToEdit]);
});
// delete
app.delete("/delete/:id", (req, res) => {
  let indexToDelete = booklist.findIndex(
    (book) => book?.id === req?.params?.id
  );

  if (indexToDelete !== -1) {
    booklist.splice(indexToDelete, 1);
  }
  res.send(booklist);
});

app.listen(PORT, "localhost", () => {
  console.log(`app running here localhost:${PORT}`);
});
