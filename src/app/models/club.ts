export interface Club {
  id: string;
  name: string;
  logo: string;
  type: string;
  active: boolean;

}
export interface SwissUnihockeyClub extends Club {}

export interface SwissVolleyClub extends Club {}

export interface SwissHandballClub extends Club {}

export interface SwissTurnverbandClub extends Club {}
