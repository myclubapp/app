import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { Profile } from 'src/app/models/user';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage implements OnInit {
  
  clubTeamList: Team[];
  constructor(  

  ) { 

  }

  ngOnInit() {

  }

  openTeam(team: Team){
    console.log("open Team: " + team.name);
  }

  openUser(user: Profile){
    console.log("open User: " + user.firstName);
  }

  shareUser(user: Profile){
    console.log("share User: " + user.firstName);
  }

}
