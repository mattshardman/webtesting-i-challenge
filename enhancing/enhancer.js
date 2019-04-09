module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const isLessThan20 = item.enhancement < 20;

  if(isLessThan20) {
    return { ...item, enhancement: item.enhancement + 1 };
  }
  return { ...item };
}

function fail(item) {
  
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
