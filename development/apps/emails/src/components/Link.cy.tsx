import Link from './Link';
 
describe('<Link />', () => {
  it('should render and display expected content', () => {
    cy.mount(
      <Link href='/'>Test</Link>
    );
    cy.get('a[href="/"]').should('be.visible').contains('Test');;
  });
});