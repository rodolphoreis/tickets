export type EventModel = {
  id: number;
  name: string;
  date: string;
  image_url: string;
  available_spots: number;
  price: number;
  created_at: string;
};

export enum SpotStatus {
  available = "available",
  sold = "sold",
}

