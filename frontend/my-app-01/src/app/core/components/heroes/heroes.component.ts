import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HeroInsertDialogComponent } from '../hero-insert-dialog/hero-insert-dialog.component';
import { Hero } from '../../model/hero';
import { HeroService } from '../../services/hero.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // displayedColumns: string[] = ['name'];

  selectedHero?: Hero;
  id?: string;
  name?: string;
  dataSource: Hero[] = [];

  ngOnInit() {
    this.dataSource = [
      {
        name: 'File',
        // icon: 'pi pi-pw pi-file',
        power: 'teste',
      },
    ];
  }
  //   @ViewChild(MatTable) table!: MatTable<Hero>;

  //   displayColumns: string[] = ['name'];

  //   constructor(private heroService: HeroService, public dialog: MatDialog) {}

  //   openDialog(): void {
  //     const dialogRef = this.dialog.open(HeroInsertDialogComponent, {
  //       width: '250px',
  //       data: { id: this.id, name: this.name },
  //     });

  //     dialogRef.afterClosed().subscribe((result) => {
  //       if (result !== undefined) {
  //         // let id = this.heroService.maxId() + 1;
  //         let hero: Hero = { name: result };

  //         this.heroService.addHero(hero).subscribe({
  //           next: (hero) => {
  //             console.log(hero);
  //             this.getHeroes(); // Atualizar o data Source
  //           },
  //           error: (err) => {
  //             console.error(err);
  //           },
  //         });

  //         this.table.renderRows();
  //       }
  //     });
  //   }

  //   removeData() {
  //     this.dataSource.pop();
  //     this.table.renderRows();
  //   }

  //   ngOnInit(): void {
  //     this.getHeroes();
  //   }

  //   selectHero(hero: Hero): void {
  //     this.selectedHero = hero;
  //   }

  //   getHeroes(): void {
  //     this.heroService.getHeroes().subscribe({
  //       next: (data) => {
  //         this.dataSource = data;
  //         // console.log(data);
  //       },
  //       error: (e) => console.error(e),
  //     });
  //   }
}
