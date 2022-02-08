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

}
export interface SwissUnihockeyNews extends News {
  id: string;
  title: string;
  slug: string;
  image: string;
  leadText: string;
  text: string;
  htmlText: string;

}

export interface SwissVolleyNews extends News {
  id: string;
  title: string;
  slug: string;
  image: string;
  leadText: string;
  text: string;
  htmlText: string;

}