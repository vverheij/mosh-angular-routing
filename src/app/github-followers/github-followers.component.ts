import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    let page = this.route.snapshot.queryParamMap.get('page');
    console.log('page: ' + page);
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
