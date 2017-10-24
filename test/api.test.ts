import {} from 'jest';

const request = require('supertest');

import app from '../src/app';

describe('Test the /api routes', () => {
  describe('GET /api', () => {
    it('should return 200 OK', () =>
      request(app)
        .get('/api')
        .expect(200));
  });

  describe('GET /api/notHere', () => {
    it('should return 404 not found', () =>
      request(app)
        .get('/api/notHere')
        .expect(404));
  });
});
