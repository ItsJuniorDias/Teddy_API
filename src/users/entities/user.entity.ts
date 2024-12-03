import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Product } from "../../products/entities/product.entity";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  password: string;

  @Prop({ type: Types.ObjectId, ref: "Product" })
  products: Product[];
}

export const UserSchema = SchemaFactory.createForClass(User);
