import {createdBoard, mezclarArreglo} from './components/appOval.js';
let arre = ['casa', 'mesa', 'carro'];
let mockedData= [{ name: 'mirror', image: 'https://raw.githubusercontent.com/GenyLongart/SCL020-memory-match/main/src/images/11.png' },
{ name: 'mirror', image: 'https://raw.githubusercontent.com/GenyLongart/SCL020-memory-match/main/src/images/11.png' }]
describe('función que verifica los matchs y wrongs al girar los pares', () => {
  it('should be a function', () => {
    expect(typeof createdBoard).toBe('function');
  });
});
describe('Comprobando que el resultado de la función sea una instancia HTML', () => {
  it('should be a instanceof HTMLElement', () => {
    const wrap = createdBoard(mockedData);
    expect(wrap instanceof HTMLElement).toBe(true);
  });
});

describe('Verificando si mezclar Arreglo devuelve un array distinto al entregado', () =>{
  it ('should return a different array', () => {
    let prueba = mezclarArreglo(arre);
    expect(prueba).not.toBe(arre);
  })
})
