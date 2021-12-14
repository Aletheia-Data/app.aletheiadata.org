import { getAttributeValueByBreakpoint } from './getAttributeValueByBreakpoint'

// TODO: need setup browser imitation
describe('getAttributeValueByBreakpoint method', () => {
  it.skip('test real data', () => {
    // {default: 200, lg: 300} => 300
    expect(getAttributeValueByBreakpoint('{default: 200, lg: 300}')).toBe(300);
  });
});
