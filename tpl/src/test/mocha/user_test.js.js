const request = require('supertest');
const {expect} = require('chai');
const app = require('../../app');
const {randomStr} = require('./util/string');
const {ERROR_CODE} = require('../../lib/code');
const accountInit = randomStr(5);

describe('用户相关测试', function() {
    it('注册用户成功', function(done) {
        const data = {
            account: accountInit,
            passwd : '123456',
            nickname:'nick11'
        };
        request(app)
            .post('/i/user/add')
            .send(data).type('form')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }

                expect(res.body).to.have.property('code').and.equal(0);

                done();
            });
    });

    it('重名账号', function(done) {
        const data = {
            account: accountInit,
            passwd : '123456',
            nickname:'nick11'
        };

        request(app)
            .post('/i/user/add')
            .send(data).type('form')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body).to.have.property('code')
                    .and.equal(ERROR_CODE.USER_ACCOUNT_HAS_EXISTS.code);

                done();
            });
    });

    it('账号为空', function(done) {
        const data = {
            passwd : '123456',
            nickname:'nick11'
        };

        request(app)
            .post('/i/user/add')
            .send(data).type('form')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body).to.have.property('code')
                    .and.equal(ERROR_CODE.ACCOUNT_EMPTY.code);

                done();
            });
    });
    
});

