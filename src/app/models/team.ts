export interface Team {
  id: string;
  name: string;
  logo: string;
  website: string;
  portrait: string;
  liga: string;
  type: string;
}

export interface TeamRef {
  id: string;
  clubRef: unknown;
}

export interface SwissUnihockeyTeam extends Team {}

export interface SwissVolleyTeam extends Team {
  gender: string;
  clubId: string;
  clubCaption: string;
  leagueCaption: string;
  organisationCaption: string;
}
