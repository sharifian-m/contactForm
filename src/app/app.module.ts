import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactSummeryComponent } from './pages/contact-summery/contact-summery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { AccountModule } from './account/account.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { MoreComponent } from './pages/more/more.component';
import { AuthGuardService } from './core/servises/auth-guard.service';
import { FilterPipe } from './core/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactSummeryComponent,
    HomeComponent,
    MoreComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    AccountModule
  ],
  exports:[HomeComponent],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// *****************************************************
// @NgModule({
//   declarations: [AppComponent, ContentLayoutComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     CommonModule,
//     CoreModule,
//     SharedModule,
//     BrowserAnimationsModule,
//     SocialLoginModule,
//     ToastrModule.forRoot({
//       positionClass: 'toast-top-center',
//       preventDuplicates: true,
//       closeButton: true,
//       timeOut: 5000,
//       disableTimeOut: false,
//     }),
//     ServiceWorkerModule.register('ngsw-worker.js', {
//       enabled: environment.production,
//       // Register the ServiceWorker as soon as the application is stable
//       // or after 30 seconds (whichever comes first).
//       registrationStrategy: 'registerWhenStable:30000',
//     }),
//     NgxIndexedDBModule.forRoot(dbConfig),
//   ],
//   providers: [
//     {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
//     {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
//     {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor,multi: true}
//   ],

// const routes: Routes = [
//   {
//     path: '',
//     component: ContentLayoutComponent,
//     resolve: [LayoutResolver],    
//     children: [
//       {
//         path: '',
//         redirectTo: '',
//         pathMatch: 'full',
//       },
//       {
//         path: '',
//         canActivateChild:[AuthGuard],
//         loadChildren: () =>
//           import('./modules/dashboard/dashboard.module').then(
//             (m) => m.DashboardModule
//           ),
//         data: {
//           breadcrumb: { skip: true },
//         },
//       },
//       {
//         path: 'auth',
//         loadChildren: () =>
//           import('./core/core-routing.module').then((m) => m.CoreRoutingModule),          
//       },
//     ],
//   },
// ];
// const routes: Routes = [
//   { path: 'test', component: TestComponent },
//   { path: '', redirectTo: '/home', pathMatch:'full' },
//   {path: 'home', component: HomeComponent, children: [
//       { path: '', component: IndexComponent },
//     //  { path: 'about-us', component: AboutUsComponent },
//       { path: 'contact-us', component: ContactUsComponent },
//       { path: 'job-list', component: JobListComponent },
//       { path: 'job-details/:id', component: MainJobDetailsComponent },
//       { path: '404', component: NotFoundComponent },
//       { path: 'news-list', component: MainNewsListComponent },
//       { path: 'news-details/:id', component: MainNewsDetailsComponent },
//       { path: 'page/:slug', component: MainPageDetailsComponent },

//       { path: 'personal/:id', component: PersonalBiographyComponent },


//       { path: 'sale/:id', component: HomeSaleDetailsComponent },

//       { path: 'company-list', component: HomeCompaniesListComponent },
//       { path: 'co/:id', component: CompanyPageComponent },

//       { path: 'faq', component: FaqListComponent },

//       { path: 'products', component: ProductListComponent },
//       { path: 'product-details/:id', component: MainProductDetailsComponent },

//       { path: 'bankcallback', component: BankCallBackComponent, data: {id:''} }
//     ]
//   },


//   {
//     path: 'citizen',
//     loadChildren: () =>
//       import('./pages/citizen/citizen.module').then((m) => m.CitizenModule),
//       // canActivate: [AuthGuard],
//   },

//   {
//     path: 'account',
//     loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
//   },
//   {
//     path: 'admin', canActivate: [AuthGuard],
//     loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
//   },
//   {
//     path: 'company', canActivate: [AuthGuard],
//     loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule)
//   },
//   {
//     path: 'jobseeker', canActivate: [AuthGuard],
//     loadChildren: () => import('./pages/jobseeker/jobseeker.module').then(m => m.JobseekerModule)
//   },
//   {
//     path: 'guard', canActivate: [AuthGuard],
//     loadChildren: () => import('./pages/guard/guard.module').then(m => m.GuardModule)
//   },

