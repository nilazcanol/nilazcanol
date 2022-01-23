import { NgModule     }    from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ToastModule    }  from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CardModule,
    ToastModule,
    ChartModule,
    CalendarModule
  ]
})
export class PrimengModule { }
