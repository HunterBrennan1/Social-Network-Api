const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  updateThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../controllers/thought-controller");

router.route("/").get(getAllThought).post(addThought);

router.route("/:id")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;