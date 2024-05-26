const Snippet = require("../models/Snippet");
const Collection = require("../models/Collection");
const createSnippetController = async (req, res) => {
  const { _id, title, color, padding, lines, code } = req.body;

  try {
    const existingCollection = await Collection.findOne({
      user: _id,
    });

    if (!existingCollection) {
      return res.status(404).json({
        msg: "Please login first",
      });
    } else {
      const newSnippet = await Snippet.create({
        user: _id,
        title,
        color,
        padding,
        lines,
        code,
      });

      existingCollection.snippets.push(newSnippet._id);
      const successOp = await existingCollection.save();

      if (successOp) {
        res.json({
          msg: "Snippet saved successfully",
          snippet: newSnippet,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      msg: "Error creating snippet",
      error: err.message,
    });
  }
};

async function getSnippetController(req, res) {
  try {
    const {
      body: { _id },
      query: { title },
    } = req;

    const collection = await Collection.find({
      user: _id,
    }).populate({
      path: "snippets",
      match: { title: title },
    });

    if (collection) {
      res.json({
        data: collection,
      });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
}

const updateSnippetController = async (req, res) => {
  const { _id, snapid, title, code, color, padding, lines } = req.body;
  const { id } = req.params;
  try {
    const snippetExists = await Snippet.findOne({ user: _id, _id: snapid });

    if (!snippetExists) {
      return res.status(404).json({
        msg: "snippet not found",
      });
    }
    const updatedSnippet = await Snippet.findOneAndUpdate(
      { user: _id, _id: snapid },
      {
        title,
        code,
        color,
        padding,
        lines,
      }
    );

    if (updatedSnippet) {
      return res.json({
        msg: "updated successfully",
        updatedSnippet,
      });
    }
  } catch (e) {
    res.json({
      msg: e.message,
    });
  }
};

const deleteSnippetController = async (req, res) => {
  try {
    const {
      body: { _id },
      params: { id },
    } = req;

    const deletedSnippet = await Snippet.findOneAndDelete({
      user: _id,
      _id: id,
    });
    if (deletedSnippet) {
      const collection = await Collection.findOneAndUpdate(
        {
          user: _id,
        },
        {
          $pull: {
            snippets: {
              $eq: id,
            },
          },
        }
      );

      if (collection) {
        res.json({
          msg: "deleted successfully",
          deletedSnippet,
          collection,
        });
      } else {
        res.json({
          msg: "operation failed",
        });
      }
    } else {
      res.json({
        msg: "snippet not found",
      });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports = {
  createSnippetController,
  getSnippetController,
  updateSnippetController,
  deleteSnippetController,
};
