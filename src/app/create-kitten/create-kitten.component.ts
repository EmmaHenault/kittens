import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/models';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {
  @Output() kittenAdded = new EventEmitter<Kitten>();

  newKittenForm: FormGroup;
  isFormValid: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.newKittenForm = this.formBuilder.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      birthDate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

    this.newKittenForm.valueChanges.subscribe(() => {
      this.isFormValid = this.newKittenForm.valid;
    });
  }

  addKitten(): void {
    if (this.newKittenForm.valid) {
      const newKitten: Kitten = this.newKittenForm.value;
      this.kittenAdded.emit(newKitten);
      this.newKittenForm.reset();
      this.isFormValid = false;
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
