import React from 'react';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';
//set up testing environment that runs like a browser in the command linear
//faking the browser for our testing env.
//global is our window obj in nodejs
//jqeury is going to reach out and try to grab elements from our fake dom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
//just be responsible for our fake dom
const $ = jquery(global.window);

//build renderComponent helper that should render Component
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

//build helper for simulating events
$.fn.simulate = function(eventName, value){
  //input,text area, etc..
  //this = html elements
  if(value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this)[0];

}

//set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