//   { path: '**', redirectTo:'/home/404' },
//   { path: "user/account", loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
  
// ];
// sub module routing
// const routes: Routes = [
//   {
//     path: '', component: AdminComponent, children: [
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//       { path: 'dashboard', component: AdminDashboardComponent }, 
//       { path: 'exit-doors', component: AdminExitDoorsComponent }, 
//       { path: 'register-company', component: AdminRegisterCompanyComponent },
//       { path: 'companies', component: AdminCompaniesListComponent },
//       { path: 'company-profile/:id', component: CompanyProfileComponent },
//       { path: 'company-personal/:id', component: CompanyPersonalUsersComponent },
//       { path: 'addupdate-personal/:companyId/:id', component: CompanyAddOrUpdatePersonalComponent },
//       { path: 'company-unpayed-list/:id', component: AdminCompanyUnPayedListComponent },

//       { path: 'componay-users/:id', component: CompanyUserListComponent },


//       { path: 'manage-water-meter', component: AdminManagementWaterMeterListComponent },
//       { path: 'company-water-meter/:id', component: AdminCompanyWaterMeterListComponent },

//       { path: 'news-list', component: AdminNewsListComponent },
//       { path: 'addupdate-news/:id', component: AdminAddOrUpdateNewsComponent },
//       { path: 'news-comments/:id', component: AdminNewsCommentsComponent },
//       { path: 'news-groups', component: AdminNewsGroupsComponent },
//       { path: 'pages', component: AdminPageListComponent },
//       { path: 'addupdate-page/:id', component: AdminAddOrUpdatePageComponent },
//       { path:'slide-show',component:AdminSlideShowListComponent},

//       { path: 'notifications', component: AdminNotificationListComponent },
//       { path: 'addupdate-notification/:id', component: AdminAddOrUpdateNotificationComponent },

//       { path: 'ticket-subjects', component: AdminTicketSubjectsComponent },

//       { path: 'tickets', component: TicketListComponent },
//       { path: 'ticket-details/:id', component: TicketDetailsComponent },


//       { path: 'faq-groups', component: AdminFaqGroupsComponent },
//       { path: 'faq-list', component: AdminFaqListComponent },
//       { path: 'add-update-faq/:id', component: AdminAddOrUpdateFaqComponent },

//       //organization
//       { path: 'organization', component: AdminOrganizationListComponent },
//       { path: 'units/:id', component: AdminUnitListComponent },
//       { path: 'company-info/:id', component: CompanyInfoComponent },


//       //unitsale
//       { path: 'unit-sales', component: AdminUnitSalesListComponent },
//       { path: 'add-unitsale/:id', component: AdminAddUnitSaleComponent },

//       { path: 'contact-us', component: AdminContactUsListComponent },
//       { path: 'setting', component: AdminSettingComponent },
//       { path: 'pay-setting', component: AdminPaySettingComponent },
//       { path: 'sms-setting', component: SmsSettingComponent },

//       { path: 'store-list', component: AdminStoreListComponent },
//       { path: 'addupdate-store/:id', component: AdminAddOrUpdateStoreComponent },

//       //
//       { path: 'exit-permit-list', component: GuardExitPermitListComponent },
//       { path: 'exit-permit/:id', component: ExitPermitDetailsComponent },


//       { path: 'menu-management', component: AdminMenuManagementComponent },

//       //users
//       { path: 'admin-users', component: AdminUsersComponent },
//       { path: 'admin-userGroups', component: AdminUserGroupsComponent },
//       { path: 'manager-users', component: AdminManagerUsersComponent },
//       { path:'addupdate-manager/:id', component: AdminAddOrUpdateManagerComponent },
//       { path: 'change-password', component: ChangeCurrentUserPasswordComponent },
//       { path: 'permissions/:id', component: AdminUserPermissionsComponent },

