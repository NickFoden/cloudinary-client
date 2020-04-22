interface ParamsObject {
    apiKey: string;
    apiSecret: string;
    cloudName: string;
}
export declare const createClient: (params: ParamsObject) => (e: {
    target: {
        files: any;
    };
}, format?: string, public_id?: string) => Promise<unknown>;
export {};
