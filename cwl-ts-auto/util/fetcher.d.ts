export declare abstract class Fetcher {
    abstract fetchText(url: string, contentTypes?: string[]): Promise<string>;
    abstract checkExists(url: string): boolean;
    abstract urljoin(baseUrl: string, url: string): string;
    static schemes: string[];
}
export declare class DefaultFetcher extends Fetcher {
    fetchText(urlString: string): Promise<string>;
    checkExists(url: string): boolean;
    urljoin(baseUrlString: string, urlString: string): string;
}
