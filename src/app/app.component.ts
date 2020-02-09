import { 
  Component, 
  OnInit
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FileSizePipe } from './file-size/file-size.pipe';
import { filter } from 'rxjs/operators';

interface File {
  name: string,
  size: number, 
  type: string
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [FileSizePipe]
})
export class AppComponent {
  files: File[];
  mapped: File[];

  constructor(
    private fileSizePipe: FileSizePipe,
    private router: Router
  ) { }

  ngOnInit() {
    this.files = [
      {
        name: 'logo.svg',
        size: 2120109,
        type: 'image/svg'
      },
      {
        name: 'banner.jpg',
        size: 18029,
        type: 'image/jpg'
      },
      {
        name: 'background.png',
        size: 1784562,
        type: 'image/png'
      }
    ];

    this.mapped = this.files.map(file => ({
      ...file,
      size: this.fileSizePipe.transform(file.size, 'mb')
    }));

    // this.router.events
    //   .subscribe(event => {
    //     if (event instanceof NavigationEnd) {
    //       console.log(event);
    //     }
    //   });
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(event => {
        console.log(event);
      });
  }
}
