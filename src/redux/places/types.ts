export type PlaceInfo = {
  id: string;
  place: string;
  image: string;
  price: string;
  rating: number;
  description: string;
};

export type State = {
  isLoading: boolean;
  placeData: PlaceInfo[];
  error: boolean;
};
