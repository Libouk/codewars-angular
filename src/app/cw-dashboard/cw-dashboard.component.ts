import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cw-dashboard',
  templateUrl: './cw-dashboard.component.html',
  styleUrls: ['./cw-dashboard.component.css']
})
export class CwDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      // if (matches) {
      //   return [
      //     { title: 'Card 1', cols: 1, rows: 1 },
      //     { title: 'Card 2', cols: 1, rows: 1 },
      //     { title: 'Card 3', cols: 1, rows: 1 },
      //     { title: 'Card 4', cols: 1, rows: 1 }
      //   ];
      // }

      return [
        { title: 'Card 1', cols: 2, rows: 1, description: 'tata' },
        { title: 'Card 2', cols: 1, rows: 1, description: 'tete' },
        { title: 'Card 3', cols: 1, rows: 2, description: 'tyty' },
        { title: 'Card 4', cols: 1, rows: 1, description: 'tutu' },
        { title: 'Card 5', cols: 1, rows: 1, description: 'titi' },
        { title: 'Card 6', cols: 1, rows: 1, description: 'toto' },
        { title: 'Card 7', cols: 1, rows: 1, description: 'tptp' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
