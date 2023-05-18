import {Job} from "../database/models"

export const getAllJobs=async()=>{
    return await Job.findAll()
}