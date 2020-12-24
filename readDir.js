const fs = require("fs").promises,
  path = require("path"),
  listDir = async (dirpath) => {
    let dir = await fs.opendir(dirpath);
    for await (let entry of dir) {
      let name = entry.name;
      if (entry.isDirectory()) {
        name += "/";
      }
      let stats = await fs.stat(path.join(dirpath, name)),
        size = stats.size;
      console.log(String(size).padStart(10), name);
    }
  };

listDir("/home/nenuser/JAVASCRIPT/dataStructuresJs");
