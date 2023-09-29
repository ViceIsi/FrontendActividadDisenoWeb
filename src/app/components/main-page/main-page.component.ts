import { Component } from '@angular/core';
import { DataFromApiService } from 'src/app/services/data-from-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    Tasks:any[] = [];
    constructor(private GetTasks: DataFromApiService){}
    ngOnInit(){
        
    }
}
