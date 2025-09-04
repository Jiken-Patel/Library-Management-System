const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

dotenv.config();
const app = express();
app.use(bodyParser.json());

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/books", require("./routes/bookRoutes"));
// app.use("/api/borrow", require("./routes/borrowRoutes"));
// app.use("/api/fines", require("./routes/fineRoutes"));

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Database synced");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
