import { Component, OnInit } from '@angular/core';

import { CompanyService } from 'src/app/shared/services/company.service';
import { Company } from 'src/app/Company.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  companies: Company[];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies();
  
  }

  create(company: Company){
      this.companyService.createCompany(company);
  }

  update(company: Company) {
    this.companyService.updateCompany(company);
  }

  

}
