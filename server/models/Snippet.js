const { default: mongoose } = require("mongoose");

const snipetSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "white",
  },
  padding: {
    type: Number,
    default: 20,
  },
  lines: {
    type: Boolean,
    default: false,
  },
  code: {
    type: String,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Snippet = mongoose.model("Snippet", snipetSchema);

module.exports = Snippet;
