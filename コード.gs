function countdown() {
  var slackAccessToken = 'YOUR_SLACK_ACCESS_TOKEN';
  var channelId = 'YOUR_CHANNEL_ID';
  // カウントダウン名
  var examName = 'YOUR_カウントダウン名';
  // カウントダウン終了日時
  var examDate = new Date('2023/10/11 23:59:59');
  var today = new Date();
  var days = Math.floor((examDate - today) / (24 * 60 * 60 * 1000));

  if (days >= 0) {
    var message = examName + 'まであと' + days + '日です';
    var url = 'https://slack.com/api/chat.postMessage';
    
    var payload = {
      token: slackAccessToken,
      channel: channelId,
      text: message
    };

    var options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload)
    };

    UrlFetchApp.fetch(url, options);
  }
}
