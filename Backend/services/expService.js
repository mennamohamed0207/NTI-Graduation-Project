const expModel = require("../models/experienceModel");

exports.createExperience = async (req, res) => {
  try {
    //separting tools and description in elements and make them array 
    const { tools, description } = req.body;
    req.body.description = description.split(",");
    req.body.tools = tools.split(",");
    const exp = await expModel.create(req.body);
    return res
      .status(200)
      .json({ message: "experience added successfully", experience: exp });
  } catch (err) {
    console.log(err);
  }
};
exports.getExperience = async (req, res) => {
  try {
    const data = await expModel.find();
    return res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const deleted = await expModel.findOne({ _id: req.params.id });
    const data = await expModel.deleteOne({ _id: req.params.id });
    return res
      .status(200)
      .json({ message: "experience deleted successfully", experience: deleted });
  } catch (err) {
    console.log(err);
  }
};
exports.updateExperience = async (req, res) => {
  try {
    
    const data = await expModel.updateOne(
      { id: req.params.id},
      { $set: req.body }
    );
    const afterUpdate=await expModel.find({id:req.params.id})
    return res
      .status(200)
      .json({ message: "experience updated successfully", experience: afterUpdate });
  } catch (err) {
    console.log(err);
  }
};
