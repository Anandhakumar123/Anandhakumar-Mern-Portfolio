import express from "express";
const router = express.Router();
import {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} from "../models/portfolioModel.js";

import User from "../models/userModel.js";

//get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experience: experiences,
      project: projects,
      course: courses,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add Experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();

    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });

    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add Project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(200).send({
      data: project,
      success: true,
      message: "Project added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });

    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add Course
router.post("/add-course", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();

    res.status(200).send({
      data: course,
      success: true,
      message: "Course added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update course
router.post("/update-course", async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: course,
      success: true,
      message: "Course updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete course
router.post("/delete-course", async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ _id: req.body._id });

    res.status(200).send({
      data: course,
      success: true,
      message: "Course deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.find({
      username: req.body.username,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login Successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
