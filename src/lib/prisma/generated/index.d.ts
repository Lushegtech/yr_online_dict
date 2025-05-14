
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
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model Translation
 * 
 */
export type Translation = $Result.DefaultSelection<Prisma.$TranslationPayload>
/**
 * Model Example
 * 
 */
export type Example = $Result.DefaultSelection<Prisma.$ExamplePayload>
/**
 * Model Alphabet
 * 
 */
export type Alphabet = $Result.DefaultSelection<Prisma.$AlphabetPayload>
/**
 * Model Featured
 * 
 */
export type Featured = $Result.DefaultSelection<Prisma.$FeaturedPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserBookmark
 * 
 */
export type UserBookmark = $Result.DefaultSelection<Prisma.$UserBookmarkPayload>
/**
 * Model SearchHistory
 * 
 */
export type SearchHistory = $Result.DefaultSelection<Prisma.$SearchHistoryPayload>
/**
 * Model CulturalFact
 * 
 */
export type CulturalFact = $Result.DefaultSelection<Prisma.$CulturalFactPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Words
 * const words = await prisma.word.findMany()
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
   * // Fetch zero or more Words
   * const words = await prisma.word.findMany()
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
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translation`: Exposes CRUD operations for the **Translation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Translations
    * const translations = await prisma.translation.findMany()
    * ```
    */
  get translation(): Prisma.TranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.example`: Exposes CRUD operations for the **Example** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examples
    * const examples = await prisma.example.findMany()
    * ```
    */
  get example(): Prisma.ExampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alphabet`: Exposes CRUD operations for the **Alphabet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alphabets
    * const alphabets = await prisma.alphabet.findMany()
    * ```
    */
  get alphabet(): Prisma.AlphabetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featured`: Exposes CRUD operations for the **Featured** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Featureds
    * const featureds = await prisma.featured.findMany()
    * ```
    */
  get featured(): Prisma.FeaturedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBookmark`: Exposes CRUD operations for the **UserBookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBookmarks
    * const userBookmarks = await prisma.userBookmark.findMany()
    * ```
    */
  get userBookmark(): Prisma.UserBookmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchHistory`: Exposes CRUD operations for the **SearchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchHistories
    * const searchHistories = await prisma.searchHistory.findMany()
    * ```
    */
  get searchHistory(): Prisma.SearchHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.culturalFact`: Exposes CRUD operations for the **CulturalFact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CulturalFacts
    * const culturalFacts = await prisma.culturalFact.findMany()
    * ```
    */
  get culturalFact(): Prisma.CulturalFactDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Word: 'Word',
    Translation: 'Translation',
    Example: 'Example',
    Alphabet: 'Alphabet',
    Featured: 'Featured',
    User: 'User',
    UserBookmark: 'UserBookmark',
    SearchHistory: 'SearchHistory',
    CulturalFact: 'CulturalFact'
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
      modelProps: "word" | "translation" | "example" | "alphabet" | "featured" | "user" | "userBookmark" | "searchHistory" | "culturalFact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      Translation: {
        payload: Prisma.$TranslationPayload<ExtArgs>
        fields: Prisma.TranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findFirst: {
            args: Prisma.TranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findMany: {
            args: Prisma.TranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          create: {
            args: Prisma.TranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          createMany: {
            args: Prisma.TranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          delete: {
            args: Prisma.TranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          update: {
            args: Prisma.TranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          deleteMany: {
            args: Prisma.TranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          upsert: {
            args: Prisma.TranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          aggregate: {
            args: Prisma.TranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslation>
          }
          groupBy: {
            args: Prisma.TranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationCountAggregateOutputType> | number
          }
        }
      }
      Example: {
        payload: Prisma.$ExamplePayload<ExtArgs>
        fields: Prisma.ExampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          findFirst: {
            args: Prisma.ExampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          findMany: {
            args: Prisma.ExampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          create: {
            args: Prisma.ExampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          createMany: {
            args: Prisma.ExampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          delete: {
            args: Prisma.ExampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          update: {
            args: Prisma.ExampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          deleteMany: {
            args: Prisma.ExampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          upsert: {
            args: Prisma.ExampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          aggregate: {
            args: Prisma.ExampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExample>
          }
          groupBy: {
            args: Prisma.ExampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExampleCountArgs<ExtArgs>
            result: $Utils.Optional<ExampleCountAggregateOutputType> | number
          }
        }
      }
      Alphabet: {
        payload: Prisma.$AlphabetPayload<ExtArgs>
        fields: Prisma.AlphabetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlphabetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlphabetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>
          }
          findFirst: {
            args: Prisma.AlphabetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlphabetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>
          }
          findMany: {
            args: Prisma.AlphabetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>[]
          }
          create: {
            args: Prisma.AlphabetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>
          }
          createMany: {
            args: Prisma.AlphabetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlphabetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>[]
          }
          delete: {
            args: Prisma.AlphabetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>
          }
          update: {
            args: Prisma.AlphabetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>
          }
          deleteMany: {
            args: Prisma.AlphabetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlphabetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlphabetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>[]
          }
          upsert: {
            args: Prisma.AlphabetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlphabetPayload>
          }
          aggregate: {
            args: Prisma.AlphabetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlphabet>
          }
          groupBy: {
            args: Prisma.AlphabetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlphabetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlphabetCountArgs<ExtArgs>
            result: $Utils.Optional<AlphabetCountAggregateOutputType> | number
          }
        }
      }
      Featured: {
        payload: Prisma.$FeaturedPayload<ExtArgs>
        fields: Prisma.FeaturedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          findFirst: {
            args: Prisma.FeaturedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          findMany: {
            args: Prisma.FeaturedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>[]
          }
          create: {
            args: Prisma.FeaturedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          createMany: {
            args: Prisma.FeaturedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeaturedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>[]
          }
          delete: {
            args: Prisma.FeaturedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          update: {
            args: Prisma.FeaturedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          deleteMany: {
            args: Prisma.FeaturedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeaturedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>[]
          }
          upsert: {
            args: Prisma.FeaturedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          aggregate: {
            args: Prisma.FeaturedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatured>
          }
          groupBy: {
            args: Prisma.FeaturedGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserBookmark: {
        payload: Prisma.$UserBookmarkPayload<ExtArgs>
        fields: Prisma.UserBookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          findFirst: {
            args: Prisma.UserBookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          findMany: {
            args: Prisma.UserBookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[]
          }
          create: {
            args: Prisma.UserBookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          createMany: {
            args: Prisma.UserBookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[]
          }
          delete: {
            args: Prisma.UserBookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          update: {
            args: Prisma.UserBookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          deleteMany: {
            args: Prisma.UserBookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[]
          }
          upsert: {
            args: Prisma.UserBookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookmarkPayload>
          }
          aggregate: {
            args: Prisma.UserBookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBookmark>
          }
          groupBy: {
            args: Prisma.UserBookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<UserBookmarkCountAggregateOutputType> | number
          }
        }
      }
      SearchHistory: {
        payload: Prisma.$SearchHistoryPayload<ExtArgs>
        fields: Prisma.SearchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          findFirst: {
            args: Prisma.SearchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          findMany: {
            args: Prisma.SearchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          create: {
            args: Prisma.SearchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          createMany: {
            args: Prisma.SearchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          delete: {
            args: Prisma.SearchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          update: {
            args: Prisma.SearchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SearchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SearchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          aggregate: {
            args: Prisma.SearchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchHistory>
          }
          groupBy: {
            args: Prisma.SearchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SearchHistoryCountAggregateOutputType> | number
          }
        }
      }
      CulturalFact: {
        payload: Prisma.$CulturalFactPayload<ExtArgs>
        fields: Prisma.CulturalFactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CulturalFactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CulturalFactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>
          }
          findFirst: {
            args: Prisma.CulturalFactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CulturalFactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>
          }
          findMany: {
            args: Prisma.CulturalFactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>[]
          }
          create: {
            args: Prisma.CulturalFactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>
          }
          createMany: {
            args: Prisma.CulturalFactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CulturalFactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>[]
          }
          delete: {
            args: Prisma.CulturalFactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>
          }
          update: {
            args: Prisma.CulturalFactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>
          }
          deleteMany: {
            args: Prisma.CulturalFactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CulturalFactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CulturalFactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>[]
          }
          upsert: {
            args: Prisma.CulturalFactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturalFactPayload>
          }
          aggregate: {
            args: Prisma.CulturalFactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCulturalFact>
          }
          groupBy: {
            args: Prisma.CulturalFactGroupByArgs<ExtArgs>
            result: $Utils.Optional<CulturalFactGroupByOutputType>[]
          }
          count: {
            args: Prisma.CulturalFactCountArgs<ExtArgs>
            result: $Utils.Optional<CulturalFactCountAggregateOutputType> | number
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
    word?: WordOmit
    translation?: TranslationOmit
    example?: ExampleOmit
    alphabet?: AlphabetOmit
    featured?: FeaturedOmit
    user?: UserOmit
    userBookmark?: UserBookmarkOmit
    searchHistory?: SearchHistoryOmit
    culturalFact?: CulturalFactOmit
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
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    examples: number
    searchHistory: number
    translations: number
    userBookmarks: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examples?: boolean | WordCountOutputTypeCountExamplesArgs
    searchHistory?: boolean | WordCountOutputTypeCountSearchHistoryArgs
    translations?: boolean | WordCountOutputTypeCountTranslationsArgs
    userBookmarks?: boolean | WordCountOutputTypeCountUserBookmarksArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountExamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountSearchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountUserBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookmarkWhereInput
  }


  /**
   * Count Type AlphabetCountOutputType
   */

  export type AlphabetCountOutputType = {
    words: number
  }

  export type AlphabetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | AlphabetCountOutputTypeCountWordsArgs
  }

  // Custom InputTypes
  /**
   * AlphabetCountOutputType without action
   */
  export type AlphabetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlphabetCountOutputType
     */
    select?: AlphabetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlphabetCountOutputType without action
   */
  export type AlphabetCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    searchHistory: number
    bookmarks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchHistory?: boolean | UserCountOutputTypeCountSearchHistoryArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookmarkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordMinAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    syllables: string | null
    partOfSpeech: string | null
    createdAt: Date | null
    updatedAt: Date | null
    alphabetId: string | null
    isFeatured: boolean | null
    tonalMarks: string | null
    audioUrl: string | null
    etymology: string | null
    dialectVariants: string | null
  }

  export type WordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    syllables: string | null
    partOfSpeech: string | null
    createdAt: Date | null
    updatedAt: Date | null
    alphabetId: string | null
    isFeatured: boolean | null
    tonalMarks: string | null
    audioUrl: string | null
    etymology: string | null
    dialectVariants: string | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    word: number
    pronunciation: number
    syllables: number
    partOfSpeech: number
    createdAt: number
    updatedAt: number
    alphabetId: number
    isFeatured: number
    tonalMarks: number
    audioUrl: number
    etymology: number
    dialectVariants: number
    _all: number
  }


  export type WordMinAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    syllables?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    alphabetId?: true
    isFeatured?: true
    tonalMarks?: true
    audioUrl?: true
    etymology?: true
    dialectVariants?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    syllables?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    alphabetId?: true
    isFeatured?: true
    tonalMarks?: true
    audioUrl?: true
    etymology?: true
    dialectVariants?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    syllables?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    alphabetId?: true
    isFeatured?: true
    tonalMarks?: true
    audioUrl?: true
    etymology?: true
    dialectVariants?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: string
    word: string
    pronunciation: string | null
    syllables: string | null
    partOfSpeech: string | null
    createdAt: Date
    updatedAt: Date
    alphabetId: string | null
    isFeatured: boolean
    tonalMarks: string | null
    audioUrl: string | null
    etymology: string | null
    dialectVariants: string | null
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    syllables?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alphabetId?: boolean
    isFeatured?: boolean
    tonalMarks?: boolean
    audioUrl?: boolean
    etymology?: boolean
    dialectVariants?: boolean
    examples?: boolean | Word$examplesArgs<ExtArgs>
    featured?: boolean | Word$featuredArgs<ExtArgs>
    searchHistory?: boolean | Word$searchHistoryArgs<ExtArgs>
    translations?: boolean | Word$translationsArgs<ExtArgs>
    userBookmarks?: boolean | Word$userBookmarksArgs<ExtArgs>
    alphabet?: boolean | Word$alphabetArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    syllables?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alphabetId?: boolean
    isFeatured?: boolean
    tonalMarks?: boolean
    audioUrl?: boolean
    etymology?: boolean
    dialectVariants?: boolean
    alphabet?: boolean | Word$alphabetArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    syllables?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alphabetId?: boolean
    isFeatured?: boolean
    tonalMarks?: boolean
    audioUrl?: boolean
    etymology?: boolean
    dialectVariants?: boolean
    alphabet?: boolean | Word$alphabetArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    syllables?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alphabetId?: boolean
    isFeatured?: boolean
    tonalMarks?: boolean
    audioUrl?: boolean
    etymology?: boolean
    dialectVariants?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "pronunciation" | "syllables" | "partOfSpeech" | "createdAt" | "updatedAt" | "alphabetId" | "isFeatured" | "tonalMarks" | "audioUrl" | "etymology" | "dialectVariants", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examples?: boolean | Word$examplesArgs<ExtArgs>
    featured?: boolean | Word$featuredArgs<ExtArgs>
    searchHistory?: boolean | Word$searchHistoryArgs<ExtArgs>
    translations?: boolean | Word$translationsArgs<ExtArgs>
    userBookmarks?: boolean | Word$userBookmarksArgs<ExtArgs>
    alphabet?: boolean | Word$alphabetArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alphabet?: boolean | Word$alphabetArgs<ExtArgs>
  }
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alphabet?: boolean | Word$alphabetArgs<ExtArgs>
  }

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      examples: Prisma.$ExamplePayload<ExtArgs>[]
      featured: Prisma.$FeaturedPayload<ExtArgs> | null
      searchHistory: Prisma.$SearchHistoryPayload<ExtArgs>[]
      translations: Prisma.$TranslationPayload<ExtArgs>[]
      userBookmarks: Prisma.$UserBookmarkPayload<ExtArgs>[]
      alphabet: Prisma.$AlphabetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      pronunciation: string | null
      syllables: string | null
      partOfSpeech: string | null
      createdAt: Date
      updatedAt: Date
      alphabetId: string | null
      isFeatured: boolean
      tonalMarks: string | null
      audioUrl: string | null
      etymology: string | null
      dialectVariants: string | null
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examples<T extends Word$examplesArgs<ExtArgs> = {}>(args?: Subset<T, Word$examplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featured<T extends Word$featuredArgs<ExtArgs> = {}>(args?: Subset<T, Word$featuredArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    searchHistory<T extends Word$searchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Word$searchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    translations<T extends Word$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Word$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBookmarks<T extends Word$userBookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Word$userBookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alphabet<T extends Word$alphabetArgs<ExtArgs> = {}>(args?: Subset<T, Word$alphabetArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'String'>
    readonly word: FieldRef<"Word", 'String'>
    readonly pronunciation: FieldRef<"Word", 'String'>
    readonly syllables: FieldRef<"Word", 'String'>
    readonly partOfSpeech: FieldRef<"Word", 'String'>
    readonly createdAt: FieldRef<"Word", 'DateTime'>
    readonly updatedAt: FieldRef<"Word", 'DateTime'>
    readonly alphabetId: FieldRef<"Word", 'String'>
    readonly isFeatured: FieldRef<"Word", 'Boolean'>
    readonly tonalMarks: FieldRef<"Word", 'String'>
    readonly audioUrl: FieldRef<"Word", 'String'>
    readonly etymology: FieldRef<"Word", 'String'>
    readonly dialectVariants: FieldRef<"Word", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.examples
   */
  export type Word$examplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    where?: ExampleWhereInput
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    cursor?: ExampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Word.featured
   */
  export type Word$featuredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    where?: FeaturedWhereInput
  }

  /**
   * Word.searchHistory
   */
  export type Word$searchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    where?: SearchHistoryWhereInput
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    cursor?: SearchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * Word.translations
   */
  export type Word$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    cursor?: TranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Word.userBookmarks
   */
  export type Word$userBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    where?: UserBookmarkWhereInput
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    cursor?: UserBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * Word.alphabet
   */
  export type Word$alphabetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    where?: AlphabetWhereInput
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model Translation
   */

  export type AggregateTranslation = {
    _count: TranslationCountAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  export type TranslationMinAggregateOutputType = {
    id: string | null
    text: string | null
    language: string | null
    partOfSpeech: string | null
    createdAt: Date | null
    updatedAt: Date | null
    wordId: string | null
  }

  export type TranslationMaxAggregateOutputType = {
    id: string | null
    text: string | null
    language: string | null
    partOfSpeech: string | null
    createdAt: Date | null
    updatedAt: Date | null
    wordId: string | null
  }

  export type TranslationCountAggregateOutputType = {
    id: number
    text: number
    language: number
    partOfSpeech: number
    createdAt: number
    updatedAt: number
    wordId: number
    _all: number
  }


  export type TranslationMinAggregateInputType = {
    id?: true
    text?: true
    language?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    wordId?: true
  }

  export type TranslationMaxAggregateInputType = {
    id?: true
    text?: true
    language?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    wordId?: true
  }

  export type TranslationCountAggregateInputType = {
    id?: true
    text?: true
    language?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    wordId?: true
    _all?: true
  }

  export type TranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translation to aggregate.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Translations
    **/
    _count?: true | TranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMaxAggregateInputType
  }

  export type GetTranslationAggregateType<T extends TranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslation[P]>
      : GetScalarType<T[P], AggregateTranslation[P]>
  }




  export type TranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithAggregationInput | TranslationOrderByWithAggregationInput[]
    by: TranslationScalarFieldEnum[] | TranslationScalarFieldEnum
    having?: TranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationCountAggregateInputType | true
    _min?: TranslationMinAggregateInputType
    _max?: TranslationMaxAggregateInputType
  }

  export type TranslationGroupByOutputType = {
    id: string
    text: string
    language: string
    partOfSpeech: string | null
    createdAt: Date
    updatedAt: Date
    wordId: string
    _count: TranslationCountAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  type GetTranslationGroupByPayload<T extends TranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupByOutputType[P]>
        }
      >
    >


  export type TranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    language?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    language?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    language?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectScalar = {
    id?: boolean
    text?: boolean
    language?: boolean
    partOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
  }

  export type TranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "language" | "partOfSpeech" | "createdAt" | "updatedAt" | "wordId", ExtArgs["result"]["translation"]>
  export type TranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type TranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type TranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $TranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Translation"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      language: string
      partOfSpeech: string | null
      createdAt: Date
      updatedAt: Date
      wordId: string
    }, ExtArgs["result"]["translation"]>
    composites: {}
  }

  type TranslationGetPayload<S extends boolean | null | undefined | TranslationDefaultArgs> = $Result.GetResult<Prisma.$TranslationPayload, S>

  type TranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationCountAggregateInputType | true
    }

  export interface TranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Translation'], meta: { name: 'Translation' } }
    /**
     * Find zero or one Translation that matches the filter.
     * @param {TranslationFindUniqueArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationFindUniqueArgs>(args: SelectSubset<T, TranslationFindUniqueArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Translation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationFindUniqueOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Translation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationFindFirstArgs>(args?: SelectSubset<T, TranslationFindFirstArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Translation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Translations
     * const translations = await prisma.translation.findMany()
     * 
     * // Get first 10 Translations
     * const translations = await prisma.translation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationWithIdOnly = await prisma.translation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationFindManyArgs>(args?: SelectSubset<T, TranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Translation.
     * @param {TranslationCreateArgs} args - Arguments to create a Translation.
     * @example
     * // Create one Translation
     * const Translation = await prisma.translation.create({
     *   data: {
     *     // ... data to create a Translation
     *   }
     * })
     * 
     */
    create<T extends TranslationCreateArgs>(args: SelectSubset<T, TranslationCreateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Translations.
     * @param {TranslationCreateManyArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationCreateManyArgs>(args?: SelectSubset<T, TranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Translations and returns the data saved in the database.
     * @param {TranslationCreateManyAndReturnArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Translation.
     * @param {TranslationDeleteArgs} args - Arguments to delete one Translation.
     * @example
     * // Delete one Translation
     * const Translation = await prisma.translation.delete({
     *   where: {
     *     // ... filter to delete one Translation
     *   }
     * })
     * 
     */
    delete<T extends TranslationDeleteArgs>(args: SelectSubset<T, TranslationDeleteArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Translation.
     * @param {TranslationUpdateArgs} args - Arguments to update one Translation.
     * @example
     * // Update one Translation
     * const translation = await prisma.translation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationUpdateArgs>(args: SelectSubset<T, TranslationUpdateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Translations.
     * @param {TranslationDeleteManyArgs} args - Arguments to filter Translations to delete.
     * @example
     * // Delete a few Translations
     * const { count } = await prisma.translation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationDeleteManyArgs>(args?: SelectSubset<T, TranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationUpdateManyArgs>(args: SelectSubset<T, TranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations and returns the data updated in the database.
     * @param {TranslationUpdateManyAndReturnArgs} args - Arguments to update many Translations.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Translation.
     * @param {TranslationUpsertArgs} args - Arguments to update or create a Translation.
     * @example
     * // Update or create a Translation
     * const translation = await prisma.translation.upsert({
     *   create: {
     *     // ... data to create a Translation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Translation we want to update
     *   }
     * })
     */
    upsert<T extends TranslationUpsertArgs>(args: SelectSubset<T, TranslationUpsertArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationCountArgs} args - Arguments to filter Translations to count.
     * @example
     * // Count the number of Translations
     * const count = await prisma.translation.count({
     *   where: {
     *     // ... the filter for the Translations we want to count
     *   }
     * })
    **/
    count<T extends TranslationCountArgs>(
      args?: Subset<T, TranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationAggregateArgs>(args: Subset<T, TranslationAggregateArgs>): Prisma.PrismaPromise<GetTranslationAggregateType<T>>

    /**
     * Group by Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupByArgs} args - Group by arguments.
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
      T extends TranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Translation model
   */
  readonly fields: TranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Translation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Translation model
   */
  interface TranslationFieldRefs {
    readonly id: FieldRef<"Translation", 'String'>
    readonly text: FieldRef<"Translation", 'String'>
    readonly language: FieldRef<"Translation", 'String'>
    readonly partOfSpeech: FieldRef<"Translation", 'String'>
    readonly createdAt: FieldRef<"Translation", 'DateTime'>
    readonly updatedAt: FieldRef<"Translation", 'DateTime'>
    readonly wordId: FieldRef<"Translation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Translation findUnique
   */
  export type TranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findUniqueOrThrow
   */
  export type TranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findFirst
   */
  export type TranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findFirstOrThrow
   */
  export type TranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findMany
   */
  export type TranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translations to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation create
   */
  export type TranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a Translation.
     */
    data: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
  }

  /**
   * Translation createMany
   */
  export type TranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Translation createManyAndReturn
   */
  export type TranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Translation update
   */
  export type TranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a Translation.
     */
    data: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
    /**
     * Choose, which Translation to update.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation updateMany
   */
  export type TranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to update.
     */
    limit?: number
  }

  /**
   * Translation updateManyAndReturn
   */
  export type TranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Translation upsert
   */
  export type TranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the Translation to update in case it exists.
     */
    where: TranslationWhereUniqueInput
    /**
     * In case the Translation found by the `where` argument doesn't exist, create a new Translation with this data.
     */
    create: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
    /**
     * In case the Translation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
  }

  /**
   * Translation delete
   */
  export type TranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter which Translation to delete.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation deleteMany
   */
  export type TranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translations to delete
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to delete.
     */
    limit?: number
  }

  /**
   * Translation without action
   */
  export type TranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
  }


  /**
   * Model Example
   */

  export type AggregateExample = {
    _count: ExampleCountAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  export type ExampleMinAggregateOutputType = {
    id: string | null
    yorubaSentence: string | null
    translation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    wordId: string | null
  }

  export type ExampleMaxAggregateOutputType = {
    id: string | null
    yorubaSentence: string | null
    translation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    wordId: string | null
  }

  export type ExampleCountAggregateOutputType = {
    id: number
    yorubaSentence: number
    translation: number
    createdAt: number
    updatedAt: number
    wordId: number
    _all: number
  }


  export type ExampleMinAggregateInputType = {
    id?: true
    yorubaSentence?: true
    translation?: true
    createdAt?: true
    updatedAt?: true
    wordId?: true
  }

  export type ExampleMaxAggregateInputType = {
    id?: true
    yorubaSentence?: true
    translation?: true
    createdAt?: true
    updatedAt?: true
    wordId?: true
  }

  export type ExampleCountAggregateInputType = {
    id?: true
    yorubaSentence?: true
    translation?: true
    createdAt?: true
    updatedAt?: true
    wordId?: true
    _all?: true
  }

  export type ExampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Example to aggregate.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examples
    **/
    _count?: true | ExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleMaxAggregateInputType
  }

  export type GetExampleAggregateType<T extends ExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExample[P]>
      : GetScalarType<T[P], AggregateExample[P]>
  }




  export type ExampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleWhereInput
    orderBy?: ExampleOrderByWithAggregationInput | ExampleOrderByWithAggregationInput[]
    by: ExampleScalarFieldEnum[] | ExampleScalarFieldEnum
    having?: ExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleCountAggregateInputType | true
    _min?: ExampleMinAggregateInputType
    _max?: ExampleMaxAggregateInputType
  }

  export type ExampleGroupByOutputType = {
    id: string
    yorubaSentence: string
    translation: string
    createdAt: Date
    updatedAt: Date
    wordId: string
    _count: ExampleCountAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  type GetExampleGroupByPayload<T extends ExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleGroupByOutputType[P]>
        }
      >
    >


  export type ExampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yorubaSentence?: boolean
    translation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yorubaSentence?: boolean
    translation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yorubaSentence?: boolean
    translation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectScalar = {
    id?: boolean
    yorubaSentence?: boolean
    translation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordId?: boolean
  }

  export type ExampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "yorubaSentence" | "translation" | "createdAt" | "updatedAt" | "wordId", ExtArgs["result"]["example"]>
  export type ExampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type ExampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type ExampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $ExamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Example"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      yorubaSentence: string
      translation: string
      createdAt: Date
      updatedAt: Date
      wordId: string
    }, ExtArgs["result"]["example"]>
    composites: {}
  }

  type ExampleGetPayload<S extends boolean | null | undefined | ExampleDefaultArgs> = $Result.GetResult<Prisma.$ExamplePayload, S>

  type ExampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExampleCountAggregateInputType | true
    }

  export interface ExampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Example'], meta: { name: 'Example' } }
    /**
     * Find zero or one Example that matches the filter.
     * @param {ExampleFindUniqueArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExampleFindUniqueArgs>(args: SelectSubset<T, ExampleFindUniqueArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Example that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExampleFindUniqueOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExampleFindUniqueOrThrowArgs>(args: SelectSubset<T, ExampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Example that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExampleFindFirstArgs>(args?: SelectSubset<T, ExampleFindFirstArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Example that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExampleFindFirstOrThrowArgs>(args?: SelectSubset<T, ExampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examples
     * const examples = await prisma.example.findMany()
     * 
     * // Get first 10 Examples
     * const examples = await prisma.example.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleWithIdOnly = await prisma.example.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExampleFindManyArgs>(args?: SelectSubset<T, ExampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Example.
     * @param {ExampleCreateArgs} args - Arguments to create a Example.
     * @example
     * // Create one Example
     * const Example = await prisma.example.create({
     *   data: {
     *     // ... data to create a Example
     *   }
     * })
     * 
     */
    create<T extends ExampleCreateArgs>(args: SelectSubset<T, ExampleCreateArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examples.
     * @param {ExampleCreateManyArgs} args - Arguments to create many Examples.
     * @example
     * // Create many Examples
     * const example = await prisma.example.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExampleCreateManyArgs>(args?: SelectSubset<T, ExampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Examples and returns the data saved in the database.
     * @param {ExampleCreateManyAndReturnArgs} args - Arguments to create many Examples.
     * @example
     * // Create many Examples
     * const example = await prisma.example.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Examples and only return the `id`
     * const exampleWithIdOnly = await prisma.example.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExampleCreateManyAndReturnArgs>(args?: SelectSubset<T, ExampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Example.
     * @param {ExampleDeleteArgs} args - Arguments to delete one Example.
     * @example
     * // Delete one Example
     * const Example = await prisma.example.delete({
     *   where: {
     *     // ... filter to delete one Example
     *   }
     * })
     * 
     */
    delete<T extends ExampleDeleteArgs>(args: SelectSubset<T, ExampleDeleteArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Example.
     * @param {ExampleUpdateArgs} args - Arguments to update one Example.
     * @example
     * // Update one Example
     * const example = await prisma.example.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExampleUpdateArgs>(args: SelectSubset<T, ExampleUpdateArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examples.
     * @param {ExampleDeleteManyArgs} args - Arguments to filter Examples to delete.
     * @example
     * // Delete a few Examples
     * const { count } = await prisma.example.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExampleDeleteManyArgs>(args?: SelectSubset<T, ExampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExampleUpdateManyArgs>(args: SelectSubset<T, ExampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples and returns the data updated in the database.
     * @param {ExampleUpdateManyAndReturnArgs} args - Arguments to update many Examples.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Examples and only return the `id`
     * const exampleWithIdOnly = await prisma.example.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExampleUpdateManyAndReturnArgs>(args: SelectSubset<T, ExampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Example.
     * @param {ExampleUpsertArgs} args - Arguments to update or create a Example.
     * @example
     * // Update or create a Example
     * const example = await prisma.example.upsert({
     *   create: {
     *     // ... data to create a Example
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Example we want to update
     *   }
     * })
     */
    upsert<T extends ExampleUpsertArgs>(args: SelectSubset<T, ExampleUpsertArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleCountArgs} args - Arguments to filter Examples to count.
     * @example
     * // Count the number of Examples
     * const count = await prisma.example.count({
     *   where: {
     *     // ... the filter for the Examples we want to count
     *   }
     * })
    **/
    count<T extends ExampleCountArgs>(
      args?: Subset<T, ExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExampleAggregateArgs>(args: Subset<T, ExampleAggregateArgs>): Prisma.PrismaPromise<GetExampleAggregateType<T>>

    /**
     * Group by Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleGroupByArgs} args - Group by arguments.
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
      T extends ExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleGroupByArgs['orderBy'] }
        : { orderBy?: ExampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Example model
   */
  readonly fields: ExampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Example.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Example model
   */
  interface ExampleFieldRefs {
    readonly id: FieldRef<"Example", 'String'>
    readonly yorubaSentence: FieldRef<"Example", 'String'>
    readonly translation: FieldRef<"Example", 'String'>
    readonly createdAt: FieldRef<"Example", 'DateTime'>
    readonly updatedAt: FieldRef<"Example", 'DateTime'>
    readonly wordId: FieldRef<"Example", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Example findUnique
   */
  export type ExampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findUniqueOrThrow
   */
  export type ExampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findFirst
   */
  export type ExampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example findFirstOrThrow
   */
  export type ExampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example findMany
   */
  export type ExampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Examples to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example create
   */
  export type ExampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The data needed to create a Example.
     */
    data: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
  }

  /**
   * Example createMany
   */
  export type ExampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examples.
     */
    data: ExampleCreateManyInput | ExampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Example createManyAndReturn
   */
  export type ExampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * The data used to create many Examples.
     */
    data: ExampleCreateManyInput | ExampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Example update
   */
  export type ExampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The data needed to update a Example.
     */
    data: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
    /**
     * Choose, which Example to update.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example updateMany
   */
  export type ExampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to update.
     */
    limit?: number
  }

  /**
   * Example updateManyAndReturn
   */
  export type ExampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Example upsert
   */
  export type ExampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The filter to search for the Example to update in case it exists.
     */
    where: ExampleWhereUniqueInput
    /**
     * In case the Example found by the `where` argument doesn't exist, create a new Example with this data.
     */
    create: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
    /**
     * In case the Example was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
  }

  /**
   * Example delete
   */
  export type ExampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter which Example to delete.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example deleteMany
   */
  export type ExampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examples to delete
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to delete.
     */
    limit?: number
  }

  /**
   * Example without action
   */
  export type ExampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
  }


  /**
   * Model Alphabet
   */

  export type AggregateAlphabet = {
    _count: AlphabetCountAggregateOutputType | null
    _min: AlphabetMinAggregateOutputType | null
    _max: AlphabetMaxAggregateOutputType | null
  }

  export type AlphabetMinAggregateOutputType = {
    id: string | null
    letter: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlphabetMaxAggregateOutputType = {
    id: string | null
    letter: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlphabetCountAggregateOutputType = {
    id: number
    letter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlphabetMinAggregateInputType = {
    id?: true
    letter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlphabetMaxAggregateInputType = {
    id?: true
    letter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlphabetCountAggregateInputType = {
    id?: true
    letter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlphabetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alphabet to aggregate.
     */
    where?: AlphabetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alphabets to fetch.
     */
    orderBy?: AlphabetOrderByWithRelationInput | AlphabetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlphabetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alphabets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alphabets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alphabets
    **/
    _count?: true | AlphabetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlphabetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlphabetMaxAggregateInputType
  }

  export type GetAlphabetAggregateType<T extends AlphabetAggregateArgs> = {
        [P in keyof T & keyof AggregateAlphabet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlphabet[P]>
      : GetScalarType<T[P], AggregateAlphabet[P]>
  }




  export type AlphabetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlphabetWhereInput
    orderBy?: AlphabetOrderByWithAggregationInput | AlphabetOrderByWithAggregationInput[]
    by: AlphabetScalarFieldEnum[] | AlphabetScalarFieldEnum
    having?: AlphabetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlphabetCountAggregateInputType | true
    _min?: AlphabetMinAggregateInputType
    _max?: AlphabetMaxAggregateInputType
  }

  export type AlphabetGroupByOutputType = {
    id: string
    letter: string
    createdAt: Date
    updatedAt: Date
    _count: AlphabetCountAggregateOutputType | null
    _min: AlphabetMinAggregateOutputType | null
    _max: AlphabetMaxAggregateOutputType | null
  }

  type GetAlphabetGroupByPayload<T extends AlphabetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlphabetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlphabetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlphabetGroupByOutputType[P]>
            : GetScalarType<T[P], AlphabetGroupByOutputType[P]>
        }
      >
    >


  export type AlphabetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    letter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    words?: boolean | Alphabet$wordsArgs<ExtArgs>
    _count?: boolean | AlphabetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alphabet"]>

  export type AlphabetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    letter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alphabet"]>

  export type AlphabetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    letter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alphabet"]>

  export type AlphabetSelectScalar = {
    id?: boolean
    letter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlphabetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "letter" | "createdAt" | "updatedAt", ExtArgs["result"]["alphabet"]>
  export type AlphabetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | Alphabet$wordsArgs<ExtArgs>
    _count?: boolean | AlphabetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlphabetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlphabetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlphabetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alphabet"
    objects: {
      words: Prisma.$WordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      letter: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alphabet"]>
    composites: {}
  }

  type AlphabetGetPayload<S extends boolean | null | undefined | AlphabetDefaultArgs> = $Result.GetResult<Prisma.$AlphabetPayload, S>

  type AlphabetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlphabetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlphabetCountAggregateInputType | true
    }

  export interface AlphabetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alphabet'], meta: { name: 'Alphabet' } }
    /**
     * Find zero or one Alphabet that matches the filter.
     * @param {AlphabetFindUniqueArgs} args - Arguments to find a Alphabet
     * @example
     * // Get one Alphabet
     * const alphabet = await prisma.alphabet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlphabetFindUniqueArgs>(args: SelectSubset<T, AlphabetFindUniqueArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alphabet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlphabetFindUniqueOrThrowArgs} args - Arguments to find a Alphabet
     * @example
     * // Get one Alphabet
     * const alphabet = await prisma.alphabet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlphabetFindUniqueOrThrowArgs>(args: SelectSubset<T, AlphabetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alphabet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetFindFirstArgs} args - Arguments to find a Alphabet
     * @example
     * // Get one Alphabet
     * const alphabet = await prisma.alphabet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlphabetFindFirstArgs>(args?: SelectSubset<T, AlphabetFindFirstArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alphabet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetFindFirstOrThrowArgs} args - Arguments to find a Alphabet
     * @example
     * // Get one Alphabet
     * const alphabet = await prisma.alphabet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlphabetFindFirstOrThrowArgs>(args?: SelectSubset<T, AlphabetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alphabets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alphabets
     * const alphabets = await prisma.alphabet.findMany()
     * 
     * // Get first 10 Alphabets
     * const alphabets = await prisma.alphabet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alphabetWithIdOnly = await prisma.alphabet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlphabetFindManyArgs>(args?: SelectSubset<T, AlphabetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alphabet.
     * @param {AlphabetCreateArgs} args - Arguments to create a Alphabet.
     * @example
     * // Create one Alphabet
     * const Alphabet = await prisma.alphabet.create({
     *   data: {
     *     // ... data to create a Alphabet
     *   }
     * })
     * 
     */
    create<T extends AlphabetCreateArgs>(args: SelectSubset<T, AlphabetCreateArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alphabets.
     * @param {AlphabetCreateManyArgs} args - Arguments to create many Alphabets.
     * @example
     * // Create many Alphabets
     * const alphabet = await prisma.alphabet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlphabetCreateManyArgs>(args?: SelectSubset<T, AlphabetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alphabets and returns the data saved in the database.
     * @param {AlphabetCreateManyAndReturnArgs} args - Arguments to create many Alphabets.
     * @example
     * // Create many Alphabets
     * const alphabet = await prisma.alphabet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alphabets and only return the `id`
     * const alphabetWithIdOnly = await prisma.alphabet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlphabetCreateManyAndReturnArgs>(args?: SelectSubset<T, AlphabetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alphabet.
     * @param {AlphabetDeleteArgs} args - Arguments to delete one Alphabet.
     * @example
     * // Delete one Alphabet
     * const Alphabet = await prisma.alphabet.delete({
     *   where: {
     *     // ... filter to delete one Alphabet
     *   }
     * })
     * 
     */
    delete<T extends AlphabetDeleteArgs>(args: SelectSubset<T, AlphabetDeleteArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alphabet.
     * @param {AlphabetUpdateArgs} args - Arguments to update one Alphabet.
     * @example
     * // Update one Alphabet
     * const alphabet = await prisma.alphabet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlphabetUpdateArgs>(args: SelectSubset<T, AlphabetUpdateArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alphabets.
     * @param {AlphabetDeleteManyArgs} args - Arguments to filter Alphabets to delete.
     * @example
     * // Delete a few Alphabets
     * const { count } = await prisma.alphabet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlphabetDeleteManyArgs>(args?: SelectSubset<T, AlphabetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alphabets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alphabets
     * const alphabet = await prisma.alphabet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlphabetUpdateManyArgs>(args: SelectSubset<T, AlphabetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alphabets and returns the data updated in the database.
     * @param {AlphabetUpdateManyAndReturnArgs} args - Arguments to update many Alphabets.
     * @example
     * // Update many Alphabets
     * const alphabet = await prisma.alphabet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alphabets and only return the `id`
     * const alphabetWithIdOnly = await prisma.alphabet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlphabetUpdateManyAndReturnArgs>(args: SelectSubset<T, AlphabetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alphabet.
     * @param {AlphabetUpsertArgs} args - Arguments to update or create a Alphabet.
     * @example
     * // Update or create a Alphabet
     * const alphabet = await prisma.alphabet.upsert({
     *   create: {
     *     // ... data to create a Alphabet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alphabet we want to update
     *   }
     * })
     */
    upsert<T extends AlphabetUpsertArgs>(args: SelectSubset<T, AlphabetUpsertArgs<ExtArgs>>): Prisma__AlphabetClient<$Result.GetResult<Prisma.$AlphabetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alphabets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetCountArgs} args - Arguments to filter Alphabets to count.
     * @example
     * // Count the number of Alphabets
     * const count = await prisma.alphabet.count({
     *   where: {
     *     // ... the filter for the Alphabets we want to count
     *   }
     * })
    **/
    count<T extends AlphabetCountArgs>(
      args?: Subset<T, AlphabetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlphabetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alphabet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlphabetAggregateArgs>(args: Subset<T, AlphabetAggregateArgs>): Prisma.PrismaPromise<GetAlphabetAggregateType<T>>

    /**
     * Group by Alphabet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlphabetGroupByArgs} args - Group by arguments.
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
      T extends AlphabetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlphabetGroupByArgs['orderBy'] }
        : { orderBy?: AlphabetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlphabetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlphabetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alphabet model
   */
  readonly fields: AlphabetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alphabet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlphabetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    words<T extends Alphabet$wordsArgs<ExtArgs> = {}>(args?: Subset<T, Alphabet$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alphabet model
   */
  interface AlphabetFieldRefs {
    readonly id: FieldRef<"Alphabet", 'String'>
    readonly letter: FieldRef<"Alphabet", 'String'>
    readonly createdAt: FieldRef<"Alphabet", 'DateTime'>
    readonly updatedAt: FieldRef<"Alphabet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alphabet findUnique
   */
  export type AlphabetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * Filter, which Alphabet to fetch.
     */
    where: AlphabetWhereUniqueInput
  }

  /**
   * Alphabet findUniqueOrThrow
   */
  export type AlphabetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * Filter, which Alphabet to fetch.
     */
    where: AlphabetWhereUniqueInput
  }

  /**
   * Alphabet findFirst
   */
  export type AlphabetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * Filter, which Alphabet to fetch.
     */
    where?: AlphabetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alphabets to fetch.
     */
    orderBy?: AlphabetOrderByWithRelationInput | AlphabetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alphabets.
     */
    cursor?: AlphabetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alphabets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alphabets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alphabets.
     */
    distinct?: AlphabetScalarFieldEnum | AlphabetScalarFieldEnum[]
  }

  /**
   * Alphabet findFirstOrThrow
   */
  export type AlphabetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * Filter, which Alphabet to fetch.
     */
    where?: AlphabetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alphabets to fetch.
     */
    orderBy?: AlphabetOrderByWithRelationInput | AlphabetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alphabets.
     */
    cursor?: AlphabetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alphabets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alphabets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alphabets.
     */
    distinct?: AlphabetScalarFieldEnum | AlphabetScalarFieldEnum[]
  }

  /**
   * Alphabet findMany
   */
  export type AlphabetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * Filter, which Alphabets to fetch.
     */
    where?: AlphabetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alphabets to fetch.
     */
    orderBy?: AlphabetOrderByWithRelationInput | AlphabetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alphabets.
     */
    cursor?: AlphabetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alphabets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alphabets.
     */
    skip?: number
    distinct?: AlphabetScalarFieldEnum | AlphabetScalarFieldEnum[]
  }

  /**
   * Alphabet create
   */
  export type AlphabetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * The data needed to create a Alphabet.
     */
    data: XOR<AlphabetCreateInput, AlphabetUncheckedCreateInput>
  }

  /**
   * Alphabet createMany
   */
  export type AlphabetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alphabets.
     */
    data: AlphabetCreateManyInput | AlphabetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alphabet createManyAndReturn
   */
  export type AlphabetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * The data used to create many Alphabets.
     */
    data: AlphabetCreateManyInput | AlphabetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alphabet update
   */
  export type AlphabetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * The data needed to update a Alphabet.
     */
    data: XOR<AlphabetUpdateInput, AlphabetUncheckedUpdateInput>
    /**
     * Choose, which Alphabet to update.
     */
    where: AlphabetWhereUniqueInput
  }

  /**
   * Alphabet updateMany
   */
  export type AlphabetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alphabets.
     */
    data: XOR<AlphabetUpdateManyMutationInput, AlphabetUncheckedUpdateManyInput>
    /**
     * Filter which Alphabets to update
     */
    where?: AlphabetWhereInput
    /**
     * Limit how many Alphabets to update.
     */
    limit?: number
  }

  /**
   * Alphabet updateManyAndReturn
   */
  export type AlphabetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * The data used to update Alphabets.
     */
    data: XOR<AlphabetUpdateManyMutationInput, AlphabetUncheckedUpdateManyInput>
    /**
     * Filter which Alphabets to update
     */
    where?: AlphabetWhereInput
    /**
     * Limit how many Alphabets to update.
     */
    limit?: number
  }

  /**
   * Alphabet upsert
   */
  export type AlphabetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * The filter to search for the Alphabet to update in case it exists.
     */
    where: AlphabetWhereUniqueInput
    /**
     * In case the Alphabet found by the `where` argument doesn't exist, create a new Alphabet with this data.
     */
    create: XOR<AlphabetCreateInput, AlphabetUncheckedCreateInput>
    /**
     * In case the Alphabet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlphabetUpdateInput, AlphabetUncheckedUpdateInput>
  }

  /**
   * Alphabet delete
   */
  export type AlphabetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
    /**
     * Filter which Alphabet to delete.
     */
    where: AlphabetWhereUniqueInput
  }

  /**
   * Alphabet deleteMany
   */
  export type AlphabetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alphabets to delete
     */
    where?: AlphabetWhereInput
    /**
     * Limit how many Alphabets to delete.
     */
    limit?: number
  }

  /**
   * Alphabet.words
   */
  export type Alphabet$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Alphabet without action
   */
  export type AlphabetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alphabet
     */
    select?: AlphabetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alphabet
     */
    omit?: AlphabetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlphabetInclude<ExtArgs> | null
  }


  /**
   * Model Featured
   */

  export type AggregateFeatured = {
    _count: FeaturedCountAggregateOutputType | null
    _min: FeaturedMinAggregateOutputType | null
    _max: FeaturedMaxAggregateOutputType | null
  }

  export type FeaturedMinAggregateOutputType = {
    id: string | null
    wordId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeaturedMaxAggregateOutputType = {
    id: string | null
    wordId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeaturedCountAggregateOutputType = {
    id: number
    wordId: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeaturedMinAggregateInputType = {
    id?: true
    wordId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeaturedMaxAggregateInputType = {
    id?: true
    wordId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeaturedCountAggregateInputType = {
    id?: true
    wordId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeaturedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Featured to aggregate.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Featureds
    **/
    _count?: true | FeaturedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedMaxAggregateInputType
  }

  export type GetFeaturedAggregateType<T extends FeaturedAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatured]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatured[P]>
      : GetScalarType<T[P], AggregateFeatured[P]>
  }




  export type FeaturedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedWhereInput
    orderBy?: FeaturedOrderByWithAggregationInput | FeaturedOrderByWithAggregationInput[]
    by: FeaturedScalarFieldEnum[] | FeaturedScalarFieldEnum
    having?: FeaturedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedCountAggregateInputType | true
    _min?: FeaturedMinAggregateInputType
    _max?: FeaturedMaxAggregateInputType
  }

  export type FeaturedGroupByOutputType = {
    id: string
    wordId: string
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FeaturedCountAggregateOutputType | null
    _min: FeaturedMinAggregateOutputType | null
    _max: FeaturedMaxAggregateOutputType | null
  }

  type GetFeaturedGroupByPayload<T extends FeaturedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featured"]>

  export type FeaturedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featured"]>

  export type FeaturedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featured"]>

  export type FeaturedSelectScalar = {
    id?: boolean
    wordId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeaturedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wordId" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["featured"]>
  export type FeaturedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type FeaturedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type FeaturedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $FeaturedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Featured"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wordId: string
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featured"]>
    composites: {}
  }

  type FeaturedGetPayload<S extends boolean | null | undefined | FeaturedDefaultArgs> = $Result.GetResult<Prisma.$FeaturedPayload, S>

  type FeaturedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedCountAggregateInputType | true
    }

  export interface FeaturedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Featured'], meta: { name: 'Featured' } }
    /**
     * Find zero or one Featured that matches the filter.
     * @param {FeaturedFindUniqueArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedFindUniqueArgs>(args: SelectSubset<T, FeaturedFindUniqueArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Featured that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedFindUniqueOrThrowArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Featured that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedFindFirstArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedFindFirstArgs>(args?: SelectSubset<T, FeaturedFindFirstArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Featured that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedFindFirstOrThrowArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Featureds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Featureds
     * const featureds = await prisma.featured.findMany()
     * 
     * // Get first 10 Featureds
     * const featureds = await prisma.featured.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredWithIdOnly = await prisma.featured.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedFindManyArgs>(args?: SelectSubset<T, FeaturedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Featured.
     * @param {FeaturedCreateArgs} args - Arguments to create a Featured.
     * @example
     * // Create one Featured
     * const Featured = await prisma.featured.create({
     *   data: {
     *     // ... data to create a Featured
     *   }
     * })
     * 
     */
    create<T extends FeaturedCreateArgs>(args: SelectSubset<T, FeaturedCreateArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Featureds.
     * @param {FeaturedCreateManyArgs} args - Arguments to create many Featureds.
     * @example
     * // Create many Featureds
     * const featured = await prisma.featured.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedCreateManyArgs>(args?: SelectSubset<T, FeaturedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Featureds and returns the data saved in the database.
     * @param {FeaturedCreateManyAndReturnArgs} args - Arguments to create many Featureds.
     * @example
     * // Create many Featureds
     * const featured = await prisma.featured.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Featureds and only return the `id`
     * const featuredWithIdOnly = await prisma.featured.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeaturedCreateManyAndReturnArgs>(args?: SelectSubset<T, FeaturedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Featured.
     * @param {FeaturedDeleteArgs} args - Arguments to delete one Featured.
     * @example
     * // Delete one Featured
     * const Featured = await prisma.featured.delete({
     *   where: {
     *     // ... filter to delete one Featured
     *   }
     * })
     * 
     */
    delete<T extends FeaturedDeleteArgs>(args: SelectSubset<T, FeaturedDeleteArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Featured.
     * @param {FeaturedUpdateArgs} args - Arguments to update one Featured.
     * @example
     * // Update one Featured
     * const featured = await prisma.featured.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedUpdateArgs>(args: SelectSubset<T, FeaturedUpdateArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Featureds.
     * @param {FeaturedDeleteManyArgs} args - Arguments to filter Featureds to delete.
     * @example
     * // Delete a few Featureds
     * const { count } = await prisma.featured.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedDeleteManyArgs>(args?: SelectSubset<T, FeaturedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Featureds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Featureds
     * const featured = await prisma.featured.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedUpdateManyArgs>(args: SelectSubset<T, FeaturedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Featureds and returns the data updated in the database.
     * @param {FeaturedUpdateManyAndReturnArgs} args - Arguments to update many Featureds.
     * @example
     * // Update many Featureds
     * const featured = await prisma.featured.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Featureds and only return the `id`
     * const featuredWithIdOnly = await prisma.featured.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeaturedUpdateManyAndReturnArgs>(args: SelectSubset<T, FeaturedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Featured.
     * @param {FeaturedUpsertArgs} args - Arguments to update or create a Featured.
     * @example
     * // Update or create a Featured
     * const featured = await prisma.featured.upsert({
     *   create: {
     *     // ... data to create a Featured
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Featured we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedUpsertArgs>(args: SelectSubset<T, FeaturedUpsertArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Featureds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedCountArgs} args - Arguments to filter Featureds to count.
     * @example
     * // Count the number of Featureds
     * const count = await prisma.featured.count({
     *   where: {
     *     // ... the filter for the Featureds we want to count
     *   }
     * })
    **/
    count<T extends FeaturedCountArgs>(
      args?: Subset<T, FeaturedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Featured.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeaturedAggregateArgs>(args: Subset<T, FeaturedAggregateArgs>): Prisma.PrismaPromise<GetFeaturedAggregateType<T>>

    /**
     * Group by Featured.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedGroupByArgs} args - Group by arguments.
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
      T extends FeaturedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeaturedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Featured model
   */
  readonly fields: FeaturedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Featured.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Featured model
   */
  interface FeaturedFieldRefs {
    readonly id: FieldRef<"Featured", 'String'>
    readonly wordId: FieldRef<"Featured", 'String'>
    readonly startDate: FieldRef<"Featured", 'DateTime'>
    readonly endDate: FieldRef<"Featured", 'DateTime'>
    readonly createdAt: FieldRef<"Featured", 'DateTime'>
    readonly updatedAt: FieldRef<"Featured", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Featured findUnique
   */
  export type FeaturedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured findUniqueOrThrow
   */
  export type FeaturedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured findFirst
   */
  export type FeaturedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Featureds.
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Featureds.
     */
    distinct?: FeaturedScalarFieldEnum | FeaturedScalarFieldEnum[]
  }

  /**
   * Featured findFirstOrThrow
   */
  export type FeaturedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Featureds.
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Featureds.
     */
    distinct?: FeaturedScalarFieldEnum | FeaturedScalarFieldEnum[]
  }

  /**
   * Featured findMany
   */
  export type FeaturedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featureds to fetch.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Featureds.
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    distinct?: FeaturedScalarFieldEnum | FeaturedScalarFieldEnum[]
  }

  /**
   * Featured create
   */
  export type FeaturedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * The data needed to create a Featured.
     */
    data: XOR<FeaturedCreateInput, FeaturedUncheckedCreateInput>
  }

  /**
   * Featured createMany
   */
  export type FeaturedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Featureds.
     */
    data: FeaturedCreateManyInput | FeaturedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Featured createManyAndReturn
   */
  export type FeaturedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * The data used to create many Featureds.
     */
    data: FeaturedCreateManyInput | FeaturedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Featured update
   */
  export type FeaturedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * The data needed to update a Featured.
     */
    data: XOR<FeaturedUpdateInput, FeaturedUncheckedUpdateInput>
    /**
     * Choose, which Featured to update.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured updateMany
   */
  export type FeaturedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Featureds.
     */
    data: XOR<FeaturedUpdateManyMutationInput, FeaturedUncheckedUpdateManyInput>
    /**
     * Filter which Featureds to update
     */
    where?: FeaturedWhereInput
    /**
     * Limit how many Featureds to update.
     */
    limit?: number
  }

  /**
   * Featured updateManyAndReturn
   */
  export type FeaturedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * The data used to update Featureds.
     */
    data: XOR<FeaturedUpdateManyMutationInput, FeaturedUncheckedUpdateManyInput>
    /**
     * Filter which Featureds to update
     */
    where?: FeaturedWhereInput
    /**
     * Limit how many Featureds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Featured upsert
   */
  export type FeaturedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * The filter to search for the Featured to update in case it exists.
     */
    where: FeaturedWhereUniqueInput
    /**
     * In case the Featured found by the `where` argument doesn't exist, create a new Featured with this data.
     */
    create: XOR<FeaturedCreateInput, FeaturedUncheckedCreateInput>
    /**
     * In case the Featured was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedUpdateInput, FeaturedUncheckedUpdateInput>
  }

  /**
   * Featured delete
   */
  export type FeaturedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter which Featured to delete.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured deleteMany
   */
  export type FeaturedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Featureds to delete
     */
    where?: FeaturedWhereInput
    /**
     * Limit how many Featureds to delete.
     */
    limit?: number
  }

  /**
   * Featured without action
   */
  export type FeaturedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    passwordHash: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    searchHistory?: boolean | User$searchHistoryArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchHistory?: boolean | User$searchHistoryArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      searchHistory: Prisma.$SearchHistoryPayload<ExtArgs>[]
      bookmarks: Prisma.$UserBookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      passwordHash: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    searchHistory<T extends User$searchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$searchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.searchHistory
   */
  export type User$searchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    where?: SearchHistoryWhereInput
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    cursor?: SearchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    where?: UserBookmarkWhereInput
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    cursor?: UserBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserBookmark
   */

  export type AggregateUserBookmark = {
    _count: UserBookmarkCountAggregateOutputType | null
    _min: UserBookmarkMinAggregateOutputType | null
    _max: UserBookmarkMaxAggregateOutputType | null
  }

  export type UserBookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBookmarkCountAggregateOutputType = {
    id: number
    userId: number
    wordId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserBookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBookmark to aggregate.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBookmarks
    **/
    _count?: true | UserBookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBookmarkMaxAggregateInputType
  }

  export type GetUserBookmarkAggregateType<T extends UserBookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBookmark[P]>
      : GetScalarType<T[P], AggregateUserBookmark[P]>
  }




  export type UserBookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookmarkWhereInput
    orderBy?: UserBookmarkOrderByWithAggregationInput | UserBookmarkOrderByWithAggregationInput[]
    by: UserBookmarkScalarFieldEnum[] | UserBookmarkScalarFieldEnum
    having?: UserBookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBookmarkCountAggregateInputType | true
    _min?: UserBookmarkMinAggregateInputType
    _max?: UserBookmarkMaxAggregateInputType
  }

  export type UserBookmarkGroupByOutputType = {
    id: string
    userId: string
    wordId: string
    createdAt: Date
    updatedAt: Date
    _count: UserBookmarkCountAggregateOutputType | null
    _min: UserBookmarkMinAggregateOutputType | null
    _max: UserBookmarkMaxAggregateOutputType | null
  }

  type GetUserBookmarkGroupByPayload<T extends UserBookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], UserBookmarkGroupByOutputType[P]>
        }
      >
    >


  export type UserBookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBookmark"]>

  export type UserBookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBookmark"]>

  export type UserBookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBookmark"]>

  export type UserBookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserBookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wordId" | "createdAt" | "updatedAt", ExtArgs["result"]["userBookmark"]>
  export type UserBookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type UserBookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type UserBookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $UserBookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      wordId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userBookmark"]>
    composites: {}
  }

  type UserBookmarkGetPayload<S extends boolean | null | undefined | UserBookmarkDefaultArgs> = $Result.GetResult<Prisma.$UserBookmarkPayload, S>

  type UserBookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBookmarkCountAggregateInputType | true
    }

  export interface UserBookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBookmark'], meta: { name: 'UserBookmark' } }
    /**
     * Find zero or one UserBookmark that matches the filter.
     * @param {UserBookmarkFindUniqueArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBookmarkFindUniqueArgs>(args: SelectSubset<T, UserBookmarkFindUniqueArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBookmarkFindUniqueOrThrowArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkFindFirstArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBookmarkFindFirstArgs>(args?: SelectSubset<T, UserBookmarkFindFirstArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkFindFirstOrThrowArgs} args - Arguments to find a UserBookmark
     * @example
     * // Get one UserBookmark
     * const userBookmark = await prisma.userBookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBookmarks
     * const userBookmarks = await prisma.userBookmark.findMany()
     * 
     * // Get first 10 UserBookmarks
     * const userBookmarks = await prisma.userBookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBookmarkWithIdOnly = await prisma.userBookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBookmarkFindManyArgs>(args?: SelectSubset<T, UserBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBookmark.
     * @param {UserBookmarkCreateArgs} args - Arguments to create a UserBookmark.
     * @example
     * // Create one UserBookmark
     * const UserBookmark = await prisma.userBookmark.create({
     *   data: {
     *     // ... data to create a UserBookmark
     *   }
     * })
     * 
     */
    create<T extends UserBookmarkCreateArgs>(args: SelectSubset<T, UserBookmarkCreateArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBookmarks.
     * @param {UserBookmarkCreateManyArgs} args - Arguments to create many UserBookmarks.
     * @example
     * // Create many UserBookmarks
     * const userBookmark = await prisma.userBookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBookmarkCreateManyArgs>(args?: SelectSubset<T, UserBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBookmarks and returns the data saved in the database.
     * @param {UserBookmarkCreateManyAndReturnArgs} args - Arguments to create many UserBookmarks.
     * @example
     * // Create many UserBookmarks
     * const userBookmark = await prisma.userBookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBookmarks and only return the `id`
     * const userBookmarkWithIdOnly = await prisma.userBookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBookmark.
     * @param {UserBookmarkDeleteArgs} args - Arguments to delete one UserBookmark.
     * @example
     * // Delete one UserBookmark
     * const UserBookmark = await prisma.userBookmark.delete({
     *   where: {
     *     // ... filter to delete one UserBookmark
     *   }
     * })
     * 
     */
    delete<T extends UserBookmarkDeleteArgs>(args: SelectSubset<T, UserBookmarkDeleteArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBookmark.
     * @param {UserBookmarkUpdateArgs} args - Arguments to update one UserBookmark.
     * @example
     * // Update one UserBookmark
     * const userBookmark = await prisma.userBookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBookmarkUpdateArgs>(args: SelectSubset<T, UserBookmarkUpdateArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBookmarks.
     * @param {UserBookmarkDeleteManyArgs} args - Arguments to filter UserBookmarks to delete.
     * @example
     * // Delete a few UserBookmarks
     * const { count } = await prisma.userBookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBookmarkDeleteManyArgs>(args?: SelectSubset<T, UserBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBookmarks
     * const userBookmark = await prisma.userBookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBookmarkUpdateManyArgs>(args: SelectSubset<T, UserBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBookmarks and returns the data updated in the database.
     * @param {UserBookmarkUpdateManyAndReturnArgs} args - Arguments to update many UserBookmarks.
     * @example
     * // Update many UserBookmarks
     * const userBookmark = await prisma.userBookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBookmarks and only return the `id`
     * const userBookmarkWithIdOnly = await prisma.userBookmark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBookmark.
     * @param {UserBookmarkUpsertArgs} args - Arguments to update or create a UserBookmark.
     * @example
     * // Update or create a UserBookmark
     * const userBookmark = await prisma.userBookmark.upsert({
     *   create: {
     *     // ... data to create a UserBookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBookmark we want to update
     *   }
     * })
     */
    upsert<T extends UserBookmarkUpsertArgs>(args: SelectSubset<T, UserBookmarkUpsertArgs<ExtArgs>>): Prisma__UserBookmarkClient<$Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkCountArgs} args - Arguments to filter UserBookmarks to count.
     * @example
     * // Count the number of UserBookmarks
     * const count = await prisma.userBookmark.count({
     *   where: {
     *     // ... the filter for the UserBookmarks we want to count
     *   }
     * })
    **/
    count<T extends UserBookmarkCountArgs>(
      args?: Subset<T, UserBookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBookmarkAggregateArgs>(args: Subset<T, UserBookmarkAggregateArgs>): Prisma.PrismaPromise<GetUserBookmarkAggregateType<T>>

    /**
     * Group by UserBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookmarkGroupByArgs} args - Group by arguments.
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
      T extends UserBookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBookmarkGroupByArgs['orderBy'] }
        : { orderBy?: UserBookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBookmark model
   */
  readonly fields: UserBookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserBookmark model
   */
  interface UserBookmarkFieldRefs {
    readonly id: FieldRef<"UserBookmark", 'String'>
    readonly userId: FieldRef<"UserBookmark", 'String'>
    readonly wordId: FieldRef<"UserBookmark", 'String'>
    readonly createdAt: FieldRef<"UserBookmark", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBookmark findUnique
   */
  export type UserBookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark findUniqueOrThrow
   */
  export type UserBookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark findFirst
   */
  export type UserBookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBookmarks.
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBookmarks.
     */
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * UserBookmark findFirstOrThrow
   */
  export type UserBookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmark to fetch.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBookmarks.
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBookmarks.
     */
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * UserBookmark findMany
   */
  export type UserBookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which UserBookmarks to fetch.
     */
    where?: UserBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBookmarks to fetch.
     */
    orderBy?: UserBookmarkOrderByWithRelationInput | UserBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBookmarks.
     */
    cursor?: UserBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBookmarks.
     */
    skip?: number
    distinct?: UserBookmarkScalarFieldEnum | UserBookmarkScalarFieldEnum[]
  }

  /**
   * UserBookmark create
   */
  export type UserBookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBookmark.
     */
    data: XOR<UserBookmarkCreateInput, UserBookmarkUncheckedCreateInput>
  }

  /**
   * UserBookmark createMany
   */
  export type UserBookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBookmarks.
     */
    data: UserBookmarkCreateManyInput | UserBookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBookmark createManyAndReturn
   */
  export type UserBookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many UserBookmarks.
     */
    data: UserBookmarkCreateManyInput | UserBookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBookmark update
   */
  export type UserBookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBookmark.
     */
    data: XOR<UserBookmarkUpdateInput, UserBookmarkUncheckedUpdateInput>
    /**
     * Choose, which UserBookmark to update.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark updateMany
   */
  export type UserBookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBookmarks.
     */
    data: XOR<UserBookmarkUpdateManyMutationInput, UserBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which UserBookmarks to update
     */
    where?: UserBookmarkWhereInput
    /**
     * Limit how many UserBookmarks to update.
     */
    limit?: number
  }

  /**
   * UserBookmark updateManyAndReturn
   */
  export type UserBookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * The data used to update UserBookmarks.
     */
    data: XOR<UserBookmarkUpdateManyMutationInput, UserBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which UserBookmarks to update
     */
    where?: UserBookmarkWhereInput
    /**
     * Limit how many UserBookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBookmark upsert
   */
  export type UserBookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBookmark to update in case it exists.
     */
    where: UserBookmarkWhereUniqueInput
    /**
     * In case the UserBookmark found by the `where` argument doesn't exist, create a new UserBookmark with this data.
     */
    create: XOR<UserBookmarkCreateInput, UserBookmarkUncheckedCreateInput>
    /**
     * In case the UserBookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBookmarkUpdateInput, UserBookmarkUncheckedUpdateInput>
  }

  /**
   * UserBookmark delete
   */
  export type UserBookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
    /**
     * Filter which UserBookmark to delete.
     */
    where: UserBookmarkWhereUniqueInput
  }

  /**
   * UserBookmark deleteMany
   */
  export type UserBookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBookmarks to delete
     */
    where?: UserBookmarkWhereInput
    /**
     * Limit how many UserBookmarks to delete.
     */
    limit?: number
  }

  /**
   * UserBookmark without action
   */
  export type UserBookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBookmark
     */
    select?: UserBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBookmark
     */
    omit?: UserBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookmarkInclude<ExtArgs> | null
  }


  /**
   * Model SearchHistory
   */

  export type AggregateSearchHistory = {
    _count: SearchHistoryCountAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  export type SearchHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    createdAt: Date | null
  }

  export type SearchHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    createdAt: Date | null
  }

  export type SearchHistoryCountAggregateOutputType = {
    id: number
    userId: number
    wordId: number
    createdAt: number
    _all: number
  }


  export type SearchHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    createdAt?: true
  }

  export type SearchHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    createdAt?: true
  }

  export type SearchHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    createdAt?: true
    _all?: true
  }

  export type SearchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistory to aggregate.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchHistories
    **/
    _count?: true | SearchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type GetSearchHistoryAggregateType<T extends SearchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchHistory[P]>
      : GetScalarType<T[P], AggregateSearchHistory[P]>
  }




  export type SearchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
    orderBy?: SearchHistoryOrderByWithAggregationInput | SearchHistoryOrderByWithAggregationInput[]
    by: SearchHistoryScalarFieldEnum[] | SearchHistoryScalarFieldEnum
    having?: SearchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchHistoryCountAggregateInputType | true
    _min?: SearchHistoryMinAggregateInputType
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type SearchHistoryGroupByOutputType = {
    id: string
    userId: string
    wordId: string
    createdAt: Date
    _count: SearchHistoryCountAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  type GetSearchHistoryGroupByPayload<T extends SearchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SearchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    wordId?: boolean
    createdAt?: boolean
  }

  export type SearchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wordId" | "createdAt", ExtArgs["result"]["searchHistory"]>
  export type SearchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type SearchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type SearchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $SearchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      wordId: string
      createdAt: Date
    }, ExtArgs["result"]["searchHistory"]>
    composites: {}
  }

  type SearchHistoryGetPayload<S extends boolean | null | undefined | SearchHistoryDefaultArgs> = $Result.GetResult<Prisma.$SearchHistoryPayload, S>

  type SearchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchHistoryCountAggregateInputType | true
    }

  export interface SearchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchHistory'], meta: { name: 'SearchHistory' } }
    /**
     * Find zero or one SearchHistory that matches the filter.
     * @param {SearchHistoryFindUniqueArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchHistoryFindUniqueArgs>(args: SelectSubset<T, SearchHistoryFindUniqueArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchHistoryFindUniqueOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchHistoryFindFirstArgs>(args?: SelectSubset<T, SearchHistoryFindFirstArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany()
     * 
     * // Get first 10 SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchHistoryFindManyArgs>(args?: SelectSubset<T, SearchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchHistory.
     * @param {SearchHistoryCreateArgs} args - Arguments to create a SearchHistory.
     * @example
     * // Create one SearchHistory
     * const SearchHistory = await prisma.searchHistory.create({
     *   data: {
     *     // ... data to create a SearchHistory
     *   }
     * })
     * 
     */
    create<T extends SearchHistoryCreateArgs>(args: SelectSubset<T, SearchHistoryCreateArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchHistories.
     * @param {SearchHistoryCreateManyArgs} args - Arguments to create many SearchHistories.
     * @example
     * // Create many SearchHistories
     * const searchHistory = await prisma.searchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchHistoryCreateManyArgs>(args?: SelectSubset<T, SearchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchHistories and returns the data saved in the database.
     * @param {SearchHistoryCreateManyAndReturnArgs} args - Arguments to create many SearchHistories.
     * @example
     * // Create many SearchHistories
     * const searchHistory = await prisma.searchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchHistories and only return the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchHistory.
     * @param {SearchHistoryDeleteArgs} args - Arguments to delete one SearchHistory.
     * @example
     * // Delete one SearchHistory
     * const SearchHistory = await prisma.searchHistory.delete({
     *   where: {
     *     // ... filter to delete one SearchHistory
     *   }
     * })
     * 
     */
    delete<T extends SearchHistoryDeleteArgs>(args: SelectSubset<T, SearchHistoryDeleteArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchHistory.
     * @param {SearchHistoryUpdateArgs} args - Arguments to update one SearchHistory.
     * @example
     * // Update one SearchHistory
     * const searchHistory = await prisma.searchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchHistoryUpdateArgs>(args: SelectSubset<T, SearchHistoryUpdateArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchHistories.
     * @param {SearchHistoryDeleteManyArgs} args - Arguments to filter SearchHistories to delete.
     * @example
     * // Delete a few SearchHistories
     * const { count } = await prisma.searchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchHistoryDeleteManyArgs>(args?: SelectSubset<T, SearchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchHistoryUpdateManyArgs>(args: SelectSubset<T, SearchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories and returns the data updated in the database.
     * @param {SearchHistoryUpdateManyAndReturnArgs} args - Arguments to update many SearchHistories.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchHistories and only return the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchHistory.
     * @param {SearchHistoryUpsertArgs} args - Arguments to update or create a SearchHistory.
     * @example
     * // Update or create a SearchHistory
     * const searchHistory = await prisma.searchHistory.upsert({
     *   create: {
     *     // ... data to create a SearchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchHistory we want to update
     *   }
     * })
     */
    upsert<T extends SearchHistoryUpsertArgs>(args: SelectSubset<T, SearchHistoryUpsertArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryCountArgs} args - Arguments to filter SearchHistories to count.
     * @example
     * // Count the number of SearchHistories
     * const count = await prisma.searchHistory.count({
     *   where: {
     *     // ... the filter for the SearchHistories we want to count
     *   }
     * })
    **/
    count<T extends SearchHistoryCountArgs>(
      args?: Subset<T, SearchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchHistoryAggregateArgs>(args: Subset<T, SearchHistoryAggregateArgs>): Prisma.PrismaPromise<GetSearchHistoryAggregateType<T>>

    /**
     * Group by SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryGroupByArgs} args - Group by arguments.
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
      T extends SearchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SearchHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchHistory model
   */
  readonly fields: SearchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SearchHistory model
   */
  interface SearchHistoryFieldRefs {
    readonly id: FieldRef<"SearchHistory", 'String'>
    readonly userId: FieldRef<"SearchHistory", 'String'>
    readonly wordId: FieldRef<"SearchHistory", 'String'>
    readonly createdAt: FieldRef<"SearchHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchHistory findUnique
   */
  export type SearchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findUniqueOrThrow
   */
  export type SearchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findFirst
   */
  export type SearchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory findFirstOrThrow
   */
  export type SearchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory findMany
   */
  export type SearchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistories to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory create
   */
  export type SearchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchHistory.
     */
    data: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
  }

  /**
   * SearchHistory createMany
   */
  export type SearchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchHistories.
     */
    data: SearchHistoryCreateManyInput | SearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchHistory createManyAndReturn
   */
  export type SearchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SearchHistories.
     */
    data: SearchHistoryCreateManyInput | SearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchHistory update
   */
  export type SearchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchHistory.
     */
    data: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
    /**
     * Choose, which SearchHistory to update.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory updateMany
   */
  export type SearchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to update.
     */
    limit?: number
  }

  /**
   * SearchHistory updateManyAndReturn
   */
  export type SearchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchHistory upsert
   */
  export type SearchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchHistory to update in case it exists.
     */
    where: SearchHistoryWhereUniqueInput
    /**
     * In case the SearchHistory found by the `where` argument doesn't exist, create a new SearchHistory with this data.
     */
    create: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
    /**
     * In case the SearchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
  }

  /**
   * SearchHistory delete
   */
  export type SearchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter which SearchHistory to delete.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory deleteMany
   */
  export type SearchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistories to delete
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to delete.
     */
    limit?: number
  }

  /**
   * SearchHistory without action
   */
  export type SearchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
  }


  /**
   * Model CulturalFact
   */

  export type AggregateCulturalFact = {
    _count: CulturalFactCountAggregateOutputType | null
    _min: CulturalFactMinAggregateOutputType | null
    _max: CulturalFactMaxAggregateOutputType | null
  }

  export type CulturalFactMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
  }

  export type CulturalFactMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
  }

  export type CulturalFactCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    isActive: number
    _all: number
  }


  export type CulturalFactMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
  }

  export type CulturalFactMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
  }

  export type CulturalFactCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    _all?: true
  }

  export type CulturalFactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CulturalFact to aggregate.
     */
    where?: CulturalFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CulturalFacts to fetch.
     */
    orderBy?: CulturalFactOrderByWithRelationInput | CulturalFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CulturalFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CulturalFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CulturalFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CulturalFacts
    **/
    _count?: true | CulturalFactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CulturalFactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CulturalFactMaxAggregateInputType
  }

  export type GetCulturalFactAggregateType<T extends CulturalFactAggregateArgs> = {
        [P in keyof T & keyof AggregateCulturalFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCulturalFact[P]>
      : GetScalarType<T[P], AggregateCulturalFact[P]>
  }




  export type CulturalFactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CulturalFactWhereInput
    orderBy?: CulturalFactOrderByWithAggregationInput | CulturalFactOrderByWithAggregationInput[]
    by: CulturalFactScalarFieldEnum[] | CulturalFactScalarFieldEnum
    having?: CulturalFactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CulturalFactCountAggregateInputType | true
    _min?: CulturalFactMinAggregateInputType
    _max?: CulturalFactMaxAggregateInputType
  }

  export type CulturalFactGroupByOutputType = {
    id: string
    title: string
    content: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    _count: CulturalFactCountAggregateOutputType | null
    _min: CulturalFactMinAggregateOutputType | null
    _max: CulturalFactMaxAggregateOutputType | null
  }

  type GetCulturalFactGroupByPayload<T extends CulturalFactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CulturalFactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CulturalFactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CulturalFactGroupByOutputType[P]>
            : GetScalarType<T[P], CulturalFactGroupByOutputType[P]>
        }
      >
    >


  export type CulturalFactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["culturalFact"]>

  export type CulturalFactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["culturalFact"]>

  export type CulturalFactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["culturalFact"]>

  export type CulturalFactSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
  }

  export type CulturalFactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "createdAt" | "updatedAt" | "isActive", ExtArgs["result"]["culturalFact"]>

  export type $CulturalFactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CulturalFact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      isActive: boolean
    }, ExtArgs["result"]["culturalFact"]>
    composites: {}
  }

  type CulturalFactGetPayload<S extends boolean | null | undefined | CulturalFactDefaultArgs> = $Result.GetResult<Prisma.$CulturalFactPayload, S>

  type CulturalFactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CulturalFactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CulturalFactCountAggregateInputType | true
    }

  export interface CulturalFactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CulturalFact'], meta: { name: 'CulturalFact' } }
    /**
     * Find zero or one CulturalFact that matches the filter.
     * @param {CulturalFactFindUniqueArgs} args - Arguments to find a CulturalFact
     * @example
     * // Get one CulturalFact
     * const culturalFact = await prisma.culturalFact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CulturalFactFindUniqueArgs>(args: SelectSubset<T, CulturalFactFindUniqueArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CulturalFact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CulturalFactFindUniqueOrThrowArgs} args - Arguments to find a CulturalFact
     * @example
     * // Get one CulturalFact
     * const culturalFact = await prisma.culturalFact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CulturalFactFindUniqueOrThrowArgs>(args: SelectSubset<T, CulturalFactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CulturalFact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactFindFirstArgs} args - Arguments to find a CulturalFact
     * @example
     * // Get one CulturalFact
     * const culturalFact = await prisma.culturalFact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CulturalFactFindFirstArgs>(args?: SelectSubset<T, CulturalFactFindFirstArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CulturalFact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactFindFirstOrThrowArgs} args - Arguments to find a CulturalFact
     * @example
     * // Get one CulturalFact
     * const culturalFact = await prisma.culturalFact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CulturalFactFindFirstOrThrowArgs>(args?: SelectSubset<T, CulturalFactFindFirstOrThrowArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CulturalFacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CulturalFacts
     * const culturalFacts = await prisma.culturalFact.findMany()
     * 
     * // Get first 10 CulturalFacts
     * const culturalFacts = await prisma.culturalFact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const culturalFactWithIdOnly = await prisma.culturalFact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CulturalFactFindManyArgs>(args?: SelectSubset<T, CulturalFactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CulturalFact.
     * @param {CulturalFactCreateArgs} args - Arguments to create a CulturalFact.
     * @example
     * // Create one CulturalFact
     * const CulturalFact = await prisma.culturalFact.create({
     *   data: {
     *     // ... data to create a CulturalFact
     *   }
     * })
     * 
     */
    create<T extends CulturalFactCreateArgs>(args: SelectSubset<T, CulturalFactCreateArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CulturalFacts.
     * @param {CulturalFactCreateManyArgs} args - Arguments to create many CulturalFacts.
     * @example
     * // Create many CulturalFacts
     * const culturalFact = await prisma.culturalFact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CulturalFactCreateManyArgs>(args?: SelectSubset<T, CulturalFactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CulturalFacts and returns the data saved in the database.
     * @param {CulturalFactCreateManyAndReturnArgs} args - Arguments to create many CulturalFacts.
     * @example
     * // Create many CulturalFacts
     * const culturalFact = await prisma.culturalFact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CulturalFacts and only return the `id`
     * const culturalFactWithIdOnly = await prisma.culturalFact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CulturalFactCreateManyAndReturnArgs>(args?: SelectSubset<T, CulturalFactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CulturalFact.
     * @param {CulturalFactDeleteArgs} args - Arguments to delete one CulturalFact.
     * @example
     * // Delete one CulturalFact
     * const CulturalFact = await prisma.culturalFact.delete({
     *   where: {
     *     // ... filter to delete one CulturalFact
     *   }
     * })
     * 
     */
    delete<T extends CulturalFactDeleteArgs>(args: SelectSubset<T, CulturalFactDeleteArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CulturalFact.
     * @param {CulturalFactUpdateArgs} args - Arguments to update one CulturalFact.
     * @example
     * // Update one CulturalFact
     * const culturalFact = await prisma.culturalFact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CulturalFactUpdateArgs>(args: SelectSubset<T, CulturalFactUpdateArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CulturalFacts.
     * @param {CulturalFactDeleteManyArgs} args - Arguments to filter CulturalFacts to delete.
     * @example
     * // Delete a few CulturalFacts
     * const { count } = await prisma.culturalFact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CulturalFactDeleteManyArgs>(args?: SelectSubset<T, CulturalFactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CulturalFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CulturalFacts
     * const culturalFact = await prisma.culturalFact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CulturalFactUpdateManyArgs>(args: SelectSubset<T, CulturalFactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CulturalFacts and returns the data updated in the database.
     * @param {CulturalFactUpdateManyAndReturnArgs} args - Arguments to update many CulturalFacts.
     * @example
     * // Update many CulturalFacts
     * const culturalFact = await prisma.culturalFact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CulturalFacts and only return the `id`
     * const culturalFactWithIdOnly = await prisma.culturalFact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CulturalFactUpdateManyAndReturnArgs>(args: SelectSubset<T, CulturalFactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CulturalFact.
     * @param {CulturalFactUpsertArgs} args - Arguments to update or create a CulturalFact.
     * @example
     * // Update or create a CulturalFact
     * const culturalFact = await prisma.culturalFact.upsert({
     *   create: {
     *     // ... data to create a CulturalFact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CulturalFact we want to update
     *   }
     * })
     */
    upsert<T extends CulturalFactUpsertArgs>(args: SelectSubset<T, CulturalFactUpsertArgs<ExtArgs>>): Prisma__CulturalFactClient<$Result.GetResult<Prisma.$CulturalFactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CulturalFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactCountArgs} args - Arguments to filter CulturalFacts to count.
     * @example
     * // Count the number of CulturalFacts
     * const count = await prisma.culturalFact.count({
     *   where: {
     *     // ... the filter for the CulturalFacts we want to count
     *   }
     * })
    **/
    count<T extends CulturalFactCountArgs>(
      args?: Subset<T, CulturalFactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CulturalFactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CulturalFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CulturalFactAggregateArgs>(args: Subset<T, CulturalFactAggregateArgs>): Prisma.PrismaPromise<GetCulturalFactAggregateType<T>>

    /**
     * Group by CulturalFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturalFactGroupByArgs} args - Group by arguments.
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
      T extends CulturalFactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CulturalFactGroupByArgs['orderBy'] }
        : { orderBy?: CulturalFactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CulturalFactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCulturalFactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CulturalFact model
   */
  readonly fields: CulturalFactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CulturalFact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CulturalFactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CulturalFact model
   */
  interface CulturalFactFieldRefs {
    readonly id: FieldRef<"CulturalFact", 'String'>
    readonly title: FieldRef<"CulturalFact", 'String'>
    readonly content: FieldRef<"CulturalFact", 'String'>
    readonly imageUrl: FieldRef<"CulturalFact", 'String'>
    readonly createdAt: FieldRef<"CulturalFact", 'DateTime'>
    readonly updatedAt: FieldRef<"CulturalFact", 'DateTime'>
    readonly isActive: FieldRef<"CulturalFact", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CulturalFact findUnique
   */
  export type CulturalFactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * Filter, which CulturalFact to fetch.
     */
    where: CulturalFactWhereUniqueInput
  }

  /**
   * CulturalFact findUniqueOrThrow
   */
  export type CulturalFactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * Filter, which CulturalFact to fetch.
     */
    where: CulturalFactWhereUniqueInput
  }

  /**
   * CulturalFact findFirst
   */
  export type CulturalFactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * Filter, which CulturalFact to fetch.
     */
    where?: CulturalFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CulturalFacts to fetch.
     */
    orderBy?: CulturalFactOrderByWithRelationInput | CulturalFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CulturalFacts.
     */
    cursor?: CulturalFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CulturalFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CulturalFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CulturalFacts.
     */
    distinct?: CulturalFactScalarFieldEnum | CulturalFactScalarFieldEnum[]
  }

  /**
   * CulturalFact findFirstOrThrow
   */
  export type CulturalFactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * Filter, which CulturalFact to fetch.
     */
    where?: CulturalFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CulturalFacts to fetch.
     */
    orderBy?: CulturalFactOrderByWithRelationInput | CulturalFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CulturalFacts.
     */
    cursor?: CulturalFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CulturalFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CulturalFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CulturalFacts.
     */
    distinct?: CulturalFactScalarFieldEnum | CulturalFactScalarFieldEnum[]
  }

  /**
   * CulturalFact findMany
   */
  export type CulturalFactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * Filter, which CulturalFacts to fetch.
     */
    where?: CulturalFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CulturalFacts to fetch.
     */
    orderBy?: CulturalFactOrderByWithRelationInput | CulturalFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CulturalFacts.
     */
    cursor?: CulturalFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CulturalFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CulturalFacts.
     */
    skip?: number
    distinct?: CulturalFactScalarFieldEnum | CulturalFactScalarFieldEnum[]
  }

  /**
   * CulturalFact create
   */
  export type CulturalFactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * The data needed to create a CulturalFact.
     */
    data: XOR<CulturalFactCreateInput, CulturalFactUncheckedCreateInput>
  }

  /**
   * CulturalFact createMany
   */
  export type CulturalFactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CulturalFacts.
     */
    data: CulturalFactCreateManyInput | CulturalFactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CulturalFact createManyAndReturn
   */
  export type CulturalFactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * The data used to create many CulturalFacts.
     */
    data: CulturalFactCreateManyInput | CulturalFactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CulturalFact update
   */
  export type CulturalFactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * The data needed to update a CulturalFact.
     */
    data: XOR<CulturalFactUpdateInput, CulturalFactUncheckedUpdateInput>
    /**
     * Choose, which CulturalFact to update.
     */
    where: CulturalFactWhereUniqueInput
  }

  /**
   * CulturalFact updateMany
   */
  export type CulturalFactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CulturalFacts.
     */
    data: XOR<CulturalFactUpdateManyMutationInput, CulturalFactUncheckedUpdateManyInput>
    /**
     * Filter which CulturalFacts to update
     */
    where?: CulturalFactWhereInput
    /**
     * Limit how many CulturalFacts to update.
     */
    limit?: number
  }

  /**
   * CulturalFact updateManyAndReturn
   */
  export type CulturalFactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * The data used to update CulturalFacts.
     */
    data: XOR<CulturalFactUpdateManyMutationInput, CulturalFactUncheckedUpdateManyInput>
    /**
     * Filter which CulturalFacts to update
     */
    where?: CulturalFactWhereInput
    /**
     * Limit how many CulturalFacts to update.
     */
    limit?: number
  }

  /**
   * CulturalFact upsert
   */
  export type CulturalFactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * The filter to search for the CulturalFact to update in case it exists.
     */
    where: CulturalFactWhereUniqueInput
    /**
     * In case the CulturalFact found by the `where` argument doesn't exist, create a new CulturalFact with this data.
     */
    create: XOR<CulturalFactCreateInput, CulturalFactUncheckedCreateInput>
    /**
     * In case the CulturalFact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CulturalFactUpdateInput, CulturalFactUncheckedUpdateInput>
  }

  /**
   * CulturalFact delete
   */
  export type CulturalFactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
    /**
     * Filter which CulturalFact to delete.
     */
    where: CulturalFactWhereUniqueInput
  }

  /**
   * CulturalFact deleteMany
   */
  export type CulturalFactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CulturalFacts to delete
     */
    where?: CulturalFactWhereInput
    /**
     * Limit how many CulturalFacts to delete.
     */
    limit?: number
  }

  /**
   * CulturalFact without action
   */
  export type CulturalFactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturalFact
     */
    select?: CulturalFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CulturalFact
     */
    omit?: CulturalFactOmit<ExtArgs> | null
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


  export const WordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    pronunciation: 'pronunciation',
    syllables: 'syllables',
    partOfSpeech: 'partOfSpeech',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    alphabetId: 'alphabetId',
    isFeatured: 'isFeatured',
    tonalMarks: 'tonalMarks',
    audioUrl: 'audioUrl',
    etymology: 'etymology',
    dialectVariants: 'dialectVariants'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const TranslationScalarFieldEnum: {
    id: 'id',
    text: 'text',
    language: 'language',
    partOfSpeech: 'partOfSpeech',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    wordId: 'wordId'
  };

  export type TranslationScalarFieldEnum = (typeof TranslationScalarFieldEnum)[keyof typeof TranslationScalarFieldEnum]


  export const ExampleScalarFieldEnum: {
    id: 'id',
    yorubaSentence: 'yorubaSentence',
    translation: 'translation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    wordId: 'wordId'
  };

  export type ExampleScalarFieldEnum = (typeof ExampleScalarFieldEnum)[keyof typeof ExampleScalarFieldEnum]


  export const AlphabetScalarFieldEnum: {
    id: 'id',
    letter: 'letter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlphabetScalarFieldEnum = (typeof AlphabetScalarFieldEnum)[keyof typeof AlphabetScalarFieldEnum]


  export const FeaturedScalarFieldEnum: {
    id: 'id',
    wordId: 'wordId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeaturedScalarFieldEnum = (typeof FeaturedScalarFieldEnum)[keyof typeof FeaturedScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserBookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wordId: 'wordId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserBookmarkScalarFieldEnum = (typeof UserBookmarkScalarFieldEnum)[keyof typeof UserBookmarkScalarFieldEnum]


  export const SearchHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wordId: 'wordId',
    createdAt: 'createdAt'
  };

  export type SearchHistoryScalarFieldEnum = (typeof SearchHistoryScalarFieldEnum)[keyof typeof SearchHistoryScalarFieldEnum]


  export const CulturalFactScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive'
  };

  export type CulturalFactScalarFieldEnum = (typeof CulturalFactScalarFieldEnum)[keyof typeof CulturalFactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: StringFilter<"Word"> | string
    word?: StringFilter<"Word"> | string
    pronunciation?: StringNullableFilter<"Word"> | string | null
    syllables?: StringNullableFilter<"Word"> | string | null
    partOfSpeech?: StringNullableFilter<"Word"> | string | null
    createdAt?: DateTimeFilter<"Word"> | Date | string
    updatedAt?: DateTimeFilter<"Word"> | Date | string
    alphabetId?: StringNullableFilter<"Word"> | string | null
    isFeatured?: BoolFilter<"Word"> | boolean
    tonalMarks?: StringNullableFilter<"Word"> | string | null
    audioUrl?: StringNullableFilter<"Word"> | string | null
    etymology?: StringNullableFilter<"Word"> | string | null
    dialectVariants?: StringNullableFilter<"Word"> | string | null
    examples?: ExampleListRelationFilter
    featured?: XOR<FeaturedNullableScalarRelationFilter, FeaturedWhereInput> | null
    searchHistory?: SearchHistoryListRelationFilter
    translations?: TranslationListRelationFilter
    userBookmarks?: UserBookmarkListRelationFilter
    alphabet?: XOR<AlphabetNullableScalarRelationFilter, AlphabetWhereInput> | null
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrderInput | SortOrder
    syllables?: SortOrderInput | SortOrder
    partOfSpeech?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alphabetId?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    tonalMarks?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    etymology?: SortOrderInput | SortOrder
    dialectVariants?: SortOrderInput | SortOrder
    examples?: ExampleOrderByRelationAggregateInput
    featured?: FeaturedOrderByWithRelationInput
    searchHistory?: SearchHistoryOrderByRelationAggregateInput
    translations?: TranslationOrderByRelationAggregateInput
    userBookmarks?: UserBookmarkOrderByRelationAggregateInput
    alphabet?: AlphabetOrderByWithRelationInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    word?: StringFilter<"Word"> | string
    pronunciation?: StringNullableFilter<"Word"> | string | null
    syllables?: StringNullableFilter<"Word"> | string | null
    partOfSpeech?: StringNullableFilter<"Word"> | string | null
    createdAt?: DateTimeFilter<"Word"> | Date | string
    updatedAt?: DateTimeFilter<"Word"> | Date | string
    alphabetId?: StringNullableFilter<"Word"> | string | null
    isFeatured?: BoolFilter<"Word"> | boolean
    tonalMarks?: StringNullableFilter<"Word"> | string | null
    audioUrl?: StringNullableFilter<"Word"> | string | null
    etymology?: StringNullableFilter<"Word"> | string | null
    dialectVariants?: StringNullableFilter<"Word"> | string | null
    examples?: ExampleListRelationFilter
    featured?: XOR<FeaturedNullableScalarRelationFilter, FeaturedWhereInput> | null
    searchHistory?: SearchHistoryListRelationFilter
    translations?: TranslationListRelationFilter
    userBookmarks?: UserBookmarkListRelationFilter
    alphabet?: XOR<AlphabetNullableScalarRelationFilter, AlphabetWhereInput> | null
  }, "id">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrderInput | SortOrder
    syllables?: SortOrderInput | SortOrder
    partOfSpeech?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alphabetId?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    tonalMarks?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    etymology?: SortOrderInput | SortOrder
    dialectVariants?: SortOrderInput | SortOrder
    _count?: WordCountOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Word"> | string
    word?: StringWithAggregatesFilter<"Word"> | string
    pronunciation?: StringNullableWithAggregatesFilter<"Word"> | string | null
    syllables?: StringNullableWithAggregatesFilter<"Word"> | string | null
    partOfSpeech?: StringNullableWithAggregatesFilter<"Word"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Word"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Word"> | Date | string
    alphabetId?: StringNullableWithAggregatesFilter<"Word"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Word"> | boolean
    tonalMarks?: StringNullableWithAggregatesFilter<"Word"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Word"> | string | null
    etymology?: StringNullableWithAggregatesFilter<"Word"> | string | null
    dialectVariants?: StringNullableWithAggregatesFilter<"Word"> | string | null
  }

  export type TranslationWhereInput = {
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    id?: StringFilter<"Translation"> | string
    text?: StringFilter<"Translation"> | string
    language?: StringFilter<"Translation"> | string
    partOfSpeech?: StringNullableFilter<"Translation"> | string | null
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
    wordId?: StringFilter<"Translation"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type TranslationOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    language?: SortOrder
    partOfSpeech?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
  }

  export type TranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    text?: StringFilter<"Translation"> | string
    language?: StringFilter<"Translation"> | string
    partOfSpeech?: StringNullableFilter<"Translation"> | string | null
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
    wordId?: StringFilter<"Translation"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "id">

  export type TranslationOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    language?: SortOrder
    partOfSpeech?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
    _count?: TranslationCountOrderByAggregateInput
    _max?: TranslationMaxOrderByAggregateInput
    _min?: TranslationMinOrderByAggregateInput
  }

  export type TranslationScalarWhereWithAggregatesInput = {
    AND?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    OR?: TranslationScalarWhereWithAggregatesInput[]
    NOT?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Translation"> | string
    text?: StringWithAggregatesFilter<"Translation"> | string
    language?: StringWithAggregatesFilter<"Translation"> | string
    partOfSpeech?: StringNullableWithAggregatesFilter<"Translation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    wordId?: StringWithAggregatesFilter<"Translation"> | string
  }

  export type ExampleWhereInput = {
    AND?: ExampleWhereInput | ExampleWhereInput[]
    OR?: ExampleWhereInput[]
    NOT?: ExampleWhereInput | ExampleWhereInput[]
    id?: StringFilter<"Example"> | string
    yorubaSentence?: StringFilter<"Example"> | string
    translation?: StringFilter<"Example"> | string
    createdAt?: DateTimeFilter<"Example"> | Date | string
    updatedAt?: DateTimeFilter<"Example"> | Date | string
    wordId?: StringFilter<"Example"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type ExampleOrderByWithRelationInput = {
    id?: SortOrder
    yorubaSentence?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
  }

  export type ExampleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExampleWhereInput | ExampleWhereInput[]
    OR?: ExampleWhereInput[]
    NOT?: ExampleWhereInput | ExampleWhereInput[]
    yorubaSentence?: StringFilter<"Example"> | string
    translation?: StringFilter<"Example"> | string
    createdAt?: DateTimeFilter<"Example"> | Date | string
    updatedAt?: DateTimeFilter<"Example"> | Date | string
    wordId?: StringFilter<"Example"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "id">

  export type ExampleOrderByWithAggregationInput = {
    id?: SortOrder
    yorubaSentence?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
    _count?: ExampleCountOrderByAggregateInput
    _max?: ExampleMaxOrderByAggregateInput
    _min?: ExampleMinOrderByAggregateInput
  }

  export type ExampleScalarWhereWithAggregatesInput = {
    AND?: ExampleScalarWhereWithAggregatesInput | ExampleScalarWhereWithAggregatesInput[]
    OR?: ExampleScalarWhereWithAggregatesInput[]
    NOT?: ExampleScalarWhereWithAggregatesInput | ExampleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Example"> | string
    yorubaSentence?: StringWithAggregatesFilter<"Example"> | string
    translation?: StringWithAggregatesFilter<"Example"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Example"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Example"> | Date | string
    wordId?: StringWithAggregatesFilter<"Example"> | string
  }

  export type AlphabetWhereInput = {
    AND?: AlphabetWhereInput | AlphabetWhereInput[]
    OR?: AlphabetWhereInput[]
    NOT?: AlphabetWhereInput | AlphabetWhereInput[]
    id?: StringFilter<"Alphabet"> | string
    letter?: StringFilter<"Alphabet"> | string
    createdAt?: DateTimeFilter<"Alphabet"> | Date | string
    updatedAt?: DateTimeFilter<"Alphabet"> | Date | string
    words?: WordListRelationFilter
  }

  export type AlphabetOrderByWithRelationInput = {
    id?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    words?: WordOrderByRelationAggregateInput
  }

  export type AlphabetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    letter?: string
    AND?: AlphabetWhereInput | AlphabetWhereInput[]
    OR?: AlphabetWhereInput[]
    NOT?: AlphabetWhereInput | AlphabetWhereInput[]
    createdAt?: DateTimeFilter<"Alphabet"> | Date | string
    updatedAt?: DateTimeFilter<"Alphabet"> | Date | string
    words?: WordListRelationFilter
  }, "id" | "letter">

  export type AlphabetOrderByWithAggregationInput = {
    id?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlphabetCountOrderByAggregateInput
    _max?: AlphabetMaxOrderByAggregateInput
    _min?: AlphabetMinOrderByAggregateInput
  }

  export type AlphabetScalarWhereWithAggregatesInput = {
    AND?: AlphabetScalarWhereWithAggregatesInput | AlphabetScalarWhereWithAggregatesInput[]
    OR?: AlphabetScalarWhereWithAggregatesInput[]
    NOT?: AlphabetScalarWhereWithAggregatesInput | AlphabetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alphabet"> | string
    letter?: StringWithAggregatesFilter<"Alphabet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Alphabet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alphabet"> | Date | string
  }

  export type FeaturedWhereInput = {
    AND?: FeaturedWhereInput | FeaturedWhereInput[]
    OR?: FeaturedWhereInput[]
    NOT?: FeaturedWhereInput | FeaturedWhereInput[]
    id?: StringFilter<"Featured"> | string
    wordId?: StringFilter<"Featured"> | string
    startDate?: DateTimeFilter<"Featured"> | Date | string
    endDate?: DateTimeNullableFilter<"Featured"> | Date | string | null
    createdAt?: DateTimeFilter<"Featured"> | Date | string
    updatedAt?: DateTimeFilter<"Featured"> | Date | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type FeaturedOrderByWithRelationInput = {
    id?: SortOrder
    wordId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    word?: WordOrderByWithRelationInput
  }

  export type FeaturedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wordId?: string
    AND?: FeaturedWhereInput | FeaturedWhereInput[]
    OR?: FeaturedWhereInput[]
    NOT?: FeaturedWhereInput | FeaturedWhereInput[]
    startDate?: DateTimeFilter<"Featured"> | Date | string
    endDate?: DateTimeNullableFilter<"Featured"> | Date | string | null
    createdAt?: DateTimeFilter<"Featured"> | Date | string
    updatedAt?: DateTimeFilter<"Featured"> | Date | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "id" | "wordId">

  export type FeaturedOrderByWithAggregationInput = {
    id?: SortOrder
    wordId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeaturedCountOrderByAggregateInput
    _max?: FeaturedMaxOrderByAggregateInput
    _min?: FeaturedMinOrderByAggregateInput
  }

  export type FeaturedScalarWhereWithAggregatesInput = {
    AND?: FeaturedScalarWhereWithAggregatesInput | FeaturedScalarWhereWithAggregatesInput[]
    OR?: FeaturedScalarWhereWithAggregatesInput[]
    NOT?: FeaturedScalarWhereWithAggregatesInput | FeaturedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Featured"> | string
    wordId?: StringWithAggregatesFilter<"Featured"> | string
    startDate?: DateTimeWithAggregatesFilter<"Featured"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Featured"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Featured"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Featured"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    searchHistory?: SearchHistoryListRelationFilter
    bookmarks?: UserBookmarkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    searchHistory?: SearchHistoryOrderByRelationAggregateInput
    bookmarks?: UserBookmarkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    searchHistory?: SearchHistoryListRelationFilter
    bookmarks?: UserBookmarkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserBookmarkWhereInput = {
    AND?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    OR?: UserBookmarkWhereInput[]
    NOT?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    id?: StringFilter<"UserBookmark"> | string
    userId?: StringFilter<"UserBookmark"> | string
    wordId?: StringFilter<"UserBookmark"> | string
    createdAt?: DateTimeFilter<"UserBookmark"> | Date | string
    updatedAt?: DateTimeFilter<"UserBookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type UserBookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    word?: WordOrderByWithRelationInput
  }

  export type UserBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_wordId?: UserBookmarkUserIdWordIdCompoundUniqueInput
    AND?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    OR?: UserBookmarkWhereInput[]
    NOT?: UserBookmarkWhereInput | UserBookmarkWhereInput[]
    userId?: StringFilter<"UserBookmark"> | string
    wordId?: StringFilter<"UserBookmark"> | string
    createdAt?: DateTimeFilter<"UserBookmark"> | Date | string
    updatedAt?: DateTimeFilter<"UserBookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "id" | "userId_wordId">

  export type UserBookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBookmarkCountOrderByAggregateInput
    _max?: UserBookmarkMaxOrderByAggregateInput
    _min?: UserBookmarkMinOrderByAggregateInput
  }

  export type UserBookmarkScalarWhereWithAggregatesInput = {
    AND?: UserBookmarkScalarWhereWithAggregatesInput | UserBookmarkScalarWhereWithAggregatesInput[]
    OR?: UserBookmarkScalarWhereWithAggregatesInput[]
    NOT?: UserBookmarkScalarWhereWithAggregatesInput | UserBookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBookmark"> | string
    userId?: StringWithAggregatesFilter<"UserBookmark"> | string
    wordId?: StringWithAggregatesFilter<"UserBookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserBookmark"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBookmark"> | Date | string
  }

  export type SearchHistoryWhereInput = {
    AND?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    OR?: SearchHistoryWhereInput[]
    NOT?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    id?: StringFilter<"SearchHistory"> | string
    userId?: StringFilter<"SearchHistory"> | string
    wordId?: StringFilter<"SearchHistory"> | string
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type SearchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    word?: WordOrderByWithRelationInput
  }

  export type SearchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    OR?: SearchHistoryWhereInput[]
    NOT?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    userId?: StringFilter<"SearchHistory"> | string
    wordId?: StringFilter<"SearchHistory"> | string
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "id">

  export type SearchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    _count?: SearchHistoryCountOrderByAggregateInput
    _max?: SearchHistoryMaxOrderByAggregateInput
    _min?: SearchHistoryMinOrderByAggregateInput
  }

  export type SearchHistoryScalarWhereWithAggregatesInput = {
    AND?: SearchHistoryScalarWhereWithAggregatesInput | SearchHistoryScalarWhereWithAggregatesInput[]
    OR?: SearchHistoryScalarWhereWithAggregatesInput[]
    NOT?: SearchHistoryScalarWhereWithAggregatesInput | SearchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchHistory"> | string
    userId?: StringWithAggregatesFilter<"SearchHistory"> | string
    wordId?: StringWithAggregatesFilter<"SearchHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SearchHistory"> | Date | string
  }

  export type CulturalFactWhereInput = {
    AND?: CulturalFactWhereInput | CulturalFactWhereInput[]
    OR?: CulturalFactWhereInput[]
    NOT?: CulturalFactWhereInput | CulturalFactWhereInput[]
    id?: StringFilter<"CulturalFact"> | string
    title?: StringFilter<"CulturalFact"> | string
    content?: StringFilter<"CulturalFact"> | string
    imageUrl?: StringNullableFilter<"CulturalFact"> | string | null
    createdAt?: DateTimeFilter<"CulturalFact"> | Date | string
    updatedAt?: DateTimeFilter<"CulturalFact"> | Date | string
    isActive?: BoolFilter<"CulturalFact"> | boolean
  }

  export type CulturalFactOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type CulturalFactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CulturalFactWhereInput | CulturalFactWhereInput[]
    OR?: CulturalFactWhereInput[]
    NOT?: CulturalFactWhereInput | CulturalFactWhereInput[]
    title?: StringFilter<"CulturalFact"> | string
    content?: StringFilter<"CulturalFact"> | string
    imageUrl?: StringNullableFilter<"CulturalFact"> | string | null
    createdAt?: DateTimeFilter<"CulturalFact"> | Date | string
    updatedAt?: DateTimeFilter<"CulturalFact"> | Date | string
    isActive?: BoolFilter<"CulturalFact"> | boolean
  }, "id">

  export type CulturalFactOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    _count?: CulturalFactCountOrderByAggregateInput
    _max?: CulturalFactMaxOrderByAggregateInput
    _min?: CulturalFactMinOrderByAggregateInput
  }

  export type CulturalFactScalarWhereWithAggregatesInput = {
    AND?: CulturalFactScalarWhereWithAggregatesInput | CulturalFactScalarWhereWithAggregatesInput[]
    OR?: CulturalFactScalarWhereWithAggregatesInput[]
    NOT?: CulturalFactScalarWhereWithAggregatesInput | CulturalFactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CulturalFact"> | string
    title?: StringWithAggregatesFilter<"CulturalFact"> | string
    content?: StringWithAggregatesFilter<"CulturalFact"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CulturalFact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CulturalFact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CulturalFact"> | Date | string
    isActive?: BoolWithAggregatesFilter<"CulturalFact"> | boolean
  }

  export type WordCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleCreateNestedManyWithoutWordInput
    featured?: FeaturedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutWordInput
    translations?: TranslationCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkCreateNestedManyWithoutWordInput
    alphabet?: AlphabetCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutWordInput
    featured?: FeaturedUncheckedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutWordInput
    translations?: TranslationUncheckedCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutWordNestedInput
    featured?: FeaturedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutWordNestedInput
    translations?: TranslationUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUpdateManyWithoutWordNestedInput
    alphabet?: AlphabetUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutWordNestedInput
    featured?: FeaturedUncheckedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutWordNestedInput
    translations?: TranslationUncheckedUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
  }

  export type WordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TranslationCreateInput = {
    id?: string
    text: string
    language?: string
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    word: WordCreateNestedOneWithoutTranslationsInput
  }

  export type TranslationUncheckedCreateInput = {
    id?: string
    text: string
    language?: string
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordId: string
  }

  export type TranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type TranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type TranslationCreateManyInput = {
    id?: string
    text: string
    language?: string
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordId: string
  }

  export type TranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleCreateInput = {
    id?: string
    yorubaSentence: string
    translation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    word: WordCreateNestedOneWithoutExamplesInput
  }

  export type ExampleUncheckedCreateInput = {
    id?: string
    yorubaSentence: string
    translation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wordId: string
  }

  export type ExampleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutExamplesNestedInput
  }

  export type ExampleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleCreateManyInput = {
    id?: string
    yorubaSentence: string
    translation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wordId: string
  }

  export type ExampleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExampleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type AlphabetCreateInput = {
    id?: string
    letter: string
    createdAt?: Date | string
    updatedAt?: Date | string
    words?: WordCreateNestedManyWithoutAlphabetInput
  }

  export type AlphabetUncheckedCreateInput = {
    id?: string
    letter: string
    createdAt?: Date | string
    updatedAt?: Date | string
    words?: WordUncheckedCreateNestedManyWithoutAlphabetInput
  }

  export type AlphabetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUpdateManyWithoutAlphabetNestedInput
  }

  export type AlphabetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUncheckedUpdateManyWithoutAlphabetNestedInput
  }

  export type AlphabetCreateManyInput = {
    id?: string
    letter: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlphabetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlphabetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedCreateInput = {
    id?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    word: WordCreateNestedOneWithoutFeaturedInput
  }

  export type FeaturedUncheckedCreateInput = {
    id?: string
    wordId: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutFeaturedNestedInput
  }

  export type FeaturedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedCreateManyInput = {
    id?: string
    wordId: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
    bookmarks?: UserBookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
    bookmarks?: UserBookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: UserBookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    word: WordCreateNestedOneWithoutUserBookmarksInput
  }

  export type UserBookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    wordId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    word?: WordUpdateOneRequiredWithoutUserBookmarksNestedInput
  }

  export type UserBookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkCreateManyInput = {
    id?: string
    userId: string
    wordId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSearchHistoryInput
    word: WordCreateNestedOneWithoutSearchHistoryInput
  }

  export type SearchHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    wordId: string
    createdAt?: Date | string
  }

  export type SearchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchHistoryNestedInput
    word?: WordUpdateOneRequiredWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryCreateManyInput = {
    id?: string
    userId: string
    wordId: string
    createdAt?: Date | string
  }

  export type SearchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CulturalFactCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
  }

  export type CulturalFactUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
  }

  export type CulturalFactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CulturalFactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CulturalFactCreateManyInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
  }

  export type CulturalFactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CulturalFactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExampleListRelationFilter = {
    every?: ExampleWhereInput
    some?: ExampleWhereInput
    none?: ExampleWhereInput
  }

  export type FeaturedNullableScalarRelationFilter = {
    is?: FeaturedWhereInput | null
    isNot?: FeaturedWhereInput | null
  }

  export type SearchHistoryListRelationFilter = {
    every?: SearchHistoryWhereInput
    some?: SearchHistoryWhereInput
    none?: SearchHistoryWhereInput
  }

  export type TranslationListRelationFilter = {
    every?: TranslationWhereInput
    some?: TranslationWhereInput
    none?: TranslationWhereInput
  }

  export type UserBookmarkListRelationFilter = {
    every?: UserBookmarkWhereInput
    some?: UserBookmarkWhereInput
    none?: UserBookmarkWhereInput
  }

  export type AlphabetNullableScalarRelationFilter = {
    is?: AlphabetWhereInput | null
    isNot?: AlphabetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    syllables?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alphabetId?: SortOrder
    isFeatured?: SortOrder
    tonalMarks?: SortOrder
    audioUrl?: SortOrder
    etymology?: SortOrder
    dialectVariants?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    syllables?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alphabetId?: SortOrder
    isFeatured?: SortOrder
    tonalMarks?: SortOrder
    audioUrl?: SortOrder
    etymology?: SortOrder
    dialectVariants?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    syllables?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alphabetId?: SortOrder
    isFeatured?: SortOrder
    tonalMarks?: SortOrder
    audioUrl?: SortOrder
    etymology?: SortOrder
    dialectVariants?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type TranslationCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    language?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
  }

  export type TranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    language?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
  }

  export type TranslationMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    language?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
  }

  export type ExampleCountOrderByAggregateInput = {
    id?: SortOrder
    yorubaSentence?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
  }

  export type ExampleMaxOrderByAggregateInput = {
    id?: SortOrder
    yorubaSentence?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
  }

  export type ExampleMinOrderByAggregateInput = {
    id?: SortOrder
    yorubaSentence?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordId?: SortOrder
  }

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlphabetCountOrderByAggregateInput = {
    id?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlphabetMaxOrderByAggregateInput = {
    id?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlphabetMinOrderByAggregateInput = {
    id?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FeaturedCountOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedMaxOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedMinOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserBookmarkUserIdWordIdCompoundUniqueInput = {
    userId: string
    wordId: string
  }

  export type UserBookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    createdAt?: SortOrder
  }

  export type CulturalFactCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type CulturalFactMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type CulturalFactMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type ExampleCreateNestedManyWithoutWordInput = {
    create?: XOR<ExampleCreateWithoutWordInput, ExampleUncheckedCreateWithoutWordInput> | ExampleCreateWithoutWordInput[] | ExampleUncheckedCreateWithoutWordInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutWordInput | ExampleCreateOrConnectWithoutWordInput[]
    createMany?: ExampleCreateManyWordInputEnvelope
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
  }

  export type FeaturedCreateNestedOneWithoutWordInput = {
    create?: XOR<FeaturedCreateWithoutWordInput, FeaturedUncheckedCreateWithoutWordInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutWordInput
    connect?: FeaturedWhereUniqueInput
  }

  export type SearchHistoryCreateNestedManyWithoutWordInput = {
    create?: XOR<SearchHistoryCreateWithoutWordInput, SearchHistoryUncheckedCreateWithoutWordInput> | SearchHistoryCreateWithoutWordInput[] | SearchHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutWordInput | SearchHistoryCreateOrConnectWithoutWordInput[]
    createMany?: SearchHistoryCreateManyWordInputEnvelope
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
  }

  export type TranslationCreateNestedManyWithoutWordInput = {
    create?: XOR<TranslationCreateWithoutWordInput, TranslationUncheckedCreateWithoutWordInput> | TranslationCreateWithoutWordInput[] | TranslationUncheckedCreateWithoutWordInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutWordInput | TranslationCreateOrConnectWithoutWordInput[]
    createMany?: TranslationCreateManyWordInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type UserBookmarkCreateNestedManyWithoutWordInput = {
    create?: XOR<UserBookmarkCreateWithoutWordInput, UserBookmarkUncheckedCreateWithoutWordInput> | UserBookmarkCreateWithoutWordInput[] | UserBookmarkUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutWordInput | UserBookmarkCreateOrConnectWithoutWordInput[]
    createMany?: UserBookmarkCreateManyWordInputEnvelope
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
  }

  export type AlphabetCreateNestedOneWithoutWordsInput = {
    create?: XOR<AlphabetCreateWithoutWordsInput, AlphabetUncheckedCreateWithoutWordsInput>
    connectOrCreate?: AlphabetCreateOrConnectWithoutWordsInput
    connect?: AlphabetWhereUniqueInput
  }

  export type ExampleUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<ExampleCreateWithoutWordInput, ExampleUncheckedCreateWithoutWordInput> | ExampleCreateWithoutWordInput[] | ExampleUncheckedCreateWithoutWordInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutWordInput | ExampleCreateOrConnectWithoutWordInput[]
    createMany?: ExampleCreateManyWordInputEnvelope
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
  }

  export type FeaturedUncheckedCreateNestedOneWithoutWordInput = {
    create?: XOR<FeaturedCreateWithoutWordInput, FeaturedUncheckedCreateWithoutWordInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutWordInput
    connect?: FeaturedWhereUniqueInput
  }

  export type SearchHistoryUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<SearchHistoryCreateWithoutWordInput, SearchHistoryUncheckedCreateWithoutWordInput> | SearchHistoryCreateWithoutWordInput[] | SearchHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutWordInput | SearchHistoryCreateOrConnectWithoutWordInput[]
    createMany?: SearchHistoryCreateManyWordInputEnvelope
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
  }

  export type TranslationUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<TranslationCreateWithoutWordInput, TranslationUncheckedCreateWithoutWordInput> | TranslationCreateWithoutWordInput[] | TranslationUncheckedCreateWithoutWordInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutWordInput | TranslationCreateOrConnectWithoutWordInput[]
    createMany?: TranslationCreateManyWordInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type UserBookmarkUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<UserBookmarkCreateWithoutWordInput, UserBookmarkUncheckedCreateWithoutWordInput> | UserBookmarkCreateWithoutWordInput[] | UserBookmarkUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutWordInput | UserBookmarkCreateOrConnectWithoutWordInput[]
    createMany?: UserBookmarkCreateManyWordInputEnvelope
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExampleUpdateManyWithoutWordNestedInput = {
    create?: XOR<ExampleCreateWithoutWordInput, ExampleUncheckedCreateWithoutWordInput> | ExampleCreateWithoutWordInput[] | ExampleUncheckedCreateWithoutWordInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutWordInput | ExampleCreateOrConnectWithoutWordInput[]
    upsert?: ExampleUpsertWithWhereUniqueWithoutWordInput | ExampleUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: ExampleCreateManyWordInputEnvelope
    set?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    disconnect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    delete?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    update?: ExampleUpdateWithWhereUniqueWithoutWordInput | ExampleUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: ExampleUpdateManyWithWhereWithoutWordInput | ExampleUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
  }

  export type FeaturedUpdateOneWithoutWordNestedInput = {
    create?: XOR<FeaturedCreateWithoutWordInput, FeaturedUncheckedCreateWithoutWordInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutWordInput
    upsert?: FeaturedUpsertWithoutWordInput
    disconnect?: FeaturedWhereInput | boolean
    delete?: FeaturedWhereInput | boolean
    connect?: FeaturedWhereUniqueInput
    update?: XOR<XOR<FeaturedUpdateToOneWithWhereWithoutWordInput, FeaturedUpdateWithoutWordInput>, FeaturedUncheckedUpdateWithoutWordInput>
  }

  export type SearchHistoryUpdateManyWithoutWordNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutWordInput, SearchHistoryUncheckedCreateWithoutWordInput> | SearchHistoryCreateWithoutWordInput[] | SearchHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutWordInput | SearchHistoryCreateOrConnectWithoutWordInput[]
    upsert?: SearchHistoryUpsertWithWhereUniqueWithoutWordInput | SearchHistoryUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SearchHistoryCreateManyWordInputEnvelope
    set?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    disconnect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    delete?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    update?: SearchHistoryUpdateWithWhereUniqueWithoutWordInput | SearchHistoryUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SearchHistoryUpdateManyWithWhereWithoutWordInput | SearchHistoryUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
  }

  export type TranslationUpdateManyWithoutWordNestedInput = {
    create?: XOR<TranslationCreateWithoutWordInput, TranslationUncheckedCreateWithoutWordInput> | TranslationCreateWithoutWordInput[] | TranslationUncheckedCreateWithoutWordInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutWordInput | TranslationCreateOrConnectWithoutWordInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutWordInput | TranslationUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: TranslationCreateManyWordInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutWordInput | TranslationUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutWordInput | TranslationUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type UserBookmarkUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserBookmarkCreateWithoutWordInput, UserBookmarkUncheckedCreateWithoutWordInput> | UserBookmarkCreateWithoutWordInput[] | UserBookmarkUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutWordInput | UserBookmarkCreateOrConnectWithoutWordInput[]
    upsert?: UserBookmarkUpsertWithWhereUniqueWithoutWordInput | UserBookmarkUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserBookmarkCreateManyWordInputEnvelope
    set?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    disconnect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    delete?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    update?: UserBookmarkUpdateWithWhereUniqueWithoutWordInput | UserBookmarkUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserBookmarkUpdateManyWithWhereWithoutWordInput | UserBookmarkUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
  }

  export type AlphabetUpdateOneWithoutWordsNestedInput = {
    create?: XOR<AlphabetCreateWithoutWordsInput, AlphabetUncheckedCreateWithoutWordsInput>
    connectOrCreate?: AlphabetCreateOrConnectWithoutWordsInput
    upsert?: AlphabetUpsertWithoutWordsInput
    disconnect?: AlphabetWhereInput | boolean
    delete?: AlphabetWhereInput | boolean
    connect?: AlphabetWhereUniqueInput
    update?: XOR<XOR<AlphabetUpdateToOneWithWhereWithoutWordsInput, AlphabetUpdateWithoutWordsInput>, AlphabetUncheckedUpdateWithoutWordsInput>
  }

  export type ExampleUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<ExampleCreateWithoutWordInput, ExampleUncheckedCreateWithoutWordInput> | ExampleCreateWithoutWordInput[] | ExampleUncheckedCreateWithoutWordInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutWordInput | ExampleCreateOrConnectWithoutWordInput[]
    upsert?: ExampleUpsertWithWhereUniqueWithoutWordInput | ExampleUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: ExampleCreateManyWordInputEnvelope
    set?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    disconnect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    delete?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    update?: ExampleUpdateWithWhereUniqueWithoutWordInput | ExampleUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: ExampleUpdateManyWithWhereWithoutWordInput | ExampleUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
  }

  export type FeaturedUncheckedUpdateOneWithoutWordNestedInput = {
    create?: XOR<FeaturedCreateWithoutWordInput, FeaturedUncheckedCreateWithoutWordInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutWordInput
    upsert?: FeaturedUpsertWithoutWordInput
    disconnect?: FeaturedWhereInput | boolean
    delete?: FeaturedWhereInput | boolean
    connect?: FeaturedWhereUniqueInput
    update?: XOR<XOR<FeaturedUpdateToOneWithWhereWithoutWordInput, FeaturedUpdateWithoutWordInput>, FeaturedUncheckedUpdateWithoutWordInput>
  }

  export type SearchHistoryUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutWordInput, SearchHistoryUncheckedCreateWithoutWordInput> | SearchHistoryCreateWithoutWordInput[] | SearchHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutWordInput | SearchHistoryCreateOrConnectWithoutWordInput[]
    upsert?: SearchHistoryUpsertWithWhereUniqueWithoutWordInput | SearchHistoryUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SearchHistoryCreateManyWordInputEnvelope
    set?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    disconnect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    delete?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    update?: SearchHistoryUpdateWithWhereUniqueWithoutWordInput | SearchHistoryUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SearchHistoryUpdateManyWithWhereWithoutWordInput | SearchHistoryUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
  }

  export type TranslationUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<TranslationCreateWithoutWordInput, TranslationUncheckedCreateWithoutWordInput> | TranslationCreateWithoutWordInput[] | TranslationUncheckedCreateWithoutWordInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutWordInput | TranslationCreateOrConnectWithoutWordInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutWordInput | TranslationUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: TranslationCreateManyWordInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutWordInput | TranslationUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutWordInput | TranslationUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type UserBookmarkUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserBookmarkCreateWithoutWordInput, UserBookmarkUncheckedCreateWithoutWordInput> | UserBookmarkCreateWithoutWordInput[] | UserBookmarkUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutWordInput | UserBookmarkCreateOrConnectWithoutWordInput[]
    upsert?: UserBookmarkUpsertWithWhereUniqueWithoutWordInput | UserBookmarkUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserBookmarkCreateManyWordInputEnvelope
    set?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    disconnect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    delete?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    update?: UserBookmarkUpdateWithWhereUniqueWithoutWordInput | UserBookmarkUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserBookmarkUpdateManyWithWhereWithoutWordInput | UserBookmarkUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<WordCreateWithoutTranslationsInput, WordUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: WordCreateOrConnectWithoutTranslationsInput
    connect?: WordWhereUniqueInput
  }

  export type WordUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<WordCreateWithoutTranslationsInput, WordUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: WordCreateOrConnectWithoutTranslationsInput
    upsert?: WordUpsertWithoutTranslationsInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutTranslationsInput, WordUpdateWithoutTranslationsInput>, WordUncheckedUpdateWithoutTranslationsInput>
  }

  export type WordCreateNestedOneWithoutExamplesInput = {
    create?: XOR<WordCreateWithoutExamplesInput, WordUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: WordCreateOrConnectWithoutExamplesInput
    connect?: WordWhereUniqueInput
  }

  export type WordUpdateOneRequiredWithoutExamplesNestedInput = {
    create?: XOR<WordCreateWithoutExamplesInput, WordUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: WordCreateOrConnectWithoutExamplesInput
    upsert?: WordUpsertWithoutExamplesInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutExamplesInput, WordUpdateWithoutExamplesInput>, WordUncheckedUpdateWithoutExamplesInput>
  }

  export type WordCreateNestedManyWithoutAlphabetInput = {
    create?: XOR<WordCreateWithoutAlphabetInput, WordUncheckedCreateWithoutAlphabetInput> | WordCreateWithoutAlphabetInput[] | WordUncheckedCreateWithoutAlphabetInput[]
    connectOrCreate?: WordCreateOrConnectWithoutAlphabetInput | WordCreateOrConnectWithoutAlphabetInput[]
    createMany?: WordCreateManyAlphabetInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutAlphabetInput = {
    create?: XOR<WordCreateWithoutAlphabetInput, WordUncheckedCreateWithoutAlphabetInput> | WordCreateWithoutAlphabetInput[] | WordUncheckedCreateWithoutAlphabetInput[]
    connectOrCreate?: WordCreateOrConnectWithoutAlphabetInput | WordCreateOrConnectWithoutAlphabetInput[]
    createMany?: WordCreateManyAlphabetInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type WordUpdateManyWithoutAlphabetNestedInput = {
    create?: XOR<WordCreateWithoutAlphabetInput, WordUncheckedCreateWithoutAlphabetInput> | WordCreateWithoutAlphabetInput[] | WordUncheckedCreateWithoutAlphabetInput[]
    connectOrCreate?: WordCreateOrConnectWithoutAlphabetInput | WordCreateOrConnectWithoutAlphabetInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutAlphabetInput | WordUpsertWithWhereUniqueWithoutAlphabetInput[]
    createMany?: WordCreateManyAlphabetInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutAlphabetInput | WordUpdateWithWhereUniqueWithoutAlphabetInput[]
    updateMany?: WordUpdateManyWithWhereWithoutAlphabetInput | WordUpdateManyWithWhereWithoutAlphabetInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type WordUncheckedUpdateManyWithoutAlphabetNestedInput = {
    create?: XOR<WordCreateWithoutAlphabetInput, WordUncheckedCreateWithoutAlphabetInput> | WordCreateWithoutAlphabetInput[] | WordUncheckedCreateWithoutAlphabetInput[]
    connectOrCreate?: WordCreateOrConnectWithoutAlphabetInput | WordCreateOrConnectWithoutAlphabetInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutAlphabetInput | WordUpsertWithWhereUniqueWithoutAlphabetInput[]
    createMany?: WordCreateManyAlphabetInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutAlphabetInput | WordUpdateWithWhereUniqueWithoutAlphabetInput[]
    updateMany?: WordUpdateManyWithWhereWithoutAlphabetInput | WordUpdateManyWithWhereWithoutAlphabetInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutFeaturedInput = {
    create?: XOR<WordCreateWithoutFeaturedInput, WordUncheckedCreateWithoutFeaturedInput>
    connectOrCreate?: WordCreateOrConnectWithoutFeaturedInput
    connect?: WordWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WordUpdateOneRequiredWithoutFeaturedNestedInput = {
    create?: XOR<WordCreateWithoutFeaturedInput, WordUncheckedCreateWithoutFeaturedInput>
    connectOrCreate?: WordCreateOrConnectWithoutFeaturedInput
    upsert?: WordUpsertWithoutFeaturedInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutFeaturedInput, WordUpdateWithoutFeaturedInput>, WordUncheckedUpdateWithoutFeaturedInput>
  }

  export type SearchHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
  }

  export type UserBookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
  }

  export type SearchHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
  }

  export type UserBookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
  }

  export type SearchHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SearchHistoryUpsertWithWhereUniqueWithoutUserInput | SearchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    set?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    disconnect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    delete?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    update?: SearchHistoryUpdateWithWhereUniqueWithoutUserInput | SearchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchHistoryUpdateManyWithWhereWithoutUserInput | SearchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
  }

  export type UserBookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: UserBookmarkUpsertWithWhereUniqueWithoutUserInput | UserBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    set?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    disconnect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    delete?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    update?: UserBookmarkUpdateWithWhereUniqueWithoutUserInput | UserBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookmarkUpdateManyWithWhereWithoutUserInput | UserBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
  }

  export type SearchHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SearchHistoryUpsertWithWhereUniqueWithoutUserInput | SearchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    set?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    disconnect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    delete?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    update?: SearchHistoryUpdateWithWhereUniqueWithoutUserInput | SearchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchHistoryUpdateManyWithWhereWithoutUserInput | SearchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
  }

  export type UserBookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput> | UserBookmarkCreateWithoutUserInput[] | UserBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookmarkCreateOrConnectWithoutUserInput | UserBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: UserBookmarkUpsertWithWhereUniqueWithoutUserInput | UserBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookmarkCreateManyUserInputEnvelope
    set?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    disconnect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    delete?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    connect?: UserBookmarkWhereUniqueInput | UserBookmarkWhereUniqueInput[]
    update?: UserBookmarkUpdateWithWhereUniqueWithoutUserInput | UserBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookmarkUpdateManyWithWhereWithoutUserInput | UserBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type WordCreateNestedOneWithoutUserBookmarksInput = {
    create?: XOR<WordCreateWithoutUserBookmarksInput, WordUncheckedCreateWithoutUserBookmarksInput>
    connectOrCreate?: WordCreateOrConnectWithoutUserBookmarksInput
    connect?: WordWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type WordUpdateOneRequiredWithoutUserBookmarksNestedInput = {
    create?: XOR<WordCreateWithoutUserBookmarksInput, WordUncheckedCreateWithoutUserBookmarksInput>
    connectOrCreate?: WordCreateOrConnectWithoutUserBookmarksInput
    upsert?: WordUpsertWithoutUserBookmarksInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutUserBookmarksInput, WordUpdateWithoutUserBookmarksInput>, WordUncheckedUpdateWithoutUserBookmarksInput>
  }

  export type UserCreateNestedOneWithoutSearchHistoryInput = {
    create?: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type WordCreateNestedOneWithoutSearchHistoryInput = {
    create?: XOR<WordCreateWithoutSearchHistoryInput, WordUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: WordCreateOrConnectWithoutSearchHistoryInput
    connect?: WordWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSearchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchHistoryInput
    upsert?: UserUpsertWithoutSearchHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchHistoryInput, UserUpdateWithoutSearchHistoryInput>, UserUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type WordUpdateOneRequiredWithoutSearchHistoryNestedInput = {
    create?: XOR<WordCreateWithoutSearchHistoryInput, WordUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: WordCreateOrConnectWithoutSearchHistoryInput
    upsert?: WordUpsertWithoutSearchHistoryInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutSearchHistoryInput, WordUpdateWithoutSearchHistoryInput>, WordUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExampleCreateWithoutWordInput = {
    id?: string
    yorubaSentence: string
    translation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExampleUncheckedCreateWithoutWordInput = {
    id?: string
    yorubaSentence: string
    translation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExampleCreateOrConnectWithoutWordInput = {
    where: ExampleWhereUniqueInput
    create: XOR<ExampleCreateWithoutWordInput, ExampleUncheckedCreateWithoutWordInput>
  }

  export type ExampleCreateManyWordInputEnvelope = {
    data: ExampleCreateManyWordInput | ExampleCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type FeaturedCreateWithoutWordInput = {
    id?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedUncheckedCreateWithoutWordInput = {
    id?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedCreateOrConnectWithoutWordInput = {
    where: FeaturedWhereUniqueInput
    create: XOR<FeaturedCreateWithoutWordInput, FeaturedUncheckedCreateWithoutWordInput>
  }

  export type SearchHistoryCreateWithoutWordInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSearchHistoryInput
  }

  export type SearchHistoryUncheckedCreateWithoutWordInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SearchHistoryCreateOrConnectWithoutWordInput = {
    where: SearchHistoryWhereUniqueInput
    create: XOR<SearchHistoryCreateWithoutWordInput, SearchHistoryUncheckedCreateWithoutWordInput>
  }

  export type SearchHistoryCreateManyWordInputEnvelope = {
    data: SearchHistoryCreateManyWordInput | SearchHistoryCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type TranslationCreateWithoutWordInput = {
    id?: string
    text: string
    language?: string
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUncheckedCreateWithoutWordInput = {
    id?: string
    text: string
    language?: string
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationCreateOrConnectWithoutWordInput = {
    where: TranslationWhereUniqueInput
    create: XOR<TranslationCreateWithoutWordInput, TranslationUncheckedCreateWithoutWordInput>
  }

  export type TranslationCreateManyWordInputEnvelope = {
    data: TranslationCreateManyWordInput | TranslationCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type UserBookmarkCreateWithoutWordInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type UserBookmarkUncheckedCreateWithoutWordInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookmarkCreateOrConnectWithoutWordInput = {
    where: UserBookmarkWhereUniqueInput
    create: XOR<UserBookmarkCreateWithoutWordInput, UserBookmarkUncheckedCreateWithoutWordInput>
  }

  export type UserBookmarkCreateManyWordInputEnvelope = {
    data: UserBookmarkCreateManyWordInput | UserBookmarkCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type AlphabetCreateWithoutWordsInput = {
    id?: string
    letter: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlphabetUncheckedCreateWithoutWordsInput = {
    id?: string
    letter: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlphabetCreateOrConnectWithoutWordsInput = {
    where: AlphabetWhereUniqueInput
    create: XOR<AlphabetCreateWithoutWordsInput, AlphabetUncheckedCreateWithoutWordsInput>
  }

  export type ExampleUpsertWithWhereUniqueWithoutWordInput = {
    where: ExampleWhereUniqueInput
    update: XOR<ExampleUpdateWithoutWordInput, ExampleUncheckedUpdateWithoutWordInput>
    create: XOR<ExampleCreateWithoutWordInput, ExampleUncheckedCreateWithoutWordInput>
  }

  export type ExampleUpdateWithWhereUniqueWithoutWordInput = {
    where: ExampleWhereUniqueInput
    data: XOR<ExampleUpdateWithoutWordInput, ExampleUncheckedUpdateWithoutWordInput>
  }

  export type ExampleUpdateManyWithWhereWithoutWordInput = {
    where: ExampleScalarWhereInput
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyWithoutWordInput>
  }

  export type ExampleScalarWhereInput = {
    AND?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
    OR?: ExampleScalarWhereInput[]
    NOT?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
    id?: StringFilter<"Example"> | string
    yorubaSentence?: StringFilter<"Example"> | string
    translation?: StringFilter<"Example"> | string
    createdAt?: DateTimeFilter<"Example"> | Date | string
    updatedAt?: DateTimeFilter<"Example"> | Date | string
    wordId?: StringFilter<"Example"> | string
  }

  export type FeaturedUpsertWithoutWordInput = {
    update: XOR<FeaturedUpdateWithoutWordInput, FeaturedUncheckedUpdateWithoutWordInput>
    create: XOR<FeaturedCreateWithoutWordInput, FeaturedUncheckedCreateWithoutWordInput>
    where?: FeaturedWhereInput
  }

  export type FeaturedUpdateToOneWithWhereWithoutWordInput = {
    where?: FeaturedWhereInput
    data: XOR<FeaturedUpdateWithoutWordInput, FeaturedUncheckedUpdateWithoutWordInput>
  }

  export type FeaturedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUpsertWithWhereUniqueWithoutWordInput = {
    where: SearchHistoryWhereUniqueInput
    update: XOR<SearchHistoryUpdateWithoutWordInput, SearchHistoryUncheckedUpdateWithoutWordInput>
    create: XOR<SearchHistoryCreateWithoutWordInput, SearchHistoryUncheckedCreateWithoutWordInput>
  }

  export type SearchHistoryUpdateWithWhereUniqueWithoutWordInput = {
    where: SearchHistoryWhereUniqueInput
    data: XOR<SearchHistoryUpdateWithoutWordInput, SearchHistoryUncheckedUpdateWithoutWordInput>
  }

  export type SearchHistoryUpdateManyWithWhereWithoutWordInput = {
    where: SearchHistoryScalarWhereInput
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyWithoutWordInput>
  }

  export type SearchHistoryScalarWhereInput = {
    AND?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
    OR?: SearchHistoryScalarWhereInput[]
    NOT?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
    id?: StringFilter<"SearchHistory"> | string
    userId?: StringFilter<"SearchHistory"> | string
    wordId?: StringFilter<"SearchHistory"> | string
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
  }

  export type TranslationUpsertWithWhereUniqueWithoutWordInput = {
    where: TranslationWhereUniqueInput
    update: XOR<TranslationUpdateWithoutWordInput, TranslationUncheckedUpdateWithoutWordInput>
    create: XOR<TranslationCreateWithoutWordInput, TranslationUncheckedCreateWithoutWordInput>
  }

  export type TranslationUpdateWithWhereUniqueWithoutWordInput = {
    where: TranslationWhereUniqueInput
    data: XOR<TranslationUpdateWithoutWordInput, TranslationUncheckedUpdateWithoutWordInput>
  }

  export type TranslationUpdateManyWithWhereWithoutWordInput = {
    where: TranslationScalarWhereInput
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyWithoutWordInput>
  }

  export type TranslationScalarWhereInput = {
    AND?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
    OR?: TranslationScalarWhereInput[]
    NOT?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
    id?: StringFilter<"Translation"> | string
    text?: StringFilter<"Translation"> | string
    language?: StringFilter<"Translation"> | string
    partOfSpeech?: StringNullableFilter<"Translation"> | string | null
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
    wordId?: StringFilter<"Translation"> | string
  }

  export type UserBookmarkUpsertWithWhereUniqueWithoutWordInput = {
    where: UserBookmarkWhereUniqueInput
    update: XOR<UserBookmarkUpdateWithoutWordInput, UserBookmarkUncheckedUpdateWithoutWordInput>
    create: XOR<UserBookmarkCreateWithoutWordInput, UserBookmarkUncheckedCreateWithoutWordInput>
  }

  export type UserBookmarkUpdateWithWhereUniqueWithoutWordInput = {
    where: UserBookmarkWhereUniqueInput
    data: XOR<UserBookmarkUpdateWithoutWordInput, UserBookmarkUncheckedUpdateWithoutWordInput>
  }

  export type UserBookmarkUpdateManyWithWhereWithoutWordInput = {
    where: UserBookmarkScalarWhereInput
    data: XOR<UserBookmarkUpdateManyMutationInput, UserBookmarkUncheckedUpdateManyWithoutWordInput>
  }

  export type UserBookmarkScalarWhereInput = {
    AND?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
    OR?: UserBookmarkScalarWhereInput[]
    NOT?: UserBookmarkScalarWhereInput | UserBookmarkScalarWhereInput[]
    id?: StringFilter<"UserBookmark"> | string
    userId?: StringFilter<"UserBookmark"> | string
    wordId?: StringFilter<"UserBookmark"> | string
    createdAt?: DateTimeFilter<"UserBookmark"> | Date | string
    updatedAt?: DateTimeFilter<"UserBookmark"> | Date | string
  }

  export type AlphabetUpsertWithoutWordsInput = {
    update: XOR<AlphabetUpdateWithoutWordsInput, AlphabetUncheckedUpdateWithoutWordsInput>
    create: XOR<AlphabetCreateWithoutWordsInput, AlphabetUncheckedCreateWithoutWordsInput>
    where?: AlphabetWhereInput
  }

  export type AlphabetUpdateToOneWithWhereWithoutWordsInput = {
    where?: AlphabetWhereInput
    data: XOR<AlphabetUpdateWithoutWordsInput, AlphabetUncheckedUpdateWithoutWordsInput>
  }

  export type AlphabetUpdateWithoutWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlphabetUncheckedUpdateWithoutWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateWithoutTranslationsInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleCreateNestedManyWithoutWordInput
    featured?: FeaturedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkCreateNestedManyWithoutWordInput
    alphabet?: AlphabetCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutTranslationsInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutWordInput
    featured?: FeaturedUncheckedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutTranslationsInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutTranslationsInput, WordUncheckedCreateWithoutTranslationsInput>
  }

  export type WordUpsertWithoutTranslationsInput = {
    update: XOR<WordUpdateWithoutTranslationsInput, WordUncheckedUpdateWithoutTranslationsInput>
    create: XOR<WordCreateWithoutTranslationsInput, WordUncheckedCreateWithoutTranslationsInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutTranslationsInput, WordUncheckedUpdateWithoutTranslationsInput>
  }

  export type WordUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutWordNestedInput
    featured?: FeaturedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUpdateManyWithoutWordNestedInput
    alphabet?: AlphabetUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutWordNestedInput
    featured?: FeaturedUncheckedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateWithoutExamplesInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    featured?: FeaturedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutWordInput
    translations?: TranslationCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkCreateNestedManyWithoutWordInput
    alphabet?: AlphabetCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutExamplesInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    featured?: FeaturedUncheckedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutWordInput
    translations?: TranslationUncheckedCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutExamplesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutExamplesInput, WordUncheckedCreateWithoutExamplesInput>
  }

  export type WordUpsertWithoutExamplesInput = {
    update: XOR<WordUpdateWithoutExamplesInput, WordUncheckedUpdateWithoutExamplesInput>
    create: XOR<WordCreateWithoutExamplesInput, WordUncheckedCreateWithoutExamplesInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutExamplesInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutExamplesInput, WordUncheckedUpdateWithoutExamplesInput>
  }

  export type WordUpdateWithoutExamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: FeaturedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutWordNestedInput
    translations?: TranslationUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUpdateManyWithoutWordNestedInput
    alphabet?: AlphabetUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutExamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: FeaturedUncheckedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutWordNestedInput
    translations?: TranslationUncheckedUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateWithoutAlphabetInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleCreateNestedManyWithoutWordInput
    featured?: FeaturedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutWordInput
    translations?: TranslationCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutAlphabetInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutWordInput
    featured?: FeaturedUncheckedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutWordInput
    translations?: TranslationUncheckedCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutAlphabetInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutAlphabetInput, WordUncheckedCreateWithoutAlphabetInput>
  }

  export type WordCreateManyAlphabetInputEnvelope = {
    data: WordCreateManyAlphabetInput | WordCreateManyAlphabetInput[]
    skipDuplicates?: boolean
  }

  export type WordUpsertWithWhereUniqueWithoutAlphabetInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutAlphabetInput, WordUncheckedUpdateWithoutAlphabetInput>
    create: XOR<WordCreateWithoutAlphabetInput, WordUncheckedCreateWithoutAlphabetInput>
  }

  export type WordUpdateWithWhereUniqueWithoutAlphabetInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutAlphabetInput, WordUncheckedUpdateWithoutAlphabetInput>
  }

  export type WordUpdateManyWithWhereWithoutAlphabetInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutAlphabetInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    id?: StringFilter<"Word"> | string
    word?: StringFilter<"Word"> | string
    pronunciation?: StringNullableFilter<"Word"> | string | null
    syllables?: StringNullableFilter<"Word"> | string | null
    partOfSpeech?: StringNullableFilter<"Word"> | string | null
    createdAt?: DateTimeFilter<"Word"> | Date | string
    updatedAt?: DateTimeFilter<"Word"> | Date | string
    alphabetId?: StringNullableFilter<"Word"> | string | null
    isFeatured?: BoolFilter<"Word"> | boolean
    tonalMarks?: StringNullableFilter<"Word"> | string | null
    audioUrl?: StringNullableFilter<"Word"> | string | null
    etymology?: StringNullableFilter<"Word"> | string | null
    dialectVariants?: StringNullableFilter<"Word"> | string | null
  }

  export type WordCreateWithoutFeaturedInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleCreateNestedManyWithoutWordInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutWordInput
    translations?: TranslationCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkCreateNestedManyWithoutWordInput
    alphabet?: AlphabetCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutFeaturedInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutWordInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutWordInput
    translations?: TranslationUncheckedCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutFeaturedInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutFeaturedInput, WordUncheckedCreateWithoutFeaturedInput>
  }

  export type WordUpsertWithoutFeaturedInput = {
    update: XOR<WordUpdateWithoutFeaturedInput, WordUncheckedUpdateWithoutFeaturedInput>
    create: XOR<WordCreateWithoutFeaturedInput, WordUncheckedCreateWithoutFeaturedInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutFeaturedInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutFeaturedInput, WordUncheckedUpdateWithoutFeaturedInput>
  }

  export type WordUpdateWithoutFeaturedInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutWordNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutWordNestedInput
    translations?: TranslationUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUpdateManyWithoutWordNestedInput
    alphabet?: AlphabetUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutFeaturedInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutWordNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutWordNestedInput
    translations?: TranslationUncheckedUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUncheckedUpdateManyWithoutWordNestedInput
  }

  export type SearchHistoryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    word: WordCreateNestedOneWithoutSearchHistoryInput
  }

  export type SearchHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    wordId: string
    createdAt?: Date | string
  }

  export type SearchHistoryCreateOrConnectWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    create: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type SearchHistoryCreateManyUserInputEnvelope = {
    data: SearchHistoryCreateManyUserInput | SearchHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    word: WordCreateNestedOneWithoutUserBookmarksInput
  }

  export type UserBookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    wordId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookmarkCreateOrConnectWithoutUserInput = {
    where: UserBookmarkWhereUniqueInput
    create: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput>
  }

  export type UserBookmarkCreateManyUserInputEnvelope = {
    data: UserBookmarkCreateManyUserInput | UserBookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SearchHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    update: XOR<SearchHistoryUpdateWithoutUserInput, SearchHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type SearchHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    data: XOR<SearchHistoryUpdateWithoutUserInput, SearchHistoryUncheckedUpdateWithoutUserInput>
  }

  export type SearchHistoryUpdateManyWithWhereWithoutUserInput = {
    where: SearchHistoryScalarWhereInput
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBookmarkWhereUniqueInput
    update: XOR<UserBookmarkUpdateWithoutUserInput, UserBookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<UserBookmarkCreateWithoutUserInput, UserBookmarkUncheckedCreateWithoutUserInput>
  }

  export type UserBookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBookmarkWhereUniqueInput
    data: XOR<UserBookmarkUpdateWithoutUserInput, UserBookmarkUncheckedUpdateWithoutUserInput>
  }

  export type UserBookmarkUpdateManyWithWhereWithoutUserInput = {
    where: UserBookmarkScalarWhereInput
    data: XOR<UserBookmarkUpdateManyMutationInput, UserBookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type WordCreateWithoutUserBookmarksInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleCreateNestedManyWithoutWordInput
    featured?: FeaturedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutWordInput
    translations?: TranslationCreateNestedManyWithoutWordInput
    alphabet?: AlphabetCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutUserBookmarksInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutWordInput
    featured?: FeaturedUncheckedCreateNestedOneWithoutWordInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutWordInput
    translations?: TranslationUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutUserBookmarksInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutUserBookmarksInput, WordUncheckedCreateWithoutUserBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordUpsertWithoutUserBookmarksInput = {
    update: XOR<WordUpdateWithoutUserBookmarksInput, WordUncheckedUpdateWithoutUserBookmarksInput>
    create: XOR<WordCreateWithoutUserBookmarksInput, WordUncheckedCreateWithoutUserBookmarksInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutUserBookmarksInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutUserBookmarksInput, WordUncheckedUpdateWithoutUserBookmarksInput>
  }

  export type WordUpdateWithoutUserBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutWordNestedInput
    featured?: FeaturedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutWordNestedInput
    translations?: TranslationUpdateManyWithoutWordNestedInput
    alphabet?: AlphabetUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutUserBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutWordNestedInput
    featured?: FeaturedUncheckedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutWordNestedInput
    translations?: TranslationUncheckedUpdateManyWithoutWordNestedInput
  }

  export type UserCreateWithoutSearchHistoryInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: UserBookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSearchHistoryInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSearchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
  }

  export type WordCreateWithoutSearchHistoryInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleCreateNestedManyWithoutWordInput
    featured?: FeaturedCreateNestedOneWithoutWordInput
    translations?: TranslationCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkCreateNestedManyWithoutWordInput
    alphabet?: AlphabetCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutSearchHistoryInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alphabetId?: string | null
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutWordInput
    featured?: FeaturedUncheckedCreateNestedOneWithoutWordInput
    translations?: TranslationUncheckedCreateNestedManyWithoutWordInput
    userBookmarks?: UserBookmarkUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutSearchHistoryInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSearchHistoryInput, WordUncheckedCreateWithoutSearchHistoryInput>
  }

  export type UserUpsertWithoutSearchHistoryInput = {
    update: XOR<UserUpdateWithoutSearchHistoryInput, UserUncheckedUpdateWithoutSearchHistoryInput>
    create: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchHistoryInput, UserUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type UserUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: UserBookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: UserBookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordUpsertWithoutSearchHistoryInput = {
    update: XOR<WordUpdateWithoutSearchHistoryInput, WordUncheckedUpdateWithoutSearchHistoryInput>
    create: XOR<WordCreateWithoutSearchHistoryInput, WordUncheckedCreateWithoutSearchHistoryInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutSearchHistoryInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutSearchHistoryInput, WordUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type WordUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutWordNestedInput
    featured?: FeaturedUpdateOneWithoutWordNestedInput
    translations?: TranslationUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUpdateManyWithoutWordNestedInput
    alphabet?: AlphabetUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alphabetId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutWordNestedInput
    featured?: FeaturedUncheckedUpdateOneWithoutWordNestedInput
    translations?: TranslationUncheckedUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUncheckedUpdateManyWithoutWordNestedInput
  }

  export type ExampleCreateManyWordInput = {
    id?: string
    yorubaSentence: string
    translation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchHistoryCreateManyWordInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TranslationCreateManyWordInput = {
    id?: string
    text: string
    language?: string
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookmarkCreateManyWordInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExampleUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExampleUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExampleUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    yorubaSentence?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type UserBookmarkUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateManyAlphabetInput = {
    id?: string
    word: string
    pronunciation?: string | null
    syllables?: string | null
    partOfSpeech?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    tonalMarks?: string | null
    audioUrl?: string | null
    etymology?: string | null
    dialectVariants?: string | null
  }

  export type WordUpdateWithoutAlphabetInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutWordNestedInput
    featured?: FeaturedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutWordNestedInput
    translations?: TranslationUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutAlphabetInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutWordNestedInput
    featured?: FeaturedUncheckedUpdateOneWithoutWordNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutWordNestedInput
    translations?: TranslationUncheckedUpdateManyWithoutWordNestedInput
    userBookmarks?: UserBookmarkUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateManyWithoutAlphabetInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    syllables?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    tonalMarks?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    dialectVariants?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SearchHistoryCreateManyUserInput = {
    id?: string
    wordId: string
    createdAt?: Date | string
  }

  export type UserBookmarkCreateManyUserInput = {
    id?: string
    wordId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutUserBookmarksNestedInput
  }

  export type UserBookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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