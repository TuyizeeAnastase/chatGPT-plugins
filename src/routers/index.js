import jobRouters from "./job.route"
import productRouters from "./product.route"
import express from 'express'


const routes = express();

routes.get("/", (req, res) => {
    res.status(200).json({
      message: "This is XY company",
    });
  });

routes.use("/api/v1/jobs",jobRouters)
routes.use("/api/v1/products",productRouters)

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
  });

export default routes;
