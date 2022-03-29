export interface Event {
  id: string;
  title: string;
  

}
export interface HelferEvent extends Event {

  schichten: [Schicht]
}

interface Schicht{
  

}