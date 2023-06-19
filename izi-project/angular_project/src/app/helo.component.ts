import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-hello',
  template: `<span>Hello world</span>`,
})

export class helloComponent{
  @Input() name : string | undefined;

  ngOnInit(){
    console.log(new Date())
  }

  ngOnDestroy(){
    console.log(new Date())
  }

}
