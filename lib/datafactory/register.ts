import type { APIRequestContext, APIResponse } from '@playwright/test';

export type RegisterUserInput = {
  apiUrl?: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export async function registerUser(
  api: APIRequestContext,
  {
    apiUrl = process.env.API_URL ?? '',
    email,
    password,
    firstName = 'Todd',
    lastName = 'Dodd',
  }: RegisterUserInput
): Promise<APIResponse> {
  if (!apiUrl) {
    throw new Error('API_URL is missing (pass apiUrl or set process.env.API_URL)');
  }

  return api.post(`${apiUrl}/users/register`, {
    data: {
      first_name: firstName,
      last_name: lastName,
      dob: '1995-10-01',
      phone: '5555555555',
      email,
      password,
      address: {
        street: '123 Main street',
        city: 'Nashvillington',
        state: 'TN',
        country: 'US',
        postal_code: '12345',
      },
    },
  });
}