import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

// Initialize S3-compatible client for Backblaze B2
const b2Client = new S3Client({
    endpoint: process.env.B2_ENDPOINT,
    region: process.env.B2_REGION,
    credentials: {
        accessKeyId: process.env.B2_KEY_ID,
        secretAccessKey: process.env.B2_APPLICATION_KEY,
    },
});

const BUCKET_NAME = process.env.B2_BUCKET_NAME;
const CDN_URL = process.env.NEXT_PUBLIC_IMAGE_CDN_URL;

/**
 * Upload a file to Backblaze B2
 * @param {Buffer} fileBuffer - The file data
 * @param {string} fileName - The name/path for the file
 * @param {string} contentType - MIME type (e.g., 'image/jpeg')
 * @returns {Promise<{url: string, key: string}>}
 */
export async function uploadFile(fileBuffer, fileName, contentType) {
    const key = `${Date.now()}-${fileName}`;

    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: fileBuffer,
        ContentType: contentType,
    });

    await b2Client.send(command);

    return {
        key,
        url: `${CDN_URL}/${key}`,
    };
}

/**
 * Delete a file from Backblaze B2
 * @param {string} key - The file key/path
 */
export async function deleteFile(key) {
    const command = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    });

    await b2Client.send(command);
}

/**
 * List all files in the bucket
 * @param {string} prefix - Optional prefix to filter files
 * @returns {Promise<Array>}
 */
export async function listFiles(prefix = '') {
    const command = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        Prefix: prefix,
    });

    const response = await b2Client.send(command);
    return response.Contents || [];
}

/**
 * Get the CDN URL for a file
 * @param {string} key - The file key/path
 * @returns {string}
 */
export function getCdnUrl(key) {
    return `${CDN_URL}/${key}`;
}

export default b2Client;
