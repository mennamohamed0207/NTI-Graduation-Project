const eduMode = require("../models/educationModel");

exports.createEducation = async (req, res) => {
  try {
    const edu = await eduMode.create(req.body);
    return res
      .status(200)
      .json({ message: "education added successfully", education: edu });
  } catch (err) {
    console.log(err);
  }
};

exports.getEducaiton = async (req, res) => {
  try {
    const data = await eduMode.find();
    return res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const data = await eduMode.deleteOne({ title: req.params.title });
    return res
      .status(200)
      .json({ message: "education deleted successfully", education: data });
  } catch (err) {
    console.log(err);
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const data = await eduMode.updateOne(
      { title: req.params.title },
      { $set: req.body }
    );
    res
      .status(200)
      .json({ message: "education updated successfully", data: data });
  } catch (err) {
    console.log(err);
  }
};
