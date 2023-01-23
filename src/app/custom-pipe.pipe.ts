import { Pipe, PipeTransform } from '@angular/core';
//Import Pipe from angular core.
//Import PipeTransform interface
//pipe decorator
@Pipe({
  name: 'customPipe'
})

// by using export keyword, other component can be import this custompipe
//PipeTransform interface --> have one method called "transform"
export class CustomPipePipe implements PipeTransform {

//passing two parameters
  transform(value:string, gender:string){
    
// if(gender.toLocaleLowerCase() ==="male"){
 // return "Mr. "+value;
// }else{
// return "Miss. "+value;
// }

return gender.toLocaleLowerCase() ==="male" ? 'Mr.'+value: 'Mrs. '+value;
}


}
