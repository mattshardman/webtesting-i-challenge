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
  if (!item.enhancement) {
    return { ...item };
  }
  
  if (item.enhancement < 15) {
    return {...item, durability: item.durability - 5 };
  }

  if (item.enhancement > 14) {
    if (item.enhancement > 16) {
      return {...item, durability: item.durability - 10, enhancement: item.enhancement - 1};
    }
    return {...item, durability: item.durability - 10};
  }

  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
