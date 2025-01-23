import { Schema, model } from "mongoose";

const SkillSchema = new Schema({
    skillName: String,
    category: String,
    proficiencyLevel: Number,
    experienceLevel: String,
    yearsOfExperience: String,
    additionalNotes: String,
});

export default model("Skill", SkillSchema);