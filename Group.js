class Group
{
    constructor(pname,pstudents)
    {
        this.name=pname;
        this.students=pstudents;
    }
    number_students=()=>
    {
        return this.students.length;
    }
    average_students=()=>
    {
        let sum=0;
        this.students.map(
            stud=>{
              sum=sum+stud.average_student();
            }
        )
        return sum
    }
    average_group=()=>
    {
      let avg=this.average_students();
      let avggroup=avg/this.number_students();
      return avggroup
    }
}
module.exports={Group}