import { Observable } from 'rxjs/Observable';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    // .switchMap(combined => {
    //   let id = combined[0].get('id');
    //   let page =combined[1].get('page');
    //   return this.service.getAll();
    // })
    //.subscribe(followers => this.followers = followers);
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page =combined[1].get('page');
      //console.log('page in combine obs: ' + page);
      //this.service.getAll({id: id, page: page});

      this.service.getAll()
        .subscribe(followers => this.followers = followers);
    });

    // let page = this.route.snapshot.queryParamMap.get('page');
    // console.log('page: ' + page);

    // this.route.paramMap.subscribe();
    // let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe();

    // this.service.getAll()
    // .subscribe(followers => this.followers = followers);

  }
}
