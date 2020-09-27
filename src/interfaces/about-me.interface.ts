import { Image } from './image.interface';

export interface AboutMe {
  image: Image;
  desc: string;
  recos: Reco[];
}

export interface AboutMeData {
  aboutMe: AboutMe;
}

interface Reco {
  text: string;
  source: string;
}
