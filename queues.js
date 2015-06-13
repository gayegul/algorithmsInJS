function Queue() {
  var items = [];

  this.enqueue = function(item) {
    items.push(item);
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0 ? true : false;
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
}

// Priority Queue
function PriorityQueue() {
  var items = [];

  function QueueElement(item, priority) {
    this.item = item;
    this.priority = priority;
  }

  this.enqueue = function(item, priority) {
    var queueElement = new QueueElement(item, priority);

    if(!items.length) {
      items.push(queueElement);
    } else {
      var added = false;
      for(var i = 0; i < items.length; i++) {
        if(items[i].priority > queueElement.priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!added) {
        items.push(queueElement);
      }
    }
  };
  //other methods same as queue
}


// The Circular Queue
function hotPotato(nameList, num) {
  var queue = new Queue();

  for(var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';
  while(queue.size() > 1) {
    for(var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from the hot potato game.');
  }
  return queue.dequeue();
}
