import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import 'jest';
    test('Search:', () => {
        render (<Search/>);

        const input = screen.getByPlaceholderText("Введіть назву або інгредієнт...");

        userEvent.type(input, "Паста");
        expect(screen.getByPlaceholderText("Введіть назву або інгредієнт...")).toHaveValue("Паста");
    
        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByTestId("За цим запитом не знайдено рецепту")).not.toBeInTheDocument();
      });