/*
You're creating a simple to do list. 

Given an array of tasks to complete, print each task out 
in a numbered list indicating the order of the tasks.

Example input: ["Do dishes", "Sweep floor", "Feed dog"]

Example output:
1. Do dishes
2. Sweep floor
3. Feed dog

Note: This is totally separate/different from the to do list project.
*/

const tasks = ["Buy groceries", "Finish homework", "Go for a run", "Call a friend"];

//add your code below

//iterate through the array
for (let i = 0; i < tasks.length; i++) {
  //store the task number in a variable
  //remember to keep in mind zero indexing
  const taskNumber = i + 1;
  
  //store the task in a variable
  const task = tasks[i];

  //print the task with its task number
  console.log(`${taskNumber}. ${task}`);
}