import { NgModule     }    from '@angular/core';
import { CommonModule }    from '@angular/common';
import { MenuModule   }    from 'primeng/menu';
import { CardModule   }    from 'primeng/card';
import { ButtonModule }    from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { SliderModule   }  from 'primeng/slider';
import { ToastModule    }  from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MenuModule,
    CardModule,
    ButtonModule,
    OrderListModule,
    SliderModule,
    ToastModule,

  ]
})
export class PrimengModule { }
