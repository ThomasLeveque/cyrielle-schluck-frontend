import { Image } from './image.interface';

export interface AboutMe {
  image: Image;
  desc: string;
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
