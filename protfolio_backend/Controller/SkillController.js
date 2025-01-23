import Skill from "../Model/skill.js"

class SkillController{
    static async store(req, res){
        try {
            const {skillName,category,proficiencyLevel,experienceLevel,yearsOfExperience,additionalNotes} = req.body

            const newSkill = new Skill ({
                skillName,category,proficiencyLevel,experienceLevel,yearsOfExperience,additionalNotes
            })
            await newSkill.save()

            return res.status(201).json({
                success: true,
                message: "Message Sent SuccessFully",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
              success: false,
              message: "Some error occured!",
            });
        }      
    
   
       }
    static async show(req,res){
        try {
            const skillList = await Skill.find({});
            res.status(200).json({
              success: true,
              data: skillList,
            });
          } catch (e) {
            console.log(e);
            res.status(500).json({
              success: false,
              message: "Some error occured!",
            });
          }
    }

}
export default SkillController