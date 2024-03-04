import http from 'k6/http';
import { check } from 'k6';

const targetRPS = 2;
const numSteps = 2;
const executor = 'ramping-arrival-rate';
const startRate = 0;
const timeUnit = '1s';
const preAllocatedVUs = 10;
const maxVUs = 100;
const rampupDuration = '5s';
const stageDuration = '5s';

const getStages = (targetRPS, numSteps, rampUpDuration, stageDuration) => {
  const stages = [];

  for (let i = numSteps; i >= 1; i -= 1) {
    const target = targetRPS / i;
    stages.push({ target, duration: rampUpDuration });
    stages.push({ target, duration: stageDuration });
  }

  return stages;
};

export const options = {
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

export default function App() {
  const response = http.get('https://httpbin.test.k6.io/');
  check(response, {
    'is response status 200': (r) => r.status === 200,
  });
}

export function handleSummary(data) {
  // можно записать конкретную метрику
  // const med_latency = data.metrics.iteration_duration.values.med;
  // const latency_message = `The median latency was ${med_latency}\n`;

  return {
    stdout_text_summary: JSON.stringify(data),
  };
}
