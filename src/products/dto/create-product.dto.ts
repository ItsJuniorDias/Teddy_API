export class CreateProductDto {
  name: string;
  type: "ELETRONICS" | "HANDMADE";
  color: string;
  price: number;
}
