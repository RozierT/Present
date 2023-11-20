import React from "react";
import { House, Camera, Gear, User } from "@phosphor-icons/react";

// I have broken the buttons into two arrays so that we can have two different footers
const buttons = [
  { id: 1, label: "Profile", icon: { User }, path: "/profile" },
  { id: 2, label: "Camera", icon: { Camera }, path: "/camera" },
  { id: 3, label: "Settings", icon: { Gear }, path: "/settings" },
];

const buttons2 = [
  { id: 1, label: "Feed", icon: { House }, path: "/" },
  { id: 2, label: "Camera", icon: { Camera }, path: "/camera" },
  { id: 3, label: "Settings", icon: { Gear }, path: "/settings" },
];

export {buttons, buttons2};
