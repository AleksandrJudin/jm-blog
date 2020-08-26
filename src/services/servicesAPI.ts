export default class {
  baseUrl: string = 'https://conduit.productionready.io/api/';

  async fetching(path: any): Promise<any> {
    const res: Response = await fetch(`${this.baseUrl}${path}`);
    if (!res.ok) {
      throw new Error('Cloud error is ' + res.status);
    }
    return res.json();
  }

  async sendingRequestData(url: string, data: object): Promise<any> {
    const res: Response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
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

  async registration(data: object): Promise<any> {
    return this.sendingRequestData('users', data);
  }

  async login(data: object): Promise<any> {
    return this.sendingRequestData('users/login', data);
  }

  async changeProfile(data: object, token: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Cloud error is ' + res.status);
    }
    return res.json();
  }
}
