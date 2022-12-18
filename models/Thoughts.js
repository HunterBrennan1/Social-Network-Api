const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: function () {
      return new Types.ObjectId();
    },
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (date) {
      return moment(date).format("mm/dd/yyyy");
    },
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        return moment(date).format("mm/dd/yyyy");
      }
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      reactionSchema,
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});



const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;