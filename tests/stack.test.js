const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('two pops on stack with two elements returns the first element added', () => {
    stack.push(1)
    stack.push(2)
    stack.pop()
    let res = stack.pop()
    expect(res).toBeDefined();
    expect(res).toBe(1)
});

test('one million pushes to the stack and one pop returns the last element added', () => {
    for(let i = 0; i < 1000001; i++) {
        stack.push(i)
    }
    let res = stack.pop()
    expect(res).toBeDefined();
    expect(res).toBe(1000000)
});