const { User } = require("../models");
const formidable = require("formidable");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.session());

// Display a listing of the resource.
async function index(req, res) {
  const usuarios = await User.findAll();
  await res.json(usuarios);
}

// Display the specified resource.

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
