const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
const app = express();

mongoose.connect("mongodb://localhost/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  username: String,
  password: String,
});

const JWT_SECRET = "my_secret";

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send("Usuario registrado con éxito.");
  } catch (error) {
    res.status(500).send("Error al registrar el usuario.");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send("Usuario no encontrado.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } else {
      res.status(401).send("Credenciales incorrectas.");
    }
  } catch (error) {
    res.status(500).send("Error al iniciar sesión.");
  }
});

app.post("/logout", (req, res) => {
  res.status(200).send("Cierre de sesión exitoso.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

module.exports = app;