
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Times
 * 
 */
export type Times = $Result.DefaultSelection<Prisma.$TimesPayload>
/**
 * Model Jogador
 * 
 */
export type Jogador = $Result.DefaultSelection<Prisma.$JogadorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Times
 * const times = await prisma.times.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Times
   * const times = await prisma.times.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.times`: Exposes CRUD operations for the **Times** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Times
    * const times = await prisma.times.findMany()
    * ```
    */
  get times(): Prisma.TimesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jogador`: Exposes CRUD operations for the **Jogador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogadors
    * const jogadors = await prisma.jogador.findMany()
    * ```
    */
  get jogador(): Prisma.JogadorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Times: 'Times',
    Jogador: 'Jogador'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "times" | "jogador"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Times: {
        payload: Prisma.$TimesPayload<ExtArgs>
        fields: Prisma.TimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>
          }
          findFirst: {
            args: Prisma.TimesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>
          }
          findMany: {
            args: Prisma.TimesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>[]
          }
          create: {
            args: Prisma.TimesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>
          }
          createMany: {
            args: Prisma.TimesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TimesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>
          }
          update: {
            args: Prisma.TimesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>
          }
          deleteMany: {
            args: Prisma.TimesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesPayload>
          }
          aggregate: {
            args: Prisma.TimesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimes>
          }
          groupBy: {
            args: Prisma.TimesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimesCountArgs<ExtArgs>
            result: $Utils.Optional<TimesCountAggregateOutputType> | number
          }
        }
      }
      Jogador: {
        payload: Prisma.$JogadorPayload<ExtArgs>
        fields: Prisma.JogadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>
          }
          findFirst: {
            args: Prisma.JogadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>
          }
          findMany: {
            args: Prisma.JogadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>[]
          }
          create: {
            args: Prisma.JogadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>
          }
          createMany: {
            args: Prisma.JogadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JogadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>
          }
          update: {
            args: Prisma.JogadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>
          }
          deleteMany: {
            args: Prisma.JogadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JogadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPayload>
          }
          aggregate: {
            args: Prisma.JogadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogador>
          }
          groupBy: {
            args: Prisma.JogadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogadorCountArgs<ExtArgs>
            result: $Utils.Optional<JogadorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    times?: TimesOmit
    jogador?: JogadorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TimesCountOutputType
   */

  export type TimesCountOutputType = {
    jogador: number
  }

  export type TimesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogador?: boolean | TimesCountOutputTypeCountJogadorArgs
  }

  // Custom InputTypes
  /**
   * TimesCountOutputType without action
   */
  export type TimesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesCountOutputType
     */
    select?: TimesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimesCountOutputType without action
   */
  export type TimesCountOutputTypeCountJogadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Times
   */

  export type AggregateTimes = {
    _count: TimesCountAggregateOutputType | null
    _avg: TimesAvgAggregateOutputType | null
    _sum: TimesSumAggregateOutputType | null
    _min: TimesMinAggregateOutputType | null
    _max: TimesMaxAggregateOutputType | null
  }

  export type TimesAvgAggregateOutputType = {
    id: number | null
  }

  export type TimesSumAggregateOutputType = {
    id: number | null
  }

  export type TimesMinAggregateOutputType = {
    id: number | null
    clube: string | null
    estado: string | null
  }

  export type TimesMaxAggregateOutputType = {
    id: number | null
    clube: string | null
    estado: string | null
  }

  export type TimesCountAggregateOutputType = {
    id: number
    clube: number
    estado: number
    _all: number
  }


  export type TimesAvgAggregateInputType = {
    id?: true
  }

  export type TimesSumAggregateInputType = {
    id?: true
  }

  export type TimesMinAggregateInputType = {
    id?: true
    clube?: true
    estado?: true
  }

  export type TimesMaxAggregateInputType = {
    id?: true
    clube?: true
    estado?: true
  }

  export type TimesCountAggregateInputType = {
    id?: true
    clube?: true
    estado?: true
    _all?: true
  }

  export type TimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Times to aggregate.
     */
    where?: TimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimesOrderByWithRelationInput | TimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Times
    **/
    _count?: true | TimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesMaxAggregateInputType
  }

  export type GetTimesAggregateType<T extends TimesAggregateArgs> = {
        [P in keyof T & keyof AggregateTimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimes[P]>
      : GetScalarType<T[P], AggregateTimes[P]>
  }




  export type TimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesWhereInput
    orderBy?: TimesOrderByWithAggregationInput | TimesOrderByWithAggregationInput[]
    by: TimesScalarFieldEnum[] | TimesScalarFieldEnum
    having?: TimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesCountAggregateInputType | true
    _avg?: TimesAvgAggregateInputType
    _sum?: TimesSumAggregateInputType
    _min?: TimesMinAggregateInputType
    _max?: TimesMaxAggregateInputType
  }

  export type TimesGroupByOutputType = {
    id: number
    clube: string
    estado: string
    _count: TimesCountAggregateOutputType | null
    _avg: TimesAvgAggregateOutputType | null
    _sum: TimesSumAggregateOutputType | null
    _min: TimesMinAggregateOutputType | null
    _max: TimesMaxAggregateOutputType | null
  }

  type GetTimesGroupByPayload<T extends TimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesGroupByOutputType[P]>
            : GetScalarType<T[P], TimesGroupByOutputType[P]>
        }
      >
    >


  export type TimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clube?: boolean
    estado?: boolean
    jogador?: boolean | Times$jogadorArgs<ExtArgs>
    _count?: boolean | TimesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["times"]>



  export type TimesSelectScalar = {
    id?: boolean
    clube?: boolean
    estado?: boolean
  }

  export type TimesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clube" | "estado", ExtArgs["result"]["times"]>
  export type TimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogador?: boolean | Times$jogadorArgs<ExtArgs>
    _count?: boolean | TimesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Times"
    objects: {
      jogador: Prisma.$JogadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clube: string
      estado: string
    }, ExtArgs["result"]["times"]>
    composites: {}
  }

  type TimesGetPayload<S extends boolean | null | undefined | TimesDefaultArgs> = $Result.GetResult<Prisma.$TimesPayload, S>

  type TimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimesCountAggregateInputType | true
    }

  export interface TimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Times'], meta: { name: 'Times' } }
    /**
     * Find zero or one Times that matches the filter.
     * @param {TimesFindUniqueArgs} args - Arguments to find a Times
     * @example
     * // Get one Times
     * const times = await prisma.times.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimesFindUniqueArgs>(args: SelectSubset<T, TimesFindUniqueArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Times that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimesFindUniqueOrThrowArgs} args - Arguments to find a Times
     * @example
     * // Get one Times
     * const times = await prisma.times.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimesFindUniqueOrThrowArgs>(args: SelectSubset<T, TimesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesFindFirstArgs} args - Arguments to find a Times
     * @example
     * // Get one Times
     * const times = await prisma.times.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimesFindFirstArgs>(args?: SelectSubset<T, TimesFindFirstArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Times that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesFindFirstOrThrowArgs} args - Arguments to find a Times
     * @example
     * // Get one Times
     * const times = await prisma.times.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimesFindFirstOrThrowArgs>(args?: SelectSubset<T, TimesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Times
     * const times = await prisma.times.findMany()
     * 
     * // Get first 10 Times
     * const times = await prisma.times.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timesWithIdOnly = await prisma.times.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimesFindManyArgs>(args?: SelectSubset<T, TimesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Times.
     * @param {TimesCreateArgs} args - Arguments to create a Times.
     * @example
     * // Create one Times
     * const Times = await prisma.times.create({
     *   data: {
     *     // ... data to create a Times
     *   }
     * })
     * 
     */
    create<T extends TimesCreateArgs>(args: SelectSubset<T, TimesCreateArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Times.
     * @param {TimesCreateManyArgs} args - Arguments to create many Times.
     * @example
     * // Create many Times
     * const times = await prisma.times.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimesCreateManyArgs>(args?: SelectSubset<T, TimesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Times.
     * @param {TimesDeleteArgs} args - Arguments to delete one Times.
     * @example
     * // Delete one Times
     * const Times = await prisma.times.delete({
     *   where: {
     *     // ... filter to delete one Times
     *   }
     * })
     * 
     */
    delete<T extends TimesDeleteArgs>(args: SelectSubset<T, TimesDeleteArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Times.
     * @param {TimesUpdateArgs} args - Arguments to update one Times.
     * @example
     * // Update one Times
     * const times = await prisma.times.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimesUpdateArgs>(args: SelectSubset<T, TimesUpdateArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Times.
     * @param {TimesDeleteManyArgs} args - Arguments to filter Times to delete.
     * @example
     * // Delete a few Times
     * const { count } = await prisma.times.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimesDeleteManyArgs>(args?: SelectSubset<T, TimesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Times
     * const times = await prisma.times.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimesUpdateManyArgs>(args: SelectSubset<T, TimesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Times.
     * @param {TimesUpsertArgs} args - Arguments to update or create a Times.
     * @example
     * // Update or create a Times
     * const times = await prisma.times.upsert({
     *   create: {
     *     // ... data to create a Times
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Times we want to update
     *   }
     * })
     */
    upsert<T extends TimesUpsertArgs>(args: SelectSubset<T, TimesUpsertArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesCountArgs} args - Arguments to filter Times to count.
     * @example
     * // Count the number of Times
     * const count = await prisma.times.count({
     *   where: {
     *     // ... the filter for the Times we want to count
     *   }
     * })
    **/
    count<T extends TimesCountArgs>(
      args?: Subset<T, TimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimesAggregateArgs>(args: Subset<T, TimesAggregateArgs>): Prisma.PrismaPromise<GetTimesAggregateType<T>>

    /**
     * Group by Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesGroupByArgs} args - Group by arguments.
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
      T extends TimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesGroupByArgs['orderBy'] }
        : { orderBy?: TimesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Times model
   */
  readonly fields: TimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Times.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogador<T extends Times$jogadorArgs<ExtArgs> = {}>(args?: Subset<T, Times$jogadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Times model
   */
  interface TimesFieldRefs {
    readonly id: FieldRef<"Times", 'Int'>
    readonly clube: FieldRef<"Times", 'String'>
    readonly estado: FieldRef<"Times", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Times findUnique
   */
  export type TimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * Filter, which Times to fetch.
     */
    where: TimesWhereUniqueInput
  }

  /**
   * Times findUniqueOrThrow
   */
  export type TimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * Filter, which Times to fetch.
     */
    where: TimesWhereUniqueInput
  }

  /**
   * Times findFirst
   */
  export type TimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * Filter, which Times to fetch.
     */
    where?: TimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimesOrderByWithRelationInput | TimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Times.
     */
    cursor?: TimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Times.
     */
    distinct?: TimesScalarFieldEnum | TimesScalarFieldEnum[]
  }

  /**
   * Times findFirstOrThrow
   */
  export type TimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * Filter, which Times to fetch.
     */
    where?: TimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimesOrderByWithRelationInput | TimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Times.
     */
    cursor?: TimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Times.
     */
    distinct?: TimesScalarFieldEnum | TimesScalarFieldEnum[]
  }

  /**
   * Times findMany
   */
  export type TimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * Filter, which Times to fetch.
     */
    where?: TimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimesOrderByWithRelationInput | TimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Times.
     */
    cursor?: TimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    distinct?: TimesScalarFieldEnum | TimesScalarFieldEnum[]
  }

  /**
   * Times create
   */
  export type TimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * The data needed to create a Times.
     */
    data: XOR<TimesCreateInput, TimesUncheckedCreateInput>
  }

  /**
   * Times createMany
   */
  export type TimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Times.
     */
    data: TimesCreateManyInput | TimesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Times update
   */
  export type TimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * The data needed to update a Times.
     */
    data: XOR<TimesUpdateInput, TimesUncheckedUpdateInput>
    /**
     * Choose, which Times to update.
     */
    where: TimesWhereUniqueInput
  }

  /**
   * Times updateMany
   */
  export type TimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Times.
     */
    data: XOR<TimesUpdateManyMutationInput, TimesUncheckedUpdateManyInput>
    /**
     * Filter which Times to update
     */
    where?: TimesWhereInput
    /**
     * Limit how many Times to update.
     */
    limit?: number
  }

  /**
   * Times upsert
   */
  export type TimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * The filter to search for the Times to update in case it exists.
     */
    where: TimesWhereUniqueInput
    /**
     * In case the Times found by the `where` argument doesn't exist, create a new Times with this data.
     */
    create: XOR<TimesCreateInput, TimesUncheckedCreateInput>
    /**
     * In case the Times was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimesUpdateInput, TimesUncheckedUpdateInput>
  }

  /**
   * Times delete
   */
  export type TimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
    /**
     * Filter which Times to delete.
     */
    where: TimesWhereUniqueInput
  }

  /**
   * Times deleteMany
   */
  export type TimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Times to delete
     */
    where?: TimesWhereInput
    /**
     * Limit how many Times to delete.
     */
    limit?: number
  }

  /**
   * Times.jogador
   */
  export type Times$jogadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    where?: JogadorWhereInput
    orderBy?: JogadorOrderByWithRelationInput | JogadorOrderByWithRelationInput[]
    cursor?: JogadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogadorScalarFieldEnum | JogadorScalarFieldEnum[]
  }

  /**
   * Times without action
   */
  export type TimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Times
     */
    select?: TimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Times
     */
    omit?: TimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesInclude<ExtArgs> | null
  }


  /**
   * Model Jogador
   */

  export type AggregateJogador = {
    _count: JogadorCountAggregateOutputType | null
    _avg: JogadorAvgAggregateOutputType | null
    _sum: JogadorSumAggregateOutputType | null
    _min: JogadorMinAggregateOutputType | null
    _max: JogadorMaxAggregateOutputType | null
  }

  export type JogadorAvgAggregateOutputType = {
    id: number | null
    salario: number | null
    timeId: number | null
  }

  export type JogadorSumAggregateOutputType = {
    id: number | null
    salario: number | null
    timeId: number | null
  }

  export type JogadorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    dataNascimento: Date | null
    salario: number | null
    nacionalidade: string | null
    timeId: number | null
  }

  export type JogadorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    dataNascimento: Date | null
    salario: number | null
    nacionalidade: string | null
    timeId: number | null
  }

  export type JogadorCountAggregateOutputType = {
    id: number
    nome: number
    dataNascimento: number
    salario: number
    nacionalidade: number
    timeId: number
    _all: number
  }


  export type JogadorAvgAggregateInputType = {
    id?: true
    salario?: true
    timeId?: true
  }

  export type JogadorSumAggregateInputType = {
    id?: true
    salario?: true
    timeId?: true
  }

  export type JogadorMinAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    salario?: true
    nacionalidade?: true
    timeId?: true
  }

  export type JogadorMaxAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    salario?: true
    nacionalidade?: true
    timeId?: true
  }

  export type JogadorCountAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    salario?: true
    nacionalidade?: true
    timeId?: true
    _all?: true
  }

  export type JogadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogador to aggregate.
     */
    where?: JogadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadors to fetch.
     */
    orderBy?: JogadorOrderByWithRelationInput | JogadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogadors
    **/
    _count?: true | JogadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogadorMaxAggregateInputType
  }

  export type GetJogadorAggregateType<T extends JogadorAggregateArgs> = {
        [P in keyof T & keyof AggregateJogador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogador[P]>
      : GetScalarType<T[P], AggregateJogador[P]>
  }




  export type JogadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadorWhereInput
    orderBy?: JogadorOrderByWithAggregationInput | JogadorOrderByWithAggregationInput[]
    by: JogadorScalarFieldEnum[] | JogadorScalarFieldEnum
    having?: JogadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogadorCountAggregateInputType | true
    _avg?: JogadorAvgAggregateInputType
    _sum?: JogadorSumAggregateInputType
    _min?: JogadorMinAggregateInputType
    _max?: JogadorMaxAggregateInputType
  }

  export type JogadorGroupByOutputType = {
    id: number
    nome: string
    dataNascimento: Date
    salario: number
    nacionalidade: string
    timeId: number
    _count: JogadorCountAggregateOutputType | null
    _avg: JogadorAvgAggregateOutputType | null
    _sum: JogadorSumAggregateOutputType | null
    _min: JogadorMinAggregateOutputType | null
    _max: JogadorMaxAggregateOutputType | null
  }

  type GetJogadorGroupByPayload<T extends JogadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogadorGroupByOutputType[P]>
            : GetScalarType<T[P], JogadorGroupByOutputType[P]>
        }
      >
    >


  export type JogadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    salario?: boolean
    nacionalidade?: boolean
    timeId?: boolean
    time?: boolean | TimesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogador"]>



  export type JogadorSelectScalar = {
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    salario?: boolean
    nacionalidade?: boolean
    timeId?: boolean
  }

  export type JogadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "dataNascimento" | "salario" | "nacionalidade" | "timeId", ExtArgs["result"]["jogador"]>
  export type JogadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    time?: boolean | TimesDefaultArgs<ExtArgs>
  }

  export type $JogadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jogador"
    objects: {
      time: Prisma.$TimesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      dataNascimento: Date
      salario: number
      nacionalidade: string
      timeId: number
    }, ExtArgs["result"]["jogador"]>
    composites: {}
  }

  type JogadorGetPayload<S extends boolean | null | undefined | JogadorDefaultArgs> = $Result.GetResult<Prisma.$JogadorPayload, S>

  type JogadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogadorCountAggregateInputType | true
    }

  export interface JogadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogador'], meta: { name: 'Jogador' } }
    /**
     * Find zero or one Jogador that matches the filter.
     * @param {JogadorFindUniqueArgs} args - Arguments to find a Jogador
     * @example
     * // Get one Jogador
     * const jogador = await prisma.jogador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogadorFindUniqueArgs>(args: SelectSubset<T, JogadorFindUniqueArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jogador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogadorFindUniqueOrThrowArgs} args - Arguments to find a Jogador
     * @example
     * // Get one Jogador
     * const jogador = await prisma.jogador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogadorFindUniqueOrThrowArgs>(args: SelectSubset<T, JogadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorFindFirstArgs} args - Arguments to find a Jogador
     * @example
     * // Get one Jogador
     * const jogador = await prisma.jogador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogadorFindFirstArgs>(args?: SelectSubset<T, JogadorFindFirstArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorFindFirstOrThrowArgs} args - Arguments to find a Jogador
     * @example
     * // Get one Jogador
     * const jogador = await prisma.jogador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogadorFindFirstOrThrowArgs>(args?: SelectSubset<T, JogadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jogadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogadors
     * const jogadors = await prisma.jogador.findMany()
     * 
     * // Get first 10 Jogadors
     * const jogadors = await prisma.jogador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogadorWithIdOnly = await prisma.jogador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JogadorFindManyArgs>(args?: SelectSubset<T, JogadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jogador.
     * @param {JogadorCreateArgs} args - Arguments to create a Jogador.
     * @example
     * // Create one Jogador
     * const Jogador = await prisma.jogador.create({
     *   data: {
     *     // ... data to create a Jogador
     *   }
     * })
     * 
     */
    create<T extends JogadorCreateArgs>(args: SelectSubset<T, JogadorCreateArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jogadors.
     * @param {JogadorCreateManyArgs} args - Arguments to create many Jogadors.
     * @example
     * // Create many Jogadors
     * const jogador = await prisma.jogador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogadorCreateManyArgs>(args?: SelectSubset<T, JogadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jogador.
     * @param {JogadorDeleteArgs} args - Arguments to delete one Jogador.
     * @example
     * // Delete one Jogador
     * const Jogador = await prisma.jogador.delete({
     *   where: {
     *     // ... filter to delete one Jogador
     *   }
     * })
     * 
     */
    delete<T extends JogadorDeleteArgs>(args: SelectSubset<T, JogadorDeleteArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jogador.
     * @param {JogadorUpdateArgs} args - Arguments to update one Jogador.
     * @example
     * // Update one Jogador
     * const jogador = await prisma.jogador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogadorUpdateArgs>(args: SelectSubset<T, JogadorUpdateArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jogadors.
     * @param {JogadorDeleteManyArgs} args - Arguments to filter Jogadors to delete.
     * @example
     * // Delete a few Jogadors
     * const { count } = await prisma.jogador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogadorDeleteManyArgs>(args?: SelectSubset<T, JogadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogadors
     * const jogador = await prisma.jogador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogadorUpdateManyArgs>(args: SelectSubset<T, JogadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jogador.
     * @param {JogadorUpsertArgs} args - Arguments to update or create a Jogador.
     * @example
     * // Update or create a Jogador
     * const jogador = await prisma.jogador.upsert({
     *   create: {
     *     // ... data to create a Jogador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogador we want to update
     *   }
     * })
     */
    upsert<T extends JogadorUpsertArgs>(args: SelectSubset<T, JogadorUpsertArgs<ExtArgs>>): Prisma__JogadorClient<$Result.GetResult<Prisma.$JogadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jogadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorCountArgs} args - Arguments to filter Jogadors to count.
     * @example
     * // Count the number of Jogadors
     * const count = await prisma.jogador.count({
     *   where: {
     *     // ... the filter for the Jogadors we want to count
     *   }
     * })
    **/
    count<T extends JogadorCountArgs>(
      args?: Subset<T, JogadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogadorAggregateArgs>(args: Subset<T, JogadorAggregateArgs>): Prisma.PrismaPromise<GetJogadorAggregateType<T>>

    /**
     * Group by Jogador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorGroupByArgs} args - Group by arguments.
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
      T extends JogadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogadorGroupByArgs['orderBy'] }
        : { orderBy?: JogadorGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JogadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogador model
   */
  readonly fields: JogadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    time<T extends TimesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimesDefaultArgs<ExtArgs>>): Prisma__TimesClient<$Result.GetResult<Prisma.$TimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jogador model
   */
  interface JogadorFieldRefs {
    readonly id: FieldRef<"Jogador", 'Int'>
    readonly nome: FieldRef<"Jogador", 'String'>
    readonly dataNascimento: FieldRef<"Jogador", 'DateTime'>
    readonly salario: FieldRef<"Jogador", 'Float'>
    readonly nacionalidade: FieldRef<"Jogador", 'String'>
    readonly timeId: FieldRef<"Jogador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Jogador findUnique
   */
  export type JogadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * Filter, which Jogador to fetch.
     */
    where: JogadorWhereUniqueInput
  }

  /**
   * Jogador findUniqueOrThrow
   */
  export type JogadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * Filter, which Jogador to fetch.
     */
    where: JogadorWhereUniqueInput
  }

  /**
   * Jogador findFirst
   */
  export type JogadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * Filter, which Jogador to fetch.
     */
    where?: JogadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadors to fetch.
     */
    orderBy?: JogadorOrderByWithRelationInput | JogadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogadors.
     */
    cursor?: JogadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogadors.
     */
    distinct?: JogadorScalarFieldEnum | JogadorScalarFieldEnum[]
  }

  /**
   * Jogador findFirstOrThrow
   */
  export type JogadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * Filter, which Jogador to fetch.
     */
    where?: JogadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadors to fetch.
     */
    orderBy?: JogadorOrderByWithRelationInput | JogadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogadors.
     */
    cursor?: JogadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogadors.
     */
    distinct?: JogadorScalarFieldEnum | JogadorScalarFieldEnum[]
  }

  /**
   * Jogador findMany
   */
  export type JogadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * Filter, which Jogadors to fetch.
     */
    where?: JogadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadors to fetch.
     */
    orderBy?: JogadorOrderByWithRelationInput | JogadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogadors.
     */
    cursor?: JogadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadors.
     */
    skip?: number
    distinct?: JogadorScalarFieldEnum | JogadorScalarFieldEnum[]
  }

  /**
   * Jogador create
   */
  export type JogadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogador.
     */
    data: XOR<JogadorCreateInput, JogadorUncheckedCreateInput>
  }

  /**
   * Jogador createMany
   */
  export type JogadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogadors.
     */
    data: JogadorCreateManyInput | JogadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jogador update
   */
  export type JogadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogador.
     */
    data: XOR<JogadorUpdateInput, JogadorUncheckedUpdateInput>
    /**
     * Choose, which Jogador to update.
     */
    where: JogadorWhereUniqueInput
  }

  /**
   * Jogador updateMany
   */
  export type JogadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogadors.
     */
    data: XOR<JogadorUpdateManyMutationInput, JogadorUncheckedUpdateManyInput>
    /**
     * Filter which Jogadors to update
     */
    where?: JogadorWhereInput
    /**
     * Limit how many Jogadors to update.
     */
    limit?: number
  }

  /**
   * Jogador upsert
   */
  export type JogadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogador to update in case it exists.
     */
    where: JogadorWhereUniqueInput
    /**
     * In case the Jogador found by the `where` argument doesn't exist, create a new Jogador with this data.
     */
    create: XOR<JogadorCreateInput, JogadorUncheckedCreateInput>
    /**
     * In case the Jogador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogadorUpdateInput, JogadorUncheckedUpdateInput>
  }

  /**
   * Jogador delete
   */
  export type JogadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
    /**
     * Filter which Jogador to delete.
     */
    where: JogadorWhereUniqueInput
  }

  /**
   * Jogador deleteMany
   */
  export type JogadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogadors to delete
     */
    where?: JogadorWhereInput
    /**
     * Limit how many Jogadors to delete.
     */
    limit?: number
  }

  /**
   * Jogador without action
   */
  export type JogadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogador
     */
    select?: JogadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogador
     */
    omit?: JogadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TimesScalarFieldEnum: {
    id: 'id',
    clube: 'clube',
    estado: 'estado'
  };

  export type TimesScalarFieldEnum = (typeof TimesScalarFieldEnum)[keyof typeof TimesScalarFieldEnum]


  export const JogadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dataNascimento: 'dataNascimento',
    salario: 'salario',
    nacionalidade: 'nacionalidade',
    timeId: 'timeId'
  };

  export type JogadorScalarFieldEnum = (typeof JogadorScalarFieldEnum)[keyof typeof JogadorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TimesOrderByRelevanceFieldEnum: {
    clube: 'clube',
    estado: 'estado'
  };

  export type TimesOrderByRelevanceFieldEnum = (typeof TimesOrderByRelevanceFieldEnum)[keyof typeof TimesOrderByRelevanceFieldEnum]


  export const JogadorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    nacionalidade: 'nacionalidade'
  };

  export type JogadorOrderByRelevanceFieldEnum = (typeof JogadorOrderByRelevanceFieldEnum)[keyof typeof JogadorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TimesWhereInput = {
    AND?: TimesWhereInput | TimesWhereInput[]
    OR?: TimesWhereInput[]
    NOT?: TimesWhereInput | TimesWhereInput[]
    id?: IntFilter<"Times"> | number
    clube?: StringFilter<"Times"> | string
    estado?: StringFilter<"Times"> | string
    jogador?: JogadorListRelationFilter
  }

  export type TimesOrderByWithRelationInput = {
    id?: SortOrder
    clube?: SortOrder
    estado?: SortOrder
    jogador?: JogadorOrderByRelationAggregateInput
    _relevance?: TimesOrderByRelevanceInput
  }

  export type TimesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimesWhereInput | TimesWhereInput[]
    OR?: TimesWhereInput[]
    NOT?: TimesWhereInput | TimesWhereInput[]
    clube?: StringFilter<"Times"> | string
    estado?: StringFilter<"Times"> | string
    jogador?: JogadorListRelationFilter
  }, "id">

  export type TimesOrderByWithAggregationInput = {
    id?: SortOrder
    clube?: SortOrder
    estado?: SortOrder
    _count?: TimesCountOrderByAggregateInput
    _avg?: TimesAvgOrderByAggregateInput
    _max?: TimesMaxOrderByAggregateInput
    _min?: TimesMinOrderByAggregateInput
    _sum?: TimesSumOrderByAggregateInput
  }

  export type TimesScalarWhereWithAggregatesInput = {
    AND?: TimesScalarWhereWithAggregatesInput | TimesScalarWhereWithAggregatesInput[]
    OR?: TimesScalarWhereWithAggregatesInput[]
    NOT?: TimesScalarWhereWithAggregatesInput | TimesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Times"> | number
    clube?: StringWithAggregatesFilter<"Times"> | string
    estado?: StringWithAggregatesFilter<"Times"> | string
  }

  export type JogadorWhereInput = {
    AND?: JogadorWhereInput | JogadorWhereInput[]
    OR?: JogadorWhereInput[]
    NOT?: JogadorWhereInput | JogadorWhereInput[]
    id?: IntFilter<"Jogador"> | number
    nome?: StringFilter<"Jogador"> | string
    dataNascimento?: DateTimeFilter<"Jogador"> | Date | string
    salario?: FloatFilter<"Jogador"> | number
    nacionalidade?: StringFilter<"Jogador"> | string
    timeId?: IntFilter<"Jogador"> | number
    time?: XOR<TimesScalarRelationFilter, TimesWhereInput>
  }

  export type JogadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    salario?: SortOrder
    nacionalidade?: SortOrder
    timeId?: SortOrder
    time?: TimesOrderByWithRelationInput
    _relevance?: JogadorOrderByRelevanceInput
  }

  export type JogadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JogadorWhereInput | JogadorWhereInput[]
    OR?: JogadorWhereInput[]
    NOT?: JogadorWhereInput | JogadorWhereInput[]
    nome?: StringFilter<"Jogador"> | string
    dataNascimento?: DateTimeFilter<"Jogador"> | Date | string
    salario?: FloatFilter<"Jogador"> | number
    nacionalidade?: StringFilter<"Jogador"> | string
    timeId?: IntFilter<"Jogador"> | number
    time?: XOR<TimesScalarRelationFilter, TimesWhereInput>
  }, "id">

  export type JogadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    salario?: SortOrder
    nacionalidade?: SortOrder
    timeId?: SortOrder
    _count?: JogadorCountOrderByAggregateInput
    _avg?: JogadorAvgOrderByAggregateInput
    _max?: JogadorMaxOrderByAggregateInput
    _min?: JogadorMinOrderByAggregateInput
    _sum?: JogadorSumOrderByAggregateInput
  }

  export type JogadorScalarWhereWithAggregatesInput = {
    AND?: JogadorScalarWhereWithAggregatesInput | JogadorScalarWhereWithAggregatesInput[]
    OR?: JogadorScalarWhereWithAggregatesInput[]
    NOT?: JogadorScalarWhereWithAggregatesInput | JogadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jogador"> | number
    nome?: StringWithAggregatesFilter<"Jogador"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Jogador"> | Date | string
    salario?: FloatWithAggregatesFilter<"Jogador"> | number
    nacionalidade?: StringWithAggregatesFilter<"Jogador"> | string
    timeId?: IntWithAggregatesFilter<"Jogador"> | number
  }

  export type TimesCreateInput = {
    clube: string
    estado: string
    jogador?: JogadorCreateNestedManyWithoutTimeInput
  }

  export type TimesUncheckedCreateInput = {
    id?: number
    clube: string
    estado: string
    jogador?: JogadorUncheckedCreateNestedManyWithoutTimeInput
  }

  export type TimesUpdateInput = {
    clube?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    jogador?: JogadorUpdateManyWithoutTimeNestedInput
  }

  export type TimesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clube?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    jogador?: JogadorUncheckedUpdateManyWithoutTimeNestedInput
  }

  export type TimesCreateManyInput = {
    id?: number
    clube: string
    estado: string
  }

  export type TimesUpdateManyMutationInput = {
    clube?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type TimesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clube?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type JogadorCreateInput = {
    nome: string
    dataNascimento: Date | string
    salario: number
    nacionalidade: string
    time: TimesCreateNestedOneWithoutJogadorInput
  }

  export type JogadorUncheckedCreateInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    salario: number
    nacionalidade: string
    timeId: number
  }

  export type JogadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
    time?: TimesUpdateOneRequiredWithoutJogadorNestedInput
  }

  export type JogadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
    timeId?: IntFieldUpdateOperationsInput | number
  }

  export type JogadorCreateManyInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    salario: number
    nacionalidade: string
    timeId: number
  }

  export type JogadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
  }

  export type JogadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
    timeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type JogadorListRelationFilter = {
    every?: JogadorWhereInput
    some?: JogadorWhereInput
    none?: JogadorWhereInput
  }

  export type JogadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimesOrderByRelevanceInput = {
    fields: TimesOrderByRelevanceFieldEnum | TimesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TimesCountOrderByAggregateInput = {
    id?: SortOrder
    clube?: SortOrder
    estado?: SortOrder
  }

  export type TimesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TimesMaxOrderByAggregateInput = {
    id?: SortOrder
    clube?: SortOrder
    estado?: SortOrder
  }

  export type TimesMinOrderByAggregateInput = {
    id?: SortOrder
    clube?: SortOrder
    estado?: SortOrder
  }

  export type TimesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TimesScalarRelationFilter = {
    is?: TimesWhereInput
    isNot?: TimesWhereInput
  }

  export type JogadorOrderByRelevanceInput = {
    fields: JogadorOrderByRelevanceFieldEnum | JogadorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JogadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    salario?: SortOrder
    nacionalidade?: SortOrder
    timeId?: SortOrder
  }

  export type JogadorAvgOrderByAggregateInput = {
    id?: SortOrder
    salario?: SortOrder
    timeId?: SortOrder
  }

  export type JogadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    salario?: SortOrder
    nacionalidade?: SortOrder
    timeId?: SortOrder
  }

  export type JogadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    salario?: SortOrder
    nacionalidade?: SortOrder
    timeId?: SortOrder
  }

  export type JogadorSumOrderByAggregateInput = {
    id?: SortOrder
    salario?: SortOrder
    timeId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type JogadorCreateNestedManyWithoutTimeInput = {
    create?: XOR<JogadorCreateWithoutTimeInput, JogadorUncheckedCreateWithoutTimeInput> | JogadorCreateWithoutTimeInput[] | JogadorUncheckedCreateWithoutTimeInput[]
    connectOrCreate?: JogadorCreateOrConnectWithoutTimeInput | JogadorCreateOrConnectWithoutTimeInput[]
    createMany?: JogadorCreateManyTimeInputEnvelope
    connect?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
  }

  export type JogadorUncheckedCreateNestedManyWithoutTimeInput = {
    create?: XOR<JogadorCreateWithoutTimeInput, JogadorUncheckedCreateWithoutTimeInput> | JogadorCreateWithoutTimeInput[] | JogadorUncheckedCreateWithoutTimeInput[]
    connectOrCreate?: JogadorCreateOrConnectWithoutTimeInput | JogadorCreateOrConnectWithoutTimeInput[]
    createMany?: JogadorCreateManyTimeInputEnvelope
    connect?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type JogadorUpdateManyWithoutTimeNestedInput = {
    create?: XOR<JogadorCreateWithoutTimeInput, JogadorUncheckedCreateWithoutTimeInput> | JogadorCreateWithoutTimeInput[] | JogadorUncheckedCreateWithoutTimeInput[]
    connectOrCreate?: JogadorCreateOrConnectWithoutTimeInput | JogadorCreateOrConnectWithoutTimeInput[]
    upsert?: JogadorUpsertWithWhereUniqueWithoutTimeInput | JogadorUpsertWithWhereUniqueWithoutTimeInput[]
    createMany?: JogadorCreateManyTimeInputEnvelope
    set?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    disconnect?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    delete?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    connect?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    update?: JogadorUpdateWithWhereUniqueWithoutTimeInput | JogadorUpdateWithWhereUniqueWithoutTimeInput[]
    updateMany?: JogadorUpdateManyWithWhereWithoutTimeInput | JogadorUpdateManyWithWhereWithoutTimeInput[]
    deleteMany?: JogadorScalarWhereInput | JogadorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JogadorUncheckedUpdateManyWithoutTimeNestedInput = {
    create?: XOR<JogadorCreateWithoutTimeInput, JogadorUncheckedCreateWithoutTimeInput> | JogadorCreateWithoutTimeInput[] | JogadorUncheckedCreateWithoutTimeInput[]
    connectOrCreate?: JogadorCreateOrConnectWithoutTimeInput | JogadorCreateOrConnectWithoutTimeInput[]
    upsert?: JogadorUpsertWithWhereUniqueWithoutTimeInput | JogadorUpsertWithWhereUniqueWithoutTimeInput[]
    createMany?: JogadorCreateManyTimeInputEnvelope
    set?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    disconnect?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    delete?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    connect?: JogadorWhereUniqueInput | JogadorWhereUniqueInput[]
    update?: JogadorUpdateWithWhereUniqueWithoutTimeInput | JogadorUpdateWithWhereUniqueWithoutTimeInput[]
    updateMany?: JogadorUpdateManyWithWhereWithoutTimeInput | JogadorUpdateManyWithWhereWithoutTimeInput[]
    deleteMany?: JogadorScalarWhereInput | JogadorScalarWhereInput[]
  }

  export type TimesCreateNestedOneWithoutJogadorInput = {
    create?: XOR<TimesCreateWithoutJogadorInput, TimesUncheckedCreateWithoutJogadorInput>
    connectOrCreate?: TimesCreateOrConnectWithoutJogadorInput
    connect?: TimesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimesUpdateOneRequiredWithoutJogadorNestedInput = {
    create?: XOR<TimesCreateWithoutJogadorInput, TimesUncheckedCreateWithoutJogadorInput>
    connectOrCreate?: TimesCreateOrConnectWithoutJogadorInput
    upsert?: TimesUpsertWithoutJogadorInput
    connect?: TimesWhereUniqueInput
    update?: XOR<XOR<TimesUpdateToOneWithWhereWithoutJogadorInput, TimesUpdateWithoutJogadorInput>, TimesUncheckedUpdateWithoutJogadorInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type JogadorCreateWithoutTimeInput = {
    nome: string
    dataNascimento: Date | string
    salario: number
    nacionalidade: string
  }

  export type JogadorUncheckedCreateWithoutTimeInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    salario: number
    nacionalidade: string
  }

  export type JogadorCreateOrConnectWithoutTimeInput = {
    where: JogadorWhereUniqueInput
    create: XOR<JogadorCreateWithoutTimeInput, JogadorUncheckedCreateWithoutTimeInput>
  }

  export type JogadorCreateManyTimeInputEnvelope = {
    data: JogadorCreateManyTimeInput | JogadorCreateManyTimeInput[]
    skipDuplicates?: boolean
  }

  export type JogadorUpsertWithWhereUniqueWithoutTimeInput = {
    where: JogadorWhereUniqueInput
    update: XOR<JogadorUpdateWithoutTimeInput, JogadorUncheckedUpdateWithoutTimeInput>
    create: XOR<JogadorCreateWithoutTimeInput, JogadorUncheckedCreateWithoutTimeInput>
  }

  export type JogadorUpdateWithWhereUniqueWithoutTimeInput = {
    where: JogadorWhereUniqueInput
    data: XOR<JogadorUpdateWithoutTimeInput, JogadorUncheckedUpdateWithoutTimeInput>
  }

  export type JogadorUpdateManyWithWhereWithoutTimeInput = {
    where: JogadorScalarWhereInput
    data: XOR<JogadorUpdateManyMutationInput, JogadorUncheckedUpdateManyWithoutTimeInput>
  }

  export type JogadorScalarWhereInput = {
    AND?: JogadorScalarWhereInput | JogadorScalarWhereInput[]
    OR?: JogadorScalarWhereInput[]
    NOT?: JogadorScalarWhereInput | JogadorScalarWhereInput[]
    id?: IntFilter<"Jogador"> | number
    nome?: StringFilter<"Jogador"> | string
    dataNascimento?: DateTimeFilter<"Jogador"> | Date | string
    salario?: FloatFilter<"Jogador"> | number
    nacionalidade?: StringFilter<"Jogador"> | string
    timeId?: IntFilter<"Jogador"> | number
  }

  export type TimesCreateWithoutJogadorInput = {
    clube: string
    estado: string
  }

  export type TimesUncheckedCreateWithoutJogadorInput = {
    id?: number
    clube: string
    estado: string
  }

  export type TimesCreateOrConnectWithoutJogadorInput = {
    where: TimesWhereUniqueInput
    create: XOR<TimesCreateWithoutJogadorInput, TimesUncheckedCreateWithoutJogadorInput>
  }

  export type TimesUpsertWithoutJogadorInput = {
    update: XOR<TimesUpdateWithoutJogadorInput, TimesUncheckedUpdateWithoutJogadorInput>
    create: XOR<TimesCreateWithoutJogadorInput, TimesUncheckedCreateWithoutJogadorInput>
    where?: TimesWhereInput
  }

  export type TimesUpdateToOneWithWhereWithoutJogadorInput = {
    where?: TimesWhereInput
    data: XOR<TimesUpdateWithoutJogadorInput, TimesUncheckedUpdateWithoutJogadorInput>
  }

  export type TimesUpdateWithoutJogadorInput = {
    clube?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type TimesUncheckedUpdateWithoutJogadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clube?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type JogadorCreateManyTimeInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    salario: number
    nacionalidade: string
  }

  export type JogadorUpdateWithoutTimeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
  }

  export type JogadorUncheckedUpdateWithoutTimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
  }

  export type JogadorUncheckedUpdateManyWithoutTimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: FloatFieldUpdateOperationsInput | number
    nacionalidade?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}