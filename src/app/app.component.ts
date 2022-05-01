import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markdown = '';

  constructor(
    private markdownService: MarkdownService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.setMarkdown();
  }

  async setMarkdown() {
    const markdownSource = '/assets/readme.md';
    // const markdownSource = 'https://raw.githubusercontent.com/jfcere/ngx-markdown/d25bbb3949100f111bac7182bfd9ea36b9850de8/README.md';
    const markdownRaw = await this.httpClient.get(markdownSource, {
      responseType: 'text'
    }).toPromise();

    // Reemplazar una cadena
    // const markdownRawReplaced = markdownRaw.replace(environment.storage, 'otherStorage');
    // this.markdown = this.markdownService.compile(markdownRawReplaced);

    this.markdown = this.markdownService.compile(markdownRaw);
  }
}
