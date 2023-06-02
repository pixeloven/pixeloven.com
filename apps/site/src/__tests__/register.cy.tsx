import RegisterPage from '../pages/register';
 
describe('<LoginPage />', () => {
  it('should render and display expected content', () => {
    cy.mount(<RegisterPage />);
     cy.get('h2').contains('Get started for free');
    cy.get('a[href="/"]').should('be.visible');
  });
});