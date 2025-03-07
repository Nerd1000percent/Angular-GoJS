import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { Column } from '@/domain/column';
import { TableRowsService } from '@/services/table-rows.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import {  ToastModule} from 'primeng/toast'
import { MenubarModule } from 'primeng/menubar';
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: 'app-home-component',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, FormsModule, ToastModule, FormsModule, MenubarModule, DialogComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
providers:[MessageService]
})
export class HomeComponentComponent implements OnInit, AfterViewInit {
  constructor( private messageService: MessageService) {}

  ngAfterViewInit(): void {
console.log(this.selectedProduct)  }
products!: Product[];
cols!: Column[];
selectedProduct!:string;
items: MenuItem[] | undefined;

tableRows= inject(TableRowsService);
  ngOnInit() {
      this.tableRows.getProductsMini().then((data:any) => {
          this.products = data;
      });
      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];

  }
  onRowSelected(event :TableRowSelectEvent){
    console.log(event.data)
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data });
    }

}
