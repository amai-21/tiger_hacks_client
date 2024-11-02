import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import test from "../images/test.png";
import "./PlantCard.css";
function PlantCard() {
  return (
    <Card
      sx={{
        width: 275,
        height: 300,
        marginLeft: 3,
        marginBottom: 3,
        borderWidth: 3,
        borderColor: "#114A6E",
        backgroundColor: "#114A6E",
      }}
      className="card"
    >
      <div className="borderContent">
        <div>
          <Typography
            sx={{ fontStyle: "bold", color: "white" }}
            level="title-lg"
          >
            Name
          </Typography>
          <Typography
            className="rank"
            color="neutral"
            sx={{ position: "absolute", top: "0.3rem", right: "0.5rem" }}
          >
            1
          </Typography>
        </div>

        <img className="img" src={test} loading="lazy" alt="" />

        <CardContent orientation="horizontal">
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Select
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
export default PlantCard;
