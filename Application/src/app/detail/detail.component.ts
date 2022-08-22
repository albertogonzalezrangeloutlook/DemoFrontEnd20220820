import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  cli: model.cliente=new model.cliente();
  
  constructor(public userService: UsersService) { 
    this.cli.CLIENTNUM = 99999999;


  }

  ngOnInit(): void {
    this.cli=new model.cliente();
    this.cli.CLIENTNUM = 99999999;
  }


}

declare module model {

  export class cliente {
      _id: string;
      CLIENTNUM: number;
      Attrition_Flag: string;
      Customer_Age: number;
      Gender: string;
      Dependent_count: number;
      Education_Level: string;
      Marital_Status: string;
      Income_Category: string;
      Card_Category: string;
      Months_on_book: number;
      Total_Relationship_Count: number;
      Months_Inactive_12_mon: number;
      Contacts_Count_12_mon: number;
      Credit_Limit: number;
      Total_Revolving_Bal: number;
      Avg_Open_To_Buy: number;
      Total_Amt_Chng_Q4_Q1: number;
      Total_Trans_Amt: number;
      Total_Trans_Ct: number;
      Total_Ct_Chng_Q4_Q1: number;
      Avg_Utilization_Ratio: number;
      Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_1: number;
      Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2: number;
  }

}

