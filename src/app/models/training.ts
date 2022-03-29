export interface Training {
  id: string;
  title: string;
  location: string;
  start: Date;
  end: Date;
  canceled: boolean; 
  team: string;
  info: string;
  excuses: [Excuse] | [];
}

interface Excuse {
  userId: string;
  reason: string;
}
