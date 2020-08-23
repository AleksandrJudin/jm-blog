export interface IPosts {
  title: string;
  author: any;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: any;
}

export interface ISlug {
  match: object;
}
