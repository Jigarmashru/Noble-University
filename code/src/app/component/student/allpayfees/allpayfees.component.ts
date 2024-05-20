import { Component } from '@angular/core';

@Component({
  selector: 'app-allpayfees',
  templateUrl: './allpayfees.component.html',
  styleUrls: ['./allpayfees.component.scss']
})
export class AllpayfeesComponent {

  feesdata = [
    {
      paidamount: "30,000.00",
      paytype: "Online Payment",
      accounthead: "Tution Fee",
      paydate: "06/03/2024",
      receiptno: "34649",
      orderid: "(Instrument No.:403630650270)",
      receipt: "receipt"
    },
    {
      paidamount: "20,000.00",
      paytype: "Online Payment",
      accounthead: "Tution Fee",
      paydate: "06/03/2024",
      receiptno: "34649",
      orderid: "(Instrument No.:403630650270)",
      receipt: "receipt"
    },
    {
      paidamount: "10,000.00",
      paytype: "Online Payment",
      accounthead: "Tution Fee",
      paydate: "06/03/2024",
      receiptno: "34649",
      orderid: "(Instrument No.:403630650270)",
      receipt: "receipt"
    },
  ]
  
}
