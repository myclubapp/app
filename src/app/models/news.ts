export interface News {
  id: string;
  title: string;
  slug: string;
  image: string;
  leadText: string;
  date: Date;
  text: string;
  htmlText: string;
  tags: [string];
  author: string;
  authorImage: string;
  url: string;

}
export interface SwissUnihockeyNews extends News {

}

export interface SwissVolleyNews extends News {


}