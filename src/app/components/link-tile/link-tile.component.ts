import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Region} from '../../interfaces/weather.interface';

@Component({
  selector: 'app-link-tile',
  templateUrl: './link-tile.component.html',
  styleUrls: ['./link-tile.component.scss']
})
export class LinkTileComponent implements OnInit {
  @Input() region: Region | undefined;

  @Output() regionChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  changeRegion(name: string): void | undefined {
    return this.regionChanged?.emit(name);
  }
}
