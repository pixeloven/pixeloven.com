import LoginPage from './login';
 
describe('<LoginPage />', () => {
  it('should render and display expected content', () => {
    cy.mount(<LoginPage />);
     cy.get('h2').contains('Sign in to your account');
    cy.get('a[href="/"]').should('be.visible');
  });
});