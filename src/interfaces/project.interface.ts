import { Category } from './category.interface';
import { Image } from './image.interface';

export type textsColorType = 'myWhite' | 'myBlack';

export interface Project {
  id?: string;
  name: string;
  shortDesc: string;
  desc: string;
  slug: string;
  textsColor: textsColorType;
  category: Category;
  image: Image;
  color: string;
}

export interface ProjectsData {
  projects: Project[];
}

export interface ProjectData {
  projectBySlug: Project;
}
