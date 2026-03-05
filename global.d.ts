export {};

declare global {
    namespace PlaywrightTest {
        interface Matchers<R> {
            toBeNumber(): R;
        }
}
}


// import type {} from "@playwright/test";

// declare module "@playwright/test" {
//     interface Matchers<R> {
//         toBeNumber(): R;
    
