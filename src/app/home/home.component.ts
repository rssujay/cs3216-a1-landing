import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  validateForm: FormGroup;
  validateFormBottom: FormGroup;
  validateFormMiddle: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  submitFormMiddle(): void {
    for (const i in this.validateForm.controls) {
      this.validateFormMiddle.controls[i].markAsDirty();
      this.validateFormMiddle.controls[i].updateValueAndValidity();
    }
  }
  submitFormBottom(): void {
    for (const i in this.validateFormBottom.controls) {
      this.validateFormBottom.controls[i].markAsDirty();
      this.validateFormBottom.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
    });
    this.validateFormBottom = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
    });
    this.validateFormMiddle = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
    });
  }

}
