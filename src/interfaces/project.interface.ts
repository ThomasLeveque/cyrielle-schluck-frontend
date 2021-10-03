import { Category } from './category.interface';
import { Image } from './image.interface';

export type textsColorType = 'myWhite' | 'myBlack';

export interface Project {
  id: string;
  name: string;
  isShortName: boolean;
  formatedName?: string;
  itemFormatedName?: string;
  mobileName?: string;
  shortDesc: string;
  description: string;
  slug: string;
  textsColor: textsColorType;
  categories: Category[];
  image: Image;
  mobileImage: Image;
  color: string;
  projectSteps: ProjectStep[];
}

export interface ProjectStep {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  bgColor?: string;
  stepItems: StepItem[];
}

export interface StepItem {
  id: string;
  title?: string;
  grid: number;
  itemImages: ItemImage[];
}

export interface ItemImage {
  id: string;
  grid?: number;
  tabletGrid?: number;
  mobileGrid?: number;
  size?: number;
  isSwipable: boolean;
  image: Image;
  topSpace: number;
  mobileTopSpace: number;
  customGridSize: number;
}

export interface ProjectsData {
  projects: Project[];
}

export type ProjectSlug = Pick<Project, 'slug'>;

export interface ProjectsSlugData {
  projects: ProjectSlug[];
}

export interface ProjectData {
  projectBySlug: Project;
}
