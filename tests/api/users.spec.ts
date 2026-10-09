import { test, expect } from '@playwright/test';

test('Get User from ReqRes', async ({ request }) => {

    const response =
        await request.get(
            'https://reqres.in/api/users/2'
        );

    expect(response.ok()).toBeTruthy();

    const body =
        await response.json();

    expect(body.data.id)
        .toBe(2);
});