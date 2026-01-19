import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { request, gql } from 'graphql-request';

@Injectable()
export class ProductsService {
  private readonly endpoint = process.env.HYGRAPH_ENDPOINT || '';
  private readonly token = process.env.HYGRAPH_TOKEN || '';

  async getProducts() {
    const query = gql`
      query GetProducts {
        products {
          id
          name
          slug
          price
          description {
            text
          }
          category {
            name
          }
          sizes
          image {
            url
          }
        }
      }
    `;

    try {
      const data: any = await request(this.endpoint, query, {}, {
        Authorization: `Bearer ${this.token}`,
      });
      return data.products;
    } catch (error) {
      console.error('Error fetching products from Hygraph:', error);
      throw new InternalServerErrorException('Failed to fetch products');
    }
  }

  async getProductById(id: string) {
    const query = gql`
      query GetProduct($id: ID!) {
        product(where: { id: $id }) {
          id
          name
          price
          description
          category
          image {
            url
          }
        }
      }
    `;

    try {
      const data: any = await request(this.endpoint, query, { id }, {
        Authorization: `Bearer ${this.token}`,
      });
      return data.product;
    } catch (error) {
      console.error(`Error fetching product ${id} from Hygraph:`, error);
      throw new InternalServerErrorException('Failed to fetch product');
    }
  }
}
