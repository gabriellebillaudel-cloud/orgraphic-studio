export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  technique: string;
  support: string;
  width: number;
  height: number;
  collection: string;
  createdAt: string;
  publishedInstagram: boolean;
  publishedFacebook: boolean;
  available: boolean;
}