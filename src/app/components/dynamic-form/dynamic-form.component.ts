import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',  
  templateUrl: './dynamic-form.component.html',  
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() formFields: any[] = [];
  @Input() submitLabel: string = 'Submit';
  @Output() formSubmit = new EventEmitter<FormGroup>();

  form: any;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes['formFields'].currentValue);
    if(changes['formFields'].currentValue){
      this.form = this.createForm();
    }
  }

  ngOnInit() {
  //  this.form =  this.fb.group({});
  }

  createForm(): FormGroup {
    const group = this.fb.group({});
    console.log("------------------------")
    console.log(this.formFields[0]);
    console.log("------------------------")
    if(this.formFields instanceof Array)
    this.formFields.forEach(field => {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.minLength) validators.push(Validators.minLength(field.minLength));
      if (field.maxLength) validators.push(Validators.maxLength(field.maxLength));
      if (field.regex) validators.push(Validators.pattern(field.regex));
      group.addControl(field.name, this.fb.control('', validators));
    });
    return group;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form);
    } else {
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
