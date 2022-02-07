export interface Team {
  id: string;
  name: string;

}
export interface SwissUnihockeyTeam extends Team {
  id: string;
  name: string;
}

export interface SwissVolleyTeam extends Team {
  id: string;
  name: string;
  gender: string;
  clubId: string;
  clubCaption: string;
  leagueCaption: string;
  organisationCaption: string;

}
