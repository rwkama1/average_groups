class Teaching_institution
{
    constructor(pgroups)
    {
        this.groups=pgroups;
    }
    number_groups=()=>
    {
        return this.groups.length;
    }
  avg_groups=()=>
    {
        let sum=0;
        this.groups.map(
            g=>{
                  sum=sum+g.average_group();
                }
            )
         return sum 
    }
    average_groups=()=>
    {
      let avg=this.avg_groups();
      let avggroup=avg/this.number_groups();
      return avggroup
    }
}
module.exports={Teaching_institution}