class Student
{
    constructor(pname,psubjects)
    {
        this.name=pname;
        this.subjects=psubjects;
    }
  number_subjects=()=>
  {
      return this.subjects.length;
  }
  average_subjects=()=>
  {
      let sum=0;
      this.subjects.map(
          sub=>{
            sum=sum+sub.avg_grades();
          }
      )
      return sum
  }
  average_student=()=>
  {
    let avg=this.average_subjects();
    let avgstudent=avg/this.number_subjects();
    return avgstudent
  }
}
module.exports={Student}