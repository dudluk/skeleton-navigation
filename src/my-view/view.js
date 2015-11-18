import {DialogService} from 'aurelia-dialog';
import {Popup} from './popup';
import {inject} from 'aurelia-framework';

@inject(DialogService)
export class View {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    
    open() {
        this.dialogService.open({ viewModel: Popup });
    }
}