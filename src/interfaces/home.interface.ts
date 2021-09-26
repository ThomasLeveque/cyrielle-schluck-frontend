import { Project } from './project.interface';

export interface Home {
  name: string;
  title: string;
  desc: string;
  printTitle: string;
  printDesc: string;
  superCategoryList: { projectList: { project: Project }[]; superCategory: 'web' | 'print' }[];
}

export interface HomeData {
  home: Home;
}
