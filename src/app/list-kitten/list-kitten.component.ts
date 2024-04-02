import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/models';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {
  @Input() kittens: Kitten[] = [];
  @Output() kittenAdopted = new EventEmitter<Kitten>();
  
  showInfoFlag: boolean = false;
  currentKitten: Kitten | null = null;

  constructor() { }

  showInfo(kitten: Kitten): void {
    this.showInfoFlag = true;
    this.currentKitten = kitten;
  }
  
  hideInfo(): void {
    this.showInfoFlag = false;
    this.currentKitten = null;
  }
  
  adoptKitten(kitten: Kitten): void {
    this.kittenAdopted.emit(kitten);
  }
}