//       //financial
//       { path: 'formula-list', component: AdminFormulaListComponent },
//       { path: 'charge-calculations', component: AdminChargeCalculationListComponent },
//       { path: 'period-list', component: AdminPeriodListComponent },
//       { path: 'bill-details/:id', component: BillDetailsComponent },
//       { path: 'bill/:id', component: ViewBillDetailsComponent },
//       { path: 'transaction-list', component: AdminTransactionListComponent },
//       { path: 'transaction-details/:id', component: TransactionDetailsComponent },

//       { path: 'fire-extinguishers', component: AdminFireExtinguishersComponent },

//       { path:'job-list',component:AdminJobListComponent},
//       { path: 'jobseeker-list', component: AdminJobSeekerListComponent},

//       { path: 'sms-list', component: AdminSmsListComponent },

//       { path: 'pay-test', component: AdminPayTestComponent },

//       //citizens
//       { path: 'search-citizen', component: AdminCitizensComponent },
//       { path: 'appService-list', component: AdminAppserviceListComponent },
//       { path: 'addupdate-appService/:id', component: AdminAddOrUpdateAppserviceComponent },

//       { path: 'feedbacks', component: AdminCitizensFeedbacksComponent }
//    ]
//   }
// ];
// import { Pipe, PipeTransform, Injectable } from '@angular/core';
// //example *ngFor="let item of list| sort: 'priority';let i=index;"
// @Pipe({
//   name: 'sort'
// })
// @Injectable()
// export class ArraySortPipe implements PipeTransform {
   
//   transform(array: any, field: string): any[] {
//     if (!Array.isArray(array)) {
//       return;
//     }
//     array.sort((a: any, b: any) => {
//       if (a[field] < b[field]) {
//         return -1;
//       } else if (a[field] > b[field]) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     return array;
//   }



// }
// @ViewChild('videoPlayer', { static: false }) videoplayer!: ElementRef;
// material
// import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { DataService } from '../../../../core/services/data-service.service';
// import { ToastrService } from 'ngx-toastr';
// import { ServerApis } from '../../../../core/server-apis';
// import Swal from 'sweetalert2';
// import { MatDialog } from '@angular/material/dialog';
// import { AdminAddOrUpadatePeriodDialogComponent } from '../dialog/add-update-period/add-update-period.component';
// import { Router } from '@angular/router';
// import { merge, of as observableOf  } from 'rxjs';
// import { switchMap, startWith, map, catchError } from 'rxjs/operators';

// @Component({
//   selector: 'adm-period-list',
//   templateUrl: './period-list.component.html',
//   styleUrls: ['./period-list.component.scss']
// })
// export class AdminPeriodListComponent implements AfterViewInit {

//   displayedColumns: string[] = ['row','id', 'startDate', 'endDate', 'paymentDeadLine', 'days', 'tax', 'isConfirmed','billCreated','operation'];




//   data: any[] = [];
//   dataSource = new MatTableDataSource();
//   listCount: number = 0;
//   isLoadingResults: boolean = true;

//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
 
 
//   constructor(
//     private dataService: DataService,
//     private toastrService: ToastrService,  
//     private fb: FormBuilder,
//     private matDialog: MatDialog,
//     private router: Router
//   ) {
     
     

//   }

//   ngAfterViewInit() {
//     this.getList();
//   }



  




//   getList() {
//     var param:any = {};
//      param.offset = (this.paginator) ? this.paginator.pageIndex : 0;
//     param.count = (this.paginator) ? this.paginator.pageSize : 10;
   

//     merge()
//       .pipe(
//         startWith(param),
//         switchMap(() => {
//           this.isLoadingResults = true;
//           return this.dataService.get(ServerApis.getAllPeriod, param);
//         }),
//         map(response => {
//           this.isLoadingResults = false;
//           if (response.isSuccess && response.data) {
//             var items = response.data.chargeingPeriodInfo ? response.data.chargeingPeriodInfo : [];
//             this.listCount = response.data.totalItems ? response.data.totalItems : 0;
//             // debugger; 
//             return items;
//           } else {
//             let msg = response.messages ? response.messages : "متاسفانه خطایی در سرور رخ داده است!";
//             this.toastrService.error(msg);
//           }
//         }),
//         catchError((err) => {
//           this.isLoadingResults = false;
//           return observableOf([]);
//         })
//       ).subscribe(data => {
//         this.data = data;
//       });



