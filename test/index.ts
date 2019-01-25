import * as assert from 'assert';
import * as request from 'request';

const base = 'http://localhost:9001';

describe('Authenticate request', () => {
    it('responds with a 401 status code if no authentication provided', (done) => {
        request.get(`${base}/`, (err, res, body) => {
            assert.strictEqual(res.statusCode, 401);
            done();
        });
    });

    it('responds with a 200 status code if authentication was successful', (done) => {
        request.get(`${base}/`, {
            auth: {
                username: 'admin',
                password: 'admin',
                sendImmediately: false,
            }
        }, (err, res, body) => {
            assert.strictEqual(res.statusCode, 200);
            assert.strictEqual(res.body, 'Successfully logged in!');
            done();
        });
    });
});
