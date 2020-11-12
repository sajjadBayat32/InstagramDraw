import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InstagramDraw';
  comments_list = [];
  winner_id = null;
  winner_loading = false;
  winner_counter = 10;

  constructor(private service: PostService) {
  }

  ngOnInit(): any {
    this.getComments(false);
  }

  getComments(shuffle): any {
    this.service.getComments(shuffle).subscribe(
      data => {
        setTimeout(() => {
          this.comments_list = data['comments'];
        })
      }
    );
  }

  selectWinner() {
    this.winner_loading = true;
    let intervalId = setInterval(() => {
      this.winner_counter = this.winner_counter - 1;
      if(this.winner_counter === 0) {
        clearInterval(intervalId)
        this.winner_loading = false;
        this.winner_id = Math.floor(Math.random() * this.comments_list.length);
      }
    }, 1000)

  }
}

