export interface Image {
  url: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    medium?: { url: string };
    small?: { url: string };
  };
}
