import { NgModule     }    from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ToastModule    }  from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CardModule,
    ToastModule,
    ChartModule
  ]
})
export class PrimengModule { }
