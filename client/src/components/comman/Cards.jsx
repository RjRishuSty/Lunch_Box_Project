import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, useIn }) => {
  const handlRenderCard = useCallback(() => {
    switch (useIn) {
      case "whatWeDo":
        return (
          <CardActionArea sx={{ height: "100%" }}>
            <Box
              component="img"
              src={data.image}
              alt={data.label}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                objectPosition:'center'
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom color="primary">
                {data.label}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>

              <Button
                component={Link}
                to={data.path}
                fullWidth
                size="medium"
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Explore{" "}
                {data?.label?.length > 19
                  ? `${data.label.slice(0, 12)}...`
                  : data?.label}
              </Button>
            </CardContent>
          </CardActionArea>
        );

      default:
        return (
          <Typography variant="h6" color="error">
            Please provide valid <b>useIn</b> value
          </Typography>
        );
    }
  }, [data, useIn]);
  return (
    <Card
      sx={{
        // border: "2px solid blue",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      {handlRenderCard()}
    </Card>
  );
};

export default React.memo(Cards);
