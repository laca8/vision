const Player = require("../models/Player.js");
const addPlayer = async (req, res) => {
  const {
    firstName,
    lastName,
    birthday,
    game,
    phone,
    city,
    position,
    video,
    user,
  } = req.body;
  try {
    const player = await Player.create({
      firstName,
      lastName,
      video,
      game,
      position,
      birthday,
      city,
      phone,
      user: req.user._id,
    });
    res.json(player);
  } catch (err) {
    //console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    //console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const updatePlayer = async (req, res) => {
  try {
    let player = await Player.findOne({ user: req.user._id });
    if (!player) {
      return res.status(500).json({ msg: "player not found" });
    }
    player = await Player.findOneAndUpdate({ user: req.user._id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(player);
  } catch (err) {
    //console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getPlayerByUser = async (req, res) => {
  try {
    const player = await Player.findOne({ user: req.user._id });

    res.json(player);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.json(player);
  } catch (err) {
    //  console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  addPlayer,
  getPlayers,
  getPlayerById,
  getPlayerByUser,
  updatePlayer,
};
