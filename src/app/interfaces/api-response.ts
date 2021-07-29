export interface ClerkAPIUpsertResponse {
  statusCode: string;
  status: string;
  operation: string;
  data: Data;
}

export interface Data {
  message: string;
  upserted_hashes: string[];
  skipped_hashes: any[];
}

export interface ClerkAPIDeleteResponse {
  statusCode: string;
  status: string;
  operation: string;
  data: DeleteData;
}

export interface DeleteData {
  message: string;
  deleted_hashes: string[];
  skipped_hashes: any[];
}
