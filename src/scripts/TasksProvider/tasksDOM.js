//Code by Trigg Summs
//This contains my HTML representation and Converter Function


const makeTaskHTMLRepresentation = {
    taskConverter(taskObj) 
    {
    
    return `
    
    <section class="hiddentask--${taskObj.id}">
            <h2>${taskObj.taskTitle}</h2>
                <p><i>Task Deatails:</i> ${taskObj.taskName}</p>
                <p><i>Expected Completion Date:</i> ${taskObj.expectedCompletionDate}</p>
                <input class= "checkbox" id="completeTask--${taskObj.id}" type="checkbox">Update As Complete!</input>
                <button id="deleteTask--${taskObj.id}">Delete</button> 
                
    </section>
    `
    }


}

export default makeTaskHTMLRepresentation;



//POSSIBLE CSS for the Checkbox: https://stackoverflow.com/questions/1120879/css-checkbox-input-styling



//GRAVEYEARD BELOW:
//<input class= "checkbox" id="completeTask--${taskObj.id}" type="checkbox">Update As Complete!</input>

//A removed object
//<p>${taskObj.complete}</p>
//<img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage-proxy-cdn.teamtreehouse.com%2Fbd7f74f7916d61a5ee80ce2d05ecc863857a0e48%2F68747470733a2f2f7374617469632e7465616d74726565686f7573652e636f6d2f696d616765732f656d6f6a692f756e69636f64652f323730352e706e67&f=1&nofb=1"/