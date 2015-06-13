//my solution
function Stack() {
  var items = [];
}

Stack.prototype.push = function(element) {
  this.items.push(element);
};

Stack.prototype.pop = function() {
  var result = this.items[this.items.length-1];
  this.items[this.items.length-1] = null;
  return result;
};

Stack.prototype.peek = function() {
  return this.items[this.items.length-1];
};

Stack.prototype.isEmpty = function() {
  if(!this.items.length) {
    return true;
  }
  return false;
};

Stack.prototype.clear = function() {
  this.items = [];
};

Stack.prototype.size = function() {
  return this.items.length;
};

function binaryConversion(num) {
  var container = new Stack();
  var result = [];
  while(num >= 1) {
    var leftover = num % 2;
    num = Math.floor(num / 2);
    container.push(leftover);
  }

  while(container.isEmpty === false) {
     result.push(container.pop());
  }

  return result.join("").toString();
}

//his solution
function Stack() {
   var items = [];
   this.push = function(element) {
     items.push(element);
   };
   this.pop = function() {
     return items.pop();
   };
   this.peek = function() {
     return items[items.length-1];
   };
   this.isEmpty = function() {
     return items.length === 0;
   };
   this.size = function() {
     return items.length;
   };
   this.clear = function() {
     items = [];
   };
   this.print = function() {
     console.log(items.toString());
   };
}

function divideBy2(decNumber){
 var remStack = new Stack(),
     rem,
     binaryString = '';
 while (decNumber > 0){ //{1}
     rem = Math.floor(decNumber % 2); //{2}
     remStack.push(rem); //{3}
     decNumber = Math.floor(decNumber / 2); //{4}
 }
 while (!remStack.isEmpty()){ //{5}
     binaryString += remStack.pop().toString();
 }
 return binaryString;
}
