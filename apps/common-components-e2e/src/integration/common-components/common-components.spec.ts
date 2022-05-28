describe('common-components: CommonComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commoncomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommonComponents!');
    });
});
