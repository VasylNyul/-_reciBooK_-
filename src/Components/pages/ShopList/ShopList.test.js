import React from "react";
import { render, unmountComponentAtNode ,screen} from "@testing-library/react";
import ShopList from './ShopList';
import "./ShopList.css";
import userEvent from '@testing-library/user-event';

const data =('Каптопля');
describe('list',()=>{
    it('functions Shoplist:',()=>{
        render(<ShopList>
            todo={data}
        </ShopList>)
        expect('Каптопля').toBeInTheDocument;
        
        });
});