'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var String_set = require("./string_set.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* :: */[
    /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* Eq */Block.__(0, [
                    x,
                    y
                  ]);
        })
    ],
    suites[0]
  ];
  return /* () */0;
}

var s = String_set.empty;

for(var i = 0; i <= 99999; ++i){
  s = String_set.add(String(i), s);
}

eq("File \"test/string_set_test.ml\", line 16, characters 5-12", String_set.cardinal(s), 100000);

Mt.from_pair_suites("String_set_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */
