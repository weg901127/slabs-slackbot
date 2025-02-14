const apiNoneCommands = require('./apiNoneCommands');
const postMessageToSlack = require('../common/postMessageToSlack');

// TODO 새로운 함수가 추가될 때마다 파일로 관리해서 기입하는 방식으로
const partA = ['help', 'mail', 'suggest'];

const useApiNone = {
  isApiCommand: function(cmdKey) {
    const partAll = [...partA];
    if (partAll.includes(cmdKey) === false) {
      console.log("None :" + cmdKey, " is not key in nonAPI");
      return false;
    }
    return true;
  },
  getCommand: function(cmdKey) {
    const cmdMap = {
      'help': apiNoneCommands.help,
      'mail': apiNoneCommands.mail,
      'suggest': apiNoneCommands.suggest,
    }
    return (cmdMap[cmdKey]) ? cmdMap[cmdKey] : cmdKey;
  },
  run: async function (res, body) {
    //let apiNoneData = body.text.split(' ')[1];
    let apiNoneData = body.text;
    const tmpIdx = apiNoneData.indexOf(' ');
    if (tmpIdx < 0)
      return "empty string";
    apiNoneData = apiNoneData.substr(tmpIdx);
    return apiNoneData;
  }
}

module.exports = useApiNone;