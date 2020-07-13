import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-new-cmp2',
  templateUrl: './new-cmp2.component.html',
  styleUrls: ['./new-cmp2.component.css']
})
export class NewCmp2Component implements OnInit {

  server = 'heroki';
  servername = "felicity";
  numberofgoals = 50;

  name = 'vishal';
  severstatus = 'offline'
  servername1='vishal is very good boy'
  allownewserver = false;
  servername12=''

  servercreationstatus = "no server was created";

  serverst() {
    return (this.severstatus);
  }

  constructor() {
    setTimeout(() => {
      this.allownewserver = true;
    }, 200);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servercreationstatus = 'server was created. Name of server is '+this.servername;
  }
  onupdateservername(event: Event) {

    this.servername=(<HTMLInputElement>event.target).value;

  }

  onCreateServer1(){
    this.servername12 ='button 2 is :'+ this.servername1;
  }
}
