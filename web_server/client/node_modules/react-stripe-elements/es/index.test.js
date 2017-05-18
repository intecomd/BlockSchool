'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('index', function () {
  var elementMock = void 0;
  var elementsMock = void 0;
  var stripeMock = void 0;
  beforeEach(function () {
    elementMock = {
      mount: jest.fn(),
      destroy: jest.fn(),
      on: jest.fn(),
      update: jest.fn()
    };
    elementsMock = {
      create: jest.fn().mockReturnValue(elementMock)
    };
    stripeMock = {
      elements: jest.fn().mockReturnValue(elementsMock),
      createToken: jest.fn(),
      createSource: jest.fn()
    };

    window.Stripe = jest.fn().mockReturnValue(stripeMock);
  });

  var MyCheckout = function MyCheckout(props) {
    return _react2.default.createElement(
      'form',
      {
        onSubmit: function onSubmit(ev) {
          ev.preventDefault();
          props.stripe.createToken();
        }
      },
      props.children,
      _react2.default.createElement(
        'button',
        null,
        'Pay'
      )
    );
  };

  var WrappedCheckout = (0, _index.injectStripe)(MyCheckout);

  it('smoke test', function () {
    var app = (0, _enzyme.mount)(_react2.default.createElement(
      _index.StripeProvider,
      { apiKey: 'pk_test_xxx' },
      _react2.default.createElement(
        _index.Elements,
        null,
        _react2.default.createElement(
          WrappedCheckout,
          null,
          'Hello world',
          _react2.default.createElement(_index.CardElement, null)
        )
      )
    ));
    expect(app.text()).toMatch(/Hello world/);
  });

  it('createToken should be called when set up properly', function () {
    var app = (0, _enzyme.mount)(_react2.default.createElement(
      _index.StripeProvider,
      { apiKey: 'pk_test_xxx' },
      _react2.default.createElement(
        _index.Elements,
        null,
        _react2.default.createElement(
          WrappedCheckout,
          null,
          'Hello world',
          _react2.default.createElement(_index.CardElement, null)
        )
      )
    ));
    app.find('form').simulate('submit');
    expect(stripeMock.createToken).toHaveBeenCalledTimes(1);
    expect(stripeMock.createToken).toHaveBeenCalledWith(elementMock, {});
  });

  it('createToken should be called when set up properly (split)', function () {
    var app = (0, _enzyme.mount)(_react2.default.createElement(
      _index.StripeProvider,
      { apiKey: 'pk_test_xxx' },
      _react2.default.createElement(
        _index.Elements,
        null,
        _react2.default.createElement(
          WrappedCheckout,
          null,
          'Hello world',
          _react2.default.createElement(_index.CardNumberElement, null),
          _react2.default.createElement(_index.CardExpiryElement, null),
          _react2.default.createElement(_index.CardCVCElement, null),
          _react2.default.createElement(_index.PostalCodeElement, null)
        )
      )
    ));
    app.find('form').simulate('submit');
    expect(stripeMock.createToken).toHaveBeenCalledTimes(1);
    expect(stripeMock.createToken).toHaveBeenCalledWith(elementMock, {});
  });

  describe('updating props', function () {
    it('should warn when attempting to update API key', function () {
      var stripe = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement('form', null)
      ));
      console.error = jest.fn();
      stripe.setProps({ apiKey: 'pk_test_yyy' });
      expect(console.error).toHaveBeenCalledTimes(1);
    });
  });

  describe('errors', function () {
    it('Provider should throw if Stripe is not loaded', function () {
      window.Stripe = undefined;
      expect(function () {
        return (0, _enzyme.mount)(_react2.default.createElement(_index.StripeProvider, { apiKey: 'pk_test_xxx' }));
      }).toThrowError(/js.stripe.com\/v3/);
    });

    it('createToken should throw when not in Elements', function () {
      expect(function () {
        return (0, _enzyme.mount)(_react2.default.createElement(
          _index.StripeProvider,
          { apiKey: 'pk_test_xxx' },
          _react2.default.createElement(
            WrappedCheckout,
            null,
            _react2.default.createElement(
              _index.Elements,
              null,
              _react2.default.createElement(_index.CardElement, null)
            )
          )
        ));
      }).toThrowError('Elements context');
    });

    it('createToken should throw when no Element found', function () {
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            WrappedCheckout,
            null,
            'Hello world'
          )
        )
      ));
      expect(function () {
        return app.find('form').simulate('submit');
      }).toThrowError(/did not specify/);
    });
  });
}); // @noflow