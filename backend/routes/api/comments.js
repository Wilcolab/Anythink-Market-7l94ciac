/**
 * @route GET /
 * @group Comments - Operations about comments
 * @returns {Array.<Object>} 200 - An array of comment objects
 * @returns {Error} 400 - Error message
 * @description Retrieves all comments from the database.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey Github Copilot,
router.get("/", async (req, res) => {
    Comment.find()
        .then((comments) => res.json(comments))
        .catch((err) => res.status(400).json("Error: " + err));
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json("Comment deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});