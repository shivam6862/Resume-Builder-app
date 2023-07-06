const mongoose = require("mongoose");
const v4 = require("uuid").v4;

const { Schema } = mongoose;

const userSchema = new Schema({
  userid: {
    type: String,
  },
  general: {
    name: {
      type: String,
      trim: true,
      required: [true, "Name required!"],
    },
    semester: {
      type: String,
      trim: true,
      required: [true, "Semester required!"],
    },
    branch: {
      type: String,
      trim: true,
      required: [true, "Branch required!"],
    },
    number: {
      type: String,
      trim: true,
      required: [true, "Number required!"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email required!"],
    },
    registration: {
      type: String,
      trim: true,
      required: [true, "Registration required!"],
    },
  },
  college: {
    type: String,
    trim: true,
    required: [true, "College is required!"],
  },
  aoi: {
    type: String,
    trim: true,
    required: [true, "Area of Interest is required!"],
  },
  education: [
    {
      year: {
        type: String,
        trim: true,
        required: [true, "Year required!"],
      },
      degree: {
        type: String,
        trim: true,
        required: [true, "Degree required!"],
      },
      institution: {
        type: String,
        trim: true,
        required: [true, "Institution required!"],
      },
      cgpa: {
        type: String,
        trim: true,
        required: [true, "Cgpa required!"],
      },
      id: {
        type: String,
        default: v4(),
      },
    },
  ],
  projects: [
    {
      name: {
        type: String,
        trim: true,
        required: [true, "Name required!"],
      },
      under: {
        type: String,
        trim: true,
        required: [true, "Under required!"],
      },
      time: {
        type: String,
        trim: true,
        required: [true, "Time required!"],
      },
      description: [
        {
          type: String,
          trim: true,
          required: [true, "description required!"],
        },
      ],
      id: {
        type: String,
        default: v4(),
      },
    },
  ],
  asaa: [
    {
      item: { type: String, trim: true },
      id: { type: String, default: v4() },
    },
  ],
  skills: {
    computerLanguages: { type: String, trim: true },
    softwarePackages: { type: String, trim: true },
    additionalCourses: { type: String, trim: true },
    languagesKnown: { type: String, trim: true },
  },
  poraec: [
    {
      name: {
        type: String,
        trim: true,
        required: [true, "Name required!"],
      },
      under: {
        type: String,
        trim: true,
        required: [true, "under required!"],
      },
      time: {
        type: String,
        trim: true,
        required: [true, "Time required!"],
      },
      description: [
        {
          type: String,
          trim: true,
          required: [true, "Description required!"],
        },
      ],
      id: {
        type: String,
        default: v4(),
      },
    },
  ],
  references: [
    {
      name: { type: String, trim: true },
      work: { type: String, trim: true },
      collegeCompanies: { type: String, trim: true },
      email: { type: String, trim: true },
      number: { type: String, trim: true },
      id: { type: String, default: v4() },
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
