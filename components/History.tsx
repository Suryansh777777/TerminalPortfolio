"use client";

import React from "react";
import { useTheme } from "../store/themeStore";
import { useHistory } from "../store/historyStore";
import Ps1 from "./Ps1";

const History: React.FC = () => {
  const { theme } = useTheme();
  const { history } = useHistory();

  return (
    <div>
      {history.map(({ command, outputs }, index) => (
        <div key={index} style={{ color: theme.foreground }}>
          <div className="flex flex-col md:flex-row">
            <Ps1 />
            <div className="flex">
              <p className="visible md:hidden">❯</p>
              <p className="px-2">{command}</p>
            </div>
          </div>
          {outputs.map((output, i) => (
            <p key={i} className="whitespace-pre-wrap">
              {output}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
