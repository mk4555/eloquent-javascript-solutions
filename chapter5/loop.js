function loop(val, test, update, body) {
  if (!test(val)) {
    return false
  }
  body(val);
  val = update(val);
  loop(val, test, update, body);
}
