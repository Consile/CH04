import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch0401';

  score = 80;
  grade() {
    return Math.floor(this.score / 10);
  }

  onInput(evt: Event) {
    const inputEle = <HTMLInputElement>evt.target;
    this.score = Number(inputEle.value);
  }

  shouldShow = false;
  onToggle() {
    this.shouldShow = !this.shouldShow;
    return false;
  }

  color: string;
  fontSize: string;
  apply(color: string, fontSize: string) {
    this.color = color;
    this.fontSize = fontSize;
  }

  isBordered = true;
  toggleBorder() {
    this.isBordered = !this.isBordered;
  }

  classObj = {
    bordered: this.isBordered,
    blue: false,
    round: true
  }

  people = [];
  peopleByCity = [];
  cities = ['杭州', '上海', '南京', '江苏'];
  constructor() {
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 20, city: 'Miami' },
      { name: 'Peter', age: 15, city: 'New York' }
    ];
    this.peopleByCity = [
      {
        city: 'Miami',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'John', age: 20 }
        ]
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Smith', age: 26 },
          { name: 'Max', age: 18 }
        ]
      },
      {
        city: 'New York',
        people: [
          { name: 'Bob', age: 40 },
          { name: 'Felipe', age: 34 }
        ]
      }
    ];


  }


}
