
## Description

It is desired to obtain the average of g groups that are in the same school year; being that each group can have n students that each student can take m subjects and that in all subjects three grades are averaged to obtain the average of the subject. What you want to display is the average of the groups, the average of each group and the average of each student.

## Usage

```Javascript

 let Grade=require("./Grade").Grade;
let Subject=require("./Subject").Subject;
let Student=require("./Student").Student;
let Group=require("./Group").Group;
let Institution=require("./Teaching_institution").Teaching_institution;

let arraygrade1=[];
let arraygrade2=[];
let arraygrade3=[];
let arraysubjects=[];
//------------------------------------------------
arraygrade1.push(new Grade(5));
arraygrade1.push(new Grade(8));
arraygrade1.push(new Grade(6));
//---------------------------------------------
arraygrade2.push(new Grade(7));
arraygrade2.push(new Grade(3));
arraygrade2.push(new Grade(4));
arraygrade2.push(new Grade(5));
//------------------------------------
arraygrade3.push(new Grade(5));
arraygrade3.push(new Grade(6));
arraygrade3.push(new Grade(8));
arraygrade3.push(new Grade(10));
//-------------------------------------------- */
 arraysubjects.push(new Subject("Physics",arraygrade1));
 arraysubjects.push(new Subject("Chemistry",arraygrade2));
 arraysubjects.push(new Subject("Mathematics",arraygrade3));
 //-----------------------------------------
 let student=new Student("Student1",arraysubjects);

//****************************************************** */
//****************************************************** */

let arraygrade4=[];
let arraygrade5=[];
let arraygrade6=[];
let arraysubjects2=[];
//------------------------------------------------
arraygrade4.push(new Grade(8));
arraygrade4.push(new Grade(9));
arraygrade4.push(new Grade(5));
//---------------------------------------------
arraygrade5.push(new Grade(8));
arraygrade5.push(new Grade(5));
arraygrade5.push(new Grade(4));
arraygrade5.push(new Grade(3));
//------------------------------------
arraygrade6.push(new Grade(6));
arraygrade6.push(new Grade(4));
arraygrade6.push(new Grade(10));
arraygrade6.push(new Grade(9));
//-------------------------------------------- */
 arraysubjects2.push(new Subject("Physics",arraygrade4));
 arraysubjects2.push(new Subject("Chemistry",arraygrade5));
 arraysubjects2.push(new Subject("Mathematics",arraygrade6));
 //-----------------------------------------
 let student2=new Student("Student2",arraysubjects2);
//********************************************** */
let arraystudents=[];
arraystudents.push(student);
arraystudents.push(student2);
//-----------------------------------------------------
let group1=new Group("Group1",arraystudents);
let group2=new Group("Group2",arraystudents);
let arraygroup=[];
arraygroup.push(group1);
arraygroup.push(group2);
//**************************************************** */
let institution=new Institution(arraygroup);
show_averages=()=>
{
    arraystudents.map(
        student=>{
            let averagesubjects=student.average_subjects();
            let averagestudent=student.average_student();
            console.log("The average of subjects for the student "+student.name+" is "+averagesubjects);
            console.log("The average for the student "+student.name+" is "+averagestudent);
            console.log("                                                          ");
        }
    )
    console.log("                                                          ");
        arraygroup.map(
            gp=>
            {
                console.log("The group average for "+gp.name +" is "+gp.average_group()); 
                console.log("                                                          ");
            }
        )
        console.log("The average of the groups is "+institution.average_groups())
}
show_averages();


```