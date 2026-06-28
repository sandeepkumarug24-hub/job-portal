import express from "express";
import {
  applyJob,
  getAppliedJobs,
  getApplicants,
  updateStatus,
} from "../controllers/application.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";

const router = express.Router();

router.post("/apply/:id", isAuthenticated, authorizeRoles("student"), applyJob);
router.get("/get", isAuthenticated, authorizeRoles("student"), getAppliedJobs);
router.get(
  "/:id/applicants",
  isAuthenticated,
  authorizeRoles("recruiter"),
  getApplicants,
);
router.put(
  "/status/:id/update",
  isAuthenticated,
  authorizeRoles("recruiter"),
  updateStatus,
);
export default router;
