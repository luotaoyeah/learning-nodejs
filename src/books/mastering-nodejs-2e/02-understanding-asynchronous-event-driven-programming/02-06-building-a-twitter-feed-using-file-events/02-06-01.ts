import Twit from "twit";

const twit = new Twit({
  consumer_key: "<key>",
  consumer_secret: "<secret>",
  app_only_auth: true,
  timeout_ms: 1000 * 60,
  strictSSL: false
});

twit
  .get("search/tweets", {
    q: "#nodejs since:2019-01-01",
    count: 10
  })
  .then((response: Twit.PromiseResponse) => {
    console.log(response);
  })
  .catch((e: Error) => {
    console.error(`ERR: ${e.message}`);
  });
