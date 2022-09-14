import PostLogo from "../models/postLogo.js";

export const getLogos = async (req, res) => {
  try {
    const postLogos = await PostLogo.find();
    // console.log("postLogos: ", postLogos);

    res.status(200).json(postLogos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFilteredLogos = async (req, res) => {
  let filter = {};
  try {
    if (req.query.categories) {
      if (req.query.categories.split(",")[0] != "All") {
        filter["status"] = req.query.categories.split(",")[0];
      }
      if (req.query.categories.split(",")[1] != "All") {
        filter["industry"] = req.query.categories.split(",")[1];
      }
    }
    const filteredLogos = await PostLogo.find(filter);

    res.status(200).json(filteredLogos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLogos = async (req, res) => {
  const logo = req.body;

  const newLogo = new PostLogo(logo);

  try {
    await newLogo.save();

    res.status(201).json(newLogo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
