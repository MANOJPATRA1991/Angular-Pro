import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  @Input()
  message: Mail;

  constructor() { }

  ngOnInit() {
  }

}