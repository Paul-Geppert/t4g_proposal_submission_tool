import superagent from 'superagent';

const body = (res) => res.body;

export const create = (proposal) =>
  superagent
    .post('http://localhost:3003/', proposal)
    .then();

export const createFromTemplate = (proposal) =>
  superagent
    .post('http://localhost:3003/replace/', proposal)
    .then();

export const get = () =>
  superagent
    .get('http://localhost:3003/')
    .then(body);
