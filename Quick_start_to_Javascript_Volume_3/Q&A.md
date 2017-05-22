# JavaScript property access: dot notation vs. brackets?

## Square brackets notation allows use of characters that cant be used in dot notation

The second advance of square brackets notation is when dealing with variable property names.
```javascript
var foo = myForm.foo[]; // wrong syntax
var foo = myForm["foo[]"]; correct syntax


for (var x = 0; x < 10; x++){
    myFunction(myForm["mycontrolNumber" + x]);
}
```

**Summary**
⋅⋅*  ⋅⋅* Dot notation is faster to write and cleaner to read
⋅⋅* [] Sqaure