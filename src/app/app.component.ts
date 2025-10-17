import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task = '';  
  tasks: { text: string, done: boolean }[] = [];  

  addTask() {
    const trimmed = this.task.trim();

    if (!trimmed) return;

    if (this.editIndex !== null) {
      // Mode modification
      this.tasks[this.editIndex].text = trimmed;
      this.editIndex = null;  // sortir du mode édition
    } else {
      // Mode ajout normal
      this.tasks.push({ text: trimmed, done: false });
    }

    this.task = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
  toggleDone(index: number) {
  this.tasks[index].done = !this.tasks[index].done;
  }

  editIndex: number | null = null;  // Pour savoir si on est en mode édition

  editTask(index: number) {
      this.task = this.tasks[index].text;
      this.editIndex = index;
  }
}
