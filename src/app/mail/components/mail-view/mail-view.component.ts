import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {

  message: Observable<Mail> = this.route.data.pipe(pluck('message'));

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}