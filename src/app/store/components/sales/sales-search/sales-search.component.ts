import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Month } from 'src/app/store/interfaces/others/month.interface';
import { saleResponseGet } from 'src/app/store/interfaces/sales/saleResponseGet.inteface';
import { SalesService } from 'src/app/store/services/sales.service';

@Component({
	selector: 'app-sales-search',
	templateUrl: './sales-search.component.html',
	providers: [MessageService],
	styles: [],
})
export class SalesSearchComponent implements OnInit {
	constructor(private fb: FormBuilder, private salesService: SalesService) {}

	searchForm!: FormGroup;

	@Output('salesResult') salesResult: EventEmitter<
		saleResponseGet
	> = new EventEmitter();

	listMonth: Month[] = [
		{ number: 1, name: 'January' },
		{ number: 2, name: 'February' },
		{ number: 3, name: 'March' },
		{ number: 4, name: 'April' },
		{ number: 5, name: 'May' },
		{ number: 6, name: 'June' },
		{ number: 7, name: 'July' },
		{ number: 8, name: 'August' },
		{ number: 9, name: 'September' },
		{ number: 10, name: 'October' },
		{ number: 11, name: 'November' },
		{ number: 12, name: 'December' },
	];

	listYear!: number[];
    monthNow: number = new Date().getMonth()+1;
    yearNow: number = new Date().getFullYear();
	ngOnInit(): void {
		this.searchForm = this.fb.group({
			month: ['', Validators.required],
			year: ['', Validators.required],
		});

		this.listYear = this.getLastFiveYears();

	}

	getLastFiveYears() {
		const fromTheYear = new Date().getUTCFullYear();
		const untilTheYear = fromTheYear - 4;
		const arrayYear: number[] = [];
		for (let index = untilTheYear; index <= fromTheYear; index++) {
			arrayYear.push(index);
		}
		return arrayYear;
	}

	getSales = () => {

        const date = this.searchForm.controls['year'].value +'-' +this.searchForm.controls['month'].value + '-01';
        this.salesService.getListSales(date).subscribe((res) => {
            console.log(res.Sales);
			this.salesResult.emit(res);
		});
	};
}
