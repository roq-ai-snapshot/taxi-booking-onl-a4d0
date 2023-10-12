import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface PriceInterface {
  id?: string;
  amount: number;
  currency: string;
  booking_id: string;
  created_at?: any;
  updated_at?: any;

  booking?: BookingInterface;
  _count?: {};
}

export interface PriceGetQueryInterface extends GetQueryInterface {
  id?: string;
  currency?: string;
  booking_id?: string;
}
