import * as React from "react";
import Avatar from "@mui/material/Avatar";


export default function MyAvatar({avatarImgUrl}) {
  return (
    <Avatar
    alt="Remy Sharp"
    src={avatarImgUrl}
  />
   
  );
}
