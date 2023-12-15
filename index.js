

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number??
function arraypair(array,sum){
    for (i = 0;i < array.length;i++) {
        var first = array[i];
        for (j = i + 1;j < array.length;j++) {
            var second = array[j];
            if ((first + second) == sum) {
               console.log('First: ' + first + ' Second ' + second);
            }
        }
    }
}

var a = [2, 4, 3, 5, 6, 2, 4, 7, 8, 9];

arraypair(a,8);

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

var array = [1,4,6,3,2,8,'Rachana'];
console.log('array:', array);
var reversed = array.reverse();
console.log('reversed:', reversed);

// Q3. Write a program to check if two strings are a rotation of each other?

function rotation (str1, str2) {
    for(let i=0; i<str1.length; ++i) {
            str1 = str1[str1.length-1] + str1.substring(0, str1.length-1);
        if(str1 === str2) {
            return true;
        }}
    return false;
}
console.log(
    rotation('12345', '34512'), 
    rotation('12345', '23451'), 
    rotation('12345', '12354'), 
    rotation('56789', '67895'),
    rotation('56789', '89765')
)

// Q4. Write a program to print the first non-repeated character from a string?
function character(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "_";
}
console.log(character ("abaecabaabacfaba")  )


// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(n, from_rod,  to_rod,  aux_rod) 
{ 
        if (n == 0) 
        { 
            return; 
        } 
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod); 
        console.log(("Move disk " + n + " from rod " + from_rod + 
        " to rod " + to_rod))
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod); 
    } 
     var N = 3; 
       towerOfHanoi(N, 'A', 'C', 'B');

    // Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

    function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
      function postToPre(post_exp)
    {
        var s = [];
          var length = post_exp.length;
          for (var i = 0; i < length; i++) {
              if (isOperator(post_exp[i])) {
                  var op1 = s[s.length - 1];
                s.pop();
                var op2 = s[s.length - 1];
                s.pop();
                  var temp = post_exp[i] + op2 + op1;
                  s.push(temp);
            }
              else {
                  s.push(post_exp[i] + "");
            }
        }
          var ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     var post_exp = "ABC/-AK/L-*";
    console.log("Prefix : " + postToPre(post_exp))
     
    
// Q7. Write a program to convert prefix expression to infix expression.
    function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
     function convert(str)
    {
        let stack = [];
         var l = str.length;
         for(var i = l - 1; i >= 0; i--)
        {
            var c = str[i];
             if (isOperator(c))
            {
                var op1 = stack[stack.length - 1];
                stack.pop()
                var op2 = stack[stack.length - 1];
                stack.pop()
                var temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
                 stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
    var exp = "*-A/BC-/AKL"; 
    console.log("Infix : " + convert(exp))


// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function brackets(expression) {
    var stack = [];
    var current;
    var match = {
          "(": ")", 
          "[": "]", 
          "{": "}", 
        };
                      
    for (var i = 0; i < expression.length; i++) {
      current = expression[i]; 
      if (current === '(' || current === '[' || current === "{") {
        stack.push(current);
        
      } else if (current === ')' || current === ']' || current === "}") {
        const lastBracket = stack.pop();
        
        if (match[lastBracket] !== current) { 
                  return false; }
      }
    }
    return stack.length === 0; 
  }
  console.log(brackets('({)}')); 
  console.log(brackets('{[()]}'));
  console.log(brackets('[](){}'));
  console.log(brackets('(({[(((1)-2)+3)-3]/3}-3)'));
  

// Q9. Write a program to reverse a stack.

class Stack {
    constructor() {
        this.top = null
    }
    push(ele) {
        var node = new newNode(ele)
        node.next = this.top
        this.top = node
    }
    pop() {
        var temp = this.top
        var char = temp.data
        this.top = this.top.next
        temp = null
        return char
    }
    reverseString(str) {
        var i = 0
        var reversestr = ""
        while (i != str.length) {
            this.push(str.charAt(i)
)
            i++
        }
        var temp = this.top
        while (temp != null) {
            var char
            char = this.pop()
            reversestr += char
            temp = this.top
        }
        return reversestr
    }
    display() {
        var temp = this.top
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
class newNode {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

const stack = new Stack()
const string = "Rachana"
const reverse = stack.reverseString(string)
console.log(`The String provided - ${string}\nString in reverse format -${reverse}`)

// Q10. Write a program to find the smallest number using a stack.

var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var min = Math.min(...arr)
console.log(min)

class Stack {
    constructor() {
      this.items = [];
      this.minStack = [];
    }
    push(element) {
      this.items.push(element);
        if (this.minStack.length == 0 || element <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(element);
      }
    }
    pop() {
      if (this.items.length == 0)
        return "Underflow";
      
      const poppedElement = this.items.pop();
       if (poppedElement == this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return poppedElement;
    }
    peek() {
      if (this.items.length == 0)
        return "No elements in Stack";
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length == 0;
    }
    size() {
      return this.items.length;
    }
    getMin() {
      if (this.minStack.length == 0)
        return "No elements in Stack";
      return this.minStack[this.minStack.length - 1];
    }
  
    displayStack(stack) {
      console.log("Stack elements are:");
      let str = "";
      for (let i = 0; i < stack.items.length; i++)
        str += stack.items[i] + " ";
      return str.trim();
    }
  }
  
  let stack = new Stack();
  stack.push(1);
  stack.push(9);
  stack.push(3);
  stack.push(4);
  stack.push(-5);
  console.log(stack.displayStack(stack));
  console.log("Minimum value in the stack:");
  console.log(stack.getMin());
 
