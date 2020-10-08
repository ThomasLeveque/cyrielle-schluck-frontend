import { Category } from './category.interface';
import { Image } from './image.interface';

export type textsColorType = 'myWhite' | 'myBlack';

export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  slug: string;
  textsColor: textsColorType;
  category?: Category;
  image: Image;
  color: string;
  projectSteps: ProjectStep[];
}

interface ProjectStep {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  bgColor?: string;
  stepItems: StepItem[];
}

interface StepItem {
  id: string;
  title?: string;
  grid: number;
  itemImages: ItemImage[];
}

interface ItemImage {
  id: string;
  grid?: number;
  size?: number;
  image: Image;
}

export interface ProjectsData {
  projects: Project[];
}

export interface ProjectData {
  projectBySlug: Project;
}
