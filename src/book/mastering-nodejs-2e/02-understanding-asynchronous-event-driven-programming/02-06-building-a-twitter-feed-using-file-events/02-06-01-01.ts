import Twit from "twit";

const twit = new Twit({
  consumer_key: "<key>",
  consumer_secret: "<secret>",
  app_only_auth: true,
  strictSSL: false
});

twit
  .get("search/tweets", {
    q: "#nodejs since:2019-01-01",
    count: 10
  })
  .then((response: Twit.PromiseResponse) => {
    // 将获取到的消息写入文件
    console.log(response);
  })
  .catch((e: Error) => {
    console.error(`ERR: ${e.message}`);
  });
