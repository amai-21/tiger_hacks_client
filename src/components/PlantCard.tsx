import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import "./PlantCard.css";
import { Plant } from "../Interfaces/Plant";
interface PlantProps {
  plant: Plant;
  priority: number;
  guideRouter: (plant: Plant) => void;
}
function PlantCard(props: PlantProps) {
  function toGuideRouter(plant: Plant) {
    props.guideRouter(plant);
  }
  return (
    <Card
      sx={{
        width: 275,
        height: 300,
        marginLeft: 3,
        marginBottom: 3,
        borderWidth: 6,
        borderColor: "#65A5C5",
        backgroundColor: "#114A6E",
        boxShadow: "6px 6px 8px rgba(0, 0, 0, 0.2)",
      }}
      className="card"
    >
      <div className="borderContent">
        <div>
          <Typography
            sx={{ fontStyle: "bold", color: "white", fontSize: 30 }}
            level="title-lg"
          >
            {props.plant.name}
          </Typography>
          <Typography
            className="rank"
            color="neutral"
            sx={{ position: "absolute", top: "0.3rem", right: "0.5rem" }}
          >
            {props.priority}
          </Typography>
        </div>

        <img
          className="img"
          src={require(`/src/images/${props.plant.image}`)}
          loading="lazy"
          alt=""
        />

        <CardContent orientation="horizontal">
          <Button
            variant="solid"
            size="md"
            onClick={() => toGuideRouter(props.plant)}
            sx={{
              ml: "auto",
              alignSelf: "center",
              fontWeight: 800,
              backgroundColor: "#65A5C5",
            }}
          >
            Select
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
export default PlantCard;
