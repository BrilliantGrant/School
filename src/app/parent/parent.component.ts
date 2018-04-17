import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public downloadPDF() {
    return xepOnline.Formatter.Format('content', {render: 'download'});
}

  private apiUrl = 'https://somoheres.herokuapp.com/students/';
  teachers: any = {};

  constructor(private http: HttpClient){
    console.log('test 1');
    this.getMasomo();
    // this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
  }

  getMasomo(){
    this.getData().subscribe(data => {
      console.log(data);
      this.teachers = data;
    })
}

  ngOnInit() {
  }

}

