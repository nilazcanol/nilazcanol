import { Component } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
	themeLink = document.querySelector('#theme');
	constructor() {}

	selectTheme(theme: string) {
		const url = `./assets/Css/Themes/${theme}.css`;
		localStorage.setItem('theme', url);
		this.themeLink?.setAttribute('href', url);
		this.showToast('The change is saved', '', 'success');
	}

	showToast(
		title: string,
		detai: string,
		icon: SweetAlertIcon,
		timeOut: number = 2000
	) {
		Swal.fire(title, detai, icon);
		setInterval(() => {
			Swal.close();
		}, timeOut);
	}
}