//   }


//   pageEvent(event: PageEvent) {
//     this.getList();
//   }


//   applyFilter() {
//     if (this.paginator) {
//       this.paginator.firstPage();
//     }
//     this.getList();
//   }





//   delete(row) {

//     Swal.fire({
//       title:'حذف',
//       text: 'آیا برای حذف اطمینان دارید؟',
//       showConfirmButton: true,
//       showCancelButton: true,
//       confirmButtonText: 'بله',
//       cancelButtonText: 'خیر',
//     }).then(result => {
//       if (result.value) {
//         this.dataService.get(ServerApis.removePeriod, {
//           id: row.id, 
//         }).subscribe(response => {
//           if (response.isSuccess) {
//             this.toastrService.success('با موفقیت حذف شد.');
//             this.getList();
//           } else {
//             let msg = response.messages ? response.messages : "متاسفانه خطایی در سرور رخ داده است!";
//             this.toastrService.error(msg);
//           }
//         }, error => {
//         });
//       }

//     });
//   }

  
  
//   openDialog(item) {
//     this.matDialog.open(AdminAddOrUpadatePeriodDialogComponent, {
//       panelClass: 'custom-dialog',
//       minWidth: '600px',
//       data: {
//         id: (item.id) ? item.id : ''
//       }
//     }).afterClosed().subscribe(result => {
//       if (result) {
//         this.getList();
//       }
//     });
//   }


   

//   createBill(item) {
//     item.loading = true;
//     this.dataService.get(
//       ServerApis.createBills, { id: item.id }).subscribe(response => {
//         item.loading = false;
//         if (response && response.isSuccess) {
//           this.toastrService.success('قبض ها با موفقیت ایجاد شدند.');
//           this.router.navigate(['/admin/bill-details/'+item.id]);
//         } else {
//           let msg = response.messages ? response.messages : "متاسفانه خطایی در سرور رخ داده است!";
//           this.toastrService.error(msg); 
//         }
//       }, error => {
//           item.loading = false;
//       });
//   }


//   confirmPeriod(item) {

//     Swal.fire({
//       title: 'آیا برای تائید دوره اطمینان دارید؟',
//       text: 'در صورت تائید دوره، دیگر امکان ویرایش و حذف وجود نخواهد داشت. و قبض ها برای شرکت ها ارسال خواهد شد. ',
//       showConfirmButton: true,
//       showCancelButton: true,
//       confirmButtonText: 'بله',
//       cancelButtonText: 'خیر',
//     }).then(result => {
//       if (result.value) {
//           item.loading = true;
//         this.dataService.get(ServerApis.periodConfirmation, {
//           id: item.id,
//         }).subscribe(response => {
//           item.loading = false;
//           if (response.isSuccess) {
//             this.toastrService.success('با موفقیت تائید شد.');
//             this.getList();
//           } else {
//             let msg = response.messages ? response.messages : "متاسفانه خطایی در سرور رخ داده است!";
//             this.toastrService.error(msg);
//           }
//         }, error => {
//           item.loading = false;
//         });
//       }

//     });
//   }


// }
// // html 
// <div class="content-header">
//   <span>مدیریت دوره ها</span>

// </div>


// <mat-card class="custom-card">
//   <mat-card-header class="d-flex align-items-center justify-content-end">
 
//   </mat-card-header>
//   <mat-card-content>

//     <div class="d-flex align-items-center justify-content-end">

//       <button mat-raised-button color="default" (click)="openDialog('')">
//         <span>تعریف دوره</span>
//       </button>
//     </div>



//     <!--<form [formGroup]="searchForm">
//     <div class="row">
//       <mat-form-field class="col-sm-6 col-md-4">
//         <mat-label>جستجو</mat-label>
//         <input matInput formControlName="query" maxlength="100" />
//       </mat-form-field>
//     </div>
//     <div class="d-flex justify-content-end mb-4">
//       <button mat-raised-button color="default" (click)="applyFilter()">
//         <i class="fa fa-search"></i>
//         جستجو
//       </button>
//     </div>
//   </form>-->
//     <div class="d-flex align-items-center justify-content-end mb-3">
//       <button mat-raised-button color="default" (click)="exporter.exportTable('xlsx',{fileName:'excel'})">
//         <i class="fa fa-file-excel mr-2"></i>
//         خروجی اکسل
//       </button>

