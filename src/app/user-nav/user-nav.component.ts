import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../service/user-api.service';
import { User } from '../user';
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  // id:any;
  // user!:User[];
  // userData!:User;
  // userProfile!:FormGroup;
  constructor(private api:UserApiService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    // this.id=sessionStorage.getItem('uid');
    // this.userProfile=this.formBuilder.group({
    //   id:[''],
    //   username:[''],
    //   email:[''],
    //   mobile:[''],
    //   address:[''],
    //   city:[''],
    //   state:['']
      
    // });
  }
//   showData(){
//     this.router.navigate(['login']);
//     this.api.getUserData(this.id).subscribe({
//       next:(response:User)=>{
//         console.log(response);
//         this.userData=response;
//   },
//   error:()=>{
//     alert("Error while fetching records")
//   }
// });
//   }
}
