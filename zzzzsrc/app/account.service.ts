import { IAccount } from "./account/account";

export class AccountService {
     accounts:IAccount[] = [
        {id:1,  name:'Master Account' , status:'active'},
        {id:2, name:'Hidden Account' , status:'inactive'},
        {id:3 ,name:'Test Account' , status:'unknown'}
      ];


UpdateAccount(account:IAccount){
    const accountIndex = this.accounts.findIndex(q=>q.id == account.id);
    this.accounts[accountIndex].status = account.status;

  }
  createAccount(newAccount:{name:string, status:string}){
    const accountNumber = this.accounts.length;
    const createdAccount:IAccount = { id:accountNumber, name:newAccount.name, status:newAccount.status };
    this.accounts.push(createdAccount);
  }
      
}