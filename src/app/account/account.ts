import { Component } from '@angular/core';
import { BalanceCard } from '../balance-card/balance-card';

@Component({
  imports: [BalanceCard, BalanceCard],
  selector: 'app-account',
  styleUrl: './account.css',
  templateUrl: './account.html',
})
export class Account {
  username: string = "abdullah"
  accountBalance: number = 1000;

  onWithDraw(amount: number) {  
    this.accountBalance = this.accountBalance - amount;

    console.log('Withdrawn:', amount);

    console.log('Remaining balance:', this.accountBalance);
  }
}
