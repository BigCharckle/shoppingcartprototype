import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';

describe('App exists', () => {
  let wrapper;
  beforeEach(() =>{
    wrapper = shallow(<div className='App'></div>);
  });
  test("it exists", ()=>{
    expect(wrapper).toExist;
  });
});
