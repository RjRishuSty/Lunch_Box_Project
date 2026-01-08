import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CustomVideo from "./comman/CustomVideo";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:630px)");
  const isXs = useMediaQuery("(max-width:425px)");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        overflow: "hidden",
      }}
    >
      <CustomVideo />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: -1,
        }}
      />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: isMobile ? "start" : "center",
          p: { xs: 2, sm: 5, md: 10 },
          mt: { xs: 20, sm: 15, md: 12 },
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: isXs ? "2rem" : "3rem",
              sm: "4rem",
              md: "6rem",
            },
            fontWeight: 700,
            color: "primary.contrastText",
          }}
        >
          Shuddh Aahar, Swasth Pashu,{" "}
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: {
                xs: isXs ? "2rem" : "3rem",
                sm: "4rem",
                md: "6rem",
              },
              fontWeight: 700,
              color: "secondary.main",
            }}
          >
            {" "}
            Samriddh Kisan
          </Typography>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 700,
            mb: 4,
            color: "text.disabled",
          }}
        >
          High-quality pashu aahar, fresh cow milk, and ethical goat farming for
          a healthier and sustainable future.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontSize: "16px",
            borderRadius: "30px",
            textTransform: "none",
          }}
        >
          Explore Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
