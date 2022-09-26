import { Product } from "../redux/slices/cart/types";
import { calculateTotalPrice } from "./calculateTotalPrice";

export const getCartStateFromLS = () => {
   const products: Product[] = JSON.parse(localStorage.getItem('products') as string) || [];
   const totalPrice = calculateTotalPrice(products)

   return {
      products,
      totalPrice  
   }
}