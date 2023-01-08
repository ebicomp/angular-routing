import { AccountService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAccount } from './account';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private accountService:AccountService){

  }
  @Input() account!:IAccount;

OnSetStatus(status:string){
  
  this.accountService.UpdateAccount({...this.account, status:status});
}
}
