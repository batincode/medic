export interface DigitalSignature {
  id: number;
  userId: number;
  reportId: number;
  signatureData: string;
  signatureHash: string;
  timestamp: string;
}

