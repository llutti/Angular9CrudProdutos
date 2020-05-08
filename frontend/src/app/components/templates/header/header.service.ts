import { Injectable } from '@angular/core';
import { HeaderData } from './header-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService
{

  private innerHeaderData: BehaviorSubject<HeaderData> = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData
  {
    return this.innerHeaderData.value;
  }

  set headerData(headerData: HeaderData)
  {
    this.innerHeaderData.next(headerData);
  }
}
