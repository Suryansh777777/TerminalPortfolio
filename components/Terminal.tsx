"use client";

import React, { useEffect } from "react";
import History from "./History";
import Input from "./Input";
import { useHistory } from "../store/historyStore";
import { commands } from "../utils/commands";

const Terminal: React.FC = () => {
  const { history, addToHistory } = useHistory();

  useEffect(() => {
    if (history.length === 0) {
      const bannerCommand = commands["banner"];
      if (bannerCommand) {
        const output = bannerCommand();
        addToHistory("banner", [output]);
      }
    }
  }, []);

  return (
    <div className="font-mono">
      <History />
      <Input />
    </div>
  );
};

export default Terminal;
