var eslint = require("eslint");
var test = require("tape");
var path = require("path");

var linter = new eslint.CLIEngine({
  configFile: path.join(__dirname, "..", "eslintrc.json")
});

test("api: lintText [semi]", function (t) {
  t.plan(1);
  var result = linter.executeOnText("console.log(\"hi there\")\n");
  t.equals(result.results[0].messages[0].message, "Missing semicolon.");
});

test("api: lintText [quotes]", function (t) {
  t.plan(1);
  var result = linter.executeOnText("console.log('hi there')\n");
  t.equals(result.results[0].messages[0].message, "Strings must use doublequote.");
});

test("api: lintText [curly]", function (t) {
  t.plan(1);
  var result = linter.executeOnText("var a = true;\nif (a === true) console.log(a);\n");
  t.equals(result.results[0].messages[0].message, "Expected { after 'if' condition.");
});

test("api: lintText [eqeqeq]", function (t) {
  t.plan(1);
  var result = linter.executeOnText("var a = 42; if (typeof a == \"number\") { console.log(\"OK!\"); }\n");
  t.equals(result.results[0].messages.length, 0);
});
