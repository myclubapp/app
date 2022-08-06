export interface Club {
  id: string;
  name: string;
  logo: string;
  type: string;
}

export interface ClubRef {
  id: string,
  clubRef: unknown;
}

export interface SwissUnihockeyClub extends Club {}

export interface SwissVolleyClub extends Club {}

export interface SwissHandballClub extends Club {}

export interface SwissTurnverbandClub extends Club {}