//     </div>
//     <div class="datatable-container mat-elevation-z8">
//       <div class="datatable-loading-shade" *ngIf="isLoadingResults">
//         <mat-spinner *ngIf="isLoadingResults" color="default"></mat-spinner>
//       </div>
//       <div class="datatable-loading-shade" *ngIf="isLoadingResults==false && listCount==0">
//         <strong>اطلاعاتی وجود ندارد!</strong>
//       </div>

//       <div class="datatable-table-container">

//         <table mat-table [dataSource]="data" class="datatable-table"  #exporter="matTableExporter" matTableExporter [hiddenColumns]="[displayedColumns.length-1]">
//           <ng-container matColumnDef="row">
//             <th mat-header-cell *matHeaderCellDef width="40">#</th>
//             <td mat-cell *matCellDef="let row;let i=index;">
//               {{paginator.pageIndex*paginator.pageSize + i + 1 }}
//             </td>
//           </ng-container>

//           <ng-container matColumnDef="id">
//             <th mat-header-cell *matHeaderCellDef>شناسه دوره</th>
//             <td mat-cell *matCellDef="let row">
//               {{row.id}}
//             </td>
//           </ng-container>

//           <ng-container matColumnDef="startDate">
//             <th mat-header-cell *matHeaderCellDef>شروع دوره</th>
//             <td mat-cell *matCellDef="let row">
//               {{row.startDate|jalali}}
//             </td>
//           </ng-container>
//           <ng-container matColumnDef="endDate">
//             <th mat-header-cell *matHeaderCellDef>پایان دوره</th>
//             <td mat-cell *matCellDef="let row">
//               {{row.endDate|jalali}}
//             </td>
//           </ng-container>
//           <ng-container matColumnDef="paymentDeadLine">
//             <th mat-header-cell *matHeaderCellDef>مهلت پرداخت</th>
//             <td mat-cell *matCellDef="let row">
//               {{row.paymentDeadLine|jalali}}
//             </td>
//           </ng-container>

//           <ng-container matColumnDef="days">
//             <th mat-header-cell *matHeaderCellDef>تعداد روز</th>
//             <td mat-cell *matCellDef="let row">
//               {{row.days}}
//             </td>
//           </ng-container>


//           <ng-container matColumnDef="tax">
//             <th mat-header-cell *matHeaderCellDef>مالیات</th>
//             <td mat-cell *matCellDef="let row">
//               {{row.tax}}%
//             </td>
//           </ng-container>


//           <ng-container matColumnDef="isConfirmed">
//             <th mat-header-cell *matHeaderCellDef>تائید شده</th>
//             <td mat-cell *matCellDef="let row">
//               <span class="text-danger" *ngIf="row.isConfirmed==false">خیر</span>
//               <span class="text-success" *ngIf="row.isConfirmed==true">بله</span>
//             </td>
//           </ng-container>

//           <ng-container matColumnDef="billCreated">
//             <th mat-header-cell *matHeaderCellDef> قبض ایجاد شده </th>
//             <td mat-cell *matCellDef="let row">
//               <span class="text-danger" *ngIf="row.billCreated==false">خیر</span>
//               <span class="text-success" *ngIf="row.billCreated==true">بله</span>
//             </td>
//           </ng-container>



//           <ng-container matColumnDef="operation">
//             <th mat-header-cell *matHeaderCellDef width="40">عملیات</th>
//             <td mat-cell *matCellDef="let row">
//               <mat-spinner *ngIf="row.loading" diameter="25" color="default"></mat-spinner>
//               <button mat-icon-button [matMenuTriggerFor]="menu" *ngIf="!row.loading">
//                 <mat-icon>more_vert</mat-icon>
//               </button>
//               <mat-menu #menu="matMenu">

//                 <button mat-menu-item (click)="createBill(row)" *ngIf="!row.billCreated">
//                   <i class="fa fa-bolt mr-2"></i>
//                   <span>ایجاد قبض</span>
//                 </button>

