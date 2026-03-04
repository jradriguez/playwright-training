import type {} from "@playwright/test";

declare module "@playwright/test" {
    interface Matchers<R> {
        toBeNumber(): R;
    }
}