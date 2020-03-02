import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Company } from 'src/app/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private firestore: AngularFirestore) { }

  getCompanies() {
    return this.firestore.collection('companies').snapshotChanges();

    
}

createCompany(company: Company){
  return this.firestore.collection('companies').add(company);
}


updateCompany(company: Company){
  delete company.id;
  this.firestore.doc('companies/' + company.id).update(company);
}

}
