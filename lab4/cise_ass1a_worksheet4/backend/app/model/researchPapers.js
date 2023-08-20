const mongoose = require('mongoose');

const ResearchPaperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String], // An array of strings
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  publication_year: {
    type: Number,
    required: true,
  },
  doi: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  claim: {
    type: String,
    required: true,
  },
  evidence: {
    type: String,
    required: true,
  },
  linked_discussion: { // Added linked_discussion field
    type: String,
    required: false, // Adjust as necessary; if it's optional, you may omit this line or set it to false
  },
});

module.exports = ResearchPaper = mongoose.model('ResearchPaper', ResearchPaperSchema);
