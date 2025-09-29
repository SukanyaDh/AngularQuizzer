import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Topic {
  id: number;
  name: string;
}

@Component({
  selector: 'app-topics-list',
  imports: [
      MatIconModule,
      MatTableModule,
      MatButtonModule,
      ReactiveFormsModule,
      RouterLink,
      MatPaginatorModule,
      MatSortModule,
      MatInputModule,
      MatFormFieldModule
      ],
  templateUrl: './topics-list.component.html',
  styleUrl: './topics-list.component.scss'
})
export class TopicsListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'name'];
  dataSource!: MatTableDataSource<Topic>;
  topics: Topic[]=[
    {
      id:1,
      name:"Topic 1",
    },
    {
      id:2,
      name:"Topic 2",
    }
  ]

  constructor(){
    this.dataSource = new MatTableDataSource(this.topics);

  }
  
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
