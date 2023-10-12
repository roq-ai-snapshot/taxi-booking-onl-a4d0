import { PriceInterface } from 'interfaces/price';
import { UserInterface } from 'interfaces/user';
import { VehicleInterface } from 'interfaces/vehicle';
import { CityInterface } from 'interfaces/city';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  customer_id: string;
  driver_id: string;
  vehicle_id: string;
  start_city_id: string;
  end_city_id: string;
  start_time: any;
  end_time?: any;
  created_at?: any;
  updated_at?: any;
  price?: PriceInterface[];
  user_booking_customer_idTouser?: UserInterface;
  user_booking_driver_idTouser?: UserInterface;
  vehicle?: VehicleInterface;
  city_booking_start_city_idTocity?: CityInterface;
  city_booking_end_city_idTocity?: CityInterface;
  _count?: {
    price?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  driver_id?: string;
  vehicle_id?: string;
  start_city_id?: string;
  end_city_id?: string;
}
