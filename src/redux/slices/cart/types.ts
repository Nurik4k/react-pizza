export type Product = {
   imageUrl: string,
   name: string,
   type: string,
   size: number,
   id: string,
   price: number,
   count: number,
 }
 
export interface CartSliceState {
   totalPrice: number,
   products: Product[],
}
