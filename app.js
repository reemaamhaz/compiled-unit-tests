module.exports = 
{
processAllEmployees: function (allEmployees)
{   
    const employeesArray = 
    [{   
      name: ["Oscar Martinez", "Angela Martin", "Kevin Malone"],
      department: "Accounting"
    },
    {   
      name: ["Michael Scott", "Jim Halpert", "Dwight Schrute", "Andy Bernard", "Stanley Hudson", "Phyllis Vance"],
      department: "Sales" 
    },
    {   
      name: ["Toby Flenderson", "Holly Flax", "Gabe Lewis"],
      department: "Human Resources"
    },
    {   
      name: ["Ryan Howard", "Peter Miller", "Gabe Lewis"],
      department: "Temps and Interns"
    },
    {   
      name: ["Jan Levinson", "Robert California"],
      department: "Corporate"
    },
    {   
      name: ["Darryl Philbin", "Roy Anderson"],
      department: "Warehouse"
    },
    {   
      name: ["Pam Beezley", "Erin Hannon"],
      department: "Reception"
    },
    {   
      name: ["Creed Bratton", "Meredith Palmer", "Kelly Kapoor", "Clark Green"],
      department: "Support"
    }]; 

    for(var i = 0; i < employeesArray.length; i++)
    {
       let empDep = employeesArray[i].department;
         if (!(empDep == "Human Resources" || empDep == "Corporate"))
         {
              namesLeft = employeesArray[i].name;
              
              return namesLeft;
         }   
    }

},

splitFullName: function (fullName) 
{
    let firstNamesArray = [];
    let lastNamesArray = [];

   for (var x = 0; x < namesLeft.length; x++)
   {
        fullName = namesLeft[x].split(" "),
        first = fullName.shift(),
        last = fullName.shift();

        firstNamesArray.push(first);
        lastNamesArray.push(last);
   }   
   
   return firstNamesArray;
}, 



printOutFirstNames: function () 
{
    let firstNamesArray = ["Oscar","Angela","Kevin","Michael","Jim","Dwight","Andy","Stanley","Phyllis","Ryan","Peter","Gabe","Darryl","Roy","Pam","Erin","Creed","Meredith","Kelly","Clark"];
    console.log("First Names: ");
    
    for (let i = 0; i < firstNamesArray.length; i++)
    {
        nameList = firstNamesArray[i];
        console.log(nameList);
    }
    
    return nameList;
}
}
