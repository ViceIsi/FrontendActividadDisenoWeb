import { Injectable, ɵInitialRenderPendingTasks } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class DataFromApiService {
  	Tasks:any = 
		`
			{
				[
					{
						"id": 1,
						"Title": "Title1",
						"Content": "Content Task 1",
						"Author": "Vicente Isi",
						"created_at": "29-9-2023",
						"updated_at": null,
						"deleted_at": null
					}
					{
						"id": 2,
						"Title": "Title2",
						"Content": "Content Task 2",
						"Author": "Martin Perez Disalvo",
						"created_at": "29-9-2023",
						"updated_at": null,
						"deleted_at": null
					}
					{
						"id": 3,
						"Title": "Title3",
						"Content": "Content Task 3",
						"Author": "Jorge Frozono",
						"created_at": "29-9-2023",
						"updated_at": null,
						"deleted_at": null
					}
				]
			}
		`
	;
  	constructor() { }
	ngOnInit(){
		this.Function();
	}
	Function(){
		const ParsedJSON = JSON.parse(this.Tasks);
		console.log(ParsedJSON);
	}
}
