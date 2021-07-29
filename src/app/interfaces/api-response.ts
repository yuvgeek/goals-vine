export interface ClerkAPIInsertResponse {
  statusCode: string;
  status: string;
  operation: string;
  data: Data;
}

export interface Data {
  message: string;
  inserted_hashes: string[];
  skipped_hashes: any[];
}
