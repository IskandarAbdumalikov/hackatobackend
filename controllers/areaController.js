import Area from "../models/Area.js";

export const getAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(areas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAreaById = async (req, res) => {
  try {
    const area = await Area.findById(req.params.id);
    if (!area) return res.status(404).json({ message: "Area not found" });
    res.json(area);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createArea = async (req, res) => {
  const { image, cityName, description } = req.body;
  try {
    const newArea = new Area({ image, cityName, description });
    await newArea.save();
    res.status(201).json(newArea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateArea = async (req, res) => {
  const { image, cityName, description } = req.body;
  try {
    const updatedArea = await Area.findByIdAndUpdate(
      req.params.id,
      { image, cityName, description },
      { new: true }
    );
    if (!updatedArea)
      return res.status(404).json({ message: "Area not found" });
    res.json(updatedArea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteArea = async (req, res) => {
  try {
    const deletedArea = await Area.findByIdAndDelete(req.params.id);
    if (!deletedArea)
      return res.status(404).json({ message: "Area not found" });
    res.json({ message: "Area deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
