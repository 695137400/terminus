import { TerminalDecorator, TerminalTabComponent } from 'terminus-terminal';
import { LinkHandler } from './api';
export declare class LinkHighlighterDecorator extends TerminalDecorator {
    private handlers;
    constructor(handlers: LinkHandler[]);
    attach(terminal: TerminalTabComponent): void;
    insertLinks(screen: any): void;
    urlizeNode(node: any): any;
}
