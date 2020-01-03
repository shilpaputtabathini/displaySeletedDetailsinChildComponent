import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {
    private _data: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    public setData(data: any){
        this._data.next(data);
    }

    public getData(): Observable<any> {
        return this._data.asObservable();
    }
}