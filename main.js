import { LinkedList } from './linkedListClass.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.prepend("rabbit");
console.log(list.toString());

console.log('Size:', list.size());

console.log('Head:', list.getHead().value);

console.log('Tail:', list.getTail().value);

console.log(list.at(3).value);

list.pop()
console.log(list.toString());

console.log(list.contains('dog'));
console.log(list.contains('shark'));

console.log(list.find('hamster'));
console.log(list.find('tiger'));

list.insertAt('JOHN', 3);
console.log(list.toString());

list.removeAt(3);
console.log(list.toString());