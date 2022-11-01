import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, UntypedFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { TestService } from './test.service';
import { Observable } from 'rxjs';
import { ISub } from './isub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subscription';
  postList:any[]=[];

  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.pushData();
    this.subData();
    
  }

  newData:ISub={
    userId:12, id:1001, title:'newdata inserted'
  }

  subData(){
    this.service.getData()
    .subscribe(response=>{
      this.postList=response
    },(error)=>{
      console.log(error)
    }
  );}
  pushData(){
    this.service.setData(this.newData)
    .subscribe(addData=>{
      this.postList.push(addData)
    },(error)=>{
      console.log(error)
    })

  }

}
