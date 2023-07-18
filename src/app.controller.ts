import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('productos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  tipoProducts() {
    return this.appService.tipoProducts();
  }
  // PARCIAL -  MICHAEL VELIZ CADIMA 
  // Realizar endpoint de tipo GET que devuelva una coleccion de objeto tipo producto
  // nombre
  // descripcion
  // precio
  // marca
  // cantidad

}