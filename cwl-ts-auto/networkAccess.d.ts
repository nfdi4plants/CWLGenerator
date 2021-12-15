import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#NetworkAccess
 *
 * Indicate whether a process requires outgoing IPv4/IPv6 network
 * access.  Choice of IPv4 or IPv6 is implementation and site
 * specific, correct tools must support both.
 *
 * If `networkAccess` is false or not specified, tools must not
 * assume network access, except for localhost (the loopback device).
 *
 * If `networkAccess` is true, the tool must be able to make outgoing
 * connections to network resources.  Resources may be on a private
 * subnet or the public Internet.  However, implementations and sites
 * may apply their own security policies to restrict what is
 * accessible by the tool.
 *
 * Enabling network access does not imply a publically routable IP
 * address or the ability to accept inbound connections.
 *
 */
export declare class NetworkAccess extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'NetworkAccess'
     */
    class_: string;
    networkAccess: boolean | string;
    constructor({ extensionFields, loadingOptions, class_, networkAccess }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
        networkAccess: boolean | string;
    });
    /**
     * Used to construct instances of {@link NetworkAccess }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link NetworkAccess }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
