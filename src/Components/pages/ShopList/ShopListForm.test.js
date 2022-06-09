import Shop from './Shop';
import React from "react";
import { render, unmountComponentAtNode ,screen} from "@testing-library/react";
import ShopListForm from './ShopListForm';
import "./ShopList.css";
import userEvent from '@testing-library/user-event';
import { useLinkClickHandler } from 'react-router-dom';

const onChange = jest.fn();
const handleChange = jest.fn();
describe('list',()=>{
    it('functions Shoplistform:',()=>{
        render(
        <ShopListForm>
            <input value='' onChange={handleChange}>

            </input>
        </ShopListForm> );
        
        userEvent.type(screen.getByRole('textbox'),'Каптопля');
        userEvent.click.name.button ;
        expect(onChange).toHaveBeenCalled;
        
        
        });
        
        
   
});