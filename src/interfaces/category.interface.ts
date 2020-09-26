import { Project } from './project.interface';

export interface Category {
  id?: string;
  name: string;
  slug: string;
  projects?: Project[];
}
