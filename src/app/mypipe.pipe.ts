import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
    name:"testpipe"
})
export class MyPipe implements PipeTransform{
    transform(pname:string,price:number){
        if(price>=500)
        {
            return pname+"->>"+"Luxury Item";
        }
        else
        {
            return pname+"->>"+"moderate Item";
        }
    }
    

}