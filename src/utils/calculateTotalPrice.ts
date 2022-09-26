import { Product } from "../redux/slices/cart/types";


export const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((total, curr) => (total += curr.price * curr.count), 0);
};
