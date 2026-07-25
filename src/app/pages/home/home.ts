import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TermLine {
  prompt?: boolean;
  text: string;
  cls?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private script: TermLine[] = [
    { prompt: true, text: 'whoami' },
    { text: 'Dennis — datamatiker student, building things end to end.', cls: 'accent' },
    { prompt: true, text: 'cat about.txt' },
    { text: 'I write the API, build the frontend, secure it,' },
    { text: 'and host it on hardware I run myself.' },
    { prompt: true, text: 'ls skills/' },
    { text: 'python  fastapi  angular  typescript  csharp', cls: 'muted' },
    { text: 'postgres  docker  linux  esp32', cls: 'muted' },
    { prompt: true, text: 'echo $STATUS' },
    { text: 'open to an internship.', cls: 'accent' },
  ];

  visibleLines = signal<TermLine[]>([]);
  typed = signal('');
  done = signal(false);

  ngOnInit() {
    this.runScript(0);
  }

  private async runScript(i: number) {
    if (i >= this.script.length) {
      this.done.set(true);
      return;
    }
    const line = this.script[i];

    if (line.prompt) {
      for (let c = 0; c < line.text.length; c++) {
        this.typed.set(line.text.slice(0, c + 1));
        await this.sleep(45);
      }
      await this.sleep(300);
      this.visibleLines.update((lines) => [...lines, { prompt: true, text: line.text }]);
      this.typed.set('');
    } else {
      this.visibleLines.update((lines) => [...lines, line]);
      await this.sleep(120);
    }
    this.runScript(i + 1);
  }

  private sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }
}