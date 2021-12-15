import { LoadingOptions, Loader } from '../internal';
import * as Internal from '../internal';
export declare function documentLoad(loader: Loader, doc: unknown, baseuri: string, loadingOptions: LoadingOptions): Promise<any>;
export declare function documentLoadByUrl(loader: Loader, url: string, loadingOptions: LoadingOptions): Promise<void>;
export declare function loadDocument(doc: any, baseuri?: string, loadingOptions?: LoadingOptions): Promise<Internal.CommandLineTool | Internal.ExpressionTool | Internal.Workflow | Internal.Operation | Array<Internal.CommandLineTool | Internal.ExpressionTool | Internal.Workflow | Internal.Operation>>;
export declare function loadDocumentByString(doc: string, uri: string, loadingOptions?: LoadingOptions): Promise<Internal.CommandLineTool | Internal.ExpressionTool | Internal.Workflow | Internal.Operation | Array<Internal.CommandLineTool | Internal.ExpressionTool | Internal.Workflow | Internal.Operation>>;
