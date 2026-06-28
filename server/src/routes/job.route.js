import express from "express";
import {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
  updateJob,
} from "../controllers/job.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";

const router = express.Router();

router.post("/post", isAuthenticated, authorizeRoles("recruiter"), postJob);
router.get("/get", getAllJobs);

router.get(
  "/getadminjobs",
  isAuthenticated,
  authorizeRoles("recruiter"),
  getAdminJobs,
);
router.get("/:id", getJobById);
router.put(
  "/update/:id",
  isAuthenticated,
  authorizeRoles("recruiter"),
  updateJob,
);

export default router;
