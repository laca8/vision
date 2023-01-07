const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    firstName: {
      type: String,
      required: [true, "first name required"],
    },
    lastName: {
      type: String,
      required: [true, "last name required"],
    },
    birthday: {
      type: String,
      required: [true, "birthday required"],
    },
    video: {
      type: String,
      required: [true, "video required"],
    },
    position: {
      type: String,
      required: [true, "position required"],
    },
    game: {
      type: String,
      required: [true, "game required"],
    },
    city: {
      type: String,
      required: [true, "city required"],
    },
    phone: {
      type: String,
      required: [true, "phone required"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("player", playerSchema);
