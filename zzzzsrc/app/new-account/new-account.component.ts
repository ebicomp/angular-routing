import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { IAccount } from '../account/account';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private logging:LoggingService, private accountService:AccountService){

  }

  onAdd(name:string, status:string){  
    this.accountService.createAccount({ name:name, status:status });
    this.logging.LogStatusChange('unknown');
  }
}
