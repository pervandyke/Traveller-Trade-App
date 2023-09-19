import { Component } from '@angular/core';
import { LoadcsvService } from 'src/app/services/loadcsv.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
    
    file: File | null = null; // Variable to store file
    data: string[] | null = null;
  
    // Inject service 
    constructor(private csvService: LoadcsvService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event: any) {
        this.file = event.target.files[0];

        this.data = this.csvService.parseCSV(this.file)
    }
    
}
