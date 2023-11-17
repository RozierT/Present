import React from "react";
import { House, Camera, Gear, User } from "@phosphor-icons/react";

// I have 4 button options here. We want Feed to show if user is on profile and profile to show if user is on feed.
const buttons = [
  { id: 1, label: "Feed", icon: { House }, path: "/" },
  { id: 2, label: "Camera", icon: { Camera }, path: "/camera" },
  { id: 3, label: "Settings", icon: { Gear }, path: "/settings" },
  { id: 4, label: "Profile", icon: { User }, path: "/profile" },
];

export {buttons};
