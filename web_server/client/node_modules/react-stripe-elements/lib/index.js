'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostalCodeElement = exports.CardCVCElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = undefined;

var _Provider = require('./components/Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _inject = require('./components/inject');

var _inject2 = _interopRequireDefault(_inject);

var _Elements = require('./components/Elements');

var _Elements2 = _interopRequireDefault(_Elements);

var _Element = require('./components/Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardElement = (0, _Element2.default)('card', { sourceType: 'card' });
var CardNumberElement = (0, _Element2.default)('cardNumber', { sourceType: 'card' });
var CardExpiryElement = (0, _Element2.default)('cardExpiry');
var CardCVCElement = (0, _Element2.default)('cardCvc');
var PostalCodeElement = (0, _Element2.default)('postalCode');
exports.StripeProvider = _Provider2.default;
exports.injectStripe = _inject2.default;
exports.Elements = _Elements2.default;
exports.CardElement = CardElement;
exports.CardNumberElement = CardNumberElement;
exports.CardExpiryElement = CardExpiryElement;
exports.CardCVCElement = CardCVCElement;
exports.PostalCodeElement = PostalCodeElement;