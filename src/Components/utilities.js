export const urlsImages = [
  "https://www.mendoza.gov.ar/wp-content/uploads/sites/20/2019/01/Imagenes_1905x685_B.jpg",
  "https://media.tacdn.com/media/attractions-content--1x-1/12/29/3f/7e.jpg",
  "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg",
  "https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/vistas-cordoba-s158982617.jpg",
  "https://www.tucumanturismo.gob.ar/public/img/1920x650-Destinos-TafidelValle-Desktop.jpg",
];
export const validateCard = (n) => {
  let arrayInvert = n.split("").reverse();
  let sum = 0;
  let isPair = false;
  for (let i = arrayInvert.length - 1; i >= 0; i--) {
    let digito = Number(arrayInvert[i]);
    if (isPair) {
      digito = digito * 2;
      if (digito > 9) {
        digito = digito - 9;
      }
    }
    sum = sum + digito;
    isPair = !isPair;
  }
  return sum % 10 === 0;
};
