/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model booking
 *
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>;
/**
 * Model city
 *
 */
export type city = $Result.DefaultSelection<Prisma.$cityPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model price
 *
 */
export type price = $Result.DefaultSelection<Prisma.$pricePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vehicle
 *
 */
export type vehicle = $Result.DefaultSelection<Prisma.$vehiclePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.bookingDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **city** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
   * ```
   */
  get city(): Prisma.cityDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **price** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Prices
   * const prices = await prisma.price.findMany()
   * ```
   */
  get price(): Prisma.priceDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   */
  get vehicle(): Prisma.vehicleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    booking: 'booking';
    city: 'city';
    company: 'company';
    price: 'price';
    user: 'user';
    vehicle: 'vehicle';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'booking' | 'city' | 'company' | 'price' | 'user' | 'vehicle';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>;
        fields: Prisma.bookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[];
          };
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      city: {
        payload: Prisma.$cityPayload<ExtArgs>;
        fields: Prisma.cityFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.cityFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.cityFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>;
          };
          findFirst: {
            args: Prisma.cityFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.cityFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>;
          };
          findMany: {
            args: Prisma.cityFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>[];
          };
          create: {
            args: Prisma.cityCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>;
          };
          createMany: {
            args: Prisma.cityCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.cityDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>;
          };
          update: {
            args: Prisma.cityUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>;
          };
          deleteMany: {
            args: Prisma.cityDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.cityUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.cityUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cityPayload>;
          };
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCity>;
          };
          groupBy: {
            args: Prisma.cityGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CityGroupByOutputType>[];
          };
          count: {
            args: Prisma.cityCountArgs<ExtArgs>;
            result: $Utils.Optional<CityCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      price: {
        payload: Prisma.$pricePayload<ExtArgs>;
        fields: Prisma.priceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.priceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.priceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>;
          };
          findFirst: {
            args: Prisma.priceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.priceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>;
          };
          findMany: {
            args: Prisma.priceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>[];
          };
          create: {
            args: Prisma.priceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>;
          };
          createMany: {
            args: Prisma.priceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.priceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>;
          };
          update: {
            args: Prisma.priceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>;
          };
          deleteMany: {
            args: Prisma.priceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.priceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.priceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pricePayload>;
          };
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePrice>;
          };
          groupBy: {
            args: Prisma.priceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PriceGroupByOutputType>[];
          };
          count: {
            args: Prisma.priceCountArgs<ExtArgs>;
            result: $Utils.Optional<PriceCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vehicle: {
        payload: Prisma.$vehiclePayload<ExtArgs>;
        fields: Prisma.vehicleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vehicleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vehicleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findFirst: {
            args: Prisma.vehicleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vehicleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findMany: {
            args: Prisma.vehicleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[];
          };
          create: {
            args: Prisma.vehicleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          createMany: {
            args: Prisma.vehicleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vehicleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          update: {
            args: Prisma.vehicleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          deleteMany: {
            args: Prisma.vehicleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vehicleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vehicleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVehicle>;
          };
          groupBy: {
            args: Prisma.vehicleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VehicleGroupByOutputType>[];
          };
          count: {
            args: Prisma.vehicleCountArgs<ExtArgs>;
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    price: number;
  };

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price?: boolean | BookingCountOutputTypeCountPriceArgs;
  };

  // Custom InputTypes

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: priceWhereInput;
    };

  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    booking_booking_end_city_idTocity: number;
    booking_booking_start_city_idTocity: number;
  };

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_booking_end_city_idTocity?: boolean | CityCountOutputTypeCountBooking_booking_end_city_idTocityArgs;
    booking_booking_start_city_idTocity?: boolean | CityCountOutputTypeCountBooking_booking_start_city_idTocityArgs;
  };

  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountBooking_booking_end_city_idTocityArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountBooking_booking_start_city_idTocityArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    booking_booking_customer_idTouser: number;
    booking_booking_driver_idTouser: number;
    company: number;
    vehicle: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_booking_customer_idTouser?: boolean | UserCountOutputTypeCountBooking_booking_customer_idTouserArgs;
    booking_booking_driver_idTouser?: boolean | UserCountOutputTypeCountBooking_booking_driver_idTouserArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    vehicle?: boolean | UserCountOutputTypeCountVehicleArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooking_booking_customer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooking_booking_driver_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: vehicleWhereInput;
    };

  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    booking: number;
  };

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | VehicleCountOutputTypeCountBookingArgs;
  };

  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountBookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    driver_id: string | null;
    vehicle_id: string | null;
    start_city_id: string | null;
    end_city_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    driver_id: string | null;
    vehicle_id: string | null;
    start_city_id: string | null;
    end_city_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    customer_id: number;
    driver_id: number;
    vehicle_id: number;
    start_city_id: number;
    end_city_id: number;
    start_time: number;
    end_time: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    driver_id?: true;
    vehicle_id?: true;
    start_city_id?: true;
    end_city_id?: true;
    start_time?: true;
    end_time?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    driver_id?: true;
    vehicle_id?: true;
    start_city_id?: true;
    end_city_id?: true;
    start_time?: true;
    end_time?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    driver_id?: true;
    vehicle_id?: true;
    start_city_id?: true;
    end_city_id?: true;
    start_time?: true;
    end_time?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date;
    end_time: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
          : GetScalarType<T[P], BookingGroupByOutputType[P]>;
      }
    >
  >;

  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      customer_id?: boolean;
      driver_id?: boolean;
      vehicle_id?: boolean;
      start_city_id?: boolean;
      end_city_id?: boolean;
      start_time?: boolean;
      end_time?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_booking_customer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      user_booking_driver_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      city_booking_end_city_idTocity?: boolean | cityDefaultArgs<ExtArgs>;
      city_booking_start_city_idTocity?: boolean | cityDefaultArgs<ExtArgs>;
      vehicle?: boolean | vehicleDefaultArgs<ExtArgs>;
      price?: boolean | booking$priceArgs<ExtArgs>;
      _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type bookingSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    driver_id?: boolean;
    vehicle_id?: boolean;
    start_city_id?: boolean;
    end_city_id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_booking_customer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_booking_driver_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    city_booking_end_city_idTocity?: boolean | cityDefaultArgs<ExtArgs>;
    city_booking_start_city_idTocity?: boolean | cityDefaultArgs<ExtArgs>;
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>;
    price?: boolean | booking$priceArgs<ExtArgs>;
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'booking';
    objects: {
      user_booking_customer_idTouser: Prisma.$userPayload<ExtArgs>;
      user_booking_driver_idTouser: Prisma.$userPayload<ExtArgs>;
      city_booking_end_city_idTocity: Prisma.$cityPayload<ExtArgs>;
      city_booking_start_city_idTocity: Prisma.$cityPayload<ExtArgs>;
      vehicle: Prisma.$vehiclePayload<ExtArgs>;
      price: Prisma.$pricePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        customer_id: string;
        driver_id: string;
        vehicle_id: string;
        start_city_id: string;
        end_city_id: string;
        start_time: Date;
        end_time: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<
    Prisma.$bookingPayload,
    S
  >;

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookingFindManyArgs,
    'select' | 'include'
  > & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking']; meta: { name: 'booking' } };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     **/
    create<T extends bookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingCreateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     **/
    delete<T extends bookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     **/
    upsert<T extends bookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the booking model
     */
    readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_booking_customer_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_booking_driver_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    city_booking_end_city_idTocity<T extends cityDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, cityDefaultArgs<ExtArgs>>,
    ): Prisma__cityClient<
      $Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    city_booking_start_city_idTocity<T extends cityDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, cityDefaultArgs<ExtArgs>>,
    ): Prisma__cityClient<
      $Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, vehicleDefaultArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    price<T extends booking$priceArgs<ExtArgs> = {}>(
      args?: Subset<T, booking$priceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<'booking', 'String'>;
    readonly customer_id: FieldRef<'booking', 'String'>;
    readonly driver_id: FieldRef<'booking', 'String'>;
    readonly vehicle_id: FieldRef<'booking', 'String'>;
    readonly start_city_id: FieldRef<'booking', 'String'>;
    readonly end_city_id: FieldRef<'booking', 'String'>;
    readonly start_time: FieldRef<'booking', 'DateTime'>;
    readonly end_time: FieldRef<'booking', 'DateTime'>;
    readonly created_at: FieldRef<'booking', 'DateTime'>;
    readonly updated_at: FieldRef<'booking', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
  };

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>;
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput;
  };

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput;
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
  };

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput;
  };

  /**
   * booking.price
   */
  export type booking$priceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    where?: priceWhereInput;
    orderBy?: priceOrderByWithRelationInput | priceOrderByWithRelationInput[];
    cursor?: priceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[];
  };

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
  };

  /**
   * Model city
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
  };

  export type CityMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    state: string | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CityMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    state: string | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CityCountAggregateOutputType = {
    id: number;
    name: number;
    state: number;
    country: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CityMinAggregateInputType = {
    id?: true;
    name?: true;
    state?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CityMaxAggregateInputType = {
    id?: true;
    name?: true;
    state?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CityCountAggregateInputType = {
    id?: true;
    name?: true;
    state?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which city to aggregate.
     */
    where?: cityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: cityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cities
     **/
    _count?: true | CityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CityMaxAggregateInputType;
  };

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
    [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>;
  };

  export type cityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cityWhereInput;
    orderBy?: cityOrderByWithAggregationInput | cityOrderByWithAggregationInput[];
    by: CityScalarFieldEnum[] | CityScalarFieldEnum;
    having?: cityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CityCountAggregateInputType | true;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
  };

  export type CityGroupByOutputType = {
    id: string;
    name: string;
    state: string;
    country: string;
    created_at: Date;
    updated_at: Date;
    _count: CityCountAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
  };

  type GetCityGroupByPayload<T extends cityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CityGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CityGroupByOutputType[P]>
          : GetScalarType<T[P], CityGroupByOutputType[P]>;
      }
    >
  >;

  export type citySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      state?: boolean;
      country?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking_booking_end_city_idTocity?: boolean | city$booking_booking_end_city_idTocityArgs<ExtArgs>;
      booking_booking_start_city_idTocity?: boolean | city$booking_booking_start_city_idTocityArgs<ExtArgs>;
      _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['city']
  >;

  export type citySelectScalar = {
    id?: boolean;
    name?: boolean;
    state?: boolean;
    country?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type cityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_booking_end_city_idTocity?: boolean | city$booking_booking_end_city_idTocityArgs<ExtArgs>;
    booking_booking_start_city_idTocity?: boolean | city$booking_booking_start_city_idTocityArgs<ExtArgs>;
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $cityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'city';
    objects: {
      booking_booking_end_city_idTocity: Prisma.$bookingPayload<ExtArgs>[];
      booking_booking_start_city_idTocity: Prisma.$bookingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        state: string;
        country: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['city']
    >;
    composites: {};
  };

  type cityGetPayload<S extends boolean | null | undefined | cityDefaultArgs> = $Result.GetResult<
    Prisma.$cityPayload,
    S
  >;

  type cityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    cityFindManyArgs,
    'select' | 'include'
  > & {
    select?: CityCountAggregateInputType | true;
  };

  export interface cityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['city']; meta: { name: 'city' } };
    /**
     * Find zero or one City that matches the filter.
     * @param {cityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends cityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cityFindUniqueArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {cityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends cityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindFirstArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     *
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends cityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a City.
     * @param {cityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     *
     **/
    create<T extends cityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cityCreateArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cities.
     *     @param {cityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends cityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cityCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a City.
     * @param {cityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     *
     **/
    delete<T extends cityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cityDeleteArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one City.
     * @param {cityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends cityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cityUpdateArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cities.
     * @param {cityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends cityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cityDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends cityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cityUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one City.
     * @param {cityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     **/
    upsert<T extends cityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cityUpsertArgs<ExtArgs>>,
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
     **/
    count<T extends cityCountArgs>(
      args?: Subset<T, cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CityAggregateArgs>(
      args: Subset<T, CityAggregateArgs>,
    ): Prisma.PrismaPromise<GetCityAggregateType<T>>;

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends cityGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cityGroupByArgs['orderBy'] }
        : { orderBy?: cityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, cityGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the city model
     */
    readonly fields: cityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cityClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking_booking_end_city_idTocity<T extends city$booking_booking_end_city_idTocityArgs<ExtArgs> = {}>(
      args?: Subset<T, city$booking_booking_end_city_idTocityArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    booking_booking_start_city_idTocity<T extends city$booking_booking_start_city_idTocityArgs<ExtArgs> = {}>(
      args?: Subset<T, city$booking_booking_start_city_idTocityArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the city model
   */
  interface cityFieldRefs {
    readonly id: FieldRef<'city', 'String'>;
    readonly name: FieldRef<'city', 'String'>;
    readonly state: FieldRef<'city', 'String'>;
    readonly country: FieldRef<'city', 'String'>;
    readonly created_at: FieldRef<'city', 'DateTime'>;
    readonly updated_at: FieldRef<'city', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * city findUnique
   */
  export type cityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput;
  };

  /**
   * city findUniqueOrThrow
   */
  export type cityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput;
  };

  /**
   * city findFirst
   */
  export type cityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[];
  };

  /**
   * city findFirstOrThrow
   */
  export type cityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[];
  };

  /**
   * city findMany
   */
  export type cityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * Filter, which cities to fetch.
     */
    where?: cityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cities.
     */
    cursor?: cityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cities.
     */
    skip?: number;
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[];
  };

  /**
   * city create
   */
  export type cityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * The data needed to create a city.
     */
    data: XOR<cityCreateInput, cityUncheckedCreateInput>;
  };

  /**
   * city createMany
   */
  export type cityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: cityCreateManyInput | cityCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * city update
   */
  export type cityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * The data needed to update a city.
     */
    data: XOR<cityUpdateInput, cityUncheckedUpdateInput>;
    /**
     * Choose, which city to update.
     */
    where: cityWhereUniqueInput;
  };

  /**
   * city updateMany
   */
  export type cityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>;
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput;
  };

  /**
   * city upsert
   */
  export type cityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * The filter to search for the city to update in case it exists.
     */
    where: cityWhereUniqueInput;
    /**
     * In case the city found by the `where` argument doesn't exist, create a new city with this data.
     */
    create: XOR<cityCreateInput, cityUncheckedCreateInput>;
    /**
     * In case the city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cityUpdateInput, cityUncheckedUpdateInput>;
  };

  /**
   * city delete
   */
  export type cityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
    /**
     * Filter which city to delete.
     */
    where: cityWhereUniqueInput;
  };

  /**
   * city deleteMany
   */
  export type cityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: cityWhereInput;
  };

  /**
   * city.booking_booking_end_city_idTocity
   */
  export type city$booking_booking_end_city_idTocityArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * city.booking_booking_start_city_idTocity
   */
  export type city$booking_booking_start_city_idTocityArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * city without action
   */
  export type cityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null;
    _avg: PriceAvgAggregateOutputType | null;
    _sum: PriceSumAggregateOutputType | null;
    _min: PriceMinAggregateOutputType | null;
    _max: PriceMaxAggregateOutputType | null;
  };

  export type PriceAvgAggregateOutputType = {
    amount: number | null;
  };

  export type PriceSumAggregateOutputType = {
    amount: number | null;
  };

  export type PriceMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    currency: string | null;
    booking_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PriceMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    currency: string | null;
    booking_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PriceCountAggregateOutputType = {
    id: number;
    amount: number;
    currency: number;
    booking_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PriceAvgAggregateInputType = {
    amount?: true;
  };

  export type PriceSumAggregateInputType = {
    amount?: true;
  };

  export type PriceMinAggregateInputType = {
    id?: true;
    amount?: true;
    currency?: true;
    booking_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PriceMaxAggregateInputType = {
    id?: true;
    amount?: true;
    currency?: true;
    booking_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PriceCountAggregateInputType = {
    id?: true;
    amount?: true;
    currency?: true;
    booking_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which price to aggregate.
     */
    where?: priceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?: priceOrderByWithRelationInput | priceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: priceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned prices
     **/
    _count?: true | PriceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PriceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PriceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PriceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PriceMaxAggregateInputType;
  };

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
    [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>;
  };

  export type priceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: priceWhereInput;
    orderBy?: priceOrderByWithAggregationInput | priceOrderByWithAggregationInput[];
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum;
    having?: priceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriceCountAggregateInputType | true;
    _avg?: PriceAvgAggregateInputType;
    _sum?: PriceSumAggregateInputType;
    _min?: PriceMinAggregateInputType;
    _max?: PriceMaxAggregateInputType;
  };

  export type PriceGroupByOutputType = {
    id: string;
    amount: number;
    currency: string;
    booking_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PriceCountAggregateOutputType | null;
    _avg: PriceAvgAggregateOutputType | null;
    _sum: PriceSumAggregateOutputType | null;
    _min: PriceMinAggregateOutputType | null;
    _max: PriceMaxAggregateOutputType | null;
  };

  type GetPriceGroupByPayload<T extends priceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PriceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
          : GetScalarType<T[P], PriceGroupByOutputType[P]>;
      }
    >
  >;

  export type priceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      currency?: boolean;
      booking_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | bookingDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['price']
  >;

  export type priceSelectScalar = {
    id?: boolean;
    amount?: boolean;
    currency?: boolean;
    booking_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type priceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>;
  };

  export type $pricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'price';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        currency: string;
        booking_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['price']
    >;
    composites: {};
  };

  type priceGetPayload<S extends boolean | null | undefined | priceDefaultArgs> = $Result.GetResult<
    Prisma.$pricePayload,
    S
  >;

  type priceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    priceFindManyArgs,
    'select' | 'include'
  > & {
    select?: PriceCountAggregateInputType | true;
  };

  export interface priceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['price']; meta: { name: 'price' } };
    /**
     * Find zero or one Price that matches the filter.
     * @param {priceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends priceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, priceFindUniqueArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Price that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {priceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends priceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, priceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {priceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends priceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, priceFindFirstArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {priceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends priceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, priceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {priceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     *
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends priceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, priceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Price.
     * @param {priceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     *
     **/
    create<T extends priceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, priceCreateArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Prices.
     *     @param {priceCreateManyArgs} args - Arguments to create many Prices.
     *     @example
     *     // Create many Prices
     *     const price = await prisma.price.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends priceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, priceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Price.
     * @param {priceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     *
     **/
    delete<T extends priceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, priceDeleteArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Price.
     * @param {priceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends priceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, priceUpdateArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Prices.
     * @param {priceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends priceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, priceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {priceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends priceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, priceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Price.
     * @param {priceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     **/
    upsert<T extends priceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, priceUpsertArgs<ExtArgs>>,
    ): Prisma__priceClient<$Result.GetResult<Prisma.$pricePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {priceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
     **/
    count<T extends priceCountArgs>(
      args?: Subset<T, priceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PriceAggregateArgs>(
      args: Subset<T, PriceAggregateArgs>,
    ): Prisma.PrismaPromise<GetPriceAggregateType<T>>;

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {priceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends priceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: priceGroupByArgs['orderBy'] }
        : { orderBy?: priceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, priceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the price model
     */
    readonly fields: priceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__priceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends bookingDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, bookingDefaultArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the price model
   */
  interface priceFieldRefs {
    readonly id: FieldRef<'price', 'String'>;
    readonly amount: FieldRef<'price', 'Int'>;
    readonly currency: FieldRef<'price', 'String'>;
    readonly booking_id: FieldRef<'price', 'String'>;
    readonly created_at: FieldRef<'price', 'DateTime'>;
    readonly updated_at: FieldRef<'price', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * price findUnique
   */
  export type priceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * Filter, which price to fetch.
     */
    where: priceWhereUniqueInput;
  };

  /**
   * price findUniqueOrThrow
   */
  export type priceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * Filter, which price to fetch.
     */
    where: priceWhereUniqueInput;
  };

  /**
   * price findFirst
   */
  export type priceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * Filter, which price to fetch.
     */
    where?: priceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?: priceOrderByWithRelationInput | priceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prices.
     */
    cursor?: priceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[];
  };

  /**
   * price findFirstOrThrow
   */
  export type priceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * Filter, which price to fetch.
     */
    where?: priceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?: priceOrderByWithRelationInput | priceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prices.
     */
    cursor?: priceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[];
  };

  /**
   * price findMany
   */
  export type priceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * Filter, which prices to fetch.
     */
    where?: priceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?: priceOrderByWithRelationInput | priceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing prices.
     */
    cursor?: priceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number;
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[];
  };

  /**
   * price create
   */
  export type priceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * The data needed to create a price.
     */
    data: XOR<priceCreateInput, priceUncheckedCreateInput>;
  };

  /**
   * price createMany
   */
  export type priceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prices.
     */
    data: priceCreateManyInput | priceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * price update
   */
  export type priceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * The data needed to update a price.
     */
    data: XOR<priceUpdateInput, priceUncheckedUpdateInput>;
    /**
     * Choose, which price to update.
     */
    where: priceWhereUniqueInput;
  };

  /**
   * price updateMany
   */
  export type priceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prices.
     */
    data: XOR<priceUpdateManyMutationInput, priceUncheckedUpdateManyInput>;
    /**
     * Filter which prices to update
     */
    where?: priceWhereInput;
  };

  /**
   * price upsert
   */
  export type priceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * The filter to search for the price to update in case it exists.
     */
    where: priceWhereUniqueInput;
    /**
     * In case the price found by the `where` argument doesn't exist, create a new price with this data.
     */
    create: XOR<priceCreateInput, priceUncheckedCreateInput>;
    /**
     * In case the price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<priceUpdateInput, priceUncheckedUpdateInput>;
  };

  /**
   * price delete
   */
  export type priceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
    /**
     * Filter which price to delete.
     */
    where: priceWhereUniqueInput;
  };

  /**
   * price deleteMany
   */
  export type priceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prices to delete
     */
    where?: priceWhereInput;
  };

  /**
   * price without action
   */
  export type priceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price
     */
    select?: priceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: priceInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking_booking_customer_idTouser?: boolean | user$booking_booking_customer_idTouserArgs<ExtArgs>;
      booking_booking_driver_idTouser?: boolean | user$booking_booking_driver_idTouserArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      vehicle?: boolean | user$vehicleArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_booking_customer_idTouser?: boolean | user$booking_booking_customer_idTouserArgs<ExtArgs>;
    booking_booking_driver_idTouser?: boolean | user$booking_booking_driver_idTouserArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    vehicle?: boolean | user$vehicleArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      booking_booking_customer_idTouser: Prisma.$bookingPayload<ExtArgs>[];
      booking_booking_driver_idTouser: Prisma.$bookingPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      vehicle: Prisma.$vehiclePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking_booking_customer_idTouser<T extends user$booking_booking_customer_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$booking_booking_customer_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    booking_booking_driver_idTouser<T extends user$booking_booking_driver_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$booking_booking_driver_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    vehicle<T extends user$vehicleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$vehicleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.booking_booking_customer_idTouser
   */
  export type user$booking_booking_customer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.booking_booking_driver_idTouser
   */
  export type user$booking_booking_driver_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.vehicle
   */
  export type user$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    cursor?: vehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  export type VehicleAvgAggregateOutputType = {
    capacity: number | null;
  };

  export type VehicleSumAggregateOutputType = {
    capacity: number | null;
  };

  export type VehicleMinAggregateOutputType = {
    id: string | null;
    model: string | null;
    registration_number: string | null;
    capacity: number | null;
    driver_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleMaxAggregateOutputType = {
    id: string | null;
    model: string | null;
    registration_number: string | null;
    capacity: number | null;
    driver_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleCountAggregateOutputType = {
    id: number;
    model: number;
    registration_number: number;
    capacity: number;
    driver_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VehicleAvgAggregateInputType = {
    capacity?: true;
  };

  export type VehicleSumAggregateInputType = {
    capacity?: true;
  };

  export type VehicleMinAggregateInputType = {
    id?: true;
    model?: true;
    registration_number?: true;
    capacity?: true;
    driver_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleMaxAggregateInputType = {
    id?: true;
    model?: true;
    registration_number?: true;
    capacity?: true;
    driver_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleCountAggregateInputType = {
    id?: true;
    model?: true;
    registration_number?: true;
    capacity?: true;
    driver_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle to aggregate.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vehicles
     **/
    _count?: true | VehicleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VehicleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VehicleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VehicleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VehicleMaxAggregateInputType;
  };

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>;
  };

  export type vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithAggregationInput | vehicleOrderByWithAggregationInput[];
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum;
    having?: vehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
  };

  export type VehicleGroupByOutputType = {
    id: string;
    model: string;
    registration_number: string;
    capacity: number;
    driver_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  type GetVehicleGroupByPayload<T extends vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VehicleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
          : GetScalarType<T[P], VehicleGroupByOutputType[P]>;
      }
    >
  >;

  export type vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      model?: boolean;
      registration_number?: boolean;
      capacity?: boolean;
      driver_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | vehicle$bookingArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vehicle']
  >;

  export type vehicleSelectScalar = {
    id?: boolean;
    model?: boolean;
    registration_number?: boolean;
    capacity?: boolean;
    driver_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | vehicle$bookingArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vehicle';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        model: string;
        registration_number: string;
        capacity: number;
        driver_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vehicle']
    >;
    composites: {};
  };

  type vehicleGetPayload<S extends boolean | null | undefined | vehicleDefaultArgs> = $Result.GetResult<
    Prisma.$vehiclePayload,
    S
  >;

  type vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vehicleFindManyArgs,
    'select' | 'include'
  > & {
    select?: VehicleCountAggregateInputType | true;
  };

  export interface vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle']; meta: { name: 'vehicle' } };
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleFindUniqueArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     *
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     *
     **/
    create<T extends vehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleCreateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vehicles.
     *     @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     *
     **/
    delete<T extends vehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleDeleteArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     **/
    upsert<T extends vehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpsertArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
     **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VehicleAggregateArgs>(
      args: Subset<T, VehicleAggregateArgs>,
    ): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends vehicleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicleGroupByArgs['orderBy'] }
        : { orderBy?: vehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vehicleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vehicle model
     */
    readonly fields: vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends vehicle$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, vehicle$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vehicle model
   */
  interface vehicleFieldRefs {
    readonly id: FieldRef<'vehicle', 'String'>;
    readonly model: FieldRef<'vehicle', 'String'>;
    readonly registration_number: FieldRef<'vehicle', 'String'>;
    readonly capacity: FieldRef<'vehicle', 'Int'>;
    readonly driver_id: FieldRef<'vehicle', 'String'>;
    readonly created_at: FieldRef<'vehicle', 'DateTime'>;
    readonly updated_at: FieldRef<'vehicle', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vehicle findUnique
   */
  export type vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findFirst
   */
  export type vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle create
   */
  export type vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to create a vehicle.
     */
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
  };

  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vehicle update
   */
  export type vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to update a vehicle.
     */
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
    /**
     * Choose, which vehicle to update.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>;
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The filter to search for the vehicle to update in case it exists.
     */
    where: vehicleWhereUniqueInput;
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     */
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
  };

  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter which vehicle to delete.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle.booking
   */
  export type vehicle$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * vehicle without action
   */
  export type vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BookingScalarFieldEnum: {
    id: 'id';
    customer_id: 'customer_id';
    driver_id: 'driver_id';
    vehicle_id: 'vehicle_id';
    start_city_id: 'start_city_id';
    end_city_id: 'end_city_id';
    start_time: 'start_time';
    end_time: 'end_time';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const CityScalarFieldEnum: {
    id: 'id';
    name: 'name';
    state: 'state';
    country: 'country';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const PriceScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    currency: 'currency';
    booking_id: 'booking_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VehicleScalarFieldEnum: {
    id: 'id';
    model: 'model';
    registration_number: 'registration_number';
    capacity: 'capacity';
    driver_id: 'driver_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[];
    OR?: bookingWhereInput[];
    NOT?: bookingWhereInput | bookingWhereInput[];
    id?: UuidFilter<'booking'> | string;
    customer_id?: UuidFilter<'booking'> | string;
    driver_id?: UuidFilter<'booking'> | string;
    vehicle_id?: UuidFilter<'booking'> | string;
    start_city_id?: UuidFilter<'booking'> | string;
    end_city_id?: UuidFilter<'booking'> | string;
    start_time?: DateTimeFilter<'booking'> | Date | string;
    end_time?: DateTimeNullableFilter<'booking'> | Date | string | null;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
    user_booking_customer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_booking_driver_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    city_booking_end_city_idTocity?: XOR<CityRelationFilter, cityWhereInput>;
    city_booking_start_city_idTocity?: XOR<CityRelationFilter, cityWhereInput>;
    vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput>;
    price?: PriceListRelationFilter;
  };

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder;
    customer_id?: SortOrder;
    driver_id?: SortOrder;
    vehicle_id?: SortOrder;
    start_city_id?: SortOrder;
    end_city_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_booking_customer_idTouser?: userOrderByWithRelationInput;
    user_booking_driver_idTouser?: userOrderByWithRelationInput;
    city_booking_end_city_idTocity?: cityOrderByWithRelationInput;
    city_booking_start_city_idTocity?: cityOrderByWithRelationInput;
    vehicle?: vehicleOrderByWithRelationInput;
    price?: priceOrderByRelationAggregateInput;
  };

  export type bookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookingWhereInput | bookingWhereInput[];
      OR?: bookingWhereInput[];
      NOT?: bookingWhereInput | bookingWhereInput[];
      customer_id?: UuidFilter<'booking'> | string;
      driver_id?: UuidFilter<'booking'> | string;
      vehicle_id?: UuidFilter<'booking'> | string;
      start_city_id?: UuidFilter<'booking'> | string;
      end_city_id?: UuidFilter<'booking'> | string;
      start_time?: DateTimeFilter<'booking'> | Date | string;
      end_time?: DateTimeNullableFilter<'booking'> | Date | string | null;
      created_at?: DateTimeFilter<'booking'> | Date | string;
      updated_at?: DateTimeFilter<'booking'> | Date | string;
      user_booking_customer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_booking_driver_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      city_booking_end_city_idTocity?: XOR<CityRelationFilter, cityWhereInput>;
      city_booking_start_city_idTocity?: XOR<CityRelationFilter, cityWhereInput>;
      vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput>;
      price?: PriceListRelationFilter;
    },
    'id'
  >;

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder;
    customer_id?: SortOrder;
    driver_id?: SortOrder;
    vehicle_id?: SortOrder;
    start_city_id?: SortOrder;
    end_city_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookingCountOrderByAggregateInput;
    _max?: bookingMaxOrderByAggregateInput;
    _min?: bookingMinOrderByAggregateInput;
  };

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    OR?: bookingScalarWhereWithAggregatesInput[];
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'booking'> | string;
    customer_id?: UuidWithAggregatesFilter<'booking'> | string;
    driver_id?: UuidWithAggregatesFilter<'booking'> | string;
    vehicle_id?: UuidWithAggregatesFilter<'booking'> | string;
    start_city_id?: UuidWithAggregatesFilter<'booking'> | string;
    end_city_id?: UuidWithAggregatesFilter<'booking'> | string;
    start_time?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    end_time?: DateTimeNullableWithAggregatesFilter<'booking'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
  };

  export type cityWhereInput = {
    AND?: cityWhereInput | cityWhereInput[];
    OR?: cityWhereInput[];
    NOT?: cityWhereInput | cityWhereInput[];
    id?: UuidFilter<'city'> | string;
    name?: StringFilter<'city'> | string;
    state?: StringFilter<'city'> | string;
    country?: StringFilter<'city'> | string;
    created_at?: DateTimeFilter<'city'> | Date | string;
    updated_at?: DateTimeFilter<'city'> | Date | string;
    booking_booking_end_city_idTocity?: BookingListRelationFilter;
    booking_booking_start_city_idTocity?: BookingListRelationFilter;
  };

  export type cityOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_booking_end_city_idTocity?: bookingOrderByRelationAggregateInput;
    booking_booking_start_city_idTocity?: bookingOrderByRelationAggregateInput;
  };

  export type cityWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: cityWhereInput | cityWhereInput[];
      OR?: cityWhereInput[];
      NOT?: cityWhereInput | cityWhereInput[];
      name?: StringFilter<'city'> | string;
      state?: StringFilter<'city'> | string;
      country?: StringFilter<'city'> | string;
      created_at?: DateTimeFilter<'city'> | Date | string;
      updated_at?: DateTimeFilter<'city'> | Date | string;
      booking_booking_end_city_idTocity?: BookingListRelationFilter;
      booking_booking_start_city_idTocity?: BookingListRelationFilter;
    },
    'id'
  >;

  export type cityOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: cityCountOrderByAggregateInput;
    _max?: cityMaxOrderByAggregateInput;
    _min?: cityMinOrderByAggregateInput;
  };

  export type cityScalarWhereWithAggregatesInput = {
    AND?: cityScalarWhereWithAggregatesInput | cityScalarWhereWithAggregatesInput[];
    OR?: cityScalarWhereWithAggregatesInput[];
    NOT?: cityScalarWhereWithAggregatesInput | cityScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'city'> | string;
    name?: StringWithAggregatesFilter<'city'> | string;
    state?: StringWithAggregatesFilter<'city'> | string;
    country?: StringWithAggregatesFilter<'city'> | string;
    created_at?: DateTimeWithAggregatesFilter<'city'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'city'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type priceWhereInput = {
    AND?: priceWhereInput | priceWhereInput[];
    OR?: priceWhereInput[];
    NOT?: priceWhereInput | priceWhereInput[];
    id?: UuidFilter<'price'> | string;
    amount?: IntFilter<'price'> | number;
    currency?: StringFilter<'price'> | string;
    booking_id?: UuidFilter<'price'> | string;
    created_at?: DateTimeFilter<'price'> | Date | string;
    updated_at?: DateTimeFilter<'price'> | Date | string;
    booking?: XOR<BookingRelationFilter, bookingWhereInput>;
  };

  export type priceOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByWithRelationInput;
  };

  export type priceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: priceWhereInput | priceWhereInput[];
      OR?: priceWhereInput[];
      NOT?: priceWhereInput | priceWhereInput[];
      amount?: IntFilter<'price'> | number;
      currency?: StringFilter<'price'> | string;
      booking_id?: UuidFilter<'price'> | string;
      created_at?: DateTimeFilter<'price'> | Date | string;
      updated_at?: DateTimeFilter<'price'> | Date | string;
      booking?: XOR<BookingRelationFilter, bookingWhereInput>;
    },
    'id'
  >;

  export type priceOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: priceCountOrderByAggregateInput;
    _avg?: priceAvgOrderByAggregateInput;
    _max?: priceMaxOrderByAggregateInput;
    _min?: priceMinOrderByAggregateInput;
    _sum?: priceSumOrderByAggregateInput;
  };

  export type priceScalarWhereWithAggregatesInput = {
    AND?: priceScalarWhereWithAggregatesInput | priceScalarWhereWithAggregatesInput[];
    OR?: priceScalarWhereWithAggregatesInput[];
    NOT?: priceScalarWhereWithAggregatesInput | priceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'price'> | string;
    amount?: IntWithAggregatesFilter<'price'> | number;
    currency?: StringWithAggregatesFilter<'price'> | string;
    booking_id?: UuidWithAggregatesFilter<'price'> | string;
    created_at?: DateTimeWithAggregatesFilter<'price'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'price'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    booking_booking_customer_idTouser?: BookingListRelationFilter;
    booking_booking_driver_idTouser?: BookingListRelationFilter;
    company?: CompanyListRelationFilter;
    vehicle?: VehicleListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_booking_customer_idTouser?: bookingOrderByRelationAggregateInput;
    booking_booking_driver_idTouser?: bookingOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    vehicle?: vehicleOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      booking_booking_customer_idTouser?: BookingListRelationFilter;
      booking_booking_driver_idTouser?: BookingListRelationFilter;
      company?: CompanyListRelationFilter;
      vehicle?: VehicleListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vehicleWhereInput = {
    AND?: vehicleWhereInput | vehicleWhereInput[];
    OR?: vehicleWhereInput[];
    NOT?: vehicleWhereInput | vehicleWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    model?: StringFilter<'vehicle'> | string;
    registration_number?: StringFilter<'vehicle'> | string;
    capacity?: IntFilter<'vehicle'> | number;
    driver_id?: UuidFilter<'vehicle'> | string;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
    booking?: BookingListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder;
    model?: SortOrder;
    registration_number?: SortOrder;
    capacity?: SortOrder;
    driver_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type vehicleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      registration_number?: string;
      AND?: vehicleWhereInput | vehicleWhereInput[];
      OR?: vehicleWhereInput[];
      NOT?: vehicleWhereInput | vehicleWhereInput[];
      model?: StringFilter<'vehicle'> | string;
      capacity?: IntFilter<'vehicle'> | number;
      driver_id?: UuidFilter<'vehicle'> | string;
      created_at?: DateTimeFilter<'vehicle'> | Date | string;
      updated_at?: DateTimeFilter<'vehicle'> | Date | string;
      booking?: BookingListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id' | 'registration_number'
  >;

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder;
    model?: SortOrder;
    registration_number?: SortOrder;
    capacity?: SortOrder;
    driver_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vehicleCountOrderByAggregateInput;
    _avg?: vehicleAvgOrderByAggregateInput;
    _max?: vehicleMaxOrderByAggregateInput;
    _min?: vehicleMinOrderByAggregateInput;
    _sum?: vehicleSumOrderByAggregateInput;
  };

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    OR?: vehicleScalarWhereWithAggregatesInput[];
    NOT?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vehicle'> | string;
    model?: StringWithAggregatesFilter<'vehicle'> | string;
    registration_number?: StringWithAggregatesFilter<'vehicle'> | string;
    capacity?: IntWithAggregatesFilter<'vehicle'> | number;
    driver_id?: UuidWithAggregatesFilter<'vehicle'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
  };

  export type bookingCreateInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_customer_idTouser: userCreateNestedOneWithoutBooking_booking_customer_idTouserInput;
    user_booking_driver_idTouser: userCreateNestedOneWithoutBooking_booking_driver_idTouserInput;
    city_booking_end_city_idTocity: cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput;
    city_booking_start_city_idTocity: cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput;
    vehicle: vehicleCreateNestedOneWithoutBookingInput;
    price?: priceCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    price?: priceUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_customer_idTouser?: userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput;
    user_booking_driver_idTouser?: userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput;
    city_booking_end_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput;
    city_booking_start_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutBookingNestedInput;
    price?: priceUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?: priceUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingCreateManyInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type cityCreateInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_end_city_idTocity?: bookingCreateNestedManyWithoutCity_booking_end_city_idTocityInput;
    booking_booking_start_city_idTocity?: bookingCreateNestedManyWithoutCity_booking_start_city_idTocityInput;
  };

  export type cityUncheckedCreateInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_end_city_idTocity?: bookingUncheckedCreateNestedManyWithoutCity_booking_end_city_idTocityInput;
    booking_booking_start_city_idTocity?: bookingUncheckedCreateNestedManyWithoutCity_booking_start_city_idTocityInput;
  };

  export type cityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_end_city_idTocity?: bookingUpdateManyWithoutCity_booking_end_city_idTocityNestedInput;
    booking_booking_start_city_idTocity?: bookingUpdateManyWithoutCity_booking_start_city_idTocityNestedInput;
  };

  export type cityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_end_city_idTocity?: bookingUncheckedUpdateManyWithoutCity_booking_end_city_idTocityNestedInput;
    booking_booking_start_city_idTocity?: bookingUncheckedUpdateManyWithoutCity_booking_start_city_idTocityNestedInput;
  };

  export type cityCreateManyInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type cityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type cityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type priceCreateInput = {
    id?: string;
    amount: number;
    currency: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking: bookingCreateNestedOneWithoutPriceInput;
  };

  export type priceUncheckedCreateInput = {
    id?: string;
    amount: number;
    currency: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type priceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateOneRequiredWithoutPriceNestedInput;
  };

  export type priceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type priceCreateManyInput = {
    id?: string;
    amount: number;
    currency: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type priceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type priceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    booking_booking_driver_idTouser?: bookingCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    booking_booking_driver_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    booking_booking_driver_idTouser?: bookingUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    booking_booking_driver_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleCreateInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutVehicleInput;
    user: userCreateNestedOneWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    driver_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutVehicleNestedInput;
    user?: userUpdateOneRequiredWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    driver_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleCreateManyInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    driver_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    driver_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type CityRelationFilter = {
    is?: cityWhereInput;
    isNot?: cityWhereInput;
  };

  export type VehicleRelationFilter = {
    is?: vehicleWhereInput;
    isNot?: vehicleWhereInput;
  };

  export type PriceListRelationFilter = {
    every?: priceWhereInput;
    some?: priceWhereInput;
    none?: priceWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type priceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder;
    customer_id?: SortOrder;
    driver_id?: SortOrder;
    vehicle_id?: SortOrder;
    start_city_id?: SortOrder;
    end_city_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    customer_id?: SortOrder;
    driver_id?: SortOrder;
    vehicle_id?: SortOrder;
    start_city_id?: SortOrder;
    end_city_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder;
    customer_id?: SortOrder;
    driver_id?: SortOrder;
    vehicle_id?: SortOrder;
    start_city_id?: SortOrder;
    end_city_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BookingListRelationFilter = {
    every?: bookingWhereInput;
    some?: bookingWhereInput;
    none?: bookingWhereInput;
  };

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type cityCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type cityMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type cityMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BookingRelationFilter = {
    is?: bookingWhereInput;
    isNot?: bookingWhereInput;
  };

  export type priceCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type priceAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type priceMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type priceMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type priceSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type VehicleListRelationFilter = {
    every?: vehicleWhereInput;
    some?: vehicleWhereInput;
    none?: vehicleWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type vehicleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder;
    model?: SortOrder;
    registration_number?: SortOrder;
    capacity?: SortOrder;
    driver_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleAvgOrderByAggregateInput = {
    capacity?: SortOrder;
  };

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder;
    model?: SortOrder;
    registration_number?: SortOrder;
    capacity?: SortOrder;
    driver_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder;
    model?: SortOrder;
    registration_number?: SortOrder;
    capacity?: SortOrder;
    driver_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleSumOrderByAggregateInput = {
    capacity?: SortOrder;
  };

  export type userCreateNestedOneWithoutBooking_booking_customer_idTouserInput = {
    create?: XOR<
      userCreateWithoutBooking_booking_customer_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_customer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutBooking_booking_customer_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBooking_booking_driver_idTouserInput = {
    create?: XOR<
      userCreateWithoutBooking_booking_driver_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_driver_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutBooking_booking_driver_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput = {
    create?: XOR<
      cityCreateWithoutBooking_booking_end_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_end_city_idTocityInput
    >;
    connectOrCreate?: cityCreateOrConnectWithoutBooking_booking_end_city_idTocityInput;
    connect?: cityWhereUniqueInput;
  };

  export type cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput = {
    create?: XOR<
      cityCreateWithoutBooking_booking_start_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_start_city_idTocityInput
    >;
    connectOrCreate?: cityCreateOrConnectWithoutBooking_booking_start_city_idTocityInput;
    connect?: cityWhereUniqueInput;
  };

  export type vehicleCreateNestedOneWithoutBookingInput = {
    create?: XOR<vehicleCreateWithoutBookingInput, vehicleUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: vehicleCreateOrConnectWithoutBookingInput;
    connect?: vehicleWhereUniqueInput;
  };

  export type priceCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<priceCreateWithoutBookingInput, priceUncheckedCreateWithoutBookingInput>
      | priceCreateWithoutBookingInput[]
      | priceUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: priceCreateOrConnectWithoutBookingInput | priceCreateOrConnectWithoutBookingInput[];
    createMany?: priceCreateManyBookingInputEnvelope;
    connect?: priceWhereUniqueInput | priceWhereUniqueInput[];
  };

  export type priceUncheckedCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<priceCreateWithoutBookingInput, priceUncheckedCreateWithoutBookingInput>
      | priceCreateWithoutBookingInput[]
      | priceUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: priceCreateOrConnectWithoutBookingInput | priceCreateOrConnectWithoutBookingInput[];
    createMany?: priceCreateManyBookingInputEnvelope;
    connect?: priceWhereUniqueInput | priceWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutBooking_booking_customer_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_customer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutBooking_booking_customer_idTouserInput;
    upsert?: userUpsertWithoutBooking_booking_customer_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutBooking_booking_customer_idTouserInput,
        userUpdateWithoutBooking_booking_customer_idTouserInput
      >,
      userUncheckedUpdateWithoutBooking_booking_customer_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutBooking_booking_driver_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_driver_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutBooking_booking_driver_idTouserInput;
    upsert?: userUpsertWithoutBooking_booking_driver_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutBooking_booking_driver_idTouserInput,
        userUpdateWithoutBooking_booking_driver_idTouserInput
      >,
      userUncheckedUpdateWithoutBooking_booking_driver_idTouserInput
    >;
  };

  export type cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput = {
    create?: XOR<
      cityCreateWithoutBooking_booking_end_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_end_city_idTocityInput
    >;
    connectOrCreate?: cityCreateOrConnectWithoutBooking_booking_end_city_idTocityInput;
    upsert?: cityUpsertWithoutBooking_booking_end_city_idTocityInput;
    connect?: cityWhereUniqueInput;
    update?: XOR<
      XOR<
        cityUpdateToOneWithWhereWithoutBooking_booking_end_city_idTocityInput,
        cityUpdateWithoutBooking_booking_end_city_idTocityInput
      >,
      cityUncheckedUpdateWithoutBooking_booking_end_city_idTocityInput
    >;
  };

  export type cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput = {
    create?: XOR<
      cityCreateWithoutBooking_booking_start_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_start_city_idTocityInput
    >;
    connectOrCreate?: cityCreateOrConnectWithoutBooking_booking_start_city_idTocityInput;
    upsert?: cityUpsertWithoutBooking_booking_start_city_idTocityInput;
    connect?: cityWhereUniqueInput;
    update?: XOR<
      XOR<
        cityUpdateToOneWithWhereWithoutBooking_booking_start_city_idTocityInput,
        cityUpdateWithoutBooking_booking_start_city_idTocityInput
      >,
      cityUncheckedUpdateWithoutBooking_booking_start_city_idTocityInput
    >;
  };

  export type vehicleUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<vehicleCreateWithoutBookingInput, vehicleUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: vehicleCreateOrConnectWithoutBookingInput;
    upsert?: vehicleUpsertWithoutBookingInput;
    connect?: vehicleWhereUniqueInput;
    update?: XOR<
      XOR<vehicleUpdateToOneWithWhereWithoutBookingInput, vehicleUpdateWithoutBookingInput>,
      vehicleUncheckedUpdateWithoutBookingInput
    >;
  };

  export type priceUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<priceCreateWithoutBookingInput, priceUncheckedCreateWithoutBookingInput>
      | priceCreateWithoutBookingInput[]
      | priceUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: priceCreateOrConnectWithoutBookingInput | priceCreateOrConnectWithoutBookingInput[];
    upsert?: priceUpsertWithWhereUniqueWithoutBookingInput | priceUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: priceCreateManyBookingInputEnvelope;
    set?: priceWhereUniqueInput | priceWhereUniqueInput[];
    disconnect?: priceWhereUniqueInput | priceWhereUniqueInput[];
    delete?: priceWhereUniqueInput | priceWhereUniqueInput[];
    connect?: priceWhereUniqueInput | priceWhereUniqueInput[];
    update?: priceUpdateWithWhereUniqueWithoutBookingInput | priceUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: priceUpdateManyWithWhereWithoutBookingInput | priceUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: priceScalarWhereInput | priceScalarWhereInput[];
  };

  export type priceUncheckedUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<priceCreateWithoutBookingInput, priceUncheckedCreateWithoutBookingInput>
      | priceCreateWithoutBookingInput[]
      | priceUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: priceCreateOrConnectWithoutBookingInput | priceCreateOrConnectWithoutBookingInput[];
    upsert?: priceUpsertWithWhereUniqueWithoutBookingInput | priceUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: priceCreateManyBookingInputEnvelope;
    set?: priceWhereUniqueInput | priceWhereUniqueInput[];
    disconnect?: priceWhereUniqueInput | priceWhereUniqueInput[];
    delete?: priceWhereUniqueInput | priceWhereUniqueInput[];
    connect?: priceWhereUniqueInput | priceWhereUniqueInput[];
    update?: priceUpdateWithWhereUniqueWithoutBookingInput | priceUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: priceUpdateManyWithWhereWithoutBookingInput | priceUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: priceScalarWhereInput | priceScalarWhereInput[];
  };

  export type bookingCreateNestedManyWithoutCity_booking_end_city_idTocityInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_end_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_end_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_end_city_idTocityInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingCreateNestedManyWithoutCity_booking_start_city_idTocityInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_start_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_start_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_start_city_idTocityInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutCity_booking_end_city_idTocityInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_end_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_end_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_end_city_idTocityInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutCity_booking_start_city_idTocityInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_start_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_start_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_start_city_idTocityInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutCity_booking_end_city_idTocityNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_end_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_end_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutCity_booking_end_city_idTocityInput
      | bookingUpsertWithWhereUniqueWithoutCity_booking_end_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_end_city_idTocityInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutCity_booking_end_city_idTocityInput
      | bookingUpdateWithWhereUniqueWithoutCity_booking_end_city_idTocityInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutCity_booking_end_city_idTocityInput
      | bookingUpdateManyWithWhereWithoutCity_booking_end_city_idTocityInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type bookingUpdateManyWithoutCity_booking_start_city_idTocityNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_start_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_start_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutCity_booking_start_city_idTocityInput
      | bookingUpsertWithWhereUniqueWithoutCity_booking_start_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_start_city_idTocityInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutCity_booking_start_city_idTocityInput
      | bookingUpdateWithWhereUniqueWithoutCity_booking_start_city_idTocityInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutCity_booking_start_city_idTocityInput
      | bookingUpdateManyWithWhereWithoutCity_booking_start_city_idTocityInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutCity_booking_end_city_idTocityNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_end_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_end_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutCity_booking_end_city_idTocityInput
      | bookingUpsertWithWhereUniqueWithoutCity_booking_end_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_end_city_idTocityInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutCity_booking_end_city_idTocityInput
      | bookingUpdateWithWhereUniqueWithoutCity_booking_end_city_idTocityInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutCity_booking_end_city_idTocityInput
      | bookingUpdateManyWithWhereWithoutCity_booking_end_city_idTocityInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutCity_booking_start_city_idTocityNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutCity_booking_start_city_idTocityInput,
          bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput
        >
      | bookingCreateWithoutCity_booking_start_city_idTocityInput[]
      | bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput
      | bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutCity_booking_start_city_idTocityInput
      | bookingUpsertWithWhereUniqueWithoutCity_booking_start_city_idTocityInput[];
    createMany?: bookingCreateManyCity_booking_start_city_idTocityInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutCity_booking_start_city_idTocityInput
      | bookingUpdateWithWhereUniqueWithoutCity_booking_start_city_idTocityInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutCity_booking_start_city_idTocityInput
      | bookingUpdateManyWithWhereWithoutCity_booking_start_city_idTocityInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type bookingCreateNestedOneWithoutPriceInput = {
    create?: XOR<bookingCreateWithoutPriceInput, bookingUncheckedCreateWithoutPriceInput>;
    connectOrCreate?: bookingCreateOrConnectWithoutPriceInput;
    connect?: bookingWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type bookingUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<bookingCreateWithoutPriceInput, bookingUncheckedCreateWithoutPriceInput>;
    connectOrCreate?: bookingCreateOrConnectWithoutPriceInput;
    upsert?: bookingUpsertWithoutPriceInput;
    connect?: bookingWhereUniqueInput;
    update?: XOR<
      XOR<bookingUpdateToOneWithWhereWithoutPriceInput, bookingUpdateWithoutPriceInput>,
      bookingUncheckedUpdateWithoutPriceInput
    >;
  };

  export type bookingCreateNestedManyWithoutUser_booking_customer_idTouserInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_customer_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput
        >
      | bookingCreateWithoutUser_booking_customer_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_customer_idTouserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingCreateNestedManyWithoutUser_booking_driver_idTouserInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_driver_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput
        >
      | bookingCreateWithoutUser_booking_driver_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_driver_idTouserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type vehicleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUser_booking_customer_idTouserInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_customer_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput
        >
      | bookingCreateWithoutUser_booking_customer_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_customer_idTouserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUser_booking_driver_idTouserInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_driver_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput
        >
      | bookingCreateWithoutUser_booking_driver_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_driver_idTouserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type vehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutUser_booking_customer_idTouserNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_customer_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput
        >
      | bookingCreateWithoutUser_booking_customer_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutUser_booking_customer_idTouserInput
      | bookingUpsertWithWhereUniqueWithoutUser_booking_customer_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_customer_idTouserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutUser_booking_customer_idTouserInput
      | bookingUpdateWithWhereUniqueWithoutUser_booking_customer_idTouserInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutUser_booking_customer_idTouserInput
      | bookingUpdateManyWithWhereWithoutUser_booking_customer_idTouserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type bookingUpdateManyWithoutUser_booking_driver_idTouserNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_driver_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput
        >
      | bookingCreateWithoutUser_booking_driver_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutUser_booking_driver_idTouserInput
      | bookingUpsertWithWhereUniqueWithoutUser_booking_driver_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_driver_idTouserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutUser_booking_driver_idTouserInput
      | bookingUpdateWithWhereUniqueWithoutUser_booking_driver_idTouserInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutUser_booking_driver_idTouserInput
      | bookingUpdateManyWithWhereWithoutUser_booking_driver_idTouserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type vehicleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    upsert?: vehicleUpsertWithWhereUniqueWithoutUserInput | vehicleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    update?: vehicleUpdateWithWhereUniqueWithoutUserInput | vehicleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: vehicleUpdateManyWithWhereWithoutUserInput | vehicleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_customer_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput
        >
      | bookingCreateWithoutUser_booking_customer_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutUser_booking_customer_idTouserInput
      | bookingUpsertWithWhereUniqueWithoutUser_booking_customer_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_customer_idTouserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutUser_booking_customer_idTouserInput
      | bookingUpdateWithWhereUniqueWithoutUser_booking_customer_idTouserInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutUser_booking_customer_idTouserInput
      | bookingUpdateManyWithWhereWithoutUser_booking_customer_idTouserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserNestedInput = {
    create?:
      | XOR<
          bookingCreateWithoutUser_booking_driver_idTouserInput,
          bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput
        >
      | bookingCreateWithoutUser_booking_driver_idTouserInput[]
      | bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput[];
    connectOrCreate?:
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput
      | bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput[];
    upsert?:
      | bookingUpsertWithWhereUniqueWithoutUser_booking_driver_idTouserInput
      | bookingUpsertWithWhereUniqueWithoutUser_booking_driver_idTouserInput[];
    createMany?: bookingCreateManyUser_booking_driver_idTouserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?:
      | bookingUpdateWithWhereUniqueWithoutUser_booking_driver_idTouserInput
      | bookingUpdateWithWhereUniqueWithoutUser_booking_driver_idTouserInput[];
    updateMany?:
      | bookingUpdateManyWithWhereWithoutUser_booking_driver_idTouserInput
      | bookingUpdateManyWithWhereWithoutUser_booking_driver_idTouserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type vehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    upsert?: vehicleUpsertWithWhereUniqueWithoutUserInput | vehicleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    update?: vehicleUpdateWithWhereUniqueWithoutUserInput | vehicleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: vehicleUpdateManyWithWhereWithoutUserInput | vehicleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
  };

  export type bookingCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<bookingCreateWithoutVehicleInput, bookingUncheckedCreateWithoutVehicleInput>
      | bookingCreateWithoutVehicleInput[]
      | bookingUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutVehicleInput | bookingCreateOrConnectWithoutVehicleInput[];
    createMany?: bookingCreateManyVehicleInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutVehicleInput = {
    create?: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
    connectOrCreate?: userCreateOrConnectWithoutVehicleInput;
    connect?: userWhereUniqueInput;
  };

  export type bookingUncheckedCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<bookingCreateWithoutVehicleInput, bookingUncheckedCreateWithoutVehicleInput>
      | bookingCreateWithoutVehicleInput[]
      | bookingUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutVehicleInput | bookingCreateOrConnectWithoutVehicleInput[];
    createMany?: bookingCreateManyVehicleInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<bookingCreateWithoutVehicleInput, bookingUncheckedCreateWithoutVehicleInput>
      | bookingCreateWithoutVehicleInput[]
      | bookingUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutVehicleInput | bookingCreateOrConnectWithoutVehicleInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutVehicleInput | bookingUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: bookingCreateManyVehicleInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutVehicleInput | bookingUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutVehicleInput | bookingUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
    connectOrCreate?: userCreateOrConnectWithoutVehicleInput;
    upsert?: userUpsertWithoutVehicleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutVehicleInput, userUpdateWithoutVehicleInput>,
      userUncheckedUpdateWithoutVehicleInput
    >;
  };

  export type bookingUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<bookingCreateWithoutVehicleInput, bookingUncheckedCreateWithoutVehicleInput>
      | bookingCreateWithoutVehicleInput[]
      | bookingUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutVehicleInput | bookingCreateOrConnectWithoutVehicleInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutVehicleInput | bookingUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: bookingCreateManyVehicleInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutVehicleInput | bookingUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutVehicleInput | bookingUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutBooking_booking_customer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_driver_idTouser?: bookingCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBooking_booking_customer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_driver_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBooking_booking_customer_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutBooking_booking_customer_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_customer_idTouserInput
    >;
  };

  export type userCreateWithoutBooking_booking_driver_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBooking_booking_driver_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBooking_booking_driver_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutBooking_booking_driver_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_driver_idTouserInput
    >;
  };

  export type cityCreateWithoutBooking_booking_end_city_idTocityInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_start_city_idTocity?: bookingCreateNestedManyWithoutCity_booking_start_city_idTocityInput;
  };

  export type cityUncheckedCreateWithoutBooking_booking_end_city_idTocityInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_start_city_idTocity?: bookingUncheckedCreateNestedManyWithoutCity_booking_start_city_idTocityInput;
  };

  export type cityCreateOrConnectWithoutBooking_booking_end_city_idTocityInput = {
    where: cityWhereUniqueInput;
    create: XOR<
      cityCreateWithoutBooking_booking_end_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_end_city_idTocityInput
    >;
  };

  export type cityCreateWithoutBooking_booking_start_city_idTocityInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_end_city_idTocity?: bookingCreateNestedManyWithoutCity_booking_end_city_idTocityInput;
  };

  export type cityUncheckedCreateWithoutBooking_booking_start_city_idTocityInput = {
    id?: string;
    name: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_end_city_idTocity?: bookingUncheckedCreateNestedManyWithoutCity_booking_end_city_idTocityInput;
  };

  export type cityCreateOrConnectWithoutBooking_booking_start_city_idTocityInput = {
    where: cityWhereUniqueInput;
    create: XOR<
      cityCreateWithoutBooking_booking_start_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_start_city_idTocityInput
    >;
  };

  export type vehicleCreateWithoutBookingInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateWithoutBookingInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    driver_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleCreateOrConnectWithoutBookingInput = {
    where: vehicleWhereUniqueInput;
    create: XOR<vehicleCreateWithoutBookingInput, vehicleUncheckedCreateWithoutBookingInput>;
  };

  export type priceCreateWithoutBookingInput = {
    id?: string;
    amount: number;
    currency: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type priceUncheckedCreateWithoutBookingInput = {
    id?: string;
    amount: number;
    currency: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type priceCreateOrConnectWithoutBookingInput = {
    where: priceWhereUniqueInput;
    create: XOR<priceCreateWithoutBookingInput, priceUncheckedCreateWithoutBookingInput>;
  };

  export type priceCreateManyBookingInputEnvelope = {
    data: priceCreateManyBookingInput | priceCreateManyBookingInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutBooking_booking_customer_idTouserInput = {
    update: XOR<
      userUpdateWithoutBooking_booking_customer_idTouserInput,
      userUncheckedUpdateWithoutBooking_booking_customer_idTouserInput
    >;
    create: XOR<
      userCreateWithoutBooking_booking_customer_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_customer_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBooking_booking_customer_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutBooking_booking_customer_idTouserInput,
      userUncheckedUpdateWithoutBooking_booking_customer_idTouserInput
    >;
  };

  export type userUpdateWithoutBooking_booking_customer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_driver_idTouser?: bookingUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBooking_booking_customer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_driver_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutBooking_booking_driver_idTouserInput = {
    update: XOR<
      userUpdateWithoutBooking_booking_driver_idTouserInput,
      userUncheckedUpdateWithoutBooking_booking_driver_idTouserInput
    >;
    create: XOR<
      userCreateWithoutBooking_booking_driver_idTouserInput,
      userUncheckedCreateWithoutBooking_booking_driver_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBooking_booking_driver_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutBooking_booking_driver_idTouserInput,
      userUncheckedUpdateWithoutBooking_booking_driver_idTouserInput
    >;
  };

  export type userUpdateWithoutBooking_booking_driver_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBooking_booking_driver_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type cityUpsertWithoutBooking_booking_end_city_idTocityInput = {
    update: XOR<
      cityUpdateWithoutBooking_booking_end_city_idTocityInput,
      cityUncheckedUpdateWithoutBooking_booking_end_city_idTocityInput
    >;
    create: XOR<
      cityCreateWithoutBooking_booking_end_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_end_city_idTocityInput
    >;
    where?: cityWhereInput;
  };

  export type cityUpdateToOneWithWhereWithoutBooking_booking_end_city_idTocityInput = {
    where?: cityWhereInput;
    data: XOR<
      cityUpdateWithoutBooking_booking_end_city_idTocityInput,
      cityUncheckedUpdateWithoutBooking_booking_end_city_idTocityInput
    >;
  };

  export type cityUpdateWithoutBooking_booking_end_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_start_city_idTocity?: bookingUpdateManyWithoutCity_booking_start_city_idTocityNestedInput;
  };

  export type cityUncheckedUpdateWithoutBooking_booking_end_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_start_city_idTocity?: bookingUncheckedUpdateManyWithoutCity_booking_start_city_idTocityNestedInput;
  };

  export type cityUpsertWithoutBooking_booking_start_city_idTocityInput = {
    update: XOR<
      cityUpdateWithoutBooking_booking_start_city_idTocityInput,
      cityUncheckedUpdateWithoutBooking_booking_start_city_idTocityInput
    >;
    create: XOR<
      cityCreateWithoutBooking_booking_start_city_idTocityInput,
      cityUncheckedCreateWithoutBooking_booking_start_city_idTocityInput
    >;
    where?: cityWhereInput;
  };

  export type cityUpdateToOneWithWhereWithoutBooking_booking_start_city_idTocityInput = {
    where?: cityWhereInput;
    data: XOR<
      cityUpdateWithoutBooking_booking_start_city_idTocityInput,
      cityUncheckedUpdateWithoutBooking_booking_start_city_idTocityInput
    >;
  };

  export type cityUpdateWithoutBooking_booking_start_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_end_city_idTocity?: bookingUpdateManyWithoutCity_booking_end_city_idTocityNestedInput;
  };

  export type cityUncheckedUpdateWithoutBooking_booking_start_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_end_city_idTocity?: bookingUncheckedUpdateManyWithoutCity_booking_end_city_idTocityNestedInput;
  };

  export type vehicleUpsertWithoutBookingInput = {
    update: XOR<vehicleUpdateWithoutBookingInput, vehicleUncheckedUpdateWithoutBookingInput>;
    create: XOR<vehicleCreateWithoutBookingInput, vehicleUncheckedCreateWithoutBookingInput>;
    where?: vehicleWhereInput;
  };

  export type vehicleUpdateToOneWithWhereWithoutBookingInput = {
    where?: vehicleWhereInput;
    data: XOR<vehicleUpdateWithoutBookingInput, vehicleUncheckedUpdateWithoutBookingInput>;
  };

  export type vehicleUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    driver_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type priceUpsertWithWhereUniqueWithoutBookingInput = {
    where: priceWhereUniqueInput;
    update: XOR<priceUpdateWithoutBookingInput, priceUncheckedUpdateWithoutBookingInput>;
    create: XOR<priceCreateWithoutBookingInput, priceUncheckedCreateWithoutBookingInput>;
  };

  export type priceUpdateWithWhereUniqueWithoutBookingInput = {
    where: priceWhereUniqueInput;
    data: XOR<priceUpdateWithoutBookingInput, priceUncheckedUpdateWithoutBookingInput>;
  };

  export type priceUpdateManyWithWhereWithoutBookingInput = {
    where: priceScalarWhereInput;
    data: XOR<priceUpdateManyMutationInput, priceUncheckedUpdateManyWithoutBookingInput>;
  };

  export type priceScalarWhereInput = {
    AND?: priceScalarWhereInput | priceScalarWhereInput[];
    OR?: priceScalarWhereInput[];
    NOT?: priceScalarWhereInput | priceScalarWhereInput[];
    id?: UuidFilter<'price'> | string;
    amount?: IntFilter<'price'> | number;
    currency?: StringFilter<'price'> | string;
    booking_id?: UuidFilter<'price'> | string;
    created_at?: DateTimeFilter<'price'> | Date | string;
    updated_at?: DateTimeFilter<'price'> | Date | string;
  };

  export type bookingCreateWithoutCity_booking_end_city_idTocityInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_customer_idTouser: userCreateNestedOneWithoutBooking_booking_customer_idTouserInput;
    user_booking_driver_idTouser: userCreateNestedOneWithoutBooking_booking_driver_idTouserInput;
    city_booking_start_city_idTocity: cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput;
    vehicle: vehicleCreateNestedOneWithoutBookingInput;
    price?: priceCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    price?: priceUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutCity_booking_end_city_idTocityInput = {
    where: bookingWhereUniqueInput;
    create: XOR<
      bookingCreateWithoutCity_booking_end_city_idTocityInput,
      bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput
    >;
  };

  export type bookingCreateManyCity_booking_end_city_idTocityInputEnvelope = {
    data: bookingCreateManyCity_booking_end_city_idTocityInput | bookingCreateManyCity_booking_end_city_idTocityInput[];
    skipDuplicates?: boolean;
  };

  export type bookingCreateWithoutCity_booking_start_city_idTocityInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_customer_idTouser: userCreateNestedOneWithoutBooking_booking_customer_idTouserInput;
    user_booking_driver_idTouser: userCreateNestedOneWithoutBooking_booking_driver_idTouserInput;
    city_booking_end_city_idTocity: cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput;
    vehicle: vehicleCreateNestedOneWithoutBookingInput;
    price?: priceCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    price?: priceUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutCity_booking_start_city_idTocityInput = {
    where: bookingWhereUniqueInput;
    create: XOR<
      bookingCreateWithoutCity_booking_start_city_idTocityInput,
      bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput
    >;
  };

  export type bookingCreateManyCity_booking_start_city_idTocityInputEnvelope = {
    data:
      | bookingCreateManyCity_booking_start_city_idTocityInput
      | bookingCreateManyCity_booking_start_city_idTocityInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutCity_booking_end_city_idTocityInput = {
    where: bookingWhereUniqueInput;
    update: XOR<
      bookingUpdateWithoutCity_booking_end_city_idTocityInput,
      bookingUncheckedUpdateWithoutCity_booking_end_city_idTocityInput
    >;
    create: XOR<
      bookingCreateWithoutCity_booking_end_city_idTocityInput,
      bookingUncheckedCreateWithoutCity_booking_end_city_idTocityInput
    >;
  };

  export type bookingUpdateWithWhereUniqueWithoutCity_booking_end_city_idTocityInput = {
    where: bookingWhereUniqueInput;
    data: XOR<
      bookingUpdateWithoutCity_booking_end_city_idTocityInput,
      bookingUncheckedUpdateWithoutCity_booking_end_city_idTocityInput
    >;
  };

  export type bookingUpdateManyWithWhereWithoutCity_booking_end_city_idTocityInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutCity_booking_end_city_idTocityInput>;
  };

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[];
    OR?: bookingScalarWhereInput[];
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[];
    id?: UuidFilter<'booking'> | string;
    customer_id?: UuidFilter<'booking'> | string;
    driver_id?: UuidFilter<'booking'> | string;
    vehicle_id?: UuidFilter<'booking'> | string;
    start_city_id?: UuidFilter<'booking'> | string;
    end_city_id?: UuidFilter<'booking'> | string;
    start_time?: DateTimeFilter<'booking'> | Date | string;
    end_time?: DateTimeNullableFilter<'booking'> | Date | string | null;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
  };

  export type bookingUpsertWithWhereUniqueWithoutCity_booking_start_city_idTocityInput = {
    where: bookingWhereUniqueInput;
    update: XOR<
      bookingUpdateWithoutCity_booking_start_city_idTocityInput,
      bookingUncheckedUpdateWithoutCity_booking_start_city_idTocityInput
    >;
    create: XOR<
      bookingCreateWithoutCity_booking_start_city_idTocityInput,
      bookingUncheckedCreateWithoutCity_booking_start_city_idTocityInput
    >;
  };

  export type bookingUpdateWithWhereUniqueWithoutCity_booking_start_city_idTocityInput = {
    where: bookingWhereUniqueInput;
    data: XOR<
      bookingUpdateWithoutCity_booking_start_city_idTocityInput,
      bookingUncheckedUpdateWithoutCity_booking_start_city_idTocityInput
    >;
  };

  export type bookingUpdateManyWithWhereWithoutCity_booking_start_city_idTocityInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutCity_booking_start_city_idTocityInput>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    booking_booking_driver_idTouser?: bookingCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    booking_booking_driver_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    booking_booking_driver_idTouser?: bookingUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    booking_booking_driver_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutPriceInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_customer_idTouser: userCreateNestedOneWithoutBooking_booking_customer_idTouserInput;
    user_booking_driver_idTouser: userCreateNestedOneWithoutBooking_booking_driver_idTouserInput;
    city_booking_end_city_idTocity: cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput;
    city_booking_start_city_idTocity: cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput;
    vehicle: vehicleCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutPriceInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutPriceInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutPriceInput, bookingUncheckedCreateWithoutPriceInput>;
  };

  export type bookingUpsertWithoutPriceInput = {
    update: XOR<bookingUpdateWithoutPriceInput, bookingUncheckedUpdateWithoutPriceInput>;
    create: XOR<bookingCreateWithoutPriceInput, bookingUncheckedCreateWithoutPriceInput>;
    where?: bookingWhereInput;
  };

  export type bookingUpdateToOneWithWhereWithoutPriceInput = {
    where?: bookingWhereInput;
    data: XOR<bookingUpdateWithoutPriceInput, bookingUncheckedUpdateWithoutPriceInput>;
  };

  export type bookingUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_customer_idTouser?: userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput;
    user_booking_driver_idTouser?: userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput;
    city_booking_end_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput;
    city_booking_start_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateWithoutUser_booking_customer_idTouserInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_driver_idTouser: userCreateNestedOneWithoutBooking_booking_driver_idTouserInput;
    city_booking_end_city_idTocity: cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput;
    city_booking_start_city_idTocity: cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput;
    vehicle: vehicleCreateNestedOneWithoutBookingInput;
    price?: priceCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput = {
    id?: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    price?: priceUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutUser_booking_customer_idTouserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<
      bookingCreateWithoutUser_booking_customer_idTouserInput,
      bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput
    >;
  };

  export type bookingCreateManyUser_booking_customer_idTouserInputEnvelope = {
    data: bookingCreateManyUser_booking_customer_idTouserInput | bookingCreateManyUser_booking_customer_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingCreateWithoutUser_booking_driver_idTouserInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_customer_idTouser: userCreateNestedOneWithoutBooking_booking_customer_idTouserInput;
    city_booking_end_city_idTocity: cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput;
    city_booking_start_city_idTocity: cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput;
    vehicle: vehicleCreateNestedOneWithoutBookingInput;
    price?: priceCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput = {
    id?: string;
    customer_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    price?: priceUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutUser_booking_driver_idTouserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<
      bookingCreateWithoutUser_booking_driver_idTouserInput,
      bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput
    >;
  };

  export type bookingCreateManyUser_booking_driver_idTouserInputEnvelope = {
    data: bookingCreateManyUser_booking_driver_idTouserInput | bookingCreateManyUser_booking_driver_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type vehicleCreateWithoutUserInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateWithoutUserInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleCreateOrConnectWithoutUserInput = {
    where: vehicleWhereUniqueInput;
    create: XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>;
  };

  export type vehicleCreateManyUserInputEnvelope = {
    data: vehicleCreateManyUserInput | vehicleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutUser_booking_customer_idTouserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<
      bookingUpdateWithoutUser_booking_customer_idTouserInput,
      bookingUncheckedUpdateWithoutUser_booking_customer_idTouserInput
    >;
    create: XOR<
      bookingCreateWithoutUser_booking_customer_idTouserInput,
      bookingUncheckedCreateWithoutUser_booking_customer_idTouserInput
    >;
  };

  export type bookingUpdateWithWhereUniqueWithoutUser_booking_customer_idTouserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<
      bookingUpdateWithoutUser_booking_customer_idTouserInput,
      bookingUncheckedUpdateWithoutUser_booking_customer_idTouserInput
    >;
  };

  export type bookingUpdateManyWithWhereWithoutUser_booking_customer_idTouserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserInput>;
  };

  export type bookingUpsertWithWhereUniqueWithoutUser_booking_driver_idTouserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<
      bookingUpdateWithoutUser_booking_driver_idTouserInput,
      bookingUncheckedUpdateWithoutUser_booking_driver_idTouserInput
    >;
    create: XOR<
      bookingCreateWithoutUser_booking_driver_idTouserInput,
      bookingUncheckedCreateWithoutUser_booking_driver_idTouserInput
    >;
  };

  export type bookingUpdateWithWhereUniqueWithoutUser_booking_driver_idTouserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<
      bookingUpdateWithoutUser_booking_driver_idTouserInput,
      bookingUncheckedUpdateWithoutUser_booking_driver_idTouserInput
    >;
  };

  export type bookingUpdateManyWithWhereWithoutUser_booking_driver_idTouserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type vehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: vehicleWhereUniqueInput;
    update: XOR<vehicleUpdateWithoutUserInput, vehicleUncheckedUpdateWithoutUserInput>;
    create: XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>;
  };

  export type vehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: vehicleWhereUniqueInput;
    data: XOR<vehicleUpdateWithoutUserInput, vehicleUncheckedUpdateWithoutUserInput>;
  };

  export type vehicleUpdateManyWithWhereWithoutUserInput = {
    where: vehicleScalarWhereInput;
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutUserInput>;
  };

  export type vehicleScalarWhereInput = {
    AND?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
    OR?: vehicleScalarWhereInput[];
    NOT?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    model?: StringFilter<'vehicle'> | string;
    registration_number?: StringFilter<'vehicle'> | string;
    capacity?: IntFilter<'vehicle'> | number;
    driver_id?: UuidFilter<'vehicle'> | string;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
  };

  export type bookingCreateWithoutVehicleInput = {
    id?: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_booking_customer_idTouser: userCreateNestedOneWithoutBooking_booking_customer_idTouserInput;
    user_booking_driver_idTouser: userCreateNestedOneWithoutBooking_booking_driver_idTouserInput;
    city_booking_end_city_idTocity: cityCreateNestedOneWithoutBooking_booking_end_city_idTocityInput;
    city_booking_start_city_idTocity: cityCreateNestedOneWithoutBooking_booking_start_city_idTocityInput;
    price?: priceCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutVehicleInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    price?: priceUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutVehicleInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutVehicleInput, bookingUncheckedCreateWithoutVehicleInput>;
  };

  export type bookingCreateManyVehicleInputEnvelope = {
    data: bookingCreateManyVehicleInput | bookingCreateManyVehicleInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutVehicleInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    booking_booking_driver_idTouser?: bookingCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutVehicleInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_customer_idTouserInput;
    booking_booking_driver_idTouser?: bookingUncheckedCreateNestedManyWithoutUser_booking_driver_idTouserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutVehicleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
  };

  export type bookingUpsertWithWhereUniqueWithoutVehicleInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutVehicleInput, bookingUncheckedUpdateWithoutVehicleInput>;
    create: XOR<bookingCreateWithoutVehicleInput, bookingUncheckedCreateWithoutVehicleInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutVehicleInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutVehicleInput, bookingUncheckedUpdateWithoutVehicleInput>;
  };

  export type bookingUpdateManyWithWhereWithoutVehicleInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutVehicleInput>;
  };

  export type userUpsertWithoutVehicleInput = {
    update: XOR<userUpdateWithoutVehicleInput, userUncheckedUpdateWithoutVehicleInput>;
    create: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutVehicleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutVehicleInput, userUncheckedUpdateWithoutVehicleInput>;
  };

  export type userUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    booking_booking_driver_idTouser?: bookingUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_booking_customer_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserNestedInput;
    booking_booking_driver_idTouser?: bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type priceCreateManyBookingInput = {
    id?: string;
    amount: number;
    currency: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type priceUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type priceUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type priceUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyCity_booking_end_city_idTocityInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateManyCity_booking_start_city_idTocityInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    vehicle_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutCity_booking_end_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_customer_idTouser?: userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput;
    user_booking_driver_idTouser?: userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput;
    city_booking_start_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutBookingNestedInput;
    price?: priceUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutCity_booking_end_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?: priceUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutCity_booking_end_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUpdateWithoutCity_booking_start_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_customer_idTouser?: userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput;
    user_booking_driver_idTouser?: userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput;
    city_booking_end_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutBookingNestedInput;
    price?: priceUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutCity_booking_start_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?: priceUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutCity_booking_start_city_idTocityInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyUser_booking_customer_idTouserInput = {
    id?: string;
    driver_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateManyUser_booking_driver_idTouserInput = {
    id?: string;
    customer_id: string;
    vehicle_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type vehicleCreateManyUserInput = {
    id?: string;
    model: string;
    registration_number: string;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutUser_booking_customer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_driver_idTouser?: userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput;
    city_booking_end_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput;
    city_booking_start_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutBookingNestedInput;
    price?: priceUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUser_booking_customer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?: priceUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutUser_booking_customer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUpdateWithoutUser_booking_driver_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_customer_idTouser?: userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput;
    city_booking_end_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput;
    city_booking_start_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutBookingNestedInput;
    price?: priceUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUser_booking_driver_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?: priceUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutUser_booking_driver_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type vehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    registration_number?: StringFieldUpdateOperationsInput | string;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyVehicleInput = {
    id?: string;
    customer_id: string;
    driver_id: string;
    start_city_id: string;
    end_city_id: string;
    start_time: Date | string;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_booking_customer_idTouser?: userUpdateOneRequiredWithoutBooking_booking_customer_idTouserNestedInput;
    user_booking_driver_idTouser?: userUpdateOneRequiredWithoutBooking_booking_driver_idTouserNestedInput;
    city_booking_end_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_end_city_idTocityNestedInput;
    city_booking_start_city_idTocity?: cityUpdateOneRequiredWithoutBooking_booking_start_city_idTocityNestedInput;
    price?: priceUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?: priceUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    driver_id?: StringFieldUpdateOperationsInput | string;
    start_city_id?: StringFieldUpdateOperationsInput | string;
    end_city_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BookingCountOutputTypeDefaultArgs instead
   */
  export type BookingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BookingCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CityCountOutputTypeDefaultArgs instead
   */
  export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CityCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
   */
  export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookingDefaultArgs instead
   */
  export type bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use cityDefaultArgs instead
   */
  export type cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cityDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use priceDefaultArgs instead
   */
  export type priceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = priceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vehicleDefaultArgs instead
   */
  export type vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vehicleDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
