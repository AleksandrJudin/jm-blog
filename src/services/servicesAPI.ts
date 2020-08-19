export default class {
  baseUrl: string = 'https://conduit.productionready.io/api/articles';

  async getRequestArticles(): Promise<any> {
    const res = await fetch(this.baseUrl);
    if (!res.ok) {
      throw new Error('Cloud error is ' + res.status);
    }
    return res.json();
  }
}
