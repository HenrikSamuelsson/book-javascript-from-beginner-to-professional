let myWork = [];

const numOfWorkObjects = 10;

for (workCounter = 1; workCounter <= numOfWorkObjects; workCounter++) {
    let lessonName = 'Lesson ' + workCounter;
    let lessonStatus = workCounter % 2 == 0 ? false : true;
    
    let workObject = {
        name: lessonName,
        status: lessonStatus
    }
    
    myWork.push(workObject);
}

console.log(myWork);
