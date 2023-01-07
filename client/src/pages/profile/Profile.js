import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../component/Loader";
import Error from "../../component/Error";
import { getPlayerByUser } from "../../redux/action/playerAction";
import AddPlayer from "../../component/player/AddPlayer";
import UpdatePlayer from "../../component/player/UpdatePlayer";
const Profile = () => {
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayerByUser());
  }, []);
  const getPlayerUserRed = useSelector((state) => state.getPlayerUserRed);
  const { player, error, loading } = getPlayerUserRed;
  const handleShow = () => setShow(true);
  const handleShowUpdate = () => setShowUpdate(true);
  return (
    <Container style={{ marginTop: "30px" }}>
      <AddPlayer show={show} setShow={setShow} />
      <UpdatePlayer show={showUpdate} setShow={setShowUpdate} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : player && player?.firstName ? (
        <>
          <Button style={{ marginLeft: "20px" }} onClick={handleShowUpdate}>
            Update Profile
          </Button>
          <div className="row" style={{ padding: "30px" }}>
            <div className="col-md-6 card">
              <div className="m2">
                <h4>
                  Fullname: {player?.firstName} {""}
                  {player.lastName}
                </h4>

                <hr />
                <h4>Birthday: {player?.birthday}</h4>
                <hr />
                <h4>Position: {player?.position}</h4>
                <hr />
                <h4>Game: {player?.game}</h4>
                <hr />
                <h4>phone: {player?.phone}</h4>
                <hr />
                <h4>city: {player?.city}</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="card"
                style={{ padding: "30px", marginTop: "10px" }}
              >
                <video
                  width="400"
                  controls
                  style={{ width: "100%", height: "auto", maxHeight: "300px" }}
                >
                  <source src={player?.video} type="video/mp4" />
                  <source src={player?.video} type="video/ogg" />
                </video>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Button onClick={handleShow}>Add Profile</Button>
      )}
    </Container>
  );
};

export default Profile;
