import { Project } from "./types";

export const age = { int: 17, string: "seventeen" };
export const links = {
  github: "https://github.com/TheFoxCraft",
  discord: "https://discord.com/users/1068182029570691082",
  x: "https://x.com/TheFoxCraft_",
  kofi: "https://ko-fi.com/TheFoxCraft",

  matrix: "https://matrix.to/#/@tim:matrix.tim-fischer.dev",
  email: "mailto:hello@tim-fischer.dev",

  modrinth: "https://modrinth.com/user/TheFoxCraft",
  wakatime: "https://wakatime.com/@TheFoxCraft",
};

export const projectsLastUpdated = "2026-07-12"

export const projectShowOrder = [
  "minecraft-elements",
  "oneblockengine",
  "schulhub",
  "visitlog",
  "todolist-scheduled",
  "greenflow",
  "tim-fischer.dev",
  "nixos-config",
  "deathswap",
  "corpse",
  "encryptify",
  "tinyshop",
  "survival-core",
  "creeper-firework",
  "pfuxnetworkcore",
  "pixelbuild",
  "linkstack",
  "remotej",
];

export const projects: Project[] = [
  {
    id: "corpse",
    status: "onHold",
    title: "Corpse",
    description:
      "Paper plugin recreating the Corpse Mod by spawning a lootable NPC at the player's death location.",

    tags: ["Minecraft", "Gaming"],
    tech: ["Bukkit/Paper", "Kotlin"],
  },
  {
    id: "creeper-firework",
    status: "completed",
    title: "Creeper Firework",
    description:
      "A small Minecraft Paper Plugin for 1.21.11+ that lets Creeper explode into beautiful fireworks instead of destroying blocks.",

    tags: ["Minecraft", "Gaming"],
    tech: ["Bukkit/Paper", "Kotlin"],
  },
  {
    id: "deathswap",
    status: "onHold",
    title: "Death Swap",
    description:
      "Minecraft minigame plugin that swaps players every five minutes and supports teams, game customization, statistics and leaderboards.",

    tags: ["Minecraft", "Gaming"],
    tech: ["Bukkit/Paper", "Kotlin"],
  },
  {
    id: "encryptify",
    status: "onHold",
    title: "Encryptify",
    description:
      "A web application for learning RSA encryption by securely exchanging public-key encrypted messages in shared lobbies.",

    tags: ["School", "Education"],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.IO", "TypeScript"],
  },
  {
    id: "greenflow",
    status: "completed",
    title: "Greenflow",
    description:
      "School project simulating an economically optimized traffic light system.",

    tags: ["School"],
    tech: ["ReactRouter", "Typescript"],

  },
  {
    id: "linkstack",
    status: "archived",
    title: "LinkStack",
    description:
      "Yet another link-shortener, but a bit different. Built to learn NextJS.",

    tags: ["Linktree"],
    tech: ["Next.js", "Prisma", "Vercel"],

    private: true,
  },
  {
    id: "minecraft-elements",
    status: "maintained",
    title: "Minecraft Elements",
    description:
      "A progression-focused Minecraft experience featuring custom bosses, puzzles and unique gameplay mechanics.",

    tags: ["Datapack", "RPG", "Adventure"],
    tech: ["Minecraft", "Datapacks", "McFunction"],
  },
  {
    id: "nixos-config",
    status: "inDevelopment",
    title: "NixOS Config",
    description: "My personal NixOS and Hyprland configuration.",

    tags: ["Linux", "Setup"],
    tech: ["NixOS", "Hyprland", "Nix"],

    href: "https://github.com/TheFoxCraft/nixos-config",
  },
  {
    id: "oneblockengine",
    status: "onHold",
    title: "Oneblock Engine",
    description:
      "Framework for creating fully customizable Oneblock experiences using JSON-based datapack definitions and configure the behavior to your needs. Supports singleplayer, one-player-teams, teams, team-allies and much more.",

    tags: ["Minecraft", "Gaming"],
    tech: ["Bukkit/Paper", "Kotlin"],
  },
  {
    id: "pfuxnetworkcore",
    status: "onHold",
    title: "PfuxNetworkCore",
    description:
      "Backend for my Minecraft network including Velocity plugins, Paper plugins, an administration panel and much more is planned.",

    tags: ["Minecraft", "Gaming"],
    tech: [
      "ReactRouter",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Express",
      "Velocity",
      "Bukkit/Paper",
      "Kotlin",
      "Typescript",
    ],

    private: true,
  },
  {
    id: "pixelbuild",
    status: "completed",
    title: "PixelBuild",
    description:
      "Create pixel art and text using brick-like blocks on a 2D canvas and export the result as an image.",

    tags: ["Lego", "#quickSolutionToASmallProblem"],
    tech: ["ReactRouter", "Typescript"],
  },
  {
    id: "remotej",
    status: "archived",
    title: "RemoteJ",
    description:
      "Proof of concept for using BlueJ and Greenfoot in your browser using a noVNC connection to a remote-server rendering and executing the java-application",

    tags: ["School", "Education", "Proof of Concept"],
    tech: [
      "React Native",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Express",
      "Typescript",
    ],

    private: true,
  },
  {
    id: "schulhub",
    status: "inDevelopment",
    title: "SchulHub",
    description:
      "School organization platform for students with schedules, substitutions, collaboration tools, grades and more.",

    tags: ["School", "Organization", "Productivity"],
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],

    private: true,
  },
  {
    id: "survival-core",
    status: "onHold",
    title: "Survival Core Datapack",
    description:
      "Datapack adding configurable quality-of-life features such as playtime tracking, AFK management, custom player status and toggable night vision.",

    tags: ["Minecraft", "Gaming"],
    tech: ["Datapack", "McFunction"],

    private: true,
  },
  {
    id: "tim-fischer.dev",
    status: "maintained",
    title: "My Portfolio",
    description: "Well I guess you can already see what this project is about.",

    tags: ["Portfolio"],
    tech: ["Next.js", "TypeScript"],
  },
  {
    id: "tinyshop",
    status: "completed",
    title: "Tinyshop",
    description:
      "Point-of-sale system for school events featuring preorder management, kitchen displays, cashier terminals and a few other things.",

    tags: ["School"],
    tech: [
      "React Native",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Socket.IO",
      "Typescript",
    ],

    private: true,
  },
  {
    id: "todolist-scheduled",
    status: "completed",
    title: "Todolist Scheduled",
    description:
      "Task management app with recurring tasks, completion history and scheduling features.",

    tags: ["ToDoApp", "#MadeForMyDad"],
    tech: ["React Native", "Prisma", "PostgreSQL", "Express", "Typescript"],
  },
  {
    id: "visitlog",
    status: "completed",
    title: "VisitLog",
    description:
      "A personal visitor tracking app for managing locations, recording visits and viewing statistics about friends and visitors.",

    tags: ["Statistics", "#MadeForMyDad"],
    tech: ["React Native", "Prisma", "PostgreSQL", "Express", "Typescript"],
  },
];
