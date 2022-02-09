import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import { ProductRepository } from '../repositories/Products.Repository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.find();

    return products;
  }
}

export default ListProductService;
