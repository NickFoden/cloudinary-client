/**
 * Create a client
 * const cloudClient = require("cloudinary-client");
 * const CloudinaryClient = cloudClient.createClient({
 *  apiKey:API_KEY,
 *  apiSecret: API_SECRET,
 *  cloudName: CLOUD_NAME
 * })
 */
interface ParamsObject {
    apiKey: string;
    apiSecret: string;
    cloudName: string;
}
export declare const createClient: (params: ParamsObject) => (e: {
    target: {
        files: any;
    };
}, public_id?: string, format?: string, upload_preset?: string) => Promise<unknown>;
export {};