//                 <button mat-menu-item routerLink="/admin/bill-details/{{row.id}}">
//                   <i class="fa fa-eye mr-2"></i>
//                   <span *ngIf="row.billCreated">مشاهده قبض های ایجاد شده</span>
//                   <span *ngIf="!row.billCreated">مشاهده جزئیات</span>
//                 </button>


//                 <button mat-menu-item (click)="confirmPeriod(row)" *ngIf="!row.isConfirmed">
//                   <i class="fa fa-check mr-2"></i>
//                   <span>تائید دوره</span>
//                 </button>


//                 <button mat-menu-item (click)="openDialog(row)" *ngIf="!row.isConfirmed">
//                   <i class="fa fa-edit mr-2"></i>
//                   <span>ویرایش</span>
//                 </button>

//                 <button mat-menu-item (click)="delete(row)" *ngIf="!row.isConfirmed">
//                   <i class="fa fa-trash mr-2"></i>
//                   <span>حذف</span>
//                 </button>



//               </mat-menu>
//             </td>
//           </ng-container>

//           <tr mat-header-row *matHeaderRowDef="displayedColumns;sticky: true"></tr>
//           <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
//         </table>
//       </div>
//       <mat-paginator [length]="listCount" [pageSize]="10" [pageSizeOptions]="[5, 10, 25,50, 100]" showFirstLastButtons (page)="pageEvent($event)"></mat-paginator>



//     </div>




//   </mat-card-content>
//     <mat-card-footer></mat-card-footer>
//   </mat-card>
// login
// import { Injectable } from '@angular/core';
// import {BehaviorSubject, map, Observable, tap} from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
// import { Router } from '@angular/router';
// import { ToolsToastService } from 'projects/library/tools/src/lib/tools.toast.service';

// export class User {
//   id!: number;
//   username!: string;
//   password!: string;
//   email!: string;
//   token?: string;
//   expires_in?: string;
//   access_token?: string;
//   user!:{
//      email: string;
//      username:string;
//   };
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser!: Observable<any>;

//   private refreshTokenTimeout: any;

