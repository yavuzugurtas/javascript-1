{
  const pageTitle = 'debug these';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

/* debug these

in each of the exercises below either the function or the test cases have a mistake in them
and sometimes both

But never the asserts!

these are some tricky exercises with no single correct answer
you're free to change any operation (ie. comparisons) but cannot change the control flow structures or the asserts
you can also change the test cases

have at it!

(heads up, these are very tricky exercises)

*/

const loopyTests = [

];
function loopy(a, b) {

}
loopy.quizzing = true;
evaluate(loopy, loopyTests);


const typeStrangenessTests = [
  // psst.  only use primitives as args or everything becomes confusing
  { name: 'first', args: [NaN, false], expected: 'same truthiness' },
  { name: 'second', args: [4, 4], expected: 'strictly equal' },
  { name: 'third', args: [NaN, NaN], expected: 'both NaN' },
  { name: 'fourth', args: [false, 'hello'], expected: 'else' },
  { name: 'fifth', args: [0, ''], expected: 'same truthiness' },
  { name: 'sixth', args: ['4', 4], expected: 'same truthiness' },
  { name: 'seventh', args: [true, 1], expected: 'strictly equal' },
];
function typeStrangeness(a, b) {
  let path;
  if (a !== a || b !== b) {
    console.assert(a !== a, 'a should be NaN');
    console.assert(b !== b, 'b should be NaN');
    path = 'both NaN';
  }
  else if (a == b) {
    console.assert(typeof a === typeof b, 'a and b should have the same type')
    console.assert(a == b, 'a and b should be loosely equal')
    path = 'strictly equal';
  }
  else if (a && b) {
    console.assert(!!a === !!b, 'a and b should have same truthiness');
    path = 'same truthiness';
  } else {
    path = 'else';
  }
  return path;
}
typeStrangeness.quizzing = true;
evaluate(typeStrangeness, typeStrangenessTests);



{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

