import { Category } from './category.interface';
import { Image } from './image.interface';

export interface Project {
  id?: string;
  name: string;
  shortDesc: string;
  desc: string;
  category: Category;
  image: Image;
  color: string
}

export interface ProjectsData {
  projects: Project[];
}
