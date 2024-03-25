export type Category = {
  id: number;
  name: string;
  icon?: string;
};

export interface ItemModel {
  title: string;
  description: string;
  category: number;
  price: number;
  city: number;
  selectedFiles: File[];
}
