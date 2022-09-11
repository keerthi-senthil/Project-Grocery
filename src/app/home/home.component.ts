import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { UserApiService } from '../service/user-api.service';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user!: User;
  public users!:User[];

  userData!:FormGroup;
  constructor(private formBuilder:FormBuilder,private api: UserApiService,
    private route: ActivatedRoute,private router:Router) { 
      this.userData=this.formBuilder.group({
        id:"",
        email:""
      })
    }

  ngOnInit(): void {
  }
  pay(){
    const id=parseInt(this.route.snapshot.params['id'],10);
    this.api.getUserData(id)
    .subscribe({
      next:(response:User)=>{
        console.log(response);
        this.router.navigate(['payment'])
        this.user=response;
        this.userData.patchValue({email:"keerthi@gmail.com"})
        //this.editPlanData.patchValue({planOffers:"Amazon"});

        
      },
      error:()=>{
        alert("Error while fetching records")
      }
    });
  }

}
