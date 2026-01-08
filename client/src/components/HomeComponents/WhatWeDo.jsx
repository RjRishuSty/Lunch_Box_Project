import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { ourWorkData } from "../../data/ourWorkData";
import Cards from "../comman/Cards";

const WhatWeDo = () => {
  const isXs = useMediaQuery("(max-width:530px)");
  const isMdScreen = useMediaQuery("(max-width:1180px)");

  const headingText = isXs ? "What We Do" : "Our Core Areas of Work";
  return (
    <Container sx={{py: 5 }}>
      <Typography variant="h3" gutterBottom>
        {headingText}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        From healthy livestock farming to pure dairy production, we deliver
        quality, care, and sustainability at every step.
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={2} sx={{ mt: 5 }}>
        {ourWorkData?.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: isMdScreen ? 6 : 3 }}>
            <Cards useIn="whatWeDo" data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhatWeDo;
