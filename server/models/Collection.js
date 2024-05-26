const mongoose = require("mongoose");
const collectionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  snippets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Snippet",
    },
  ],
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
