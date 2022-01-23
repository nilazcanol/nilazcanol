import { NgModule     }    from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ToastModule    }  from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CardModule,
    ToastModule,
    ChartModule,
    CalendarModule,
    TableModule,
    ButtonModule
  ]
})
export class PrimengModule { }
