import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormService } from '../../services/form.service';
import { DynamicFormComponent } from "@/app/components/dynamic-form/dynamic-form.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",  
  imports: [CommonModule, DynamicFormComponent]
})
export class HomePageComponent implements OnInit {
  formData: any;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formService.getFormData().subscribe({
      next: (data)=> {
        this.formData = data
        console.log(JSON.stringify(data));
        
      },
      error: (error)=>{
        console.error('Error fetching form data:', error)
      }
    });
  }

  onFormSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // Here you would typically send the form data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
