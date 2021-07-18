describe('imageVersionRouter', () => {
    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });
    it('should render views', () => {
        const express = require('express');
        const mRouter = { get: jest.fn() };
        jest.spyOn(express, 'Router').mockImplementationOnce(() => mRouter);
        const mReq = {};
        const mRes = { send: jest.fn().mockReturnThis(), render: jest.fn() };
        mRouter.get.mockImplementation((path, callback) => {
            if (path === '') {
                callback(mReq, mRes);
            }
        });
        require('../controllers/version');
        expect(mRes.send).toBeCalledWith("current node version is "+process.version);
    });
});
