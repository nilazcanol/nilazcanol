import { PrimengModule } from './../../../primeNg/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { UserAddAndUpdateComponent } from './user-add-and-update/user-add-and-update.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolPipe } from '../../pipes/rol.pipe';


@NgModule({
	declarations: [
		UsersListComponent,
		UserAddAndUpdateComponent,
		ModalDeleteUserComponent,
        RolPipe
	],
	imports: [CommonModule, ReactiveFormsModule, PrimengModule],
	exports: [
		UsersListComponent,
		UserAddAndUpdateComponent,
		ModalDeleteUserComponent,
        RolPipe
	],
})
export class UsersModule {}
