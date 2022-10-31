import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../model/hero';

@Component({
  selector: 'app-hero-insert-dialog',
  templateUrl: './hero-insert-dialog.component.html',
  styleUrls: ['./hero-insert-dialog.component.css'],
})
export class HeroInsertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HeroInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
