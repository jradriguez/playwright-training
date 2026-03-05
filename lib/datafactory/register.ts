import { request, expect } from "@playwright/test";
//import type { APIRequestContext, APIResponse } from '@playwright/test';

export async function registerUser(email: string, password: string) {
const apiUrl = process.env.API_URL;
const createRequestContext = await request.newContext();
const response = await createRequestContext.post(apiUrl + "/users/register", {
  data: {
    first_name: "Todd",
    last_name: "Dodd",
    dob: "1995-10-01",
    phone: "5555555555",
    email: email,
    password: password,
    address: {
      street: "123 Main street",
      city: "Nashvillington",
      state: "TN",
      country: "US",
      postal_code: "12345",
    },
  },
}); 


expect(response.status()).toBe(201);
return response.status();
}