// Buttons

var remove = document.querySelector(".remove");
var alter = document.querySelector(".alter");
var checkbox = document.querySelector(".checkbox");

// Elements of the page

var item = document.querySelector(".element-div");
var main = document.querySelector(".main-content");
var form = document.querySelector(".form-container");

// Remove-All variables

var counter = 3;

var removeAllBtn = document.querySelector(".remove-all");
var remain_tasks = document.querySelector(".current-tasks");

// Functions

// Creates the examples
window.addEventListener("load", () =>
{
    for (var i = 0; i < 3; i++)
    {
        const newElement = item.cloneNode();
        newElement.setAttribute("id", "");

        const newInput = document.createElement("input");

        newInput.classList.add("item");
        
        newInput.type = 'text';
        
        if (i == 0)
        {
            newInput.value = " Wash plates ";
        }
        else if (i == 1)
        {
            newInput.value = " Take out the trash ";
        }
        else
        {
            newInput.value = " Walk the dog ";
        }

        newInput.setAttribute('readonly', 'readonly');

        newElement.appendChild(newInput);

        const newRemoveBtn = remove.cloneNode(true);
        const newAlterBtn = alter.cloneNode(true);
        const newCheckbox = checkbox.cloneNode(true);

        newAlterBtn.classList.add("true");
        newCheckbox.classList.add("true");

        newRemoveBtn.addEventListener("click", function() 
        {
            main.removeChild(newElement);

            counter--;
            remain_tasks.innerHTML = "You have " + counter + " pending tasks";
        });

        newAlterBtn.addEventListener("click", function()
        {
            if (newAlterBtn.className == "btn alter true")
            {
                newAlterBtn.classList.remove("true");
                newAlterBtn.classList.add("false");
                
                newInput.removeAttribute("readonly");
                newInput.focus();
            }
            else
            {
                newAlterBtn.classList.remove("false");
                newAlterBtn.classList.add("true");
                
                newInput.setAttribute("readonly", "readonly");
            }
        });

        newCheckbox.addEventListener("click", function()
        {
            if (newCheckbox.className == "btn checkbox true")
            {
                newCheckbox.classList.remove("true");
                newCheckbox.classList.add("false");
                
                newInput.classList.add("checked");
            }
            else
            {
                newCheckbox.classList.remove("false");
                newCheckbox.classList.add("true");

                newInput.classList.remove("checked");
            }
        });

        newElement.appendChild(newCheckbox);
        newElement.appendChild(newRemoveBtn);
        newElement.appendChild(newAlterBtn);

        main.appendChild(newElement);
    }
});

// Adds new elements
form.addEventListener('submit', (e) => 
{    
    // Prevents error if user press enter
    e.preventDefault();


    // Gets the value of the user input
    const input = document.querySelector(".new-element");
    const task_value = " " + input.value + " ";

    // Creates the new div
    const newElement = item.cloneNode();
    newElement.setAttribute("id", "");

    // Creates new input to be inserted in the div
    const newInput = document.createElement("input");

    // Adds classes and attributes to the new input
    newInput.classList.add("item");
    
    newInput.type = 'text';
    newInput.value = task_value;

    newInput.setAttribute('readonly', 'readonly');

    // Inserts the new input into the div
    newElement.appendChild(newInput);

    // Creates buttons

    const newRemoveBtn = remove.cloneNode(true);
    const newAlterBtn = alter.cloneNode(true);
    const newCheckbox = checkbox.cloneNode(true);

    newAlterBtn.classList.add("true");
    newCheckbox.classList.add("true");

    // Adds remove function
    newRemoveBtn.addEventListener("click", function() 
    {
        main.removeChild(newElement);
        
        counter--;
        remain_tasks.innerHTML = "You have " + counter + " pending tasks";
    });

    // Adds alter function
    newAlterBtn.addEventListener("click", function()
    {
        if (newAlterBtn.className == "btn alter true")
        {
            newAlterBtn.classList.remove("true");
            newAlterBtn.classList.add("false");
            
            newInput.removeAttribute("readonly");
            newInput.focus();
        }
        else
        {
            newAlterBtn.classList.remove("false");
            newAlterBtn.classList.add("true");
            
            newInput.setAttribute("readonly", "readonly");
        }
    });

    // Adds checkbox function
    newCheckbox.addEventListener("click", function()
    {
        if (newCheckbox.className == "btn checkbox true")
        {
            newCheckbox.classList.remove("true");
            newCheckbox.classList.add("false");
            
            newInput.classList.add("checked");
        }
        else
        {
            newCheckbox.classList.remove("false");
            newCheckbox.classList.add("true");

            newInput.classList.remove("checked");
        }
    });

    // Adds the buttons to the new element
    newElement.appendChild(newCheckbox);
    newElement.appendChild(newRemoveBtn);
    newElement.appendChild(newAlterBtn);

    // Adds new element to the main page
    main.appendChild(newElement);

    // Resets the input value
    input.value = '';

    // Increments the remain_tasks div 
    counter++;
    remain_tasks.innerHTML = "You have " + counter + " pending tasks";
    
});

// Removes all elements
removeAllBtn.addEventListener("click", function()
{
    while (counter > 0)
    {
        main.removeChild(main.lastChild);
        counter--;
    }

    remain_tasks.innerHTML = "You have " + counter + " pending tasks";
});