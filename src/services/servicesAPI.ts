export default class {
  baseUrl: string = 'https://conduit.productionready.io/api/';

  async fetching(path: any): Promise<any> {
    const res = await fetch(`${this.baseUrl}${path}`);
    if (!res.ok) {
      throw new Error('Cloud error is ' + res.status);
    }
    return res.json();
  }
  async getRequestArticles(offset: number = 0): Promise<any> {
    return this.fetching(`articles?offset=${offset}&limit=10`);
  }

  async getRequestSingleArticle(slug: string): Promise<any> {
    return this.fetching(`articles/${slug}`);
  }
}
