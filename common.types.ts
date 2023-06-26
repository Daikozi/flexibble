import { User, Session } from "next-auth";

type CreateBy = {
  name: string;
  email: string;
  avatarUrl: string;
  id: string;
};

type PageInfo = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
};

type Node = { node: ProjectInterface }[];

type Project = {
  edges: Node;
  pageInfo: PageInfo;
};

export type FormState = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
};

export type ProjectInterface = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
  id: string;
  createdBy: CreateBy;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  description: string | null;
  avatarUrl: string;
  githubUrl: string | null;
  linkedInUrl: string | null;
  projects: Project;
};

export type SessionInterface = {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
} & Session;

export type ProjectForm = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
};
