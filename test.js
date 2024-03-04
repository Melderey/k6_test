import http from 'k6/http';
import {check} from 'k6';

const targetRPS = 3;
const numSteps = 3;
const executor = 'ramping-arrival-rate';
const startRate = 0;
const timeUnit = '1s';
const preAllocatedVUs = 10;
const maxVUs = 100;
const rampupDuration = '5s';
const stageDuration = '60s';

const getStages = (targetRPS, numSteps, rampupDuration, stageDuration) => {
  const stages = [];

  for (let i = numSteps; i >= 1; i -= 1) {
    const target = targetRPS / i;
    stages.push({ target, duration: rampupDuration })
    stages.push({ target, duration: stageDuration })
  }

  return stages;
}

export let options = {
    discardResponseBodies: true,
    scenarios: {
        contacts: {
            executor,
            startRate,
            timeUnit,
            preAllocatedVUs,
            maxVUs,
            stages: getStages(targetRPS, numSteps, rampupDuration, stageDuration),
        },
    },
};

export default function () {
    let response = http.get('https://httpbin.test.k6.io/');
    check(response, {
        'is response status 200': (r) => r.status === 200,
    });
}
