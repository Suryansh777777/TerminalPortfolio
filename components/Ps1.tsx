"use client";

import React from "react";
import { useTheme } from "../store/themeStore";

const Ps1: React.FC = () => {
  const { theme } = useTheme();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "localhost";

  return (
    <h1 className="font-bold flex">
      <span style={{ color: theme.yellow }}>surya</span>
      <span style={{ color: theme.white }}>@</span>
      <span style={{ color: theme.green }}>{hostname}</span>
      <span style={{ color: theme.white }}>:~$</span>
    </h1>
  );
};

export default Ps1;
