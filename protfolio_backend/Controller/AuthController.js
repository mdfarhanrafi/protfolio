import Message from "../Model/message.js"

class AuthController{
    static async sendEmail(req, res){
        try {
            const {name,subject,message} = req.body
            const payload = {
                toemail: "mdfarhanrafi563@gmail.com",
                subject: subject,
                body:"<p>${message}</p>"
            }

            const newMessage = new Message ({
                name,
                subject,
                message
            })
            await newMessage.save()
            // await sendEmail(payload.toemail,payload.subject,payload.body) 
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
  

}
export default AuthController