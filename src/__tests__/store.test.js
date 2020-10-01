describe('Test suite for store', () => {
    it('Without dev tool', () => {
        process.env.NODE_ENV = 'development';
        const configStore = require('../store').default;
        const store = configStore();
        expect(store).toMatchSnapshot();
    })
})