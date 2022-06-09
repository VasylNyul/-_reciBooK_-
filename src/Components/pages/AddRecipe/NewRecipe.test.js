import { render } from "@testing-library/react";
import 'jest';
import React from 'react'
import { screen } from '@testing-library/react'
import AddRecipe from "./NewRecipe";
import userEvent from "@testing-library/user-event";


describe ("NewPecipe:",()=>{
    test("Render:",()=>{
        render(<AddRecipe/>);
        const inputtitle = screen.getByLabelText("Назва рецепту:",{selector:"input"});
        userEvent.type(inputtitle,"Паста");

        const inputinstructions = screen.getByLabelText("Спосіб приготування:",{selector:"textarea"});
        userEvent.type(inputinstructions,"Приготування пасти...");

        const inputingredients = screen.getByLabelText("1.",{selector:"input"});
        userEvent.type(inputingredients,"Макарони");

        userEvent.click(screen.getByRole("button",{name:"+"}));

        const inputingredients1 = screen.getByLabelText("2.",{selector:"input"});
        userEvent.type(inputingredients1,"Соус");

        const inputimg = screen.getByLabelText("URL-адреса зображення:",{selector:"input"});
        userEvent.type(inputimg,"12345");
        userEvent.click(screen.getByRole("button",{name:"Зберегти"}));
        expect(screen.getAllByLabelText).not.toBeInTheDocument;
        
    });
});