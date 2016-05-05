window.variant = document.location.search.slice(1);

define([
  'spec/verifyClass.js',
  '../lib/chai/chai.js',
  '../lib/mocha/mocha.js',
  'src/'+variant+'/stack.js',
  'src/'+variant+'/queue.js',
  '../lib/jquery/jquery.js'
], function(verifyClass, chai){

  $(function(){
    $('<h4>The '+variant+' pattern</h4>').css({margin: 0}).prependTo(document.body);
  });

  mocha.setup('bdd');
  var expect = chai.expect;

  describe("stack", function() {

    var stack;
    var instantiator = variant === 'pseudoclassical' ? Stack : Stack;
    var prototypeOfInstances = variant === 'prototypal' && stackMethods;

    beforeEach(function(){
      if(variant === 'pseudoclassical'){
        stack = new instantiator();
      } else {
        stack = instantiator();
      }
    });

    describe('stack shared behavior', function(){

      verifyClass(instantiator).followsPattern(variant, {}, prototypeOfInstances);

      it('reports a size of zero for a new stack', function() {
        // console.log('hello');
        expect(stack.size()).to.equal(0);
      });

      it('reports a size of 2 after adding two items', function() {
        stack.push('a');
        stack.push('b');
        expect(stack.size()).to.equal(2);
      });

      it('does not error when removing from an empty stack', function() {
        expect(function(){ stack.pop(); }).not.throws();
      });

      it('reports a size of 1 after adding two items and removing one', function() {
        stack.push('a');
        // console.log('test size, ', stack.size());
        // console.log('index, ', stack.index);
        stack.push('b');
        // console.log('test size after B, ', stack.size());
        // console.log('index after B, ', stack.index);
        stack.pop();
        // console.log('test size after Pop, ', stack.size());
        // console.log('index after Pop, ', stack.index);
        expect(stack.size()).to.equal(1);
      });

      it('reports a size of 0 after removing more items than were added', function() {
        stack.push('a');
        stack.pop();
        stack.pop();
        expect(stack.size()).to.equal(0);
      });

      it('allows sequentially additing and removing items', function() {
        stack.push('a');
        // console.log('size of stack, ', stack.size());
        expect(stack.pop()).to.equal('a');
        // console.log('size of stack, ', stack.size());
        stack.push('b');
        expect(stack.pop()).to.equal('b');
      });

    });

    describe('stack-specific behavior', function(){
      it('removes the most recently added of two items', function() {
        stack.push('a');
        stack.push('b');
        expect(stack.pop()).to.equal('b');
      });

      it('removes the newest item, after newer items have already been added and removed', function() {
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.pop();
        expect(stack.pop()).to.equal('b');
      });
    });

  });

  describe("queue", function() {
    var queue;
    var instantiator = variant === 'pseudoclassical' ? Queue : Queue;
    var prototypeOfInstances = variant === 'prototypal' && queueMethods;

    beforeEach(function(){
      if(variant === 'pseudoclassical'){
        queue = new instantiator();
      } else {
        queue = instantiator();
      }
    });

    describe('queue shared behavior', function(){

      verifyClass(instantiator).followsPattern(variant, {}, prototypeOfInstances);

      it('reports a size of zero for a new queue', function() {
        // console.log('initial size - test 1. ', queue.size())
        expect(queue.size()).to.equal(0);
      });

      it('reports a size of 2 after adding two items', function() {
        // console.log('initial size - test 2. ', queue.size())
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.size()).to.equal(2);
        // console.log('initial size - after test 2. ', queue.size())
      });

      it('does not error when removing from an empty queue', function() {
        // console.log('initial size - before test 3. ', queue.size())
        expect(function(){ queue.dequeue(); }).not.throws();
        // console.log('initial size - after test 3. ', queue.size())
      });

      it('reports a size of 1 after adding two items and removing one', function() {
        // console.log('initial size. ', queue.size())
        queue.enqueue('a');
        // console.log('after add a. ', queue.size())
        queue.enqueue('b');
        // console.log('after add b. ', queue.size())
        queue.dequeue();
        // console.log('after dequeue. ', queue.size())
        expect(queue.size()).to.equal(1);
      });

      it('reports a size of 0 after removing more items than were added', function() {
        queue.enqueue('a');
        queue.dequeue();
        queue.dequeue();
        expect(queue.size()).to.equal(0);
      });

      it('allows sequentially adding and removing items', function() {
        queue.enqueue('a');
        expect(queue.dequeue()).to.equal('a');
        queue.enqueue('b');
        expect(queue.dequeue()).to.equal('b');
      });

    });

    describe('queue-specific behavior', function(){
      it('removes the least recently added of two items', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.dequeue()).to.equal('a');
      });

      it('removes the oldest item, after newer items have already been added and removed', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.dequeue();
        queue.enqueue('c');
        expect(queue.dequeue()).to.equal('b');
      });
    });

  });


  window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
});
