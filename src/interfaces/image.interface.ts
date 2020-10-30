export interface Image {
  url: string;
  width: number;
  height: number;
  alternativeText: string;
  formats?: {
    thumbnail?: { url: string };
    medium?: { url: string };
    small?: { url: string };
  };
}
