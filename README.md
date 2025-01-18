# Next.js localStorage Error on Direct Page Access

This repository demonstrates a common error in Next.js applications where accessing a page directly that depends on data stored in `localStorage` from a previous page visit causes a runtime error. The error is due to `localStorage` not being populated if the user navigates directly to the page without going through the page that sets the `localStorage` data.

## Description

The application consists of two pages: `index.js` and `about.js`.  The `about.js` page attempts to access and parse data from `localStorage`. If the user directly accesses `/about` before visiting `/`,  the `localStorage` item will be null, resulting in an error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Directly access `/about` in your browser.
5. Observe the error in the browser's console.
6. Navigate to `/` then to `/about` to see the correct behaviour.

## Solution

The provided solution handles this scenario by checking for the existence of the `localStorage` item before attempting to parse it.  If the item is not present, it defaults to null, preventing the error.
