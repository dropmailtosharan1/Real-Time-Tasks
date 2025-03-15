import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as xls from 'xlsx';

@Component({
  selector: 'app-table-to-excel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-to-excel.component.html',
  styleUrl: './table-to-excel.component.scss',
})
export class TableToExcelComponent {
  @ViewChild('table', { static: false }) table!: ElementRef;

  users = [
    {
      id: 1,
      name: 'Amit Sharma',
      email: 'amitsharma@example.com',
      mobile: '9876543210',
      state: 'Uttar Pradesh',
    },
    {
      id: 2,
      name: 'Priya Singh',
      email: 'priyasingh@example.com',
      mobile: '9876543211',
      state: 'Maharashtra',
    },
    {
      id: 3,
      name: 'Rahul Verma',
      email: 'rahulverma@example.com',
      mobile: '9876543212',
      state: 'Karnataka',
    },
    {
      id: 4,
      name: 'Sneha Patil',
      email: 'snehapatil@example.com',
      mobile: '9876543213',
      state: 'Tamil Nadu',
    },
    {
      id: 5,
      name: 'Vikram Gupta',
      email: 'vikramgupta@example.com',
      mobile: '9876543214',
      state: 'West Bengal',
    },
    {
      id: 6,
      name: 'Neha Reddy',
      email: 'nehareddy@example.com',
      mobile: '9876543215',
      state: 'Telangana',
    },
    {
      id: 7,
      name: 'Arjun Nair',
      email: 'arjunnair@example.com',
      mobile: '9876543216',
      state: 'Kerala',
    },
    {
      id: 8,
      name: 'Pooja Joshi',
      email: 'poojajoshi@example.com',
      mobile: '9876543217',
      state: 'Rajasthan',
    },
    {
      id: 9,
      name: 'Rohan Mehta',
      email: 'rohanmehta@example.com',
      mobile: '9876543218',
      state: 'Gujarat',
    },
    {
      id: 10,
      name: 'Kavita Das',
      email: 'kavitadas@example.com',
      mobile: '9876543219',
      state: 'Madhya Pradesh',
    },
    {
      id: 11,
      name: 'Manish Yadav',
      email: 'manishyadav@example.com',
      mobile: '9876543220',
      state: 'Haryana',
    },
    {
      id: 12,
      name: 'Anjali Thakur',
      email: 'anjalithakur@example.com',
      mobile: '9876543221',
      state: 'Punjab',
    },
    {
      id: 13,
      name: 'Sandeep Kumar',
      email: 'sandeepkumar@example.com',
      mobile: '9876543222',
      state: 'Bihar',
    },
    {
      id: 14,
      name: 'Meera Choudhary',
      email: 'meerachoudhary@example.com',
      mobile: '9876543223',
      state: 'Jharkhand',
    },
    {
      id: 15,
      name: 'Nitin Pandey',
      email: 'nitinpandey@example.com',
      mobile: '9876543224',
      state: 'Odisha',
    },
    {
      id: 16,
      name: 'Sonia Mishra',
      email: 'soniamishra@example.com',
      mobile: '9876543225',
      state: 'Chhattisgarh',
    },
    {
      id: 17,
      name: 'Akash Bansal',
      email: 'akashbansal@example.com',
      mobile: '9876543226',
      state: 'Uttarakhand',
    },
    {
      id: 18,
      name: 'Preeti Sinha',
      email: 'preetisinha@example.com',
      mobile: '9876543227',
      state: 'Assam',
    },
    {
      id: 19,
      name: 'Ravi Saxena',
      email: 'ravisaxena@example.com',
      mobile: '9876543228',
      state: 'Himachal Pradesh',
    },
    {
      id: 20,
      name: 'Swati Sen',
      email: 'swatisen@example.com',
      mobile: '9876543229',
      state: 'Goa',
    },
  ];

  convertExcel() {
    const xlWorkbook = xls.utils.table_to_book(this.table.nativeElement);
    xls.writeFile(xlWorkbook, 'users.xlsx', {
      bookType: 'xlsx',
      type: 'binary',
    });
  }
}
