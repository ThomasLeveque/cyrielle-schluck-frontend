export interface Image {
  url: string;
  formats?: {
    thumbnail?: { url: string };
    medium?: { url: string };
    small?: { url: string };
  };
}
