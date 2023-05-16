chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SET_ALARM') {
      const currentTime = new Date().getTime();
      const checkInTime = new Date(message.flightDateTime).getTime() - 24 * 60 * 60 * 1000;
      const delayInMinutes = Math.max((checkInTime - currentTime) / 60000, 1); 
      //const delayInMinutes = 1; //test
      chrome.alarms.create('checkInAlarm', { delayInMinutes: delayInMinutes });
    }
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'checkInAlarm') {
      chrome.tabs.query({ url: 'https://www.southwest.com/air/check-in/index.html' }, (tabs) => {
        for (let tab of tabs) {
          chrome.tabs.executeScript(tab.id, { file: 'content.js' });
        }
      });
    }
  });
  