const json = [
  { id: 1, desc: "a" },
  { id: 1, desc: "a" },
  { id: 2, desc: "b" },
  { id: 2, desc: "b" },
];

let teste = json.reduce((acc, el) => {
  const helper = [];

  if (acc.length === 0) {
    acc.push(el);
  } else {
    acc.map((item) => {
      helper.push(item.id);
    });

    if (helper.indexOf(el.id) === -1) {
      acc.push(el);
    }
  }

  return acc;
}, []);

console.log("final", teste);
