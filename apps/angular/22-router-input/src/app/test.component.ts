import { Component, input } from '@angular/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [],
  template: `
    <div>TestId: {{ testId() }}</div>
    <div>Permission: {{ permission() }}</div>
    <div>User: {{ user() }}</div>
  `,
})
export default class TestComponent {
  protected testId = input.required<string>();
  protected permission = input.required<string>();
  protected user = input.required<string>();
}
