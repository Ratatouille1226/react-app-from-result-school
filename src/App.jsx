import ReactLogo from './assets/react.svg';
import { createElement } from 'react';

export const App = () => {
	const currentYear = `Текущий год: ${new Date().getFullYear()}`; //декларативный стиль
	return createElement(
        'div',
        {className: 'App'},
            createElement(
                'header',
                {className: 'App-header'},
                createElement(
                    'img',
                    {src: ReactLogo, alt: "logo"}
                ),
                createElement(
                    'p',
                    {},
                    'Edit',
                    createElement('code', {}, 'src/App.js'),
                    ' and save to reload.',
                ),
                createElement(
                    'a',
                {
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
                    "Learn React"
                ),
                createElement(
                    'p',
                    {},
                    currentYear
                ),
            ),
	);
};

