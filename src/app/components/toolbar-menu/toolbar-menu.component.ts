import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {showAccountsRoute} from "../../routes";

@Component({selector: 'app-toolbar-menu', templateUrl: 'toolbar-menu.component.html', styleUrls: ['toolbar-menu.component.scss']})
export class ToolbarMenuComponent implements OnInit {

    public isShowAccountsRoute$: Observable<boolean>;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.isShowAccountsRoute$ = this.activatedRoute.url.map(segments => segments.map(segment => segment.toString()).join('') === showAccountsRoute);
    }
}
