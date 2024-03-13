export type Category = {
  id: number;
  name: string;
  icon?: string;
};

export interface ItemModel {
  title: string;
  description: string;
  category: string;
  price: number;
  city: string;
  selectedFiles: File[];
}
