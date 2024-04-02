import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { Kitten } from './models/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  kittens: Kitten[] = [];
  userKittens: Kitten[] = [];

  // Méthode appelée lorsqu'un chaton est ajouté
  onKittenAdded(newKitten: Kitten): void {
    this.kittens.push(newKitten);
  }
  // Méthode appelée lorsqu'un chaton est adopté
  onKittenAdopted(adoptedKitten: Kitten): void {
    this.userKittens.push(adoptedKitten);
    this.kittens = this.kittens.filter(kitten => kitten !== adoptedKitten);
  }
}
