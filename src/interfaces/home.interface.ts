import { Project, ProjectSlug } from './project.interface';

type SuperCategory = 'web' | 'print';

export interface Home {
  name: string;
  title: string;
  desc: string;
  printTitle: string;
  printDesc: string;
  superCategoryList: { projectList: { project: Project }[]; superCategory: SuperCategory }[];
}

export interface HomeProjectsSlug {
  superCategoryList: { projectList: { project: ProjectSlug }[]; superCategory: SuperCategory }[];
}

export interface HomeDataProjectsSlug {
  home: HomeProjectsSlug;
}

export interface HomeData {
  home: Home;
}
