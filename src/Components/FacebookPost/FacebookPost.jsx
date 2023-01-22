import React from "react";
import MyAvatar from "./../Avatar/Avatar";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Box, Button } from "@mui/material";

const FacebookPost = ({ avatarImgUrl, date, title , description}) => {
  return (
    <Grid
      item
      xs={11}
      md={6}
      lg={5}
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        background: "#493a34",
        borderRadius: "5px",
        mb: 3,
      }}
    >
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            paddingLeft: 2,
            my: 1,
            width: "100%",
            color: "#D5D7DA",
            // backgroundColor: "green",
          }}
        >
          <Box component="span" sx={{ paddingRight: 1 }}>
            <MyAvatar avatarImgUrl={avatarImgUrl} />
          </Box>
          <Box
            component="span"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="caption">{date}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            paddingLeft: 3,
            my: 1,
            width: "100%",
            color: "#D5D7DA",
            
          }}
        >
          <Typography variant="body2">
           {description}
          </Typography>
        </Grid>
        <Grid item>
          <img
            style={{ width: "100%" }}
            src={
              "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
            }
          />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // paddingLeft: 2,
            // my: 1,
            width: "100%",
          }}
        >
          <Box component="span">
            <Button>like</Button>
          </Box>
          <Box component="span">
            <Button color="secondary">comment</Button>
          </Box>
          <Box component="span">
            <Button color="error">share</Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FacebookPost;
