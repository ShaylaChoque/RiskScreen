import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-provider-table',
  standalone: true,
  imports: [
    ToolbarComponent
  ],
  templateUrl: './provider-table.component.html',
  styleUrl: './provider-table.component.css'
})
export class ProviderTableComponent {

}
