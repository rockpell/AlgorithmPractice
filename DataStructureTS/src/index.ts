import LinkedList from "./LinkedList";

const list = new LinkedList();

list.append(11);
list.append(2);
list.append(33);
list.print();

const secondNode = list.find(2);

list.insertBefore(secondNode, 42);
list.print();

list.insertAfter(secondNode, 21);
list.print();

list.remove(11);
list.remove(2);
list.remove(33);

list.print();

list.removeAll();

list.print();
