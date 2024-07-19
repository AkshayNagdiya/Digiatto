const mongoose = require("mongoose");

const ExpertconnectSchema = new mongoose.Schema(
  {
    technology: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: "Your Email is require",
      unique: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Please enter a 10-digit phone number"],
    },
    company: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      max: 100,
    },
  },
  { timestamps: true }
);

const Expertconnect = mongoose.model("Expert", ExpertconnectSchema);
module.exports = Expertconnect;
