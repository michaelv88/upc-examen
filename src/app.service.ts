import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private tipoProduct = [
    {
      nombre: 'Producto 1',
      descripcion: 'producto get 1',
      precio: 10,
      marca: 'Marca 1',
      cantidad: 5,
    },
    {
      nombre: 'Producto 2',
      descripcion: 'producto get 2',
      precio: 20,
      marca: 'Marca 2',
      cantidad: 10,
    },
    {
      nombre: 'Producto 3',
      descripcion: 'producto get 3',
      precio: 30,
      marca: 'Marca 3',
      cantidad: 10,
    },
    
  ];

  tipoProducts() {
    return this.tipoProduct;
  }
}