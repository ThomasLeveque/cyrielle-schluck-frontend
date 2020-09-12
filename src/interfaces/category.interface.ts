import { Project } from './project.interface';

export interface Category {
  id?: string;
  name: string;
  projects?: Project[];
}
