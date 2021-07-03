const hour = "23:59:50";

const isLessThanTen = (value) => {
  if (value < 10 || value === 0) {
    return String(`0${value}`);
  } else {
    return String(value);
  }
};

function initial(time) {
  try {
    let upDay = false;
    const timerArray = time.split(":").map((item) => Number(item));
    const composeTimer = Object.assign({}, timerArray);

    composeTimer["2"]++;

    if (composeTimer["2"] >= 60) {
      composeTimer["2"] = 0;
      composeTimer["1"]++;
    }

    if (composeTimer["1"] == 60) {
      composeTimer["1"] = 0;
      composeTimer["0"]++;
    }

    if (composeTimer["0"] >= 24) {
      upDay = true;
    }

    composeTimer["0"] = isLessThanTen(composeTimer["0"]);
    composeTimer["1"] = isLessThanTen(composeTimer["1"]);
    composeTimer["2"] = isLessThanTen(composeTimer["2"]);

    return upDay
      ? `+${Object.values(composeTimer).join(":")}`
      : Object.values(composeTimer).join(":");
  } catch (err) {
    return "";
  }
}

function Timer(value) {
  let modified = initial(value);
  setInterval(() => {
    modified = initial(modified);

    console.log(modified);
  }, 1000);
}

Timer(hour);
