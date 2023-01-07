import React, { useState, useEffect } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Box, TextField, Typography, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../../redux/action/playerAction";
import Error from "../../component/Error";
import Loader from "../../component/Loader";
import FilterPlayer from "../../component/filter/FilterPlayer";
const Player = () => {
  const dispatch = useDispatch();
  const listPlayersRed = useSelector((state) => state.listPlayersRed);
  const { players, loading, error } = listPlayersRed;
  const [show, setShow] = useState(false);

  const navigator = useNavigate();
  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  return (
    <Container style={{ marginTop: "30px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : players ? (
        <>
          <FilterPlayer />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>birthday</th>
                <th>position</th>
                <th>game</th>
                <th>city</th>
                <th>phone</th>

                <th>video</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr onClick={() => navigator(`/player/${player._id}`)}>
                  <td>{++index}</td>
                  <td>
                    {player.firstName} {player.lastName}
                  </td>
                  <td>{player.birthday}</td>
                  <td>{player.position}</td>
                  <td>{player.game}</td>
                  <td>{player.city}</td>
                  <td>{player.phone}</td>
                  <td style={{ width: "80px" }}>
                    <video
                      width="400"
                      controls
                      style={{ width: "100px", height: "50px" }}
                    >
                      <source src={player.video} type="video/mp4" />
                      <source src={player.video} type="video/ogg" />
                    </video>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <h3>Not found players</h3>
      )}
    </Container>
  );
};

export default Player;
