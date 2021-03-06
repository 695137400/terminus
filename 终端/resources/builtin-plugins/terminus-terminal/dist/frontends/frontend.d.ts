import { Observable, Subject, AsyncSubject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { ResizeEvent } from '../api';
export declare abstract class Frontend {
    enableResizing: boolean;
    protected ready: AsyncSubject<void>;
    protected title: ReplaySubject<string>;
    protected alternateScreenActive: BehaviorSubject<boolean>;
    protected mouseEvent: Subject<MouseEvent>;
    protected bell: Subject<void>;
    protected contentUpdated: Subject<void>;
    protected input: Subject<string>;
    protected resize: ReplaySubject<ResizeEvent>;
    protected dragOver: Subject<DragEvent>;
    protected drop: Subject<DragEvent>;
    readonly ready$: Observable<void>;
    readonly title$: Observable<string>;
    readonly alternateScreenActive$: Observable<boolean>;
    readonly mouseEvent$: Observable<MouseEvent>;
    readonly bell$: Observable<void>;
    readonly contentUpdated$: Observable<void>;
    readonly input$: Observable<string>;
    readonly resize$: Observable<ResizeEvent>;
    readonly dragOver$: Observable<DragEvent>;
    readonly drop$: Observable<DragEvent>;
    abstract attach(host: HTMLElement): void;
    detach(host: HTMLElement): void;
    destroy(): void;
    abstract getSelection(): string;
    abstract copySelection(): void;
    abstract clearSelection(): void;
    abstract focus(): void;
    abstract write(data: string): void;
    abstract clear(): void;
    abstract visualBell(): void;
    abstract scrollToBottom(): void;
    abstract configure(configStore: any): void;
    abstract setZoom(zoom: number): void;
}
