import Company from "../models/company.js";
import getDataUri from "../utils/dataUri.js";
import { v2 as cloudinary } from "cloudinary";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    // Validation
    if (!companyName) {
      return res.status(400).json({
        success: false,
        message: "Company name is required",
      });
    }

    // Check if company already exists
    const company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        success: false,
        message: "Company already exists",
      });
    }

    // Create company
    const newCompany = await Company.create({
      name: companyName,
      createdBy: req.id,
    });

    return res.status(201).json({
      success: true,
      message: "Company registered successfully",
      company: newCompany,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({
      createdBy: req.id,
    });

    return res.status(200).json({
      success: true,
      companies,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    const file = req.file;

    // Find existing company
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    // Keep old logo by default
    let logo = company.logo;

    // Upload new logo if provided
    if (file) {
      const fileUri = getDataUri(file);

      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

      logo = cloudResponse.secure_url;
    }

    // Update company
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        website,
        location,
        logo,
      },
      {
        new: true,
      },
    );

    return res.status(200).json({
      success: true,
      message: "Company updated successfully",
      company: updatedCompany,
    });
  } catch (error) {
    console.log(error);
  }
};
