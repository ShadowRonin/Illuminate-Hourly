export default {
  _data: null,
  get: function() {
    if (!this._data) {
      this._data =
        JSON.parse(localStorage.getItem("JobApplications")) || startingData;
    }
    return this._data;
  },
  save: function() {
    return localStorage.setItem("JobApplications", JSON.stringify(this._data));
  }
};

const startingData = [
  {
    id: 1,
    name: "John Smith",
    position: "Server",
    applied: "03/15/16",
    experience: 2,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0
    },
    questions: [
      {
        text: "Have you ever been convicted of a felony?",
        answer: "No"
      }
    ],
    bookmarked: false
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Cook",
    applied: "02/08/16",
    experience: 4,
    availability: {
      M: 1,
      T: 1,
      W: 1,
      Th: 1,
      F: 0,
      S: 0,
      Su: 0
    },
    questions: [
      {
        text: "Have you ever been convicted of a felony?",
        answer: "Yes"
      }
    ],
    bookmarked: false
  },
  {
    id: 3,
    name: "David Jessup",
    position: "Chef",
    applied: "03/08/16",
    experience: 2,
    availability: {
      M: 2,
      T: 2,
      W: 2,
      Th: 2,
      F: 2,
      S: 0,
      Su: 0
    },
    questions: [
      {
        text: "Are you authorized to work in the United States?",
        answer: "Yes"
      }
    ],
    bookmarked: false
  },
  {
    id: 4,
    name: "Clay vanSchalkwijk",
    position: "Cook",
    applied: "03/08/16",
    experience: 1,
    availability: {
      M: 1,
      T: 0,
      W: 1,
      Th: 0,
      F: 1,
      S: 0,
      Su: 0
    },
    questions: [
      {
        text: "Are you authorized to work in the United States?",
        answer: "Yes"
      }
    ],
    bookmarked: false
  }
];
