function printans(ans) {
    for (let [key, value] of ans) {
      console.log(`${key} = ${value}`);
    }
  }
  function count(str, outp_map) {
    for (let i = 0; i < str.length; i++) {
      let k = outp_map.get(str[i]);
      outp_map.set(str[i], k + 1);
    }
    printans(outp_map);
  }
  function count_occurs(test, callback) {
    if (test.length === 0) {
      console.log(" empty string ");
      return;
    } else {
      let ans = new Map();
      for (let i = 0; i < test.length; i++) {
        ans.set(test[i], 0);
      }
      callback(test, ans);
    }
  }
  let str = "hello world";
  let test=str.replace(/\s/g, "")
  count_occurs(test, count);
  