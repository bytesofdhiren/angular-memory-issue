import { Component } from '@angular/core';

@Component({
    selector:'register-component',
    templateUrl:'./register.component.html'
})

export class RegisterComponent{
	ngOnDestroy() {
        	console.log('do nothing');
	}

}
