import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface HocSinh {
  _id: string;
  hoTen: string;
  ngaySinh: string;
  nu: string;
  masv: string;
  maLop: string;
  tinh: string;
}

interface CreateStudent {
  hoTen: string;
  ngaySinh: string;
  nu: string;
  masv: string;
  maLop: string;
  tinh: string;
  hocBong: Number;
}

@Component({
  selector: 'app-hoc-sinhs',
  templateUrl: './students.component.html',
  // styleUrls: ['./student.component.css']
})
export class HocSinhsComponent implements OnInit {
  hocSinhs: HocSinh[] = [];
  createStudent: CreateStudent[] =[]
  editingHocSinhId: string | null = null;
  editingHoTen: string | null = null;
  editingNgaySinh: string | null = null;
  editingNu: string | null = null;
  editingMasv: string | null = null;
  editingMaLop: string | null = null;
  editingTinh: string | null = null;
  editingHocBong: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getHocSinhs();
  }

  getHocSinhs() {
    this.http.get<HocSinh[]>('http://localhost:3000/v1/sinh-viens')
      .subscribe(data => {
        this.hocSinhs = data;
        console.log(data,"dataa");
      });
  }
  deleteSinhViens(id : string){
    this.http.delete<HocSinh[]>(`http://localhost:3000/v1/sinh-viens/${id}`)
    .subscribe(()=>{
      this.getHocSinhs();
    });
  }

  addHocSinh(
    hoTen: string,
    ngaySinh: string,
    nu: string,
    masv: string,
    maLop: string,
    tinh: string,
    hocBong: number
    ) {
    const student: CreateStudent = { hoTen, ngaySinh, nu, masv, maLop, tinh, hocBong };
      console.log(student,"sss")
      this.http.post<CreateStudent[]>('http://localhost:3000/v1/sinh-viens', student)
      .subscribe(() => {
        this.getHocSinhs();
      });
  }

  updateHocSinh(
    id: any,
    hoTen: string,
    ngaySinh: string,
    nu: string,
    masv: string,
    maLop: any,
    tinh: string,
    hocBong: any,
    ) {
    const student: CreateStudent = { hoTen, ngaySinh, nu, masv, maLop, tinh, hocBong };
      console.log(student,"sss")
      this.http.put<CreateStudent[]>(`http://localhost:3000/v1/sinh-viens/${id}`, student)
      .subscribe(() => {
        this.getHocSinhs();
      });
  }

  scrollToForm() {
    const formElement = document.getElementById('updateForm');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  updateSinhViens(hocSinh: any) {
    this.editingHocSinhId = hocSinh._id;
    this.editingHoTen =hocSinh.hoTen;
    this.editingNgaySinh=hocSinh.ngaySinh;
    this.editingNu = hocSinh.nu;
    this.editingMasv = hocSinh.masv;
    this.editingMaLop = hocSinh.maLop;
    this.editingHocBong=hocSinh.hocBong;
    this.editingTinh = hocSinh.tinh;
    console.log(this.editingNgaySinh,"jj")
    this.scrollToForm();
  }
}
