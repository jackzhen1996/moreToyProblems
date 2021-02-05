var getDepth = function(ancestry, name1, count = 0) {
  // keep track of coun

// base case: when the name of interest is found
if (ancestry.name === name1) {
  return count;
}
// recursive case: Loop thru the children's array and call getDepth on each children
for (var i = 0; i < ancestry.children.length; i++) {
  var currentDepth = getDepth(ancestry.children[i], name1, count + 1)
  // if no count is returned then the thats the name we're looking for
  if (currentDepth) {
    return currentDepth;
  };
}


}

// determine if two people are siblings
var areSiblings = function(tree, person1, person2 ) {
// extract the children

  if (!tree.children) {
    return;
  }

  var children = [];
  for (var i = 0; i < tree.children.length; i++) {
    var child = tree.children[i]
    children.push(child.name);
  }
  if (children.includes(person1) && children.includes(person2)) {
    return true;
  }

  if (tree.children) {
    tree.children.forEach(function(child) {
       areSiblings(person1, person2, tree);
    });
  }

  return false;


}

// determine if the two people are cousins
var areCousins = function(tree, person1, person2 ) {
return getDepth(tree, person1) === getDepth(tree, person2) && !areSiblings(tree,person1,person2)
}



var familyTree = {
name: 'Destiny Walker',
age: 31,
children: [
  {
    name: 'David Mosher',
    age: 28,
    children: [
      {
        name: 'Victor Tu',
        age: 33,
        children: []
      }
    ]
  },
  {
    name: 'Lily Carey',
    age: 34,
    children: [
      {
        name: 'Jialu Deng',
        age: 24,
        children: [
          {
            name: 'Jenine Steinberg',
            age: 23,
            children: []
          }
        ]
      }
    ]
  }
]
}


// // expect false
//  console.log(areCousins(familyTree, 'David Mosher', 'Lily Carey'));
// // expect true
console.log(areCousins(familyTree, 'Victor Tu', 'Victor Tu'));

// console.log(areSiblings(familyTree, 'Victor Tu', 'Jenine Steinberg'))

// console.log(getDepth(familyTree, 'Jialu Deng'))
// console.log(getDepth(familyTree, 'Victor Tu'))


// // expected: Destiny Walker = depth of 0
// console.log(getDepth(familyTree, 'Destiny Walker'))
// // expected: David Mosher = depth of 1
// console.log(getDepth(familyTree, 'Lily Carey'))

// console.log(getDepth(familyTree, 'David Mosher'))

// console.log(getDepth(familyTree, 'Jenine Steinberg'))

// // expected: false
// console.log(areSiblings(familyTree, 'Destiny Walker', 'Lily Carey'))
// // expected: true
// console.log(areSiblings(familyTree, 'David Mosher', 'Lily Carey'))
