class Subject
{
    constructor(pname,parraygrade)
    {
        this.name=pname;
        this.arraygrade=parraygrade;
    }
    number_grades=()=>
    {
        return this.arraygrade.length;
    }
    avg_grades=()=>
    {
        let vgrade=0;
        let average=0;
        let ngrades=this.number_grades();
        this.arraygrade.map(
            g=>{
                vgrade=vgrade+g.grade;
            }
        )
      average=vgrade/ngrades;
      return average
    }
  
}
module.exports={Subject}