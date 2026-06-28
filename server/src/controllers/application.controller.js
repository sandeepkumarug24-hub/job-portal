import Application from "../models/application.js";
import Job from "../models/job.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    // Check if job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Check duplicate application
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    // Create application
    const application = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(application._id);

    await job.save();

    return res.status(201).json({
      success: true,
      message: "Applied successfully",
      application,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;

    const applications = await Application.find({
      applicant: userId,
    })
      .populate({
        path: "job",
        populate: {
          path: "company",
        },
      })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
      path: "applications",
      populate: {
        path: "applicant",
      },
    });

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
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    application.status = status.toLowerCase();

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application status updated",
      application,
    });
  } catch (error) {
    console.log(error);
  }
};
