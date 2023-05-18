import jobController from "../controllers/job.controllers";
import express from 'express'


const router=express.Router()

router.route("/").get(jobController.getJobs)

export default router