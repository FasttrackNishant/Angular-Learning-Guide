import { Component,OnInit, Input ,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  ngOnInit():void
  {
    console.log('I am coming from ngOnInit');
  }

  @Input()
  count :number = 0;

  constructor(){

    
  }

  ngOnChanges(changes:SimpleChanges)
  {
    for(let property in changes)
    {
      if(property === 'count')
      {
        console.log('previous', changes[property].previousValue)
        console.log('previous',changes[property].currentValue)
        console.log('firstchange',changes[property].firstChange);
      }

    }
  }


}
