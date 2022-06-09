import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecipeInput from "./RecipeInput";
import 'jest';
describe ("Recipe:",()=>{
    test("Close:",()=>{
        render(<RecipeInput/>);
        userEvent.click(screen.getByRole("button",{name:"X"}));
        expect(screen.getAllByText).toBeNull;
    });
    test("Input:",()=>{
        render(<RecipeInput/>);
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
        expect(screen.getByLabelText("Назва рецепту:",{selector:"input"})).toHaveDisplayValue("Паста");
        expect(screen.getByLabelText("Спосіб приготування:",{selector:"textarea"})).toHaveDisplayValue("Приготування пасти...");
        expect(screen.getByLabelText("1.",{selector:"input"})).toHaveDisplayValue("Макарони");
        expect(screen.getByText("2.")).toBeInTheDocument;
        expect(screen.getByLabelText("2.",{selector:"input"})).toHaveDisplayValue("Соус");
        expect(screen.getByLabelText("URL-адреса зображення:",{selector:"input"})).toHaveDisplayValue("12345");

    });
});