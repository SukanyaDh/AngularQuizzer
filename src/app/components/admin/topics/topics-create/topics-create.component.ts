// topics-create.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-topics-create',
  templateUrl: './topics-create.component.html',
  styleUrls: ['./topics-create.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink
  ]
})
export class TopicsCreateComponent {
  topicForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.topicForm = this.fb.group({
      // Use FormArray to hold a collection of form groups (the topic fields)
      topics: this.fb.array([this.createTopicField()])
    });
  }

  // Getter to easily access the FormArray in the template
  get topicsArray(): FormArray {
    return this.topicForm.get('topics') as FormArray;
  }

  // Method to create a new topic FormGroup
  createTopicField(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required] // The actual input field
    });
  }

  // Method called when the "Add Topic" button is clicked
  addTopic(): void {
    this.topicsArray.push(this.createTopicField());
  }

  // Optional: Method to remove a topic field
  removeTopic(index: number): void {
    this.topicsArray.removeAt(index);
  }

  // Submission handler
  onSubmit(): void {
    if (this.topicForm.valid) {
      console.log('Form Submitted!', this.topicForm.value);
      this.openSnackBar('Topic created successfully', 'Close');
      this.router.navigate(['/admin/topics']);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      //duration: 8000,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }


}