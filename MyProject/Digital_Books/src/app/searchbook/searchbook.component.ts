import { Component, Input, OnInit } from '@angular/core';
import { SearchBook } from './searckbook.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-book',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchBookComponent implements OnInit {

public authorcreat:string='';
public titles:string='';
public publishera:string='';
public relesed:string='';



public url:string='https://localhost:44339/api/Books/Search';

  ngOnInit(): void {
   this.GetDataFromServer();
   }

  Success(input:any){
    this.SearchBookModels=input;
  }
  constructor(private http:HttpClient) {

  }

  GetDataFromServer(){
    debugger;
    this.http.get("https://localhost:44339/api/Books").subscribe(res=>this.Success(res),res=>console.log(res));
 
  }
  title = 'sample-project';
  imageURL = "././assets/image.jpg";
  isEdit=false;

  SearchBookModel: SearchBook = new SearchBook();
  SearchBookModels: Array<SearchBook> = new Array<SearchBook>();
  Add() {
    debugger;
    // console.log('HI');
    // alert('HI');

   // this.CustomerModels.push(this.CustomerModel);
   // console.log(this.CustomerModels);
if(this.isEdit){
  this.http.put("https://localhost:44339/api/Books",this.SearchBookModel).subscribe(res=>this.PostSuccess(res),res=>console.log(res))
}
else{
  this.http.post("https://localhost:44339/api/Books",this.SearchBookModel).subscribe(res=>this.PostSuccess(res),res=>console.log(res))
}
   
    this.SearchBookModel = new SearchBook();
  }

  Search()
  {
    debugger;
    this.authorcreat = this.SearchBookModel.author;
    this.titles = this.SearchBookModel.title;
    this.publishera = this.SearchBookModel.publisher;
    this.relesed = this.SearchBookModel.releasedDate;


    this.http.post(this.url+'?author='+this.authorcreat +'& title='+this.title +'& publisher='+this.publishera +'&releasedate='+this.relesed ,"").subscribe(res=>this.Success(res),res=>console.log(res))
    this.SearchBookModels = new Array<SearchBook>();
  }

  PostSuccess(input:any){
    this.GetDataFromServer();
  }
  EditBook(input: any) {
    debugger;
    this.isEdit=true;
    this.SearchBookModel = input;
  }
  DeleteBook(input:any){
    debugger;
    this.http.delete("https://localhost:44339/api/Books").subscribe(res=>console.log(res),res=>console.log(res));
    this.SearchBookModel=input;
  }
  Book(input:any)
  {
    this.http.put("https://localhost:44339/api/Books/Search?author="+input.any,this.SearchBookModel).subscribe(res=>this.PostSuccess(res),res=>console.log(res))
    
  }
}
