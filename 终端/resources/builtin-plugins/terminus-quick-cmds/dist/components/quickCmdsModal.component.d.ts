import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService, AppService, BaseTabComponent } from 'terminus-core';
import { QuickCmds, ICmdGroup } from '../api';
export declare class QuickCmdsModalComponent {
    modalInstance: NgbActiveModal;
    private config;
    private app;
    cmds: QuickCmds[];
    quickCmd: string;
    appendCR: boolean;
    childGroups: ICmdGroup[];
    groupCollapsed: {
        [id: string]: boolean;
    };
    constructor(modalInstance: NgbActiveModal, config: ConfigService, app: AppService);
    ngOnInit(): void;
    quickSend(): void;
    quickSendAll(): void;
    _send(tab: BaseTabComponent, cmd: string): void;
    _sendAll(cmd: string): void;
    close(): void;
    send(cmd: QuickCmds, event: MouseEvent): void;
    clickGroup(group: ICmdGroup, event: MouseEvent): void;
    refresh(): void;
}
