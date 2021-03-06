describe('LearnJS', () => {
    it('can show a problem view', function(){
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });

    it('shows the landing page view when there is hash.', () => {
        learnjs.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });

    it('passes the hash veiw parameter to the view function', () => {
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });

    it('invokes the router when loaded', () => {
        spyOn(learnjs, 'showView');
        learnjs.appOnReady();
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    it('subscribes to the hash change event', () => {
        learnjs.appOnReady();
        spyOn(learnjs, 'showView');
        $(window).trigger('hashchange');
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    describe('problem view', () => {
        it('has a title that includes the problem number', () => {
            var view = learnjs.problemView('1');
            expect(view.text()).toEqual('Problem #1 Coming soon!');
        });
    });
});