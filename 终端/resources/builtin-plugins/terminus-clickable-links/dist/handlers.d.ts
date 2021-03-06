import { ToastrService } from 'ngx-toastr';
import { ElectronService } from 'terminus-core';
import { LinkHandler } from './api';
export declare class URLHandler extends LinkHandler {
    private electron;
    regex: string;
    constructor(electron: ElectronService);
    handle(uri: string): void;
}
export declare class UnixFileHandler extends LinkHandler {
    private toastr;
    private electron;
    regex: string;
    constructor(toastr: ToastrService, electron: ElectronService);
    convert(uri: string): string;
    handle(uri: string): void;
}
export declare class WindowsFileHandler extends LinkHandler {
    private toastr;
    private electron;
    regex: string;
    constructor(toastr: ToastrService, electron: ElectronService);
    convert(uri: string): string;
    handle(uri: string): void;
}
