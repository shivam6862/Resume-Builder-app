const mongoose = require("mongoose");

const { Schema } = mongoose;

const resumeSchema = new Schema({
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
    },
    branch: {
      type: String,
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
    },
    college: {
      type: String,
    },
  },
  college: {
    type: String,
  },
  aoi: [
    {
      item: {
        type: String,
        trim: true,
        required: [true, "Area of Interest is required!"],
      },
      id: { type: String },
    },
  ],
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
      field: {
        type: String,
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
      graduation: {
        type: String,
      },
      id: {
        type: String,
      },
    },
  ],
  InternshipDetails: [
    {
      Company: {
        type: String,
        trim: true,
        required: [true, "Company required!"],
      },
      Title: {
        type: String,
        trim: true,
        required: [true, "Title required!"],
      },
      Description: [
        {
          type: String,
        },
      ],
      startDate: {
        type: String,
        trim: true,
        required: [true, "StartDate required!"],
      },
      endDate: {
        type: String,
        trim: true,
      },
      id: {
        type: String,
      },
    },
  ],
  JobExperience: [
    {
      Position: {
        type: String,
        trim: true,
        required: [true, "Position required!"],
      },
      Organisation: {
        type: String,
        trim: true,
        required: [true, "Organisation required!"],
      },
      Description: [
        {
          type: String,
        },
      ],
      startDate: {
        type: String,
        trim: true,
        required: [true, "StartDate required!"],
      },
      endDate: {
        type: String,
        trim: true,
      },
      id: {
        type: String,
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
        },
      ],
      startDate: {
        type: String,
        trim: true,
        required: [true, "StartDate required!"],
      },
      endDate: {
        type: String,
        trim: true,
      },
      link: {
        type: String,
        trim: true,
      },
      id: {
        type: String,
      },
    },
  ],
  asaa: [
    {
      item: { type: String, trim: true },
      id: { type: String },
    },
  ],
  skills: {
    computerLanguages: { type: String },
    softwarePackages: { type: String },
    additionalCourses: { type: String },
    languagesKnown: { type: String },
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
      startDate: {
        type: String,
        trim: true,
        required: [true, "StartDate required!"],
      },
      endDate: {
        type: String,
        trim: true,
      },
      description: [
        {
          type: String,
          trim: true,
          required: [true, "Description required!"],
        },
      ],
      link: {
        type: String,
        trim: true,
      },
      id: {
        type: String,
      },
    },
  ],
  Publications: [
    {
      Title: { type: String, trim: true, required: [true, "Title required!"] },
      Authors: {
        type: String,
        trim: true,
        required: [true, "Authors required!"],
      },
      Publisher: {
        type: String,
        trim: true,
        required: [true, "Publisher required!"],
      },
      Year: { type: String, trim: true, required: [true, "Year required!"] },
      Pages: { type: String, trim: true, required: [true, "Pages required!"] },
      Volumes: {
        type: String,
        trim: true,
        required: [true, "Volumes required!"],
      },
      Journal: {
        type: String,
        trim: true,
        required: [true, "Journal required!"],
      },
      id: { type: String },
    },
    1,
  ],
  references: [
    {
      name: { type: String, trim: true },
      work: { type: String, trim: true },
      collegeCompanies: { type: String, trim: true },
      email: { type: String, trim: true },
      number: { type: String, trim: true },
      id: { type: String },
    },
  ],
});

module.exports = mongoose.model("resume", resumeSchema);
