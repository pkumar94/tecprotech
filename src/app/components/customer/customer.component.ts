import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  emailid: string;
  imei: number;
  contact: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'rahul', imei: 978515948328192, emailid: 'rsolanki@gmail.com', contact: 9987675847 },
  { position: 2, name: 'vrushabh', imei: 978515948328192, emailid: 'vmane@gmail.com', contact: 8987653423 },
  { position: 3, name: 'aarahul', imei: 978515948328192, emailid: 'aarsolanki@gmail.com', contact: 8767675847 },
  { position: 4, name: 'bbrahul', imei: 978515948328192, emailid: 'cbrsolanki@gmail.com', contact: 8767675847 },
  { position: 5, name: 'akash', imei: 978515948328192, emailid: 'akashk@gmail.com', contact: 9786755847 },
  { position: 6, name: 'manmath', imei: 978515948328192, emailid: 'mmauli@gmail.com', contact: 8055675847 },
  { position: 7, name: 'dinesh', imei: 978515948328192, emailid: 'kambled@gmail.com', contact: 8767675847 },
  { position: 8, name: 'pramod', imei: 978515948328192, emailid: 'pchavhan@gmail.com', contact: 8767675847 },
  { position: 9, name: 'mahesh', imei: 978515948328192, emailid: 'mpagar@gmail.com', contact: 8767675847 },
  { position: 10, name: 'nilesh', imei: 978515948328192, emailid: 'nbhoskar@gmail.com', contact: 8767675847 },
  { position: 11, name: 'abhishek', imei: 978515948328192, emailid: 'amodi@gmail.com', contact: 8767675847 },
];
@Component({
  selector: 'customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.scss']
})
export class CustomerComponent {
  opened = true;
  constructor(private formBuilder: FormBuilder) { }
  customerFormGroup: FormGroup;
  displayedColumns: string[] = ['position', 'name', 'imei', 'emailid', 'contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.customerFormGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      imei: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      purchasePrice: new FormControl('', [Validators.required])
    });
  }
}
