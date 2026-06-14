import { SetStateAction } from "react";
import { age, links } from "../const";

const commands: Record<string, string> = {
  help: `Available commands:

whoami
stack
projects
contact
github
discord
clear`,

  whoami: `Tim Fischer
${age.int} year old student
Full-Stack Developer`,

  stack: `React Native
Next.js
Node.js
Express
PostgreSQL
Socket.IO`,

  projects: `Minecraft Elements
SchulHub`,

  contact: `GitHub: ${links.github}
Discord: ${links.discord}
Matrix: ${links.matrix}`,
};

export type HistoryEntry =
  | {
      type: "command";
      content: string;
    }
  | {
      type: "response";
      content: string;
      color?: string;
    };

export function executeCommand(
  rawCommand: string,
  setHistory: (value: SetStateAction<HistoryEntry[]>) => void,
) {
  const command = rawCommand.trim();

  if (!command) return null;

  const commandEntry: HistoryEntry = {
    type: "command",
    content: `tim@portfolio:~$ ${command}`,
  };

  function defaultResponse(content: string, color?: string) {
    setHistory((prev) => [
      ...prev,
      commandEntry,
      { type: "response", content, color },
    ]);
  }

  if (command === "clear") {
    setHistory([]);
    return;
  }

  if (command === "github") {
    defaultResponse("Opening GitHub...");

    window.open(links.github, "_blank");

    return;
  }

  if (command === "discord") {
    defaultResponse("Opening Discord...");

    window.open(links.discord, "_blank");

    return;
  }

  if (
    command === "sudo rm -rf /" ||
    command === "sudo rm -rf --no-preserve-root /"
  ) {
    document.body.innerHTML = "";
    return;
  }

  if (command.startsWith("sudo ")) {
    defaultResponse("tim is not in the sudoers file.");
    return;
  }

  const output = commands[command];

  setHistory((prev) => {
    const next: HistoryEntry[] = [
      commandEntry,
      {
        type: "response",
        content: output ?? `Command not found: ${command}`,
      },
    ];

    if (!output) {
      next.push({
        type: "response",
        content: 'Type "help" to get a list of commands',
        color: "yellow",
      });
    }

    return [...prev, ...next];
  });
}
