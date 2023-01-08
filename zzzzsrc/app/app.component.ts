import { AccountService } from './account.service';
import { Component } from '@angular/core';
import { IAccount } from './account/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent {

  accounts:IAccount[] = [];
  constructor(private accountService: AccountService){
    this.accounts = accountService.accounts;
    console.log(this.accounts);
  }


  
UpdateAccount(account:IAccount){
  this.accountService.UpdateAccount(account);

}
createAccount(newAccount:{name:string, status:string}){
  this.accountService.createAccount(newAccount);
}

}
