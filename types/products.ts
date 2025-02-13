export interface Products {
  _id: string;
  id: string;
  title: string;
  tags: string[];
  _type: "products";
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    }
  };
  price: number;
  priceWithoutDiscount?: string;
  badge?: string;
  description: string;
  inventory: number;
  slug: {
    _type: "slug";
    current: string;
  };
  categories: string[];
}