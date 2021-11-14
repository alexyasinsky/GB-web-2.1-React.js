import {FormComp} from "./index";
import {fireEvent, render, screen} from "@testing-library/react";

describe('formComp testing', () => {
	test('соответствует ли компонент снимку', () => {
		const component = render(<FormComp/>);
		expect(component).toMatchSnapshot();
	});
	test('проверка работы кнопки "Отправить"', () => {
		const onSubmit = jest.fn(e => e.preventDefault());
		render(<FormComp onSubmit={onSubmit}/>);
		fireEvent.click(screen.getByTestId('submitButton'));
		expect(onSubmit).toBeCalled();
	});
})