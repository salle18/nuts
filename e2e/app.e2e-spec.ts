import {NutsPage} from './app.po';

describe('nuts App', () => {
    let page: NutsPage;

    beforeEach(() => {
        page = new NutsPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
