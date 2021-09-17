import { Project } from './project.interface';

export interface Home {
  name: string;
  title: string;
  desc: string;
  projectList: { project: Project }[];
}

export interface HomeData {
  home: Home;
}
