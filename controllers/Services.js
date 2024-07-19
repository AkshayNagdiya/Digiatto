const Service = require("../models/Services");

const Createservice = async (req, res) => {
  try {
    const { servicename, description, link } = req.body;
    const image = req.file ? req.file.path : null;

    if (!servicename || !description || !link) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const service = new Service({
      servicename,
      description,
      link,
      image,
    });

    const savedService = await service.save();

    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const Getservices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const Updateservice = async (req, res) => {
  try {
    const { id } = req.params;
    const { servicename, description, link } = req.body;
    const image = req.file ? req.file.path : null;

    if (!servicename || !description || !link) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      {
        servicename,
        description,
        link,
        image,
      },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { Createservice, Getservices, Updateservice };
