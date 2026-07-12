export const statusInfo = {
  inDevelopment: {
    label: "In Development",
    description:
      "This project is actively being developed and new features are being added.",
  },
  maintained: {
    label: "Maintained",
    description:
      "Development is complete, but the project may still receive updates and bug fixes.",
  },
  completed: {
    label: "Completed",
    description:
      "The project is complete and no further development is planned.",
  },
  onHold: {
    label: "On Hold",
    description:
      "Development is temporarily paused. The core functionality is complete, but some features are missing that will be added in the future.",
  },
  archived: {
    label: "Archived",
    description:
      "This project is no longer maintained and is kept for reference. The core functionality is complete, although some planned features were never implemented.",
  },
} as const;
