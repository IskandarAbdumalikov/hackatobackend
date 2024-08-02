import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCar = async (req, res) => {
  const { image, model, horsepower, color, weight, maxSpeed, balance } =
    req.body;
  try {
    const newCar = new Car({
      image,
      model,
      horsepower,
      color,
      weight,
      maxSpeed,
      balance,
    });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCar = async (req, res) => {
  const { image, model, horsepower, color, weight, maxSpeed, balance } =
    req.body;
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      { image, model, horsepower, color, weight, maxSpeed, balance },
      { new: true }
    );
    if (!updatedCar) return res.status(404).json({ message: "Car not found" });
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: "Car not found" });
    res.json({ message: "Car deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
