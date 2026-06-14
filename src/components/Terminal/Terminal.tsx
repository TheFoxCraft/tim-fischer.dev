"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Terminal.module.css";
import clsx from "clsx";
import {
  executeCommand,
  HistoryEntry,
} from "@/utils/terminal/commandExecutor";
import { useVisible } from "@/utils/visibleDetector";

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [interactive, setInteractive] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const visible = useVisible(bodyRef);

  useEffect(() => {
    if (!visible) return;

    const bootLines: HistoryEntry[] = [
      { type: "response", content: "Booting portfolio..." },
      { type: "response", content: "Loading projects..." },
      { type: "response", content: "Loading skills..." },
      { type: "response", content: "Loading experience..." },
      { type: "response", content: "Starting terminal..." },
      { type: "response", content: "Done." },
      { type: "response", content: "" },
      {
        type: "response",
        content: 'Type "help" to get started.',
        color: "yellow",
      },
    ];

    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setHistory((prev) => [...prev, line]);

        if (index === bootLines.length - 1) {
          setTimeout(async () => {
            setBooted(true);
            await delay(1000);
            await typeCommand("whoami");
            await delay(400);

            setInteractive(true);
          });
        }
      }, index * 450);
    });
  }, [visible]);

  async function typeCommand(command: string) {
    let current = "";

    for (const char of command) {
      current += char;

      setInput(current);

      await delay(100);
    }

    await delay(300);

    executeCommand(command, setHistory);

    setInput("");
  }

  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
    });
  }, [history]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    executeCommand(input, setHistory);
    setInput("");
  };

  return (
    <section className={styles.section} id="terminal">
      <span className={styles.title}>WELCOME</span>
      <div className={styles.window}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <span />
            <span />
            <span />
          </div>

          <p>tim@portfolio:~</p>
        </div>

        <div
          className={styles.body}
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, index) => (
            <pre
              key={index}
              className={clsx(
                styles.line,
                line.type == "command" && styles.lineAsCommand,
              )}
              style={{
                color: line.type == "response" ? line.color : undefined,
              }}
            >
              {line.content}
            </pre>
          ))}

          {booted && (
            <form onSubmit={handleSubmit} className={styles.inputRow}>
              <span className={styles.prompt}>tim@portfolio:~$</span>

              <span
                className={styles.inputText}
                onClick={() => inputRef.current?.focus()}
              >
                {input}
                <span className={styles.cursor} />
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
                autoComplete="off"
                disabled={!interactive}
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
