import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PlayerDescription = () => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/player/${id}`);
        console.log(res);
        setPlayer(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {player ? (
        <div
          className="row"
          style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
        >
          <div className="col-md-6 card">
            <div className="m2">
              <h4>
                name: {player?.firstName} {player?.lastName}
              </h4>

              <hr />
              <h4>Birthday: {player?.birthday}</h4>
              <hr />
              <h4>Position: {player?.position}</h4>
              <hr />
              <h4>game: {player?.game}</h4>
              <hr />
              <h4>phone: {player?.phone}</h4>
              <hr />
              <h4>city: {player?.city}</h4>
            </div>
            <hr />
          </div>
          <div className="col-md-6">
            <div
              className="card"
              style={{ padding: "10px", marginTop: "10px" }}
            >
              <video
                width="400"
                controls
                style={{ width: "100%", height: "auto", maxHeight: "400px" }}
              >
                <source src={player.video} type="video/mp4" />
                <source src={player.video} type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </>
  );
};
export default PlayerDescription;
