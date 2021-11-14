import Form from "./index";
import {fireEvent, render, screen} from "@testing-library/react";


describe('Form Container tests', () => {
	test('соответствует ли компонент-контейнер снимку', () => {
		const component = render(<Form/>);
		expect(component).toMatchSnapshot();
	});
	// test('проверить запуск handler в методе createMessage компонента после нажатия кнопки', () => {
	// 	debugger
	// 	const handler = jest.fn();
	// 	render(
	// 		<Form handler={handler}/>
	// 	);
	// 	fireEvent.click(screen.getByTestId('submitButton'), {
	// 		target: {
	// 			message: {
	// 				value: 'message'
	// 			}
	// 		}
	// 	});
	// 	expect(handler).toBeCalled();
	// })
})