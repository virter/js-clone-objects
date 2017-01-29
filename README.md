//  Example:
a = [1, [1, 2, 3], {a: 1, b: 2}];
b = js_clone_object(a);
c = a;

a[0] = 100;
a[0][0] = 100;
a[2].a = 100;

console.log("a = ", a, "a[1] = ", a[1], "a[2] = ", a[2]);
console.log("b = ", b, "b[1] = ", b[1], "b[2] = ", b[2]);
console.log("c = ", c, "c[1] = ", c[1], "c[2] = ", c[2]);

//    Output:
//    a =  [100, Array[3], Object] a[1] =  [1, 2, 3] a[2] =  Object {a: 100, b: 2}
//    b =  [1, Array[3], Object] b[1] =  [1, 2, 3] b[2] =  Object {a: 1, b: 2}
//    c =  [100, Array[3], Object] c[1] =  [1, 2, 3] c[2] =  Object {a: 100, b: 2}
