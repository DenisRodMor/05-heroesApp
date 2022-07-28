import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(item: Heroe ) : string {

    return `assets/heroes/${ item.id }.jpg`;

  }

}
