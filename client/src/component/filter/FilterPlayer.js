import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { filterPlayers } from "../../redux/action/playerAction";
import { useDispatch } from "react-redux";
const FilterPlayer = () => {
  const positions_foot = [
    "all",
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
    "all",
    "Setter",
    "Outside Hitter",
    "Middle Blocker",
    "Libro",
    "Defender",
  ];
  const positions_hand = [
    "all",
    "Goal Keeper",
    "Left wing",
    "Left Back",
    "Middle Back",
    "Right Back",
    "Right Wing",
  ];
  const positions_basket = [
    "all",
    "Point Guard",
    "Shooting Guard",
    "Small Forward",
    "Power Forward",
    "Center",
  ];

  const games = ["all", "Football", "Vollyball", "Handball", "Basketball"];
  const dispatch = useDispatch();
  const [position, setPosition] = useState("all");
  const [game, setGame] = useState("all");
  const filterHandler = () => {
    dispatch(filterPlayers(position, game));
  };
  return (
    <Row style={{ width: "100%", marginBottom: "10px" }}>
      <Col>
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
      </Col>
      <Col>
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
      </Col>
      <Col>
        <Button
          variant="primary"
          onClick={filterHandler}
          style={{ width: "100%" }}
        >
          Filter
        </Button>
      </Col>
    </Row>
  );
};

export default FilterPlayer;
