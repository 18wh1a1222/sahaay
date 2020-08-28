import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'needFilter'
})
export class NeedFilterPipe implements PipeTransform {

  transform(needs: Array<any>, type: string ): Array<any> {
    if (type === "default") {
      return needs;
    }
    else {
    
    return needs.filter(need => need.type === type);
    }
  }

}
