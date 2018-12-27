import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(value: any, cat,size): any {
    let oddArray =[]
    for (let obj of value)
if(obj =cat){
  console.log(size);
  return obj;
}
    
  }

}
