import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//core part of how mocha runs tests
//queue's up tests in the it blocks

//used to group together similar tests
describe('App Component', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
