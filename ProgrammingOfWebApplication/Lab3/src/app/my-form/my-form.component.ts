import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  invoiceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnInit() {
    this.invoiceForm = this.fb.group({
      issuer: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        nip: ['', Validators.required],
        bankAccountNumber: ['', Validators.required]
      }),
      customer: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        nip: ['']
      }),
      invoiceNumber: ['', Validators.required],
      issueDate: ['', Validators.required],
      saleDate: ['', Validators.required],
      paymentDueDate: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      items: this.fb.array([this.createItem()])
    });
  }

  get issuer(): FormGroup {
    return this.invoiceForm.get('issuer') as FormGroup;
  }

  get customer(): FormGroup {
    return this.invoiceForm.get('customer') as FormGroup;
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }
  onSubmit() {


  }

  private createItem() {

  }
}
