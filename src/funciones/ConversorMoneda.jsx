
const conversorMoneda = (cantidad) => {
  return new Intl.NumberFormat(
      'es-CL',
      {style: 'currency', currency:'CLP', minimumFractionDigits: 2}
  ).format(cantidad);
}

export default conversorMoneda