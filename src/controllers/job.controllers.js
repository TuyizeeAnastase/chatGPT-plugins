import {getAllJobs} from "../services/job.services"

class JobController{
    async getJobs(req,res){
        try{
          const jobs=await getAllJobs()
          return res.status(200).json({
            jobs
          })
        }catch(err){
            return res.status(500).json({
                message:"error while getting jobs",
                error:err.message
            })
        }
    }
}

const jobController=new JobController()
export default jobController