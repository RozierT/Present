import React from "react";
//import { House, Camera, Gear, User } from "@phosphor-icons/react";




// I have broken the buttons into two arrays so that we can have two different footers
const buttons = [
  { id: 1, label: "Profile", path: "/profile" },
  { id: 2, label: "Camera", path: "/camera" },
  { id: 3, label: "Settings", path: "/settings" },
];

const buttons2 = [
  { id: 1, label: "Feed", path: "/" },
  { id: 2, label: "Camera", path: "/camera" },
  { id: 3, label: "Settings", path: "/settings" },
];

export {buttons, buttons2};
