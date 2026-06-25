const mongoose = require('mongoose');



/**
 * 
 * job description schema
 * -resume text :string
 * -self description: string
 * 
 * - MatchScore : Number
 * 
 * AI Output
 * - Techical Questions :[] array
 *        [{
 *          questions : "",
 *          intentinon :"",
 *          answer:"",
 *          }]
 * - behavioral question :[] array
 *           [{
 *          questions : "",
 *          intentinon :"",
 *          answer:"",
 *          }]
 * - skill gaps:[] array
 *       [{
 *          skill: "",
 *          serverity :{
 *              type: string,
 *         enum: ["low", "medium", "high"],
 *          }]
 * - preparation plan :[{}] inside array objects
 *              day: Number,
 *              focus: String,
 *              tasks: [strings]
 */

const technicalQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technical question is required"]
    },

    intention: {
        type: String,
        required: [true, "Intension is required"]
    },

    answer: {
        type: String,
        required: [true, "Answer is required"]
    }

}, {
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({

    question: {
        type: String,
        required: [true, "Technical question is required"]
    },

    intention: {
        type: String,
        required: [true, "Intension is required"]
    },

    answer: {
        type: String,
        required: [true, "Answer is required"]
    }

}, {
    _id: false

})


const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Sill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required"]
    }
},{
    _id: false
})


const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus:{
        type: String,
        required: [true, "Focus is required"]
    },
    tasks:[{
        type: String,
        required: [true, "Task is required"]
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore:{
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [ technicalQuestionsSchema ],
    behavioralQuestions: [ behavioralQuestionSchema ],
    skillGaps: [ skillGapSchema ],
    preparationPlan: [ preparationPlanSchema]
}, {
    timestamps: true
})


const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;

