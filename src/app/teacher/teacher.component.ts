import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { HomeComponent } from '../home/home.component'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
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
