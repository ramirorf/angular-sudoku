import { Poligono } from './poligono';

describe('Poligono', () => {
  it('should create an instance', () => {
    expect(new Poligono('Triángulo', 3)).toBeTruthy();
  });
});
