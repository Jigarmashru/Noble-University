import { Component } from '@angular/core';

@Component({
  selector: 'app-payfeesonline',
  templateUrl: './payfeesonline.component.html',
  styleUrls: ['./payfeesonline.component.scss']
})
export class PayfeesonlineComponent {

  dataArray = [
    { department: 'ARCHITECTURE', courses: 'B.ARCH', accountnumber: 71012160000108, accountname: 'NOBLE ARCHITECTURE COLLEGE' },
    { department: 'AYURVED', courses: 'B.A.M.S', accountnumber: 71012160000131, accountname: 'NOBLE AYURVED COLLEGE AND RESEARCH INSTITUTE' },
    { department: 'EDUCATION', courses: 'B.ED', accountnumber: 71012160000035, accountname: 'SHRI VIVEKBHARTI TRUST B.ED COLLEGE' },
    { department: 'SCIENCE', courses: 'B.SC', accountnumber: 71012160000092, accountname: 'NOBLE SCIENCE COLLEGE' },
    { department: 'SCIENCE', courses: 'M.SC', accountnumber: 71012160000092, accountname: 'NOBLE SCIENCE COLLEGE' },
    { department: 'SCIENCE', courses: 'DMLT', accountnumber: 71033070001129, accountname: 'NOBLE DMLT CENTRE' },
    { department: 'NURSING', courses: 'B.SC NURSING', accountnumber: 71032200001087, accountname: 'NOBLE B.SC NURSING COLLEGE' },
    { department: 'NURSING', courses: 'POST BASIC B.Sc.NURSING', accountnumber: 71032200001091, accountname: 'NOBLE POST BASIC B.SC NURSING COLLEGE' },
    { department: 'NURSING', courses: 'GNM NURSING', accountnumber: 71012160000069, accountname: 'NOBLE NURSING SCHOOL' },
    { department: 'DIPLOMA', courses: 'ENGINEERING	DIPLOMA', accountnumber: 71012160000054, accountname: 'NOBLE DIPLOMA ENGINEERING COLLEGE' },
    { department: 'BACHELOR', courses: 'OF ENGINEERING	B.E', accountnumber: 71012160000040, accountname: 'NOBLE ENGINEERING COLLEGE' },
    { department: 'MASTER', courses: 'OF ENGINEERING	M.E', accountnumber: 71012160000040, accountname: 'NOBLE ENGINEERING COLLEGE' },
    { department: 'MANAGEMENT', courses: 'B.B.A(BKNMU)', accountnumber: 120000539716, accountname: 'NOBLE INSTITUTE OF BUSINESS MANAGEMENT' },
    { department: 'MANAGEMENT', courses: 'I.M.B.A(GTU)', accountnumber: 71012160000040, accountname: 'NOBLE ENGINEERING COLLEGE' },
    { department: 'MANAGEMENT', courses: 'M.B.A', accountnumber: 71012160000040, accountname: 'NOBLE ENGINEERING COLLEGE' },
    { department: 'HOMOEOPATHY', courses: 'B.H.M.S', accountnumber: 71012160000146, accountname: 'NOBLE HOMEOPATHIC COLLEGE AND RESEARCH INSTITUTE' },
    { department: 'PHARMACY', courses: 'B.PHARM', accountnumber: 71012160000016, accountname: 'NOBLE PHARMACY COLLEGE' },
    { department: 'PHARMACY', courses: 'M.PHARM', accountnumber: 71012160000016, accountname: 'NOBLE PHARMACY COLLEGE' },
    { department: 'ANIMAL', courses: 'HUSBANDRY	DIPLOMA VETERINARY', accountnumber: 71012160000112, accountname: 'NOBLE POLYTECHNIC IN ANIMAL HUSBANDRY COLLEGE' }
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
