import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface CityInterface {
  id?: string;
  name: string;
  state: string;
  country: string;
  created_at?: any;
  updated_at?: any;
  booking_booking_end_city_idTocity?: BookingInterface[];
  booking_booking_start_city_idTocity?: BookingInterface[];

  _count?: {
    booking_booking_end_city_idTocity?: number;
    booking_booking_start_city_idTocity?: number;
  };
}

export interface CityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  state?: string;
  country?: string;
}
