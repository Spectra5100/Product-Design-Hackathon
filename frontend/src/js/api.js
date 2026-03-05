const DATA = {
  ratp: { co2:45, energy:3.2, clean:65, fill:78, score:82 },
  tcl:  { co2:52, energy:3.8, clean:58, fill:70, score:75 },
  rtm:  { co2:48, energy:3.5, clean:62, fill:74, score:79 }
};

window.fetchOperatorsData = async function() {
  return structuredClone(DATA);
};

window.fetchSelectedOperators = async function(operators) {
  const result = {};
  operators.forEach(op => {
    if (DATA[op]) result[op] = DATA[op];
  });
  return result;
};
