import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rol'
})
export class RolPipe implements PipeTransform {

    transform (valor:string):string {

        switch (valor) {
            case 'ADMIN_ROLE':
                return 'ADMIN'
                break;
            case 'EMPLOYEE_ROLE':
                return 'EMPLOYEE'
                break;
        
            default:
                return ''
                break;
        }
  
          
      }

}
