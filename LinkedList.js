function LinkedList() {
function Node(data) {
this.data = data;
this.next = null;
}

var length = 0;
var head = null;

this.append = function(data) {
var node = new Node(data);
var current;

if(length === 0) {
head = node;
} else {
current = head;
while(current.next) {
current = current.next;
}
current.next = node;
}
length++;
};

this.removeAt = function(position) {

if(position >= 0 && position < length) {
var index = 0;
var current = head;
var previous;
if(position === 0) {
head = current.next;
} else {
while(index < position) {
previous = current;
current = current.next;
index++;
}
previous.next = current.next;
}
length--;
return current.data;
} else {
return null;
}
};

this.insert = function(position, data) {
if(position >= 0 && position <= length) {
var node = new Node(data);
var index = 0;
var current = head;
var previous;
if(position === 0) {
head = node;
node.next = current;
} else {
while(index < position) {
previous = current;
current = current.next;
index++;
}
previous.next = node;
node.next = current;
length++;
}
return true;
} else {
return false;
}
};

this.toString = function() {
var current = head;
var result = '';
while(current) {
result += current.data;
current = current.next;
}
return result;
};

this.indexOf = function(data) {
var current = head;
var index = 0;
while(current) {
if(current.data === data) {
return index;
}
current = current.next;
index++;
}
return -1;
};

this.isEmpty = function() {
return length === 0;
};

this.size = function() {
return length;
};

this.getHead = function() {
return head;
};
}
