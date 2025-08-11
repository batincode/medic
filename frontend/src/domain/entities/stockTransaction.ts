export interface StockTransaction {
  id: number;
  deviceId: number;
  quantityChange: number;
  type: 'CheckIn' | 'CheckOut' | 'Assignment' | 'Return';
  performedByUserId: number;
  timestamp: string;
}

