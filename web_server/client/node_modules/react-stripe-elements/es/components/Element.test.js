'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Element', function () {
  var elementMock = void 0;
  var elementsMock = void 0;
  var context = void 0;
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
    context = {
      elements: elementsMock,
      registerElement: jest.fn(),
      unregisterElement: jest.fn()
    };
  });

  it('should call the right hooks for a source Element', function () {
    var SourceElement = (0, _Element2.default)('source', { sourceType: 'foobar' });
    var element = (0, _enzyme.mount)(_react2.default.createElement(SourceElement, { onChange: jest.fn() }), { context: context });

    expect(context.registerElement).toHaveBeenCalledTimes(1);
    expect(context.registerElement).toHaveBeenCalledWith('foobar', elementMock);

    element.unmount();
    expect(elementMock.destroy).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledWith(elementMock);
  });

  it('should call the right hooks for a non-source Element', function () {
    var SourceElement = (0, _Element2.default)('source');
    var element = (0, _enzyme.mount)(_react2.default.createElement(SourceElement, { onChange: jest.fn() }), { context: context });

    expect(context.registerElement).toHaveBeenCalledTimes(0);

    element.unmount();
    expect(elementMock.destroy).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledWith(elementMock);
  });

  it('should update the Element when props change', function () {
    var style = {
      base: {
        fontSize: '16px'
      }
    };
    var SourceElement = (0, _Element2.default)('source', { sourceType: 'foobar' });
    var element = (0, _enzyme.mount)(_react2.default.createElement(SourceElement, { onChange: jest.fn(), style: style }), { context: context });

    expect(elementMock.update).toHaveBeenCalledTimes(0);
    element.setProps({ style: style, onChange: jest.fn() });
    expect(elementMock.update).toHaveBeenCalledTimes(0);

    element.setProps({ style: { base: { fontSize: '20px' } }, onChange: jest.fn() });
    expect(elementMock.update).toHaveBeenCalledTimes(1);
    expect(elementMock.update).toHaveBeenCalledWith({ style: { base: { fontSize: '20px' } } });
  });
}); // @noflow