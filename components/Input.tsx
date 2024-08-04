"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../store/themeStore";
import { useHistory } from "../store/historyStore";
import { commands } from "../utils/commands";
import { track } from "../utils/tracking";

const Input: React.FC = () => {
  const [command, setCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const { history, addToHistory, clearHistory } = useHistory();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const [commandName, ...args] = command.split(" ");
      if (process.env.NEXT_PUBLIC_TRACKING_ENABLED === "true") {
        track(commandName, ...args);
      }
      const commandFunction = commands[commandName as keyof typeof commands];
      if (commandFunction) {
        const output = await commandFunction(args);
        if (commandName !== "clear") {
          addToHistory(command, [output]);
        }
      } else {
        addToHistory(command, [`${commandName}: command not found`]);
      }
      setCommand("");
      setHistoryIndex(-1);
    } else if (event.key === "ArrowUp") {
      if (historyIndex < history.length - 1) {
        setHistoryIndex((prevIndex) => prevIndex + 1);
        setCommand(history[history.length - 1 - historyIndex]?.command || "");
      }
      event.preventDefault();
    } else if (event.key === "ArrowDown") {
      if (historyIndex > -1) {
        setHistoryIndex((prevIndex) => prevIndex - 1);
        setCommand(
          historyIndex > 0
            ? history[history.length - 1 - (historyIndex - 1)].command
            : ""
        );
      }
      event.preventDefault();
    } else if (event.key === "Tab") {
      event.preventDefault();
      const autoCompleteCommand = Object.keys(commands).find((cmd) =>
        cmd.startsWith(command)
      );
      if (autoCompleteCommand) {
        setCommand(autoCompleteCommand);
      }
    } else if (event.ctrlKey && event.key === "l") {
      event.preventDefault();
      clearHistory();
    }
  };

  return (
    <div className="flex w-full">
      <p className="visible md:hidden">❯</p>
      <input
        ref={inputRef}
        id="command-input"
        name="command-input"
        aria-label="Command input"
        className="w-full px-2 bg-transparent outline-none"
        type="text"
        style={{ color: theme.foreground }}
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
