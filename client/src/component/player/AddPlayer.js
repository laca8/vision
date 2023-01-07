import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import axios from "axios";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Box, TextField, Typography, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlayerByUser,
  getPlayerByUser,
} from "../../redux/action/playerAction";
import Loader from "../Loader";
import Error from "../Error";
import Success from "../Success";

const AddPlayer = ({ show, setShow }) => {
  const positions = ["Choose Game", "MORE THAN ONE POSITION"];
  const positions_foot = [
    "Choose Position",
    "Goal Keeper",
    "Center Back",
    "Right Back",
    "Left Back",
    "Center Defensive Midfielder",
    "Center Midfielder",
    "Left Midfielder",
    "Right Midfielder",
    "Right Wing",
    "Left Wing",
    "Center Attacking Midfielder",
    "Center Forward",
    "Striker",
    "MORE THAN ONE POSITION",
  ];
  const positions_volly = [
    "Choose Position",
    "Setter",
    "Outside Hitter",
    "Middle Blocker",
    "Libro",
    "Defender",
  ];
  const positions_hand = [
    "Choose Position",
    "Goal Keeper",
    "Left wing",
    "Left Back",
    "Middle Back",
    "Right Back",
    "Right Wing",
  ];
  const positions_basket = [
    "Choose Position",
    "Point Guard",
    "Shooting Guard",
    "Small Forward",
    "Power Forward",
    "Center",
  ];

  const games = [
    "Choose Game",
    "Football",
    "Vollyball",
    "Handball",
    "Basketball",
  ];
  const handleClose = () => {
    setShow(false);
    window.location.href = "/profile";
  };
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [game, setGame] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [video, setVideo] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const addPlayerUserRed = useSelector((state) => state.addPlayerUserRed);
  const { player, loading, error, success } = addPlayerUserRed;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file.size > 20000000) {
      setErr("video size must less than 20MB");
    } else {
      setLoad(true);
      const videoRef = ref(storage, `/files/${file.name}`);
      uploadBytes(videoRef, file).then(() => {
        getDownloadURL(videoRef).then((url) => {
          setLoad(true);
          console.log(url);
          if (url) {
            setLoad(true);
            setVideo(url);
            console.log(file);
            setLoad(false);
          }
        });
      });
    }
  };
  const handleSubmit = async () => {
    const newPlayer = {
      firstName,
      lastName,
      city,
      game,
      phone,
      position,
      birthday,
      video,
    };
    try {
      dispatch(addPlayerByUser(newPlayer));
      //dispatch(getPlayerByUser());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ padding: "10px" }}>
      <Modal.Header closeButton>
        <Modal.Title>player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? (
          <Error error={error} />
        ) : success ? (
          <Success message="Profile added successed reload this page" />
        ) : null}
        <div className="modal-player">
          <div>
            <div style={{ margin: "5px 0 5px" }}>
              <TextField
                required
                label="First Name"
                className="form-control"
                placeholder="Enter first name"
                style={{
                  marginBottom: "20px",
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div style={{ margin: "5px 0 5px" }}>
              <TextField
                required
                label="Last Name"
                className="form-control"
                placeholder="Enter last name"
                style={{
                  marginBottom: "10px",
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div style={{ margin: "5px 0 5px" }}>
              <TextField
                required
                className="form-control"
                type="date"
                placeholder="Enter Birthday"
                style={{
                  marginBottom: "10px",
                }}
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>

            <div style={{ margin: "5px 0 5px" }}>
              <TextField
                required
                label="Phone"
                className="form-control"
                placeholder="Enter Phone"
                style={{
                  marginBottom: "10px",
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div style={{ margin: "5px 0 5px" }}>
              <TextField
                required
                label="City"
                className="form-control"
                placeholder="Enter City"
                style={{
                  marginBottom: "10px",
                }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div style={{ margin: "5px 0 5px" }}>
              <Form.Select
                value={game}
                onChange={(e) => setGame(e.target.value)}
                style={{ marginBottom: "10px" }}
              >
                {games.map((game, index) => (
                  <option value={game} key={index}>
                    {game}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div style={{ margin: "5px 0 5px" }}>
              <Form.Select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                style={{ marginBottom: "10px" }}
                disabled={!game}
              >
                {game == "Football"
                  ? positions_foot.map((pos, index) => (
                      <option value={pos} key={index}>
                        {pos}
                      </option>
                    ))
                  : game == "Handball"
                  ? positions_hand.map((pos, index) => (
                      <option value={pos} key={index}>
                        {pos}
                      </option>
                    ))
                  : game == "Vollyball"
                  ? positions_volly.map((pos, index) => (
                      <option value={pos} key={index}>
                        {pos}
                      </option>
                    ))
                  : game == "Basketball"
                  ? positions_basket.map((pos, index) => (
                      <option value={pos} key={index}>
                        {pos}
                      </option>
                    ))
                  : null}
              </Form.Select>
            </div>
          </div>

          <div>
            {err && <Error error={err} />}
            {load && <Loader />}
            <label>Choose video of your skills</label>
            <br />
            <input
              type="file"
              id="video"
              label="choose file"
              onChange={uploadFileHandler}
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={load}>
          {loading ? <Loader /> : "save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPlayer;
