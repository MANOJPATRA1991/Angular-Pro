import { 
  Component, 
  OnInit
} from '@angular/core';
import { FileSizePipe } from './file-size/file-size.pipe';

interface File {
  name: string,
  size: number, 
  type: string
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [FileSizePipe]
})
export class AppComponent {
  files: File[];
  mapped: File[];

  constructor(
    private fileSizePipe: FileSizePipe
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
  }
}
