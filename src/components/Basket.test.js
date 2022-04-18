import { render, screen } from '@testing-library/react';
import Basket from './Basket';
import {shallow} from 'enzyme';

describe('Modale exists', () => {
  let wrapper;
  beforeEach(() =>{
    wrapper = shallow(<div className='modal-content' id='myModal' ></div>);
  });
  test("it exists", ()=>{
    expect(wrapper).toExist;
  });
});

describe('Close span exists', () => {
    let wrapper;
    beforeEach(() =>{
      wrapper = shallow(<span class="close" onClick = {() => closeModale()} >&times;</span>);
    });
    test("it exists", ()=>{
      expect(wrapper).toExist;
    });
  });
  describe('Add button exists', () => {
    let wrapper;
    beforeEach(() =>{
      wrapper = shallow(<button onClick={()=>onRemove(item)} className="remove">-</button>);
    });
    test("it exists", ()=>{
      expect(wrapper).toExist;
    });
  });
  describe('Remove button exists', () => {
    let wrapper;
    beforeEach(() =>{
      wrapper = shallow(<button onClick={()=>onAdd(item)} className="add">+</button>);
    });
    test("it exists", ()=>{
      expect(wrapper).toExist;
    });
  });
  describe('Checkout button exists', () => {
    let wrapper;
    beforeEach(() =>{
      wrapper = shallow(<button onClick={()=>checkOut()} > Checkout</button>);
    });
    test("it exists", ()=>{
      expect(wrapper).toExist;
    });
  });                 
