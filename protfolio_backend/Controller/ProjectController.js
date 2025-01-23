import Project from "../Model/projects.js"
import { uploadMediaToCloudinary } from "../config/cloudinary.js"


class ProjectController{
   static async store(req,res){
    const { title, description, techStack, liveUrl, githubUrl, status } = req.body;
    console.log(req.body)
    console.log(req.files)
    const uploadedImages = await Promise.all(
        req.files.map((file) =>uploadMediaToCloudinary(file.path))
    )
    const project = new Project({
        title,
        description,
        techStack: techStack.split(",").map((tech) => tech.trim()),
        liveUrl,
        githubUrl,
        status,
        images: uploadedImages.map((img) => ({ url: img.secure_url, altText: img.public_id })),
      });
  
      await project.save();
      res.status(201).json({ success: true, data: project });

   }
   static async show(req,res){
    try {
        const ProjectList = await Project.find({});
        res.status(200).json({
            success: true,
            data: ProjectList,
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
export default ProjectController