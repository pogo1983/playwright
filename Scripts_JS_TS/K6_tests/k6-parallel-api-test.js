import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { scenario } from 'k6/execution';
import { Counter, Rate, Trend } from 'k6/metrics';

// SMS API configuration
const SMS_API_URL = 'https://kpnsmsemulator.imfint.local/communication/kpn/sms/send';
const API_TOKEN = 'fiD21PAowl4F3BPmdxgGJ5GDuXoZ'; 

// Custom metrics
const smsSuccessRate = new Rate('sms_success_rate');
const smsResponseTime = new Trend('sms_response_time');
const smsErrorCounter = new Counter('sms_errors');

export const options = {
  scenarios: {
    // Low volume test
    low_volume: {
      executor: 'constant-vus',
      vus: 1,
      duration: '30s',
      tags: { test_type: 'low_volume' }
    },
    
    // High volume test
    high_volume: {
      executor: 'ramping-arrival-rate',
      startRate: 1,
      timeUnit: '1s',
      preAllocatedVUs: 10,
      maxVUs: 50,
      stages: [
        { target: 5, duration: '30s' },    // Ramp up to 5 SMS/second
        { target: 10, duration: '1m' },    // Ramp up to 10 SMS/second
        { target: 10, duration: '2m' },    // Stay at 10 SMS/second
        { target: 0, duration: '30s' }     // Ramp down to 0
      ],
      tags: { test_type: 'high_volume' }
    }
  },
  thresholds: {
    http_req_duration: ['p(95)<500'],      // 95% of requests must be below 500ms
    sms_success_rate: ['rate>0.95'],       // 95% success rate for SMS sending
    http_req_failed: ['rate<0.05']         // Less than 5% error rate
  }
};

// Request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_TOKEN}`
};

// Generate a random phone number
function generateRandomPhone() {
  return `+31${Math.floor(600000000 + Math.random() * 99999999)}`;
}

// Generate random message content
function generateRandomMessage() {
  const messages = [
    "This is a test message from K6",
    "Performance testing in progress",
    "K6 load test - please ignore",
    "Testing SMS throughput capabilities"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export default function() {
  group('SMS Sending API Test', () => {
    // Create SMS payload
    const payload = JSON.stringify({
      phoneNumber: generateRandomPhone(),
      message: generateRandomMessage(),
      sender: "K6TEST"
    });

    // Send SMS request
    const startTime = new Date().getTime();
    const response = http.post(SMS_API_URL, payload, { headers });
    const duration = new Date().getTime() - startTime;

    // Record metrics
    smsResponseTime.add(duration);
    
    // Check response
    const success = check(response, {
      'SMS sent successfully': (r) => r.status === 200 || r.status === 201 || r.status === 202,
      'Response has valid format': (r) => r.json() !== null
    });

    smsSuccessRate.add(success);
    
    if (!success) {
      smsErrorCounter.add(1);
      console.log(`SMS sending failed with status ${response.status}: ${response.body}`);
    }
  });

  // Random sleep between requests to simulate real-world usage
  sleep(Math.random() * 2 + 1);
}