const exec = require("child_process").execFile;
const config = require("./config.json");
const staticPagelist = require("./pagelist.json");

getPageList = function(staticPages, paramPages) {
  if (paramPages)
    return paramPages;

  const selectedPages = staticPages.reduce(function(result, page) {
    if (page.included) {
      result.push(page.name);
    }
    return result;
  }, []);

  return selectedPages.toString();
}

module.exports.pull = function (args) {
  const commandType = "pull",
        pageList = getPageList(staticPagelist, args);
          
  exec("./skuid/skuid_windows_amd64.exe", [
      commandType, 
      "--host", config.host, 
      "-u", config.username, 
      "-p", config.password, 
      "--client-id", config.clientId, 
      "--client-secret", config.clientSecret, 
      '-n', pageList
    ], function (err, data) {    
      if (err) {
        console.log(`skuid-cli encountered an error:`, err);
      } else {
        console.log(`skuid-cli: pages were written to skuidpages`);
      }    
  });
};

module.exports.push = function (args) {
  console.log('push:', args);
}

// module.exports = class SkuidCLI {
//   constructor() {
//     console.log("skuid-cli:", config);    
//   }

//   pull() {
//     console.log("pull:", config);
//   }
// }
