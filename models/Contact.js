const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    companyname: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      match: [/^\d{10}$/, "Please enter a 10-digit phone number"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;

// const SocialLinksSchema = mongoose.Schema({
//   twitter: { type: String },
//   facebook: { type: String },
//   instagram: { type: String },
//   linkedin: { type: String },
//   whatsapp: { type: String },
// });

// const socialLinks = mongoose.model("Sociallinks", SocialLinksSchema);
// module.exports = socialLinks;
