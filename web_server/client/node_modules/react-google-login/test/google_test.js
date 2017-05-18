import { renderComponent, expect } from './test_helper';
import GoogleLogin from '../src/index';

describe('Google Login', () => {
    const defaultText = 'Login with Google';
    let component;
    let propsObj;

    describe('With default props', () => {
        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays correct button text', () => {
            expect(component).to.have.text(defaultText);
        });

        it('does not have a class attr', () => {
            expect(component).to.not.have.attr('class');
        });

        it('has inline styles', () => {
            expect(component).to.have.attr('style');
        });

        it('displays a button element when tag prop is not set', () => {
            expect(component.get(0).tagName).to.equal('BUTTON');
        });
    });
    describe('With custom text and default props', () => {
        const buttonText ='buttonText';

        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
                buttonText
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays correct button text', () => {
            expect(component).to.have.text(buttonText);
        });

        it('does not have a class attr', () => {
            expect(component).to.not.have.attr('class');
        });

        it('has inline styles', () => {
            expect(component).to.have.attr('style');
        });

    });
    describe('With custom class and default props', () => {
        let className ='test-class';

        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
                className
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays correct button text', () => {
            expect(component).to.have.text(defaultText);
        });

        it('has a class attr with custom class', () => {
            expect(component).to.have.attr('class', className);
        });

        it('does not have inline styles', () => {
            expect(component).to.have.attr('style');
        });

    });
    describe('With custom class and custom style', () => {
        let className ='test-class';
        let style = { color: 'red' };

        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
                className,
                style,
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays correct button text', () => {
            expect(component).to.have.text(defaultText);
        });

        it('has a class attr with custom class', () => {
            expect(component).to.have.attr('class', className);
        });

        it('to have custom inline styles', () => {
            expect(component).to.have.attr('style');
        });
    });
    describe('With children, custom text, and default props', () => {
        const children = 'test';
        const buttonText ='buttonText';

        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
                children,
                buttonText,
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays children text', () => {
            expect(component).to.have.text(children);
        });

        it('does not display default text', () => {
            expect(component).to.not.have.text(defaultText);
        });

        it('does not display custom text', () => {
            expect(component).to.not.have.text(buttonText);
        });

        it('does not have a class attr', () => {
            expect(component).to.not.have.attr('class');
        });

        it('has inline styles', () => {
            expect(component).to.have.attr('style');
        });

    });
    describe('With style and default props', () => {
        let style = {
          'padding':'10px',
          'fontSize':'20px'
        };

        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
                style
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays correct button text', () => {
            expect(component).to.have.text(defaultText);
        });

        it('has a style with custom class', () => {
            expect(component).to.have.attr('style', 'padding: 10px; font-size: 20px; opacity: 0.6;');
        });
    });
    describe('With handles custom tag prop', () => {
        beforeEach(() => {
            propsObj = {
                onSuccess(response) {},
                onFailure(response) {},
                tag: 'div',
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
            };
            component = renderComponent(GoogleLogin, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

        it('displays a div element when tag prop is set to div', () => {
            expect(component.get(0).tagName).to.equal('DIV');
        });
    });
});
