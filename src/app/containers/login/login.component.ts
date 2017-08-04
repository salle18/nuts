import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserActions} from '../../actions';
import {User} from '../../models';
import {StateService} from '../../services';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    public form: FormGroup;

    public constructor(private stateService: StateService, private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.form = this.formBuilder.group(
            {username: ['', Validators.required], password: ['', Validators.required]});
    }


    public onSubmit(): void {
        const user = Object.assign(new User(), this.form.value);
        this.stateService.dispatch(new UserActions.AuthenticateAction(user));
    }
}
