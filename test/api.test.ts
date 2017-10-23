import {} from 'jest';
import * as supertest from 'supertest';

const request = supertest('http://localhost:8000');

describe('GET /api', () => {
  it('should return 200 OK', () => {
    request.get('/api').expect(200);
  });
});

describe('GET /api/notHere', () => {
  it('should return 404 not found', () => {
    request.get('/api').expect(404);
  });
});
