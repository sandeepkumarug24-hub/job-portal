import Job from "../models/job.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      experienceLevel,
      jobType,
      position,
      company,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !experienceLevel ||
      !jobType ||
      !position ||
      !company
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary,
      location,
      experienceLevel,
      jobType,
      position,
      company,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "New job created successfully",
      job,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const jobs = await Job.find({
      title: { $regex: keyword, $options: "i" },
    })
      .populate("company")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("company");

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const jobs = await Job.find({
      createdBy: adminId,
    })
      .populate("company")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      experienceLevel,
      jobType,
      position,
    } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        requirements: requirements.split(","),
        salary,
        location,
        experienceLevel,
        jobType,
        position,
      },
      {
        returnDocument: "after",
      },
    );

    if (!updatedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.log(error);
  }
};
