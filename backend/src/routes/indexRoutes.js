import { Router } from "express";
import tasksRouter from "./taskRoutes.js";

const router = Router();

router.use(tasksRouter);

export default router;
