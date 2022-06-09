import Shop from './Shop';
import React from "react";
import { render} from "@testing-library/react";
import ShopListForm from './ShopListForm';
import "./ShopList.css";


const data =('Каптопля');
describe('list',()=>{
    it('functions Shop:',()=>{
        render(<ShopListForm edit={data} onSubmit={data}/>  );
        
      
        expect('Каптопля').toBe('Каптопля');
        expect('Каптопля').toBeNull;
        
        });
         
   
});