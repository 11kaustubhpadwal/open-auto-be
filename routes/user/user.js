const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.post("/", async (req, res) => {
  const { fullName, email } = req.body;

  try {
    let user = new User({
      fullName,
      email,
    });
    await user.save();
    res.status(400).json({ msg: "Thank you." });
  } catch (error) {
    res.status(400).json({ msg: "Failed to submit. Please try again." });
  }
});

module.exports = router;
