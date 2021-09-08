import { Component } from '@angular/core';

@Component({
  selector: 'reports-entry',
  template: `<div class="remote-entry">
    <h2>reports's Remote Entry Component</h2>
    <div>here is some report stuff...</div>
    <div>here is some more stuff</div>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
