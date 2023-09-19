import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadcsvService {

  constructor() { }

    public parseCSV(file: File | null) {
        if (file == null) {
            return null;
        }        

        //parse the csv
        const data = file.toString().split('\n');
        return data;
    }

}
