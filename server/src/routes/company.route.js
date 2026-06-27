import express from "express";
import {
  registerCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.post(
  "/register",
  isAuthenticated,
  authorizeRoles("recruiter"),
  registerCompany,
);
router.get("/get", isAuthenticated, authorizeRoles("recruiter"), getCompanies);
router.get(
  "/get/:id",
  isAuthenticated,
  authorizeRoles("recruiter"),
  getCompanyById,
);
router.put(
  "/update/:id",
  isAuthenticated,
  authorizeRoles("recruiter"),
  singleUpload,
  updateCompany,
);

export default router;
