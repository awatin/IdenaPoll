import {Component, OnInit} from '@angular/core';
import {DataService} from '@app-shared/data.service';
import {select, Store} from '@ngrx/store';
import {getSession, State} from '@app-redux/index';
import {SessionBean} from '@app-shared/model/session.bean';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  session: SessionBean;

  constructor(protected dataService: DataService, protected store: Store<State>) {
    this.store.select(getSession).subscribe( (s) => {
      this.session = s;
    });
    this.dataService.getSessionOnlyCheck();
  }

  ngOnInit(): void {
  }



}
