import { Component } from '@angular/core';

@Component({
  selector: 'ng-mod-fed-mfe1-entry',
  template: `<div class="remote-entry">
    <h2>mfe1's Remote Entry Component</h2>
    <div>I am a remote component, here is my stuff.</div>
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
