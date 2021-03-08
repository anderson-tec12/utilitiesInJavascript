let GLOBAL_TIMER = '';

function GET_HOUR_STRING({ dateString }) {
  let dateArray = dateString.split('T');
  let dateTimeArray = dateArray[1].split('.');

  return dateTimeArray[0];
}

function UPDATE_TIMER_SECONDS({ SECONDS, MINUTES, HOUR }) {
  let seconds = Number(SECONDS);
  let minutes = Number(MINUTES);
  let hour = Number(HOUR);

  seconds += 1;

  if (seconds > 60) {
    minutes += 1;
    seconds = 00;
  }

  if (minutes > 60) {
    hour += 1;
    minutes = 00;
  }

  if (hour > 24) {
    hour = 00;
    seconds = 00;
    minutes = 00;
  }

  return `${hour < 10 ? 0 : ''}${hour}:${minutes < 10 ? 0 : ''}${minutes}:${
    seconds < 10 ? 0 : ''
  }${seconds}`;
}

function UPDATE_TIME({ timer }) {
  let timerArray = timer.split(':');

  let timeCurrent = UPDATE_TIMER_SECONDS({
    HOUR: timerArray[0],
    MINUTES: timerArray[1],
    SECONDS: timerArray[2],
  });
  GLOBAL_TIMER = timeCurrent;
  setInterval(() => {
    const g = GLOBAL_TIMER.split(':');
    let timeCurrentCicle = UPDATE_TIMER_SECONDS({
      HOUR: g[0],
      MINUTES: g[1],
      SECONDS: g[2],
    });
    GLOBAL_TIMER = timeCurrentCicle;

    // Setar componenet
    console.log(GLOBAL_TIMER);
  }, 1000);
}

let TIMER_INITIAL_VALUE = GET_HOUR_STRING({
  dateString: '2021-02-03T17:19:07.0356714-03:00',
});

UPDATE_TIME({ timer: TIMER_INITIAL_VALUE });
