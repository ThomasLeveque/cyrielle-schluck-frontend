import { Image } from './image.interface';

export interface AboutMe {
  image: Image;
  desc: string;
  cv: Image;
  recos: Reco[];
}

export interface AboutMeData {
  aboutMe: AboutMe;
}

export interface Reco {
  id: string;
  text: string;
  source: string;
  sourceUrl?: string;
}
