import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./entities/product.entity";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  create(createProductDto: CreateProductDto) {
    const user = new this.productModel(createProductDto);

    return user.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  remove(id: string) {
    return this.productModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }
}
