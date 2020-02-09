import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mail-app',
	templateUrl: './mail-app.component.html',
	styleUrls: ['./mail-app.component.scss'],
})
export class MailAppComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	// These are not commonly used

	onActivate(event) {
		console.log('Activate', event);
	}

	onDeactivate(event) {
		console.log('Deactivate', event);
	}
}
