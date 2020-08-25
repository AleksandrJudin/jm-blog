import isEmpty from 'lodash.isempty';

export default () => {
  const data: any = localStorage.getItem('login');
  const parse = JSON.parse(data);
  if (!isEmpty(parse) && parse) {
    return parse.user;
  }
  return null;
};
