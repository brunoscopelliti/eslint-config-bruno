var config = require("../");
var test = require("tape");

test("test basic properties of config", function (t) {
  t.equal(config.extends, "standard");
  t.ok(isObject(config.rules));
  t.end();
})

function isObject (obj) {
  return typeof obj === "object" && obj !== null;
}
