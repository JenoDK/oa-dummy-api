"use strict";(self.webpackChunkagilent_angular_playground=self.webpackChunkagilent_angular_playground||[]).push([[557],{4557:(Y,h,a)=>{a.r(h),a.d(h,{WorkflowConfigurationModule:()=>N});var f=a(6895),g=a(7726);class w extends Error{constructor(r){super(r),Object.setPrototypeOf(this,w.prototype)}}var o=a(4650),k=a(8807),l=a(5878),d=a(8969),m=a(4016),S=a(1643),u=(()=>{return(n=u||(u={})).Aqcuisition="amx",n.Processing="pmx",n.Equilibration="pmx",n.Shutdown="amx",u;var n})(),W=a(1296);let Z=(()=>{class n{constructor(t,e){this.activeModal=t,this.modalData=e,e.title&&(this.title=e.title),e.body&&(this.body=e.body)}ngOnInit(){}ok(){this.activeModal.close("OK")}cancel(){this.activeModal.dismiss("Cancel")}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(k.Kz),o.Y36(l.xJF))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-confirm-dialog"]],inputs:{title:"title",body:"body"},decls:9,vars:8,consts:[[3,"header"],["type","primary",3,"value","click"],["type","secondary",3,"value","click"]],template:function(t,e){1&t&&(o.TgZ(0,"ag-dialog",0)(1,"ag-dialog-content")(2,"div"),o._uU(3),o.qZA()(),o.TgZ(4,"ag-dialog-actions")(5,"awf-button-ng",1),o.NdJ("click",function(){return e.ok()}),o.ALo(6,"translate"),o.qZA(),o.TgZ(7,"awf-button-ng",2),o.NdJ("click",function(){return e.cancel()}),o.ALo(8,"translate"),o.qZA()()()),2&t&&(o.Q6J("header",e.title),o.xp6(3),o.Oqu(e.body),o.xp6(2),o.s9C("value",o.lcZ(6,4,"confirm")),o.xp6(2),o.s9C("value",o.lcZ(8,6,"cancel")))},dependencies:[l.auo,l.TgP,l.xM,l.r0F,d.X$]}),n})();var v=a(8274),_=a(7217),C=a(947);let y=(()=>{class n{constructor(t,e,i){this.configService=t,this.authenticationService=e,this.olssCallService=i}getAllProjects(){this.authenticationService.isLoggedIn()||this.authenticationService.logout();let e={apiUrl:this.configService.data.olss_api_url,connectionTimeout:this.configService.data.olss_api_connectionTimeout_millis,token:this.authenticationService.getToken()};return this.olssCallService.executeOlssCall(e,"/v3.0/projects")}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(v._Z),o.LFG(_.$),o.LFG(C.Y))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),A=(()=>{class n{constructor(t,e,i){this.configService=t,this.authenticationService=e,this.olssCallService=i}getMethods(t){this.authenticationService.isLoggedIn()||this.authenticationService.logout();let e=`/v3.0/projects/${t.id}/content/search?folder=Methods`,i={apiUrl:this.configService.data.olss_api_url,connectionTimeout:this.configService.data.olss_api_connectionTimeout_millis,token:this.authenticationService.getToken()};return this.olssCallService.executeOlssCall(i,e)}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(v._Z),o.LFG(_.$),o.LFG(C.Y))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=a(1369),c=a(4006);const q=["workflowForm"];function j(n,r){if(1&n){const t=o.EpF();o.TgZ(0,"div",18)(1,"div",3)(2,"ag-button-group",19)(3,"awf-button-ng",20),o.NdJ("click",function(){o.CHM(t);const i=o.oxw();return o.KtG(i.clickSubmit())}),o.ALo(4,"translate"),o.qZA(),o.TgZ(5,"awf-button-ng",21),o.NdJ("click",function(){o.CHM(t);const i=o.oxw();return o.KtG(i.resetValues())}),o.ALo(6,"translate"),o.ALo(7,"translate"),o.qZA(),o.TgZ(8,"awf-button-ng",22),o.NdJ("click",function(){o.CHM(t);const i=o.oxw();return o.KtG(i.remove())}),o.ALo(9,"translate"),o.qZA()()()()}2&n&&(o.xp6(3),o.s9C("value",o.lcZ(4,4,"module.workflow.save")),o.xp6(2),o.s9C("value",o.lcZ(6,6,"resetValues")),o.s9C("tooltipContent",o.lcZ(7,8,"resetValuesDescription")),o.xp6(3),o.s9C("value",o.lcZ(9,10,"remove")))}let M=(()=>{class n{constructor(t,e,i,s,Q){this.olssProjectService=t,this.olssMethodService=e,this.workflowService=i,this.translateService=s,this.notificationService=Q,this.InputTypeEnum=l.n$I,this.labelPosition="left",this.showButtons=!0,this._workflow={id:null,name:null,project:null,injection_volume:null,acquisition_method:null,processing_method:null,equilibration_method:null,shutdown_method:null},this.workflowRemoved=new o.vpe,this.acquisitionMethodsSubject=new m.X([]),this.processingMethodsSubject=new m.X([]),this.equilibrationMethodsSubject=new m.X([]),this.shutdownMethodsSubject=new m.X([]),this.methodsLoading=!1,this.methodsArrived=!1,this.methodsLoadStatus=null,this.injectionUnits=[{symbol:"L",factor:100},{symbol:"cL",factor:1},{symbol:"mL",factor:.01}],this.minimumInjection={value:0,unit:this.injectionUnits[0]},this.projectsResult=this.olssProjectService.getAllProjects().pipe((0,W.U)(R=>R.projects)),this.acquisitionMethods$=this.acquisitionMethodsSubject,this.processingMethods$=this.processingMethodsSubject,this.equilibrationMethods$=this.equilibrationMethodsSubject,this.shutdownMethods$=this.shutdownMethodsSubject}set workflow(t){this._workflow=t,this._initialWorkflow={...t}}get workflow(){return this._workflow}ngOnInit(){this.workflow.project&&this.fetchAndSetMethods()}buildFormCssClass(){return"awf-form-low-density workflow-form"}clickSubmit(){this.addWorkflow().subscribe(t=>this.notificationService.success(this.translateService.instant("module.workflow.workflowSaveSuccessMessage")),t=>{if(t instanceof w)return;let e;e=t.error?t.error:t.message,this.notificationService.error(e,this.translateService.instant("error"))})}addWorkflow(){return this.workflowForm.onSubmit(null),this.workflowForm.valid?this.workflowService.saveWorkflow(this.workflow):S.y.throw(new w("Workflow form was not valid"))}resetValues(){this._workflow={...this._initialWorkflow}}remove(){this.notificationService.showModal(Z,{title:this.translateService.instant("module.workflow.removeWorkflow"),body:this.translateService.instant("module.workflow.confirmWorkflowRemove",{workflowName:this.workflow.name})}).result.then(e=>{this.workflowService.remove(this.workflow).subscribe(i=>this.workflowRemoved.emit(this.workflow),i=>this.notificationService.error(this.translateService.instant("module.workflow.removeError",{workflowName:this.workflow.name})))})}projectChanged(t){this.resetMethodSection(),this.workflow.project?this.fetchAndSetMethods():this.setMethodSubjects([])}fetchAndSetMethods(){this.olssMethodService.getMethods(this.workflow.project).subscribe(t=>{this.setMethodSubjects(t),this.methodsLoadStatus="succeeded",this.methodsArrived=!0},t=>{this.notificationService.error(this.translateService.instant("module.workflow.methodSelectionError",{projectName:this.workflow.project.name})),this.methodsLoadStatus="failed",console.error(t)})}resetMethodSection(){this.methodsLoadStatus=null,this.methodsLoading=!0,this.methodsArrived=!1,this.workflow.acquisition_method=null,this.workflow.processing_method=null,this.workflow.equilibration_method=null,this.workflow.shutdown_method=null}setMethodSubjects(t){this.acquisitionMethodsSubject.next(this.filterMethods(t,u.Aqcuisition)),this.processingMethodsSubject.next(this.filterMethods(t,u.Processing)),this.equilibrationMethodsSubject.next(this.filterMethods(t,u.Equilibration)),this.shutdownMethodsSubject.next(this.filterMethods(t,u.Shutdown))}filterMethods(t,e){return t.filter(i=>i.name.endsWith(e))}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(y),o.Y36(A),o.Y36(b.z),o.Y36(d.sK),o.Y36(l.gqp))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-workflow-form"]],viewQuery:function(t,e){if(1&t&&o.Gf(q,5),2&t){let i;o.iGM(i=o.CRH())&&(e.workflowForm=i.first)}},inputs:{showButtons:"showButtons",workflow:"workflow"},outputs:{workflowRemoved:"workflowRemoved"},decls:36,vars:80,consts:[[1,"container-fluid"],["workflowForm","ngForm"],[1,"row","mt-2"],[1,"col-xl-10"],[3,"ngClass"],["name","name",3,"label","required","labelPosition","ngModel","form","ngModelChange"],["bindProperty","name","name","workflow",3,"label","required","labelPosition","values","ngModel","form","ngModelChange"],["name","injection_volume",3,"label","required","labelPosition","min","units","ngModel","form","ngModelChange"],[1,"row","mt-4"],[1,"col-md-auto","fixed"],[1,"col-md-auto"],[1,"p-3",3,"visible","navy","small","status"],[1,"row","mt-3"],["bindProperty","name","name","acquisition_method",3,"disabled","label","required","labelPosition","values","ngModel","form","ngModelChange"],["bindProperty","name","name","processing_method",3,"disabled","label","required","labelPosition","values","ngModel","form","ngModelChange"],["bindProperty","name","name","equilibration_method",3,"disabled","label","required","labelPosition","values","ngModel","form","ngModelChange"],["bindProperty","name","name","shutdown_method",3,"disabled","label","required","labelPosition","values","ngModel","form","ngModelChange"],["class","row mt-4 justify-content-start",4,"ngIf"],[1,"row","mt-4","justify-content-start"],["id","btn-grp-2"],["id","submit","type","primary",3,"value","click"],["id","reset","type","secondary",3,"value","tooltipContent","click"],["id","remove","type","secondary",3,"value","click"]],template:function(t,e){if(1&t&&(o.TgZ(0,"div",0)(1,"form",null,1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"ag-input",5),o.NdJ("ngModelChange",function(s){return e.workflow.name=s}),o.ALo(7,"translate"),o.qZA(),o.TgZ(8,"ag-select",6),o.NdJ("ngModelChange",function(s){return e.workflow.project=s})("ngModelChange",function(s){return e.projectChanged(s)}),o.ALo(9,"translate"),o.ALo(10,"async"),o.qZA(),o.TgZ(11,"ag-value-unit",7),o.NdJ("ngModelChange",function(s){return e.workflow.injection_volume=s}),o.ALo(12,"translate"),o.qZA()()()(),o.TgZ(13,"div",8)(14,"div",9)(15,"h3"),o._uU(16),o.ALo(17,"translate"),o.qZA()(),o.TgZ(18,"div",10),o._UZ(19,"ag-loader",11),o.qZA()(),o.TgZ(20,"div",12)(21,"div",3)(22,"div",4)(23,"ag-select",13),o.NdJ("ngModelChange",function(s){return e.workflow.acquisition_method=s}),o.ALo(24,"translate"),o.ALo(25,"async"),o.qZA(),o.TgZ(26,"ag-select",14),o.NdJ("ngModelChange",function(s){return e.workflow.processing_method=s}),o.ALo(27,"translate"),o.ALo(28,"async"),o.qZA(),o.TgZ(29,"ag-select",15),o.NdJ("ngModelChange",function(s){return e.workflow.equilibration_method=s}),o.ALo(30,"translate"),o.ALo(31,"async"),o.qZA(),o.TgZ(32,"ag-select",16),o.NdJ("ngModelChange",function(s){return e.workflow.shutdown_method=s}),o.ALo(33,"translate"),o.ALo(34,"async"),o.qZA()()()(),o.YNc(35,j,10,12,"div",17),o.qZA()()),2&t){const i=o.MAs(2);o.xp6(5),o.Q6J("ngClass",e.buildFormCssClass()+" fixed-label-width"),o.xp6(1),o.s9C("label",o.lcZ(7,54,"module.workflow.name")),o.Q6J("required",!0)("labelPosition",e.labelPosition)("ngModel",e.workflow.name)("form",i),o.xp6(2),o.s9C("label",o.lcZ(9,56,"module.workflow.project")),o.Q6J("required",!0)("labelPosition",e.labelPosition)("values",o.lcZ(10,58,e.projectsResult))("ngModel",e.workflow.project)("form",i),o.xp6(3),o.s9C("label",o.lcZ(12,60,"module.workflow.injectionVolume")),o.Q6J("required",!0)("labelPosition",e.labelPosition)("min",e.minimumInjection)("units",e.injectionUnits)("ngModel",e.workflow.injection_volume)("form",i),o.xp6(5),o.Oqu(o.lcZ(17,62,"module.workflow.methodSelection")),o.xp6(3),o.Q6J("visible",e.methodsLoading)("navy",!1)("small",!0)("status",e.methodsLoadStatus),o.xp6(3),o.Q6J("ngClass",e.buildFormCssClass()+" fixed-label-width"),o.xp6(1),o.s9C("label",o.lcZ(24,64,"module.workflow.acquisitionMethod")),o.Q6J("disabled",!e.methodsArrived)("required",!0)("labelPosition",e.labelPosition)("values",o.lcZ(25,66,e.acquisitionMethods$))("ngModel",e.workflow.acquisition_method)("form",i),o.xp6(3),o.s9C("label",o.lcZ(27,68,"module.workflow.processingMethod")),o.Q6J("disabled",!e.methodsArrived)("required",!0)("labelPosition",e.labelPosition)("values",o.lcZ(28,70,e.processingMethods$))("ngModel",e.workflow.processing_method)("form",i),o.xp6(3),o.s9C("label",o.lcZ(30,72,"module.workflow.equilibrationMethod")),o.Q6J("disabled",!e.methodsArrived)("required",!0)("labelPosition",e.labelPosition)("values",o.lcZ(31,74,e.equilibrationMethods$))("ngModel",e.workflow.equilibration_method)("form",i),o.xp6(3),o.s9C("label",o.lcZ(33,76,"module.workflow.shutdownMethod")),o.Q6J("disabled",!e.methodsArrived)("required",!0)("labelPosition",e.labelPosition)("values",o.lcZ(34,78,e.shutdownMethods$))("ngModel",e.workflow.shutdown_method)("form",i),o.xp6(3),o.Q6J("ngIf",e.showButtons)}},dependencies:[f.mk,f.O5,l.amK,l.Hr0,c._Y,c.JJ,c.JL,c.Q7,c.On,c.F,l.r0F,l.KbJ,l.RWi,l.YMs,f.Ov,d.X$],styles:[".workflow-form.fixed-label-width[_ngcontent-%COMP%]{--ag-label-width: 230px }.fixed[_ngcontent-%COMP%]{width:230px}"]}),n})();const T=["workflowForm"];let F=(()=>{class n{constructor(t,e,i){this.activeModal=t,this.notificationService=e,this.translateService=i}addWorkflow(){this.workflowForm.addWorkflow().subscribe(t=>this.activeModal.close(t),t=>{if(t instanceof w)return;let e;e=t.error?t.error:t.message,this.notificationService.error(e,this.translateService.instant("error"))})}cancel(){this.activeModal.dismiss(null)}getDefaultWorkflow(){return{id:null,name:null,project:null,injection_volume:null,acquisition_method:null,processing_method:null,equilibration_method:null,shutdown_method:null}}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(k.Kz),o.Y36(l.gqp),o.Y36(d.sK))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-workflow-window"]],viewQuery:function(t,e){if(1&t&&o.Gf(T,5),2&t){let i;o.iGM(i=o.CRH())&&(e.workflowForm=i.first)}},decls:10,vars:10,consts:[[3,"header"],[3,"showButtons"],["workflowForm",""],["type","primary",3,"value","click"],["type","secondary",3,"value","click"]],template:function(t,e){1&t&&(o.TgZ(0,"ag-dialog",0),o.ALo(1,"translate"),o.TgZ(2,"ag-dialog-content"),o._UZ(3,"app-workflow-form",1,2),o.qZA(),o.TgZ(5,"ag-dialog-actions")(6,"awf-button-ng",3),o.NdJ("click",function(){return e.addWorkflow()}),o.ALo(7,"translate"),o.qZA(),o.TgZ(8,"awf-button-ng",4),o.NdJ("click",function(){return e.cancel()}),o.ALo(9,"translate"),o.qZA()()()),2&t&&(o.s9C("header",o.lcZ(1,4,"module.workflow.add")),o.xp6(3),o.Q6J("showButtons",!1),o.xp6(3),o.s9C("value",o.lcZ(7,6,"module.workflow.add")),o.xp6(2),o.s9C("value",o.lcZ(9,8,"cancel")))},dependencies:[l.r0F,l.auo,l.TgP,l.xM,M,d.X$]}),n})();function J(n,r){if(1&n){const t=o.EpF();o.TgZ(0,"app-workflow-form",9),o.NdJ("workflowRemoved",function(i){o.CHM(t);const s=o.oxw();return o.KtG(s.workflowWasRemoved(i))}),o.qZA()}if(2&n){const t=o.oxw();o.Q6J("workflow",t.selectedWorkflow)}}const L=[{path:"",component:(()=>{class n{constructor(t,e,i){this.translateService=t,this.workflowService=e,this.notificationService=i}ngOnInit(){this.loadWorkflows(null)}addWorkflow(){this.notificationService.showModal(F).result.then(e=>{this.loadWorkflows(e)})}loadWorkflows(t){this.workflowService.findAll().subscribe(e=>{e&&e.length>0?(this.workflows=e,this.selectedWorkflow=t||e[0]):(this.workflows=[],this.selectedWorkflow=null)},e=>{this.notificationService.error(this.translateService.instant("module.workflow.loadError"))})}workflowWasRemoved(t){this.loadWorkflows(null),this.notificationService.success(this.translateService.instant("module.workflow.workflowRemoveSuccessMessage"))}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d.sK),o.Y36(b.z),o.Y36(l.gqp))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-workflow-configuration"]],decls:14,vars:10,consts:[["slot","title-bar",1,"title-bar-with-actions"],["slot","titleBarName"],[1,"row","mt-3"],[1,"col-xl-auto"],[1,"col-xl-4"],["bindProperty","name","name","selectedWorkflow",3,"labelPosition","values","ngModel","ngModelChange"],["slot","titleBarActions"],["id","addWorkflow","type","primary",3,"value","click"],[3,"workflow","workflowRemoved",4,"ngIf"],[3,"workflow","workflowRemoved"]],template:function(t,e){1&t&&(o.TgZ(0,"ag-title-bar",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",1),o._uU(5),o.ALo(6,"translate"),o.qZA()(),o.TgZ(7,"div",4)(8,"ag-select",5),o.NdJ("ngModelChange",function(s){return e.selectedWorkflow=s}),o.qZA()()()(),o.TgZ(9,"div",6)(10,"ag-button-group")(11,"awf-button-ng",7),o.NdJ("click",function(){return e.addWorkflow()}),o.ALo(12,"translate"),o.qZA()()()(),o.YNc(13,J,1,1,"app-workflow-form",8)),2&t&&(o.xp6(5),o.Oqu(o.lcZ(6,6,"title.workflowModule")),o.xp6(3),o.Q6J("labelPosition","left")("values",e.workflows)("ngModel",e.selectedWorkflow),o.xp6(3),o.s9C("value",o.lcZ(12,8,"module.workflow.add")),o.xp6(2),o.Q6J("ngIf",e.selectedWorkflow))},dependencies:[f.O5,l.Hr0,c.JJ,c.On,l.r0F,l.KbJ,l.GN3,M,d.X$]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.Bz.forChild(L),g.Bz]}),n})();var O=a(9019);let N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[f.ez,P,l.gPf,l.Anc,c.u5,l.hJ1,O.KI.forRoot(),l.qax,l.Lqp,l.xuJ,l.Suy]}),n})()}}]);