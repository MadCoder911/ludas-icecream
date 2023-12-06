interface Section {
  titleImg: string;
  productImage: string;
  productName: string;
  title: string;
  description: string;
  sellingTitle: string;
  price: number;
  id: number;
}
interface FeaturedProduct {
  id: string;
  name: string;
  title_img: string;
  short_description: string;
  long_description: string;
  products_page_description: string;
  product_page_description: [string];
  price_before: number;
  price_after: number;
  nutrition_facts: {
    protein: number;
    carb: number;
    fats: number;
    calories: number;
  };
  home_pic: string;
  product_page_pics: [string];
  background_pic: string;
  cart_pic: string;
  featured: boolean;
}
