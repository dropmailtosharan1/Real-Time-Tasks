import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss',
})
export class Test1Component implements OnInit {
  // Multiple Check box
  testForm;
  languages = ['C', 'C++', 'Java', 'Python', 'Angular', 'React', 'Vue'];
  constructor(private formBuilder: FormBuilder) {
    this.testForm = this.formBuilder.group({
      languages: this.formBuilder.array([]),
    }); 
  }  

  updateLanguages(event: any) {
    console.log(event.target.checked);
    let languageArray = this.testForm.get('languages') as FormArray;
    if (event.target.checked) {
      languageArray.push(this.formBuilder.control(event.target.value));
    } else {
      let index = languageArray.controls.findIndex(
        (control) => control.value === event.target.value
      );
      languageArray.removeAt(index);
    }
  }
  // Dropdown with filter
  states = [
    { id: 1, name: 'Andhra Pradesh', code: 'AP' },
    { id: 2, name: 'Telangana', code: 'TG' },
    { id: 3, name: 'Tamilnadu', code: 'TN' },
    { id: 4, name: 'Karnataka', code: 'KA' },
  ];

  districts = [
    { id: 1, name: 'Kurnool', state_id: 1 },
    { id: 2, name: 'Nandyal', state_id: 1 },
    { id: 3, name: 'Kadapa', state_id: 1 },
    { id: 4, name: 'Anantapur', state_id: 1 },
    { id: 5, name: 'Chittor', state_id: 1 },
    { id: 6, name: 'Hyderabad', state_id: 2 },
    { id: 7, name: 'Vikarabad', state_id: 2 },
    { id: 8, name: 'Mahaboobnagar', state_id: 2 },
    { id: 9, name: 'Karimnagar', state_id: 2 },
    { id: 10, name: 'Warangal', state_id: 2 },
    { id: 11, name: 'Chennai', state_id: 3 },
    { id: 12, name: 'Coimbatore', state_id: 3 },
    { id: 13, name: 'Vellore', state_id: 3 },
    { id: 14, name: 'Madurai', state_id: 3 },
    { id: 15, name: 'Kanchipuram', state_id: 3 },
    { id: 16, name: 'Bangalore', state_id: 4 },
    { id: 17, name: 'Mysore', state_id: 4 },
    { id: 18, name: 'Raichur', state_id: 4 },
    { id: 19, name: 'Ballary', state_id: 4 },
    { id: 20, name: 'Tumkur', state_id: 4 },
  ];

  ngOnInit() {}

  filteredDistricts = this.districts;

  updateDistricts(event: any) {
    let stateId = event.target.value;
    this.filteredDistricts = this.districts.filter((district) => {
      console.log(district.state_id, stateId);
      return district.state_id == stateId;
    });
  }
}
