function one(){
    console.log("one");
}

function two(){
    one();
    console.log("two");
}

one();
two();

//the main work of call stack is to be manage the order of the Execualtion Contaxt. Its start with global execualtion contaxt and end with global execulation contaxt in
//between a lot of local execulation contaxt is created and return the whole control back to the global execualtion contaxt.

/* function bar() {
    console.log("Inside bar");
  }
  
  function foo() {
    console.log("Inside foo");
    bar();
  }
  
  Global Execution Context
  console.log("Start Execution");
  foo();
  console.log("End Execution");
  
  
 * +------------------+
  | Start Execution  |
  +------------------+
           |
           v
  +------------------+
  |  Global Context  |
  +------------------+
           |
           v
  +------------------+
  |  Call Function   |
  |       foo()      |
  +------------------+
           |
           v
  +------------------+
  |  Push foo() onto |
  |     Call Stack   |
  +------------------+
           |
           v
  +------------------+
  |   Execute foo()  |
  +------------------+
           |
           v
  +------------------+
  |   Call Function  |
  |       bar()      |
  +------------------+
           |
           v
  +------------------+
  |  Push bar() onto |
  |     Call Stack   |
  +------------------+
           |
           v
  +------------------+
  |  Execute bar()   |
  +------------------+
           |
           v
  +------------------+
  |   Pop bar() off  |
  |   Call Stack     |
  +------------------+
           |
           v
  +------------------+
  |   Continue       |
  |   Execution in   |
  |    foo()          |
  +------------------+
           |
           v
  +------------------+
  |   Pop foo() off  |
  |   Call Stack     |
  +------------------+
           |
           v
  +------------------+
  |  Continue Global |
  |    Execution     |
  +------------------+
           |
           v
  +------------------+
  |  End Execution   |
  +------------------+
 * 
 */