//   constructor(private http: HttpClient,
//               private router: Router,
//               private toaster: ToolsToastService) {
//     this.currentUserSubject = new BehaviorSubject<any>(
//       JSON?.parse(<string>localStorage.getItem('currentUser'))
//     );
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   get currentUserValue(): User {
//     return this.currentUserSubject.value;
//   }

//   login(email: string, password: string) {

//     let headers = new HttpHeaders();
//     headers = headers.set('Authorization', 'Basic ' + btoa(email + ':' + password));
//     headers = headers.set('Content-type', 'application/json');


//     return this.http
//       .post<any>(
//         `${environment.apiUrl}login`,
//         {},
//         {'headers': headers}
//       )
//       .pipe(map(user => {
//         this.setCurrentUser(user);
//         this.startRefreshTokenTimer();
//         this.router.navigate(['../home']);
//         return user;
//       }));
//   }

//   logout() {
//     return this.http
//       .post<any>(
//         `${environment.apiUrl}logout`,
//         {},
//       )
//       .pipe(map(res => {
//           this.removeUser ()
//         return res;
//       }));
//   }

//   removeUser () {
//     localStorage.removeItem('currentUser');
//     this.stopRefreshTokenTimer();
//     this.currentUserSubject.next(null);
//     this.router.navigate(['auth','login']);
//   }

//   resetPassword(password: string, newPassword: string, token: string) {
//     let headers = new HttpHeaders();
//     headers = headers.set('Authorization','Bearer ' +  token);
//     headers = headers.set('Content-type', 'application/json');

//     return this.http
//       .post<any>(
//         `${environment.apiUrl}password/reset`,
//         {"new_password":password,"confirm_password":newPassword},
//         {'headers': headers}

//       )
//       .pipe(map(user => {
//         this.router.navigate(['/login']);
//         return user;
//       })
//         ,tap(res => {
//           this.toaster.showSuccess('password is reset');
//         }));
//   }

//   getToken(){

//     const jwtToken = JSON.parse(<string>localStorage.getItem("currentUser"));
//     const expiredAt = jwtToken?.expires_at * 1000;

//     if (expiredAt -  Date.now() <= 0)
//     {
//       this.currentUserSubject.next(null);
//       localStorage.removeItem('currentUser');
//       return false;
//     }
//     return !!localStorage.getItem("currentUser");
//   }

//   geCurrentUserInfo(): User {
//     return <User>JSON.parse(localStorage.getItem('currentUser')!);
//   }

//   setCurrentUser(user: any) {
//     localStorage.setItem('currentUser', JSON.stringify(user.data));
//     this.currentUserSubject.next(user.data);
//   }

//   refreshToken() {
//     return this.http.post<any>(`${environment.apiUrl}/refresh-token`, {}).pipe(
//       map((user) => {
//         this.setCurrentUser(user);
//         this.startRefreshTokenTimer();
//         return user;
//       })
//     );
//   }

//   private startRefreshTokenTimer() {

//     const jwtToken = JSON.parse(<string>localStorage.getItem("currentUser"));
//     const expiresAt = jwtToken?.expires_at;
//     const expiresIn = jwtToken?.expires_in;
//     const timOut = (expiresAt - expiresIn) * 1000;

//     this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timOut);
//   }

//   private stopRefreshTokenTimer() {
//     clearTimeout(this.refreshTokenTimeout);
//   }

//   changePassword(
//     currentPassword: string,
//     newPassword: string,
//     confirmPassword: string
//   ) {
//     return this.http
//       .post<any>(
//         `${environment.apiUrl}change-password`
//         ,{"current_password":currentPassword,"new_password": newPassword,"confirm_password":confirmPassword},
//       )
//       .pipe(
//         tap(res => {
//           this.toaster.showSuccess('Password changed.');
//         })
//       );
//   }

//   sendResetPasswordEmail(email: string) {
//     return this.http
//       .post<any>(`${environment.apiUrl}password/email?email=${email}`, null
//       ).pipe( tap(res => {
//         this.toaster.showSuccess('Email sent');
//         })
//       )
//   }

//   checkToken(token: string) {
//     return this.http
//       .get<any>(`${environment.apiUrl}password/reset?token=${token}`
//       )
//   }



// }
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
//   // ,HttpEventType
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {environment} from "../../../environments/environment";
// import {AuthService} from "../services/auth.service";

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {

//   constructor(private authService: AuthService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const account = this.authService.currentUserValue;
//     const isLoggedIn = account?.access_token;
//     const isApiUrl = request.url.startsWith(environment.apiUrl);
//     if (isLoggedIn && isApiUrl) {
//       request = request.clone({
//         setHeaders: { Authorization: `Bearer ${account.access_token}` }
//       });
//     }

//     return next.handle(request);
//   }
// }
// import { Injectable } from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
// import { Observable } from 'rxjs';
// import {AuthService} from "../services/auth.service";

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     if (!this.authService.getToken()) {
//       this.router.navigate(["/auth"]);
//     }
//     return this.authService.getToken();
//   }

// }
// logincomponent
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  hasError = false;
  errorTxt = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.formLogin = this.builderForm();
  }
/**builderForm*/
  builderForm() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
        //Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
/**formLoginControls*/
//   get formLoginControls() {
//     return this.formLogin.controls;
//   }
// /**login()*/
//   login() {
//     this.authService.login(
//       this.formLogin.value.email,
//       this.formLogin.value.password
//     ).subscribe(      
//       (error: any) => {       
//         if (error instanceof HttpErrorResponse) {
//           this.errorTxt = error.statusText ;
//           this.hasError = true;
//         }
//       }
//     );
//   }
// }
// constructor(
//   private fb: FormBuilder,
//   private authService: AuthService,      
//           ) {}

// ngOnInit(): void {
// this.formForgotPassword = this.builderForm();
// }

// builderForm() {
// return this.fb.group({
//   email: [
//     null,
//     [
//       Validators.required,
//       Validators.email,
//       //.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
//     ],
//   ],
// });
// }

// get formForgotPasswordControls() {
// return this.formForgotPassword.controls;
// }



