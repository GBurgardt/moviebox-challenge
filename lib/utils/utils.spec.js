
import { minutesToHours, cutString, formatDate, debounce } from './utils';

describe('utils.js', () => {
  test('should return hours and minutes', () => {
    const time = '110m';
    expect(minutesToHours(time)).toEqual('1h 50m');
  });

  test('should cut string', () => {
    const string = 'Hello world';
    const length = 5;
    expect(cutString(string, length)).toEqual('Hello...');
  });

  test('should format date', () => {
    const date = '2020-10-22T00:00:00.000Z';
    expect(formatDate(date)).toEqual('22 October 2020');
  });

  test('should debounce', () => {
    const func = jest.fn();
    const wait = 100;
    const immediate = true;
    const debounced = debounce(func, wait, immediate);
    debounced();
    expect(func).toHaveBeenCalledTimes(1);
  });

});