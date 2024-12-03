import { Product } from "../../products/entities/product.entity";

export class CreateUserDto {
  email: string;
  name: string;
  age: number;
  password: string;
  products: Product[];
}
