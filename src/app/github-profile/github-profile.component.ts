import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('GithubProfile OnInit');

    let page = this.route.snapshot.queryParamMap.get('page');
    let order = this.route.snapshot.queryParamMap.get('order');

    let id = this.route.snapshot.paramMap.get('id');
    console.log('userid: ' + id + ' / page: ' + page + ' / order: ' + order);
  
    // this.route.paramMap
    //   .subscribe((params) => {
    //     let id = +params.get('id');
    //     console.log(id);
    //   })
  }

}
