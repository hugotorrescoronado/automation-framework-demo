import { Given, Then, When }
from '@cucumber/cucumber';

Given(
  'user is on login page',
  async function () {

    console.log('Login Page');
  }
);

When(
  'valid credentials are entered',
  async function () {

    console.log('Credentials');
  }
);

Then(
  'dashboard page is displayed',
  async function () {

    console.log('Dashboard');
  }
);