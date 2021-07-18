const constants = require('../utils/constants');
describe('imageVersionRouter', () => {
    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });
    it('should test the node version number', () => {
        const express = require('express');
        const mRouter = { get: jest.fn() };
        jest.spyOn(express, 'Router').mockImplementationOnce(() => mRouter);
        const mReq = {};
        const mRes = { send: jest.fn(), status: jest.fn().mockReturnThis() };
        mRouter.get.mockImplementation((path, callback) => {
            if (path === '') {
                callback(mReq, mRes);
            }
        });
        require('../controllers/version');
        expect(mRes.send).toBeCalledWith(constants.NODE_VERSION_MSG + process.version);
    });
});
