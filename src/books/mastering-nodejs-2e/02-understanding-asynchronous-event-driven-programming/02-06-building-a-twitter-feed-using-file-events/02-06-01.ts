import { readMessage } from "./02-06-01-04";

let response = null;

readMessage((e: Error | null, message?: string) => {
  if (e) {
    throw e;
  }

  console.log(message);
});
