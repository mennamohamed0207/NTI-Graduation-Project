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
    const deleted=await eduMode.find({id:req.params.id})
    const data = await eduMode.deleteOne({ id: req.params.id });
    return res
      .status(200)
      .json({ message: "education deleted successfully", education: deleted });
  } catch (err) {
    console.log(err);
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const updated=await eduMode.find({id:req.params.id})
    const data = await eduMode.updateOne(
      { id: req.params.id },
      { $set: req.body }
    );
    res
      .status(200)
      .json({ message: "education updated successfully", education: updated });
  } catch (err) {
    console.log(err);
  }
};
