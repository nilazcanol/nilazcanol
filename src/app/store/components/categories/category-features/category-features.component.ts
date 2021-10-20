import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { category } from 'src/app/store/interfaces/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';

@Component({
	selector: 'app-category-features',
	templateUrl: './category-features.component.html',
	styles: [],
    providers: [MessageService]
})
export class CategoryFeaturesComponent implements OnInit {
	constructor(
        private fb: FormBuilder, 
        private categoryService:CategoriesService, 
        private messageService: MessageService
    ) {}


    @Input('categoryInput') categoryInput?: category;
	categoryWasSaved: boolean = false;

	@Output('categoryNew') categoryNew: EventEmitter<category> = new EventEmitter();

	myFormCategory!: FormGroup;

	ngOnInit(): void {
		this.myFormCategory = this.fb.group({
			name: ['', Validators.required],
		});
	}

	saveCategory() {
        this.categoryService.saveCategory(this.myFormCategory.controls['name'].value).subscribe( res => {
            this.categoryWasSaved = true;
            this.messageService.add({
                severity: 'success',
                summary: ' saved correctly',
                detail: '',
            });
            this.categoryNew.emit(res.category)
            
        }, (errors: HttpErrorResponse) => {
            if (errors.status == 400) {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error Bad Request: 400',
                    detail:
                        ' Error: Check the data entered: In case the error persists, contact the technical support.',
                });
            }
            if (errors.status == 500) {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error:  HTTP server internal error',
                    detail: 'Contact the technical support.',
                });
            }
          
        })
    }


	fieldIsValid(campo: string) {
		return (
			this.myFormCategory.controls[campo].errors &&
			this.myFormCategory.controls[campo].touched
		);
	}

	
	Restoreform() {
		setTimeout(() => {
            this.categoryWasSaved = false;
			this.myFormCategory.reset();
		}, 2000);
    }

  
}
