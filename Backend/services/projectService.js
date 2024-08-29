const projectModel=require('../models/projectsModel');


exports.createProject=async(req,res)=> {
    try {
      req.body.tools=req.body.tools.split("|");
      req.body.languages=req.body.languages.split("|");
      const data = await projectModel.create(req.body);
      res.status(200).json({ message: "Project added successfully", data: data });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error: error });
    }
};

exports.getProjects= async (req, res) => {
  const data = await projectModel.find();
  res.status(200).json({ data: data });
};



exports.deleteProject= async (req, res) => {
  const data = await projectModel.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Project deleted successfully", data: data });
};


exports.updateProject=async (req, res) => {
  const data = await projectModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.status(200).json({ message: "Project updated successfully", data: data });
};