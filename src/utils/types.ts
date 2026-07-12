export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  href?: string;
  private?: boolean;
  status: ProjectStatus;
}

export type ProjectStatus =
  | "inDevelopment"
  | "maintained"
  | "completed"
  | "onHold"
  | "archived";
