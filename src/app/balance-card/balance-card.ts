import { Component, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-balance-card',
  styleUrl: './balance-card.css',
  templateUrl: './balance-card.html',
})
export class BalanceCard {
  @Input() username: string = '';
  @Input() balance: number = 1000;

  @Output() withdraw  = new EventEmitter<number>();


  withdrawMoney() {
    if (this.balance >= 100) {
      this.withdraw.emit(100);
    }
  }
}
