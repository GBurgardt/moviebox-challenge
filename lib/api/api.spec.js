
import { mockMovies } from './mockData';
import { getMovies } from './api';

const setupFetchStub = (data) => {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      })
    })
  }
}

describe('api.js', () => {
  test('should get movies', async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(mockMovies));
    const query = 'dragon ball';
    const data = await getMovies(query);
    expect(data.results).toEqual(mockMovies.Search);
    expect(data.message).toEqual('Ok');
  });

  test('should fail to get movies', async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub({
      Error: 'Error'
    }));
    const query = 'dragon ball';
    const data = await getMovies(query);
    expect(data.results).toEqual([]);
    expect(data.message).toEqual('Error');
  });
});