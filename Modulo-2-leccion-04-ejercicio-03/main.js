function amount(a) {
    const sinIVA = a;
    const iva = a * 0.21;
    const totalPrice = sinIVA + iva;
    return `Tu precio sin IVA: ${sinIVA}, IVA:${iva},Total: ${totalPrice}`;
  }
  const price = amount(10)
  console.log(price)
  const price2 = amount(12)
  console.log(price2)
  const price3 = amount(45)