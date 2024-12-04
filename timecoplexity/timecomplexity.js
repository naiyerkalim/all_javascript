//Big O: It gives us precise, numeric and objective way of judging the performance of our code.

//Q. why Big O Notation/ Time complexity really matters?
//Ans: It helps you to write better code and becomes important as your inputs get bigger

//Q. What does better implementation means?
//Ans: 'Better' means the faster time to finish and to use less memory (RAM), although there is a much stronger emphasis 
//on the former.
  //Readability of the code does not factor at all. Performance is the King.

//Q. Why not hardtime measurments?
//Ans
  //Computers differ widely in their processors, so you will often get different times for each computer, hard to standarize
  
  //Manually testing is the time of your code with each new implementation is not practical
  //What if there was a way to quickly measure the performance of your code by just looking at it. rather than manually 
  //timing it.

//Identifying runtime complexity
 //Iterating over a collection OR using N as a pointer with a for loop: O(n)
 //Iterating over the same collection with nested for loops: O(n^2)
 //Iterating over different collection with nested for loops: O(n*m)

 //Constant does not matter
  //O(12) --> O(1)
  //O(1000) --> O(1)
  //O(2n) --> O(n)
  //O(n/2) --> O(n)
  //O(13n^2) --> O(n^2)

  //Other terms for Big O Notation / Time Complexity
    //O(1) --> constant Time
    //O(n) --> Linear Time
    //O(n^2) --> Quadratic Time.

  //Arithmatic opearations have constant time complexity of O(1):
    //it takes your processor the same amount of time to do 1+1 as 100000+1

  //variable Assignments have the constant time complexity of O(1):
    //it takes your processor the same amount of time to do var x=1 as var x= 100000.

//Q. Counting operations for Big O Notation.
  //Lets measure the performance of our code by counting the operations it has, rather than manually timing it.
  
//Space complexity vs Time complexity:
  //Space Complexity:
    //How much more memory use(RAM) do we need as the inputs provided to the code gets larger
    //Most primitives (Boolean & Numbers) takes up O(1) Constant space.
    //String, Arrays and objects take up O(n) /linear space.
      //Costs to produce and run processors are much higher compared to RAM.
        //better use of time writing code that is easier on the processor.

//Logarithmic
  //O(logN): Logarthmic time complexity
    //if the input is doubled then we only have to do one more operation.
    //Everytime we do an operation like guessing we can eliminate half the remaining operations.

//Algorithms
  //creating code to solve a spcific problems.
  //Algo require consistent practice to retain afer the initial learning period..