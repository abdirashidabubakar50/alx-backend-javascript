function calculateNumber(type, a, b) {
  if (type === "SUM") {
    return Math.round(a) + Math.round(b);
  }

  if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b);
  }

  if (type === "DIVIDE") {
    let rounded_b = Math.round(b);
    if (rounded_b === 0) {
      return "Error";
    }
    return Math.round(a) / rounded_b;
  }
}

export default calculateNumber;
