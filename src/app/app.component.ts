import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  text: string = '';
  words: string[] = [
    'Angular Developer',
    'Flask Developer',
    'Python Developer',
  ];
  currentIndex: number = 0;
  currentWord: string = '';
  isTyping: boolean = true;
  cursorVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    this.currentWord = this.words[this.currentIndex];
    const wordLength = this.currentWord.length;

    let i = 0;
    const interval = setInterval(() => {
      this.text += this.currentWord[i];
      i++;

      if (i === wordLength) {
        clearInterval(interval);
        this.isTyping = false;
        setTimeout(() => {
          this.deleteText();
        }, 1000);
      }
    }, 300);
  }

  deleteText(): void {
    const wordLength = this.currentWord.length;

    let i = wordLength - 1;
    const interval = setInterval(() => {
      this.text = this.text.slice(0, -1);
      i--;

      if (i < 0) {
        clearInterval(interval);
        this.isTyping = true;
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.typeText();
      }
    }, 300);
  }

  toggleCursor(): void {
    this.cursorVisible = !this.cursorVisible;
  }
}
