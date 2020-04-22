module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++;
  };
  return { ...item };
}

function fail(item) {
  if (item.enhancement <= 15) {
    item.durability -= 5;
  } else if (item.enhancement <= 16) {
    item.durability -= 10;
  } else {
    item.durability -= 10;
    item.enhancement --;
  };
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement) {
    item.name = `[+${item.enhancement}] ${item.name}`;
  }
  return { ...item };
}
