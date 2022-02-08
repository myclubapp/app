export interface Team {
  id: string;
  name: string;

}
export interface SwissUnihockeyTeam extends Team {

}

export interface SwissVolleyTeam extends Team {

  gender: string;
  clubId: string;
  clubCaption: string;
  leagueCaption: string;
  organisationCaption: string;

}
