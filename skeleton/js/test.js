var test = require('tape');
var logic = require('./logic.js');
arr=[{
  id: 0,
  description: 'smash avocados',
  done: false,
}
]


test('Example test', function(t) {
  t.pass();
  var actual=logic.addTodo(arr,'gym');
  var expected= [{
    id: 0,
    description: 'smash avocados',
    done: false,
  },{id: 1,
    description: 'gym',
    done: false,
  }];
  t.deepEqual(actual,expected,'check if add function works ');
  t.end();
});



test('delete example test', function(t) {
  t.pass();
  var actual=logic.deleteTodo(arr,0);
  var expected=[];
  t.deepEqual(actual,expected,'delete function ');
  t.end();
});

  test('markTodo Output', function (t) {
    var actual = logic.markTodo(arr,0);
    var expected = [{
    id: 0,
    description: 'smash avocados',
    done: true,
    }];
    
    
    t.deepEqual(actual, expected, 'check if mark function works ');
    t.end();
    });
    