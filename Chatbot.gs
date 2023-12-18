//source: https://qiita.com/ysk1025/items/033857046456ab964537

function chatCheckin(message) {
  const url = config.webhookUrl;
  const text = message;
  const payload = {
    "text": text,
    "thread": {
      "name": config.spaceThread
    }
  }

  const json = JSON.stringify(payload);

  const options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json; charset=UTF-8"
    },
    "payload": json
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log(response);
    return "Posted to chat";
  } catch (error) {
    Logger.log('Error posting to chat:', error);
    return "Error posting to chat";
  }
}