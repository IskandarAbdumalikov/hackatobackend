import Race from "../models/Race.js";

export const getRaces = async (req, res) => {
  try {
    const races = await Race.find();
    res.json(races);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRaceById = async (req, res) => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) return res.status(404).json({ message: "Race not found" });
    res.json(race);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRace = async (req, res) => {
  const {
    image,
    numberOfParticipants,
    entryFee,
    laps,
    prizeAmount,
    startDate,
  } = req.body;
  try {
    const newRace = new Race({
      image,
      numberOfParticipants,
      entryFee,
      laps,
      prizeAmount,
      startDate,
    });
    await newRace.save();
    res.status(201).json(newRace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRace = async (req, res) => {
  const {
    image,
    numberOfParticipants,
    entryFee,
    laps,
    prizeAmount,
    startDate,
  } = req.body;
  try {
    const updatedRace = await Race.findByIdAndUpdate(
      req.params.id,
      { image, numberOfParticipants, entryFee, laps, prizeAmount, startDate },
      { new: true }
    );
    if (!updatedRace)
      return res.status(404).json({ message: "Race not found" });
    res.json(updatedRace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRace = async (req, res) => {
  try {
    const deletedRace = await Race.findByIdAndDelete(req.params.id);
    if (!deletedRace)
      return res.status(404).json({ message: "Race not found" });
    res.json({ message: "Race deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
