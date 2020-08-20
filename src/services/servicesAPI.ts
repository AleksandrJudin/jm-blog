export default class {
  baseUrl: string = 'https://conduit.productionready.io/api/&page=3';

  async getRequestArticles(): Promise<any> {
    const res = await fetch(this.baseUrl);
    if (!res.ok) {
      throw new Error('Cloud error is ' + res.status);
    }
    return res.json();
  }
}
