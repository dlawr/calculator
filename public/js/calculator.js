function calc(expr) {
  expr = expr.split(' ');
  var temp;
  i = 0;
  while (expr.length > i) {
    temp = [];
    switch (expr[i]) {
      case '+':
        temp = expr.slice(0, i-2);
        temp.push((+expr[i-2] + +expr[i-1]).toString());
        temp = temp.concat(expr.slice(i + 1, expr.length));
        expr = temp.slice(0);
        i -= 2;
        break;
      case '-':
        temp = expr.slice(0, i-2);
        temp.push((+expr[i-2] - +expr[i-1]).toString());
        temp = temp.concat(expr.slice(i + 1, expr.length));
        expr = temp.slice(0);
        i -= 2;
        break;
      case '*':
        temp = expr.slice(0, i-2);
        temp.push((+expr[i-2] * +expr[i-1]).toString());
        temp = temp.concat(expr.slice(i + 1, expr.length));
        expr = temp.slice(0);
        i -= 2;
        break;
      case '/':
        temp = expr.slice(0, i-2);
        temp.push((+expr[i-2] / +expr[i-1]).toString());
        temp = temp.concat(expr.slice(i + 1, expr.length));
        expr = temp.slice(0);
        i -= 2;
        break;
      default:
        i++;
        break;
    }
  }
  return +expr[expr.length - 1];
}
