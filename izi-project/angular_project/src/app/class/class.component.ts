import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Lop {
  maKhoa: string;
  tenLop: string;
}

@Component({
  selector: 'app-lops',
  templateUrl: './class.component.html',
  // styleUrls: ['./lops.component.css']
})
export class LopsComponent implements OnInit {
  lops: Lop[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLops();
  }

  getLops() {
    this.http.get<Lop[]>('http://localhost:3000/v1/lops')
      .subscribe(data => {
        this.lops = data;
        console.log(this.lops,"kkk");
      });
  }
}
