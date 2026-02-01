
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model WorkoutTemplate
 * 
 */
export type WorkoutTemplate = $Result.DefaultSelection<Prisma.$WorkoutTemplatePayload>
/**
 * Model PlannedExercise
 * 
 */
export type PlannedExercise = $Result.DefaultSelection<Prisma.$PlannedExercisePayload>
/**
 * Model DailyLog
 * 
 */
export type DailyLog = $Result.DefaultSelection<Prisma.$DailyLogPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model WorkoutSession
 * 
 */
export type WorkoutSession = $Result.DefaultSelection<Prisma.$WorkoutSessionPayload>
/**
 * Model ExerciseLog
 * 
 */
export type ExerciseLog = $Result.DefaultSelection<Prisma.$ExerciseLogPayload>
/**
 * Model SetLog
 * 
 */
export type SetLog = $Result.DefaultSelection<Prisma.$SetLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutTemplate`: Exposes CRUD operations for the **WorkoutTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutTemplates
    * const workoutTemplates = await prisma.workoutTemplate.findMany()
    * ```
    */
  get workoutTemplate(): Prisma.WorkoutTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plannedExercise`: Exposes CRUD operations for the **PlannedExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlannedExercises
    * const plannedExercises = await prisma.plannedExercise.findMany()
    * ```
    */
  get plannedExercise(): Prisma.PlannedExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyLog`: Exposes CRUD operations for the **DailyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyLogs
    * const dailyLogs = await prisma.dailyLog.findMany()
    * ```
    */
  get dailyLog(): Prisma.DailyLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutSession`: Exposes CRUD operations for the **WorkoutSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutSessions
    * const workoutSessions = await prisma.workoutSession.findMany()
    * ```
    */
  get workoutSession(): Prisma.WorkoutSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseLog`: Exposes CRUD operations for the **ExerciseLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseLogs
    * const exerciseLogs = await prisma.exerciseLog.findMany()
    * ```
    */
  get exerciseLog(): Prisma.ExerciseLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setLog`: Exposes CRUD operations for the **SetLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SetLogs
    * const setLogs = await prisma.setLog.findMany()
    * ```
    */
  get setLog(): Prisma.SetLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Exercise: 'Exercise',
    Program: 'Program',
    WorkoutTemplate: 'WorkoutTemplate',
    PlannedExercise: 'PlannedExercise',
    DailyLog: 'DailyLog',
    Meal: 'Meal',
    WorkoutSession: 'WorkoutSession',
    ExerciseLog: 'ExerciseLog',
    SetLog: 'SetLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "exercise" | "program" | "workoutTemplate" | "plannedExercise" | "dailyLog" | "meal" | "workoutSession" | "exerciseLog" | "setLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      WorkoutTemplate: {
        payload: Prisma.$WorkoutTemplatePayload<ExtArgs>
        fields: Prisma.WorkoutTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          findFirst: {
            args: Prisma.WorkoutTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          findMany: {
            args: Prisma.WorkoutTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>[]
          }
          create: {
            args: Prisma.WorkoutTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          createMany: {
            args: Prisma.WorkoutTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>[]
          }
          delete: {
            args: Prisma.WorkoutTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          update: {
            args: Prisma.WorkoutTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          aggregate: {
            args: Prisma.WorkoutTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutTemplate>
          }
          groupBy: {
            args: Prisma.WorkoutTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutTemplateCountAggregateOutputType> | number
          }
        }
      }
      PlannedExercise: {
        payload: Prisma.$PlannedExercisePayload<ExtArgs>
        fields: Prisma.PlannedExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlannedExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlannedExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>
          }
          findFirst: {
            args: Prisma.PlannedExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlannedExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>
          }
          findMany: {
            args: Prisma.PlannedExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>[]
          }
          create: {
            args: Prisma.PlannedExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>
          }
          createMany: {
            args: Prisma.PlannedExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlannedExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>[]
          }
          delete: {
            args: Prisma.PlannedExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>
          }
          update: {
            args: Prisma.PlannedExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>
          }
          deleteMany: {
            args: Prisma.PlannedExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlannedExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlannedExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>[]
          }
          upsert: {
            args: Prisma.PlannedExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedExercisePayload>
          }
          aggregate: {
            args: Prisma.PlannedExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlannedExercise>
          }
          groupBy: {
            args: Prisma.PlannedExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlannedExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlannedExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<PlannedExerciseCountAggregateOutputType> | number
          }
        }
      }
      DailyLog: {
        payload: Prisma.$DailyLogPayload<ExtArgs>
        fields: Prisma.DailyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findFirst: {
            args: Prisma.DailyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findMany: {
            args: Prisma.DailyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          create: {
            args: Prisma.DailyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          createMany: {
            args: Prisma.DailyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          delete: {
            args: Prisma.DailyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          update: {
            args: Prisma.DailyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          deleteMany: {
            args: Prisma.DailyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          upsert: {
            args: Prisma.DailyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          aggregate: {
            args: Prisma.DailyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyLog>
          }
          groupBy: {
            args: Prisma.DailyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyLogCountArgs<ExtArgs>
            result: $Utils.Optional<DailyLogCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      WorkoutSession: {
        payload: Prisma.$WorkoutSessionPayload<ExtArgs>
        fields: Prisma.WorkoutSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          findFirst: {
            args: Prisma.WorkoutSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          findMany: {
            args: Prisma.WorkoutSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          create: {
            args: Prisma.WorkoutSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          createMany: {
            args: Prisma.WorkoutSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          delete: {
            args: Prisma.WorkoutSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          update: {
            args: Prisma.WorkoutSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          aggregate: {
            args: Prisma.WorkoutSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutSession>
          }
          groupBy: {
            args: Prisma.WorkoutSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutSessionCountAggregateOutputType> | number
          }
        }
      }
      ExerciseLog: {
        payload: Prisma.$ExerciseLogPayload<ExtArgs>
        fields: Prisma.ExerciseLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          findFirst: {
            args: Prisma.ExerciseLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          findMany: {
            args: Prisma.ExerciseLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>[]
          }
          create: {
            args: Prisma.ExerciseLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          createMany: {
            args: Prisma.ExerciseLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>[]
          }
          delete: {
            args: Prisma.ExerciseLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          update: {
            args: Prisma.ExerciseLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          aggregate: {
            args: Prisma.ExerciseLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseLog>
          }
          groupBy: {
            args: Prisma.ExerciseLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseLogCountAggregateOutputType> | number
          }
        }
      }
      SetLog: {
        payload: Prisma.$SetLogPayload<ExtArgs>
        fields: Prisma.SetLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          findFirst: {
            args: Prisma.SetLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          findMany: {
            args: Prisma.SetLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>[]
          }
          create: {
            args: Prisma.SetLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          createMany: {
            args: Prisma.SetLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>[]
          }
          delete: {
            args: Prisma.SetLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          update: {
            args: Prisma.SetLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          deleteMany: {
            args: Prisma.SetLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>[]
          }
          upsert: {
            args: Prisma.SetLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          aggregate: {
            args: Prisma.SetLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetLog>
          }
          groupBy: {
            args: Prisma.SetLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetLogCountArgs<ExtArgs>
            result: $Utils.Optional<SetLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    exercise?: ExerciseOmit
    program?: ProgramOmit
    workoutTemplate?: WorkoutTemplateOmit
    plannedExercise?: PlannedExerciseOmit
    dailyLog?: DailyLogOmit
    meal?: MealOmit
    workoutSession?: WorkoutSessionOmit
    exerciseLog?: ExerciseLogOmit
    setLog?: SetLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    programs: number
    dailyLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    programs?: boolean | UserCountOutputTypeCountProgramsArgs
    dailyLogs?: boolean | UserCountOutputTypeCountDailyLogsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    logs: number
    plannedIn: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | ExerciseCountOutputTypeCountLogsArgs
    plannedIn?: boolean | ExerciseCountOutputTypeCountPlannedInArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountPlannedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedExerciseWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    workouts: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | ProgramCountOutputTypeCountWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutTemplateWhereInput
  }


  /**
   * Count Type WorkoutTemplateCountOutputType
   */

  export type WorkoutTemplateCountOutputType = {
    exercises: number
  }

  export type WorkoutTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutTemplateCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutTemplateCountOutputType without action
   */
  export type WorkoutTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplateCountOutputType
     */
    select?: WorkoutTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutTemplateCountOutputType without action
   */
  export type WorkoutTemplateCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedExerciseWhereInput
  }


  /**
   * Count Type DailyLogCountOutputType
   */

  export type DailyLogCountOutputType = {
    meals: number
    workouts: number
  }

  export type DailyLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | DailyLogCountOutputTypeCountMealsArgs
    workouts?: boolean | DailyLogCountOutputTypeCountWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * DailyLogCountOutputType without action
   */
  export type DailyLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLogCountOutputType
     */
    select?: DailyLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyLogCountOutputType without action
   */
  export type DailyLogCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * DailyLogCountOutputType without action
   */
  export type DailyLogCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
  }


  /**
   * Count Type WorkoutSessionCountOutputType
   */

  export type WorkoutSessionCountOutputType = {
    exercises: number
  }

  export type WorkoutSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutSessionCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutSessionCountOutputType without action
   */
  export type WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSessionCountOutputType
     */
    select?: WorkoutSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutSessionCountOutputType without action
   */
  export type WorkoutSessionCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
  }


  /**
   * Count Type ExerciseLogCountOutputType
   */

  export type ExerciseLogCountOutputType = {
    sets: number
  }

  export type ExerciseLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sets?: boolean | ExerciseLogCountOutputTypeCountSetsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseLogCountOutputType without action
   */
  export type ExerciseLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLogCountOutputType
     */
    select?: ExerciseLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseLogCountOutputType without action
   */
  export type ExerciseLogCountOutputTypeCountSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    gender: string | null
    birthDate: Date | null
    height: number | null
    weight: number | null
    activityLevel: string | null
    goal: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    gender: string | null
    birthDate: Date | null
    height: number | null
    weight: number | null
    activityLevel: string | null
    goal: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    gender: number
    birthDate: number
    height: number
    weight: number
    activityLevel: number
    goal: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    gender?: true
    birthDate?: true
    height?: true
    weight?: true
    activityLevel?: true
    goal?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    gender?: true
    birthDate?: true
    height?: true
    weight?: true
    activityLevel?: true
    goal?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    gender?: true
    birthDate?: true
    height?: true
    weight?: true
    activityLevel?: true
    goal?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: string | null
    gender: string | null
    birthDate: Date | null
    height: number | null
    weight: number | null
    activityLevel: string | null
    goal: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    goal?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    programs?: boolean | User$programsArgs<ExtArgs>
    dailyLogs?: boolean | User$dailyLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    goal?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    goal?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    goal?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "gender" | "birthDate" | "height" | "weight" | "activityLevel" | "goal", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    programs?: boolean | User$programsArgs<ExtArgs>
    dailyLogs?: boolean | User$dailyLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      programs: Prisma.$ProgramPayload<ExtArgs>[]
      dailyLogs: Prisma.$DailyLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: string | null
      gender: string | null
      birthDate: Date | null
      height: number | null
      weight: number | null
      activityLevel: string | null
      goal: string | null
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programs<T extends User$programsArgs<ExtArgs> = {}>(args?: Subset<T, User$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyLogs<T extends User$dailyLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly height: FieldRef<"User", 'Int'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly activityLevel: FieldRef<"User", 'String'>
    readonly goal: FieldRef<"User", 'String'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.programs
   */
  export type User$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * User.dailyLogs
   */
  export type User$dailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroup: string | null
    videoUrl: string | null
    instructions: string | null
    isSystem: boolean | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroup: string | null
    videoUrl: string | null
    instructions: string | null
    isSystem: boolean | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    muscleGroup: number
    videoUrl: number
    instructions: number
    isSystem: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    videoUrl?: true
    instructions?: true
    isSystem?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    videoUrl?: true
    instructions?: true
    isSystem?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    videoUrl?: true
    instructions?: true
    isSystem?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    muscleGroup: string
    videoUrl: string | null
    instructions: string | null
    isSystem: boolean
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    videoUrl?: boolean
    instructions?: boolean
    isSystem?: boolean
    logs?: boolean | Exercise$logsArgs<ExtArgs>
    plannedIn?: boolean | Exercise$plannedInArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    videoUrl?: boolean
    instructions?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    videoUrl?: boolean
    instructions?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    videoUrl?: boolean
    instructions?: boolean
    isSystem?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "muscleGroup" | "videoUrl" | "instructions" | "isSystem", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Exercise$logsArgs<ExtArgs>
    plannedIn?: boolean | Exercise$plannedInArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      logs: Prisma.$ExerciseLogPayload<ExtArgs>[]
      plannedIn: Prisma.$PlannedExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      muscleGroup: string
      videoUrl: string | null
      instructions: string | null
      isSystem: boolean
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Exercise$logsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plannedIn<T extends Exercise$plannedInArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$plannedInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly videoUrl: FieldRef<"Exercise", 'String'>
    readonly instructions: FieldRef<"Exercise", 'String'>
    readonly isSystem: FieldRef<"Exercise", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.logs
   */
  export type Exercise$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    cursor?: ExerciseLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * Exercise.plannedIn
   */
  export type Exercise$plannedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    where?: PlannedExerciseWhereInput
    orderBy?: PlannedExerciseOrderByWithRelationInput | PlannedExerciseOrderByWithRelationInput[]
    cursor?: PlannedExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlannedExerciseScalarFieldEnum | PlannedExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    targetCalories: number | null
    targetProtein: number | null
    targetCarbs: number | null
    targetFat: number | null
  }

  export type ProgramSumAggregateOutputType = {
    targetCalories: number | null
    targetProtein: number | null
    targetCarbs: number | null
    targetFat: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isActive: boolean | null
    targetCalories: number | null
    targetProtein: number | null
    targetCarbs: number | null
    targetFat: number | null
    createdAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isActive: boolean | null
    targetCalories: number | null
    targetProtein: number | null
    targetCarbs: number | null
    targetFat: number | null
    createdAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    isActive: number
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    targetCalories?: true
    targetProtein?: true
    targetCarbs?: true
    targetFat?: true
  }

  export type ProgramSumAggregateInputType = {
    targetCalories?: true
    targetProtein?: true
    targetCarbs?: true
    targetFat?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    targetCalories?: true
    targetProtein?: true
    targetCarbs?: true
    targetFat?: true
    createdAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    targetCalories?: true
    targetProtein?: true
    targetCarbs?: true
    targetFat?: true
    createdAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    targetCalories?: true
    targetProtein?: true
    targetCarbs?: true
    targetFat?: true
    createdAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    userId: string
    name: string
    isActive: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt: Date
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    targetCalories?: boolean
    targetProtein?: boolean
    targetCarbs?: boolean
    targetFat?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workouts?: boolean | Program$workoutsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    targetCalories?: boolean
    targetProtein?: boolean
    targetCarbs?: boolean
    targetFat?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    targetCalories?: boolean
    targetProtein?: boolean
    targetCarbs?: boolean
    targetFat?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    targetCalories?: boolean
    targetProtein?: boolean
    targetCarbs?: boolean
    targetFat?: boolean
    createdAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "isActive" | "targetCalories" | "targetProtein" | "targetCarbs" | "targetFat" | "createdAt", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workouts?: boolean | Program$workoutsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workouts: Prisma.$WorkoutTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      isActive: boolean
      targetCalories: number
      targetProtein: number
      targetCarbs: number
      targetFat: number
      createdAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workouts<T extends Program$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, Program$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly userId: FieldRef<"Program", 'String'>
    readonly name: FieldRef<"Program", 'String'>
    readonly isActive: FieldRef<"Program", 'Boolean'>
    readonly targetCalories: FieldRef<"Program", 'Int'>
    readonly targetProtein: FieldRef<"Program", 'Int'>
    readonly targetCarbs: FieldRef<"Program", 'Int'>
    readonly targetFat: FieldRef<"Program", 'Int'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.workouts
   */
  export type Program$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    where?: WorkoutTemplateWhereInput
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    cursor?: WorkoutTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutTemplate
   */

  export type AggregateWorkoutTemplate = {
    _count: WorkoutTemplateCountAggregateOutputType | null
    _avg: WorkoutTemplateAvgAggregateOutputType | null
    _sum: WorkoutTemplateSumAggregateOutputType | null
    _min: WorkoutTemplateMinAggregateOutputType | null
    _max: WorkoutTemplateMaxAggregateOutputType | null
  }

  export type WorkoutTemplateAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type WorkoutTemplateSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type WorkoutTemplateMinAggregateOutputType = {
    id: string | null
    programId: string | null
    name: string | null
    dayOfWeek: number | null
  }

  export type WorkoutTemplateMaxAggregateOutputType = {
    id: string | null
    programId: string | null
    name: string | null
    dayOfWeek: number | null
  }

  export type WorkoutTemplateCountAggregateOutputType = {
    id: number
    programId: number
    name: number
    dayOfWeek: number
    _all: number
  }


  export type WorkoutTemplateAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type WorkoutTemplateSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type WorkoutTemplateMinAggregateInputType = {
    id?: true
    programId?: true
    name?: true
    dayOfWeek?: true
  }

  export type WorkoutTemplateMaxAggregateInputType = {
    id?: true
    programId?: true
    name?: true
    dayOfWeek?: true
  }

  export type WorkoutTemplateCountAggregateInputType = {
    id?: true
    programId?: true
    name?: true
    dayOfWeek?: true
    _all?: true
  }

  export type WorkoutTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutTemplate to aggregate.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutTemplates
    **/
    _count?: true | WorkoutTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutTemplateMaxAggregateInputType
  }

  export type GetWorkoutTemplateAggregateType<T extends WorkoutTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutTemplate[P]>
      : GetScalarType<T[P], AggregateWorkoutTemplate[P]>
  }




  export type WorkoutTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutTemplateWhereInput
    orderBy?: WorkoutTemplateOrderByWithAggregationInput | WorkoutTemplateOrderByWithAggregationInput[]
    by: WorkoutTemplateScalarFieldEnum[] | WorkoutTemplateScalarFieldEnum
    having?: WorkoutTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutTemplateCountAggregateInputType | true
    _avg?: WorkoutTemplateAvgAggregateInputType
    _sum?: WorkoutTemplateSumAggregateInputType
    _min?: WorkoutTemplateMinAggregateInputType
    _max?: WorkoutTemplateMaxAggregateInputType
  }

  export type WorkoutTemplateGroupByOutputType = {
    id: string
    programId: string
    name: string
    dayOfWeek: number | null
    _count: WorkoutTemplateCountAggregateOutputType | null
    _avg: WorkoutTemplateAvgAggregateOutputType | null
    _sum: WorkoutTemplateSumAggregateOutputType | null
    _min: WorkoutTemplateMinAggregateOutputType | null
    _max: WorkoutTemplateMaxAggregateOutputType | null
  }

  type GetWorkoutTemplateGroupByPayload<T extends WorkoutTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutTemplateGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    name?: boolean
    dayOfWeek?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutTemplate$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutTemplate"]>

  export type WorkoutTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    name?: boolean
    dayOfWeek?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutTemplate"]>

  export type WorkoutTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    name?: boolean
    dayOfWeek?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutTemplate"]>

  export type WorkoutTemplateSelectScalar = {
    id?: boolean
    programId?: boolean
    name?: boolean
    dayOfWeek?: boolean
  }

  export type WorkoutTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "name" | "dayOfWeek", ExtArgs["result"]["workoutTemplate"]>
  export type WorkoutTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutTemplate$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type WorkoutTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $WorkoutTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutTemplate"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
      exercises: Prisma.$PlannedExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      programId: string
      name: string
      dayOfWeek: number | null
    }, ExtArgs["result"]["workoutTemplate"]>
    composites: {}
  }

  type WorkoutTemplateGetPayload<S extends boolean | null | undefined | WorkoutTemplateDefaultArgs> = $Result.GetResult<Prisma.$WorkoutTemplatePayload, S>

  type WorkoutTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutTemplateCountAggregateInputType | true
    }

  export interface WorkoutTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutTemplate'], meta: { name: 'WorkoutTemplate' } }
    /**
     * Find zero or one WorkoutTemplate that matches the filter.
     * @param {WorkoutTemplateFindUniqueArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutTemplateFindUniqueArgs>(args: SelectSubset<T, WorkoutTemplateFindUniqueArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutTemplateFindUniqueOrThrowArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateFindFirstArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutTemplateFindFirstArgs>(args?: SelectSubset<T, WorkoutTemplateFindFirstArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateFindFirstOrThrowArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutTemplates
     * const workoutTemplates = await prisma.workoutTemplate.findMany()
     * 
     * // Get first 10 WorkoutTemplates
     * const workoutTemplates = await prisma.workoutTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutTemplateWithIdOnly = await prisma.workoutTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutTemplateFindManyArgs>(args?: SelectSubset<T, WorkoutTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutTemplate.
     * @param {WorkoutTemplateCreateArgs} args - Arguments to create a WorkoutTemplate.
     * @example
     * // Create one WorkoutTemplate
     * const WorkoutTemplate = await prisma.workoutTemplate.create({
     *   data: {
     *     // ... data to create a WorkoutTemplate
     *   }
     * })
     * 
     */
    create<T extends WorkoutTemplateCreateArgs>(args: SelectSubset<T, WorkoutTemplateCreateArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutTemplates.
     * @param {WorkoutTemplateCreateManyArgs} args - Arguments to create many WorkoutTemplates.
     * @example
     * // Create many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutTemplateCreateManyArgs>(args?: SelectSubset<T, WorkoutTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutTemplates and returns the data saved in the database.
     * @param {WorkoutTemplateCreateManyAndReturnArgs} args - Arguments to create many WorkoutTemplates.
     * @example
     * // Create many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutTemplates and only return the `id`
     * const workoutTemplateWithIdOnly = await prisma.workoutTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutTemplate.
     * @param {WorkoutTemplateDeleteArgs} args - Arguments to delete one WorkoutTemplate.
     * @example
     * // Delete one WorkoutTemplate
     * const WorkoutTemplate = await prisma.workoutTemplate.delete({
     *   where: {
     *     // ... filter to delete one WorkoutTemplate
     *   }
     * })
     * 
     */
    delete<T extends WorkoutTemplateDeleteArgs>(args: SelectSubset<T, WorkoutTemplateDeleteArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutTemplate.
     * @param {WorkoutTemplateUpdateArgs} args - Arguments to update one WorkoutTemplate.
     * @example
     * // Update one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutTemplateUpdateArgs>(args: SelectSubset<T, WorkoutTemplateUpdateArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutTemplates.
     * @param {WorkoutTemplateDeleteManyArgs} args - Arguments to filter WorkoutTemplates to delete.
     * @example
     * // Delete a few WorkoutTemplates
     * const { count } = await prisma.workoutTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutTemplateDeleteManyArgs>(args?: SelectSubset<T, WorkoutTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutTemplateUpdateManyArgs>(args: SelectSubset<T, WorkoutTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutTemplates and returns the data updated in the database.
     * @param {WorkoutTemplateUpdateManyAndReturnArgs} args - Arguments to update many WorkoutTemplates.
     * @example
     * // Update many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutTemplates and only return the `id`
     * const workoutTemplateWithIdOnly = await prisma.workoutTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutTemplate.
     * @param {WorkoutTemplateUpsertArgs} args - Arguments to update or create a WorkoutTemplate.
     * @example
     * // Update or create a WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.upsert({
     *   create: {
     *     // ... data to create a WorkoutTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutTemplate we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutTemplateUpsertArgs>(args: SelectSubset<T, WorkoutTemplateUpsertArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateCountArgs} args - Arguments to filter WorkoutTemplates to count.
     * @example
     * // Count the number of WorkoutTemplates
     * const count = await prisma.workoutTemplate.count({
     *   where: {
     *     // ... the filter for the WorkoutTemplates we want to count
     *   }
     * })
    **/
    count<T extends WorkoutTemplateCountArgs>(
      args?: Subset<T, WorkoutTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutTemplateAggregateArgs>(args: Subset<T, WorkoutTemplateAggregateArgs>): Prisma.PrismaPromise<GetWorkoutTemplateAggregateType<T>>

    /**
     * Group by WorkoutTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateGroupByArgs} args - Group by arguments.
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
      T extends WorkoutTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutTemplateGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutTemplate model
   */
  readonly fields: WorkoutTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends WorkoutTemplate$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutTemplate$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutTemplate model
   */
  interface WorkoutTemplateFieldRefs {
    readonly id: FieldRef<"WorkoutTemplate", 'String'>
    readonly programId: FieldRef<"WorkoutTemplate", 'String'>
    readonly name: FieldRef<"WorkoutTemplate", 'String'>
    readonly dayOfWeek: FieldRef<"WorkoutTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutTemplate findUnique
   */
  export type WorkoutTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate findUniqueOrThrow
   */
  export type WorkoutTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate findFirst
   */
  export type WorkoutTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutTemplates.
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutTemplates.
     */
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate findFirstOrThrow
   */
  export type WorkoutTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutTemplates.
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutTemplates.
     */
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate findMany
   */
  export type WorkoutTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplates to fetch.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutTemplates.
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate create
   */
  export type WorkoutTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutTemplate.
     */
    data: XOR<WorkoutTemplateCreateInput, WorkoutTemplateUncheckedCreateInput>
  }

  /**
   * WorkoutTemplate createMany
   */
  export type WorkoutTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutTemplates.
     */
    data: WorkoutTemplateCreateManyInput | WorkoutTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutTemplate createManyAndReturn
   */
  export type WorkoutTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutTemplates.
     */
    data: WorkoutTemplateCreateManyInput | WorkoutTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutTemplate update
   */
  export type WorkoutTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutTemplate.
     */
    data: XOR<WorkoutTemplateUpdateInput, WorkoutTemplateUncheckedUpdateInput>
    /**
     * Choose, which WorkoutTemplate to update.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate updateMany
   */
  export type WorkoutTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutTemplates.
     */
    data: XOR<WorkoutTemplateUpdateManyMutationInput, WorkoutTemplateUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutTemplates to update
     */
    where?: WorkoutTemplateWhereInput
    /**
     * Limit how many WorkoutTemplates to update.
     */
    limit?: number
  }

  /**
   * WorkoutTemplate updateManyAndReturn
   */
  export type WorkoutTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutTemplates.
     */
    data: XOR<WorkoutTemplateUpdateManyMutationInput, WorkoutTemplateUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutTemplates to update
     */
    where?: WorkoutTemplateWhereInput
    /**
     * Limit how many WorkoutTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutTemplate upsert
   */
  export type WorkoutTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutTemplate to update in case it exists.
     */
    where: WorkoutTemplateWhereUniqueInput
    /**
     * In case the WorkoutTemplate found by the `where` argument doesn't exist, create a new WorkoutTemplate with this data.
     */
    create: XOR<WorkoutTemplateCreateInput, WorkoutTemplateUncheckedCreateInput>
    /**
     * In case the WorkoutTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutTemplateUpdateInput, WorkoutTemplateUncheckedUpdateInput>
  }

  /**
   * WorkoutTemplate delete
   */
  export type WorkoutTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter which WorkoutTemplate to delete.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate deleteMany
   */
  export type WorkoutTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutTemplates to delete
     */
    where?: WorkoutTemplateWhereInput
    /**
     * Limit how many WorkoutTemplates to delete.
     */
    limit?: number
  }

  /**
   * WorkoutTemplate.exercises
   */
  export type WorkoutTemplate$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    where?: PlannedExerciseWhereInput
    orderBy?: PlannedExerciseOrderByWithRelationInput | PlannedExerciseOrderByWithRelationInput[]
    cursor?: PlannedExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlannedExerciseScalarFieldEnum | PlannedExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate without action
   */
  export type WorkoutTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
  }


  /**
   * Model PlannedExercise
   */

  export type AggregatePlannedExercise = {
    _count: PlannedExerciseCountAggregateOutputType | null
    _avg: PlannedExerciseAvgAggregateOutputType | null
    _sum: PlannedExerciseSumAggregateOutputType | null
    _min: PlannedExerciseMinAggregateOutputType | null
    _max: PlannedExerciseMaxAggregateOutputType | null
  }

  export type PlannedExerciseAvgAggregateOutputType = {
    sets: number | null
    order: number | null
  }

  export type PlannedExerciseSumAggregateOutputType = {
    sets: number | null
    order: number | null
  }

  export type PlannedExerciseMinAggregateOutputType = {
    id: string | null
    workoutTemplateId: string | null
    exerciseId: string | null
    sets: number | null
    reps: string | null
    order: number | null
  }

  export type PlannedExerciseMaxAggregateOutputType = {
    id: string | null
    workoutTemplateId: string | null
    exerciseId: string | null
    sets: number | null
    reps: string | null
    order: number | null
  }

  export type PlannedExerciseCountAggregateOutputType = {
    id: number
    workoutTemplateId: number
    exerciseId: number
    sets: number
    reps: number
    order: number
    _all: number
  }


  export type PlannedExerciseAvgAggregateInputType = {
    sets?: true
    order?: true
  }

  export type PlannedExerciseSumAggregateInputType = {
    sets?: true
    order?: true
  }

  export type PlannedExerciseMinAggregateInputType = {
    id?: true
    workoutTemplateId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    order?: true
  }

  export type PlannedExerciseMaxAggregateInputType = {
    id?: true
    workoutTemplateId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    order?: true
  }

  export type PlannedExerciseCountAggregateInputType = {
    id?: true
    workoutTemplateId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    order?: true
    _all?: true
  }

  export type PlannedExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlannedExercise to aggregate.
     */
    where?: PlannedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedExercises to fetch.
     */
    orderBy?: PlannedExerciseOrderByWithRelationInput | PlannedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlannedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlannedExercises
    **/
    _count?: true | PlannedExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlannedExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlannedExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlannedExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlannedExerciseMaxAggregateInputType
  }

  export type GetPlannedExerciseAggregateType<T extends PlannedExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregatePlannedExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlannedExercise[P]>
      : GetScalarType<T[P], AggregatePlannedExercise[P]>
  }




  export type PlannedExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedExerciseWhereInput
    orderBy?: PlannedExerciseOrderByWithAggregationInput | PlannedExerciseOrderByWithAggregationInput[]
    by: PlannedExerciseScalarFieldEnum[] | PlannedExerciseScalarFieldEnum
    having?: PlannedExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlannedExerciseCountAggregateInputType | true
    _avg?: PlannedExerciseAvgAggregateInputType
    _sum?: PlannedExerciseSumAggregateInputType
    _min?: PlannedExerciseMinAggregateInputType
    _max?: PlannedExerciseMaxAggregateInputType
  }

  export type PlannedExerciseGroupByOutputType = {
    id: string
    workoutTemplateId: string
    exerciseId: string
    sets: number
    reps: string
    order: number
    _count: PlannedExerciseCountAggregateOutputType | null
    _avg: PlannedExerciseAvgAggregateOutputType | null
    _sum: PlannedExerciseSumAggregateOutputType | null
    _min: PlannedExerciseMinAggregateOutputType | null
    _max: PlannedExerciseMaxAggregateOutputType | null
  }

  type GetPlannedExerciseGroupByPayload<T extends PlannedExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlannedExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlannedExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlannedExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], PlannedExerciseGroupByOutputType[P]>
        }
      >
    >


  export type PlannedExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutTemplateId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    order?: boolean
    workoutTemplate?: boolean | WorkoutTemplateDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedExercise"]>

  export type PlannedExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutTemplateId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    order?: boolean
    workoutTemplate?: boolean | WorkoutTemplateDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedExercise"]>

  export type PlannedExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutTemplateId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    order?: boolean
    workoutTemplate?: boolean | WorkoutTemplateDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedExercise"]>

  export type PlannedExerciseSelectScalar = {
    id?: boolean
    workoutTemplateId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    order?: boolean
  }

  export type PlannedExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutTemplateId" | "exerciseId" | "sets" | "reps" | "order", ExtArgs["result"]["plannedExercise"]>
  export type PlannedExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutTemplate?: boolean | WorkoutTemplateDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type PlannedExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutTemplate?: boolean | WorkoutTemplateDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type PlannedExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutTemplate?: boolean | WorkoutTemplateDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $PlannedExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlannedExercise"
    objects: {
      workoutTemplate: Prisma.$WorkoutTemplatePayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutTemplateId: string
      exerciseId: string
      sets: number
      reps: string
      order: number
    }, ExtArgs["result"]["plannedExercise"]>
    composites: {}
  }

  type PlannedExerciseGetPayload<S extends boolean | null | undefined | PlannedExerciseDefaultArgs> = $Result.GetResult<Prisma.$PlannedExercisePayload, S>

  type PlannedExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlannedExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlannedExerciseCountAggregateInputType | true
    }

  export interface PlannedExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlannedExercise'], meta: { name: 'PlannedExercise' } }
    /**
     * Find zero or one PlannedExercise that matches the filter.
     * @param {PlannedExerciseFindUniqueArgs} args - Arguments to find a PlannedExercise
     * @example
     * // Get one PlannedExercise
     * const plannedExercise = await prisma.plannedExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlannedExerciseFindUniqueArgs>(args: SelectSubset<T, PlannedExerciseFindUniqueArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlannedExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlannedExerciseFindUniqueOrThrowArgs} args - Arguments to find a PlannedExercise
     * @example
     * // Get one PlannedExercise
     * const plannedExercise = await prisma.plannedExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlannedExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, PlannedExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlannedExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseFindFirstArgs} args - Arguments to find a PlannedExercise
     * @example
     * // Get one PlannedExercise
     * const plannedExercise = await prisma.plannedExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlannedExerciseFindFirstArgs>(args?: SelectSubset<T, PlannedExerciseFindFirstArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlannedExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseFindFirstOrThrowArgs} args - Arguments to find a PlannedExercise
     * @example
     * // Get one PlannedExercise
     * const plannedExercise = await prisma.plannedExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlannedExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, PlannedExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlannedExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlannedExercises
     * const plannedExercises = await prisma.plannedExercise.findMany()
     * 
     * // Get first 10 PlannedExercises
     * const plannedExercises = await prisma.plannedExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plannedExerciseWithIdOnly = await prisma.plannedExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlannedExerciseFindManyArgs>(args?: SelectSubset<T, PlannedExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlannedExercise.
     * @param {PlannedExerciseCreateArgs} args - Arguments to create a PlannedExercise.
     * @example
     * // Create one PlannedExercise
     * const PlannedExercise = await prisma.plannedExercise.create({
     *   data: {
     *     // ... data to create a PlannedExercise
     *   }
     * })
     * 
     */
    create<T extends PlannedExerciseCreateArgs>(args: SelectSubset<T, PlannedExerciseCreateArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlannedExercises.
     * @param {PlannedExerciseCreateManyArgs} args - Arguments to create many PlannedExercises.
     * @example
     * // Create many PlannedExercises
     * const plannedExercise = await prisma.plannedExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlannedExerciseCreateManyArgs>(args?: SelectSubset<T, PlannedExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlannedExercises and returns the data saved in the database.
     * @param {PlannedExerciseCreateManyAndReturnArgs} args - Arguments to create many PlannedExercises.
     * @example
     * // Create many PlannedExercises
     * const plannedExercise = await prisma.plannedExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlannedExercises and only return the `id`
     * const plannedExerciseWithIdOnly = await prisma.plannedExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlannedExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, PlannedExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlannedExercise.
     * @param {PlannedExerciseDeleteArgs} args - Arguments to delete one PlannedExercise.
     * @example
     * // Delete one PlannedExercise
     * const PlannedExercise = await prisma.plannedExercise.delete({
     *   where: {
     *     // ... filter to delete one PlannedExercise
     *   }
     * })
     * 
     */
    delete<T extends PlannedExerciseDeleteArgs>(args: SelectSubset<T, PlannedExerciseDeleteArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlannedExercise.
     * @param {PlannedExerciseUpdateArgs} args - Arguments to update one PlannedExercise.
     * @example
     * // Update one PlannedExercise
     * const plannedExercise = await prisma.plannedExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlannedExerciseUpdateArgs>(args: SelectSubset<T, PlannedExerciseUpdateArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlannedExercises.
     * @param {PlannedExerciseDeleteManyArgs} args - Arguments to filter PlannedExercises to delete.
     * @example
     * // Delete a few PlannedExercises
     * const { count } = await prisma.plannedExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlannedExerciseDeleteManyArgs>(args?: SelectSubset<T, PlannedExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlannedExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlannedExercises
     * const plannedExercise = await prisma.plannedExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlannedExerciseUpdateManyArgs>(args: SelectSubset<T, PlannedExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlannedExercises and returns the data updated in the database.
     * @param {PlannedExerciseUpdateManyAndReturnArgs} args - Arguments to update many PlannedExercises.
     * @example
     * // Update many PlannedExercises
     * const plannedExercise = await prisma.plannedExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlannedExercises and only return the `id`
     * const plannedExerciseWithIdOnly = await prisma.plannedExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlannedExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, PlannedExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlannedExercise.
     * @param {PlannedExerciseUpsertArgs} args - Arguments to update or create a PlannedExercise.
     * @example
     * // Update or create a PlannedExercise
     * const plannedExercise = await prisma.plannedExercise.upsert({
     *   create: {
     *     // ... data to create a PlannedExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlannedExercise we want to update
     *   }
     * })
     */
    upsert<T extends PlannedExerciseUpsertArgs>(args: SelectSubset<T, PlannedExerciseUpsertArgs<ExtArgs>>): Prisma__PlannedExerciseClient<$Result.GetResult<Prisma.$PlannedExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlannedExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseCountArgs} args - Arguments to filter PlannedExercises to count.
     * @example
     * // Count the number of PlannedExercises
     * const count = await prisma.plannedExercise.count({
     *   where: {
     *     // ... the filter for the PlannedExercises we want to count
     *   }
     * })
    **/
    count<T extends PlannedExerciseCountArgs>(
      args?: Subset<T, PlannedExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlannedExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlannedExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlannedExerciseAggregateArgs>(args: Subset<T, PlannedExerciseAggregateArgs>): Prisma.PrismaPromise<GetPlannedExerciseAggregateType<T>>

    /**
     * Group by PlannedExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedExerciseGroupByArgs} args - Group by arguments.
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
      T extends PlannedExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlannedExerciseGroupByArgs['orderBy'] }
        : { orderBy?: PlannedExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlannedExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlannedExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlannedExercise model
   */
  readonly fields: PlannedExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlannedExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlannedExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutTemplate<T extends WorkoutTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutTemplateDefaultArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlannedExercise model
   */
  interface PlannedExerciseFieldRefs {
    readonly id: FieldRef<"PlannedExercise", 'String'>
    readonly workoutTemplateId: FieldRef<"PlannedExercise", 'String'>
    readonly exerciseId: FieldRef<"PlannedExercise", 'String'>
    readonly sets: FieldRef<"PlannedExercise", 'Int'>
    readonly reps: FieldRef<"PlannedExercise", 'String'>
    readonly order: FieldRef<"PlannedExercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlannedExercise findUnique
   */
  export type PlannedExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedExercise to fetch.
     */
    where: PlannedExerciseWhereUniqueInput
  }

  /**
   * PlannedExercise findUniqueOrThrow
   */
  export type PlannedExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedExercise to fetch.
     */
    where: PlannedExerciseWhereUniqueInput
  }

  /**
   * PlannedExercise findFirst
   */
  export type PlannedExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedExercise to fetch.
     */
    where?: PlannedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedExercises to fetch.
     */
    orderBy?: PlannedExerciseOrderByWithRelationInput | PlannedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlannedExercises.
     */
    cursor?: PlannedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlannedExercises.
     */
    distinct?: PlannedExerciseScalarFieldEnum | PlannedExerciseScalarFieldEnum[]
  }

  /**
   * PlannedExercise findFirstOrThrow
   */
  export type PlannedExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedExercise to fetch.
     */
    where?: PlannedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedExercises to fetch.
     */
    orderBy?: PlannedExerciseOrderByWithRelationInput | PlannedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlannedExercises.
     */
    cursor?: PlannedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlannedExercises.
     */
    distinct?: PlannedExerciseScalarFieldEnum | PlannedExerciseScalarFieldEnum[]
  }

  /**
   * PlannedExercise findMany
   */
  export type PlannedExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedExercises to fetch.
     */
    where?: PlannedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedExercises to fetch.
     */
    orderBy?: PlannedExerciseOrderByWithRelationInput | PlannedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlannedExercises.
     */
    cursor?: PlannedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedExercises.
     */
    skip?: number
    distinct?: PlannedExerciseScalarFieldEnum | PlannedExerciseScalarFieldEnum[]
  }

  /**
   * PlannedExercise create
   */
  export type PlannedExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a PlannedExercise.
     */
    data: XOR<PlannedExerciseCreateInput, PlannedExerciseUncheckedCreateInput>
  }

  /**
   * PlannedExercise createMany
   */
  export type PlannedExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlannedExercises.
     */
    data: PlannedExerciseCreateManyInput | PlannedExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlannedExercise createManyAndReturn
   */
  export type PlannedExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many PlannedExercises.
     */
    data: PlannedExerciseCreateManyInput | PlannedExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlannedExercise update
   */
  export type PlannedExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a PlannedExercise.
     */
    data: XOR<PlannedExerciseUpdateInput, PlannedExerciseUncheckedUpdateInput>
    /**
     * Choose, which PlannedExercise to update.
     */
    where: PlannedExerciseWhereUniqueInput
  }

  /**
   * PlannedExercise updateMany
   */
  export type PlannedExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlannedExercises.
     */
    data: XOR<PlannedExerciseUpdateManyMutationInput, PlannedExerciseUncheckedUpdateManyInput>
    /**
     * Filter which PlannedExercises to update
     */
    where?: PlannedExerciseWhereInput
    /**
     * Limit how many PlannedExercises to update.
     */
    limit?: number
  }

  /**
   * PlannedExercise updateManyAndReturn
   */
  export type PlannedExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * The data used to update PlannedExercises.
     */
    data: XOR<PlannedExerciseUpdateManyMutationInput, PlannedExerciseUncheckedUpdateManyInput>
    /**
     * Filter which PlannedExercises to update
     */
    where?: PlannedExerciseWhereInput
    /**
     * Limit how many PlannedExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlannedExercise upsert
   */
  export type PlannedExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the PlannedExercise to update in case it exists.
     */
    where: PlannedExerciseWhereUniqueInput
    /**
     * In case the PlannedExercise found by the `where` argument doesn't exist, create a new PlannedExercise with this data.
     */
    create: XOR<PlannedExerciseCreateInput, PlannedExerciseUncheckedCreateInput>
    /**
     * In case the PlannedExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlannedExerciseUpdateInput, PlannedExerciseUncheckedUpdateInput>
  }

  /**
   * PlannedExercise delete
   */
  export type PlannedExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
    /**
     * Filter which PlannedExercise to delete.
     */
    where: PlannedExerciseWhereUniqueInput
  }

  /**
   * PlannedExercise deleteMany
   */
  export type PlannedExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlannedExercises to delete
     */
    where?: PlannedExerciseWhereInput
    /**
     * Limit how many PlannedExercises to delete.
     */
    limit?: number
  }

  /**
   * PlannedExercise without action
   */
  export type PlannedExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedExercise
     */
    select?: PlannedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedExercise
     */
    omit?: PlannedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedExerciseInclude<ExtArgs> | null
  }


  /**
   * Model DailyLog
   */

  export type AggregateDailyLog = {
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  export type DailyLogAvgAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type DailyLogSumAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type DailyLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type DailyLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type DailyLogCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    calories: number
    protein: number
    carbs: number
    fat: number
    _all: number
  }


  export type DailyLogAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type DailyLogSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type DailyLogMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type DailyLogMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type DailyLogCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    _all?: true
  }

  export type DailyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLog to aggregate.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyLogs
    **/
    _count?: true | DailyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyLogMaxAggregateInputType
  }

  export type GetDailyLogAggregateType<T extends DailyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyLog[P]>
      : GetScalarType<T[P], AggregateDailyLog[P]>
  }




  export type DailyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithAggregationInput | DailyLogOrderByWithAggregationInput[]
    by: DailyLogScalarFieldEnum[] | DailyLogScalarFieldEnum
    having?: DailyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyLogCountAggregateInputType | true
    _avg?: DailyLogAvgAggregateInputType
    _sum?: DailyLogSumAggregateInputType
    _min?: DailyLogMinAggregateInputType
    _max?: DailyLogMaxAggregateInputType
  }

  export type DailyLogGroupByOutputType = {
    id: string
    userId: string
    date: Date
    calories: number
    protein: number
    carbs: number
    fat: number
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  type GetDailyLogGroupByPayload<T extends DailyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
            : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
        }
      >
    >


  export type DailyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | DailyLog$mealsArgs<ExtArgs>
    workouts?: boolean | DailyLog$workoutsArgs<ExtArgs>
    _count?: boolean | DailyLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
  }

  export type DailyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "calories" | "protein" | "carbs" | "fat", ExtArgs["result"]["dailyLog"]>
  export type DailyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | DailyLog$mealsArgs<ExtArgs>
    workouts?: boolean | DailyLog$workoutsArgs<ExtArgs>
    _count?: boolean | DailyLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      meals: Prisma.$MealPayload<ExtArgs>[]
      workouts: Prisma.$WorkoutSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      calories: number
      protein: number
      carbs: number
      fat: number
    }, ExtArgs["result"]["dailyLog"]>
    composites: {}
  }

  type DailyLogGetPayload<S extends boolean | null | undefined | DailyLogDefaultArgs> = $Result.GetResult<Prisma.$DailyLogPayload, S>

  type DailyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyLogCountAggregateInputType | true
    }

  export interface DailyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyLog'], meta: { name: 'DailyLog' } }
    /**
     * Find zero or one DailyLog that matches the filter.
     * @param {DailyLogFindUniqueArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyLogFindUniqueArgs>(args: SelectSubset<T, DailyLogFindUniqueArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyLogFindUniqueOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyLogFindFirstArgs>(args?: SelectSubset<T, DailyLogFindFirstArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany()
     * 
     * // Get first 10 DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyLogFindManyArgs>(args?: SelectSubset<T, DailyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyLog.
     * @param {DailyLogCreateArgs} args - Arguments to create a DailyLog.
     * @example
     * // Create one DailyLog
     * const DailyLog = await prisma.dailyLog.create({
     *   data: {
     *     // ... data to create a DailyLog
     *   }
     * })
     * 
     */
    create<T extends DailyLogCreateArgs>(args: SelectSubset<T, DailyLogCreateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyLogs.
     * @param {DailyLogCreateManyArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyLogCreateManyArgs>(args?: SelectSubset<T, DailyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyLogs and returns the data saved in the database.
     * @param {DailyLogCreateManyAndReturnArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyLog.
     * @param {DailyLogDeleteArgs} args - Arguments to delete one DailyLog.
     * @example
     * // Delete one DailyLog
     * const DailyLog = await prisma.dailyLog.delete({
     *   where: {
     *     // ... filter to delete one DailyLog
     *   }
     * })
     * 
     */
    delete<T extends DailyLogDeleteArgs>(args: SelectSubset<T, DailyLogDeleteArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyLog.
     * @param {DailyLogUpdateArgs} args - Arguments to update one DailyLog.
     * @example
     * // Update one DailyLog
     * const dailyLog = await prisma.dailyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyLogUpdateArgs>(args: SelectSubset<T, DailyLogUpdateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyLogs.
     * @param {DailyLogDeleteManyArgs} args - Arguments to filter DailyLogs to delete.
     * @example
     * // Delete a few DailyLogs
     * const { count } = await prisma.dailyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyLogDeleteManyArgs>(args?: SelectSubset<T, DailyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyLogUpdateManyArgs>(args: SelectSubset<T, DailyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs and returns the data updated in the database.
     * @param {DailyLogUpdateManyAndReturnArgs} args - Arguments to update many DailyLogs.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyLogUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyLog.
     * @param {DailyLogUpsertArgs} args - Arguments to update or create a DailyLog.
     * @example
     * // Update or create a DailyLog
     * const dailyLog = await prisma.dailyLog.upsert({
     *   create: {
     *     // ... data to create a DailyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyLog we want to update
     *   }
     * })
     */
    upsert<T extends DailyLogUpsertArgs>(args: SelectSubset<T, DailyLogUpsertArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogCountArgs} args - Arguments to filter DailyLogs to count.
     * @example
     * // Count the number of DailyLogs
     * const count = await prisma.dailyLog.count({
     *   where: {
     *     // ... the filter for the DailyLogs we want to count
     *   }
     * })
    **/
    count<T extends DailyLogCountArgs>(
      args?: Subset<T, DailyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyLogAggregateArgs>(args: Subset<T, DailyLogAggregateArgs>): Prisma.PrismaPromise<GetDailyLogAggregateType<T>>

    /**
     * Group by DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogGroupByArgs} args - Group by arguments.
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
      T extends DailyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyLogGroupByArgs['orderBy'] }
        : { orderBy?: DailyLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyLog model
   */
  readonly fields: DailyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meals<T extends DailyLog$mealsArgs<ExtArgs> = {}>(args?: Subset<T, DailyLog$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends DailyLog$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, DailyLog$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DailyLog model
   */
  interface DailyLogFieldRefs {
    readonly id: FieldRef<"DailyLog", 'String'>
    readonly userId: FieldRef<"DailyLog", 'String'>
    readonly date: FieldRef<"DailyLog", 'DateTime'>
    readonly calories: FieldRef<"DailyLog", 'Int'>
    readonly protein: FieldRef<"DailyLog", 'Int'>
    readonly carbs: FieldRef<"DailyLog", 'Int'>
    readonly fat: FieldRef<"DailyLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyLog findUnique
   */
  export type DailyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findUniqueOrThrow
   */
  export type DailyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findFirst
   */
  export type DailyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findFirstOrThrow
   */
  export type DailyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findMany
   */
  export type DailyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLogs to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog create
   */
  export type DailyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyLog.
     */
    data: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
  }

  /**
   * DailyLog createMany
   */
  export type DailyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyLog createManyAndReturn
   */
  export type DailyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog update
   */
  export type DailyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyLog.
     */
    data: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
    /**
     * Choose, which DailyLog to update.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog updateMany
   */
  export type DailyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to update.
     */
    limit?: number
  }

  /**
   * DailyLog updateManyAndReturn
   */
  export type DailyLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog upsert
   */
  export type DailyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyLog to update in case it exists.
     */
    where: DailyLogWhereUniqueInput
    /**
     * In case the DailyLog found by the `where` argument doesn't exist, create a new DailyLog with this data.
     */
    create: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
    /**
     * In case the DailyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
  }

  /**
   * DailyLog delete
   */
  export type DailyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter which DailyLog to delete.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog deleteMany
   */
  export type DailyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLogs to delete
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to delete.
     */
    limit?: number
  }

  /**
   * DailyLog.meals
   */
  export type DailyLog$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * DailyLog.workouts
   */
  export type DailyLog$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    cursor?: WorkoutSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * DailyLog without action
   */
  export type DailyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type MealSumAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    dailyLogId: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    dailyLogId: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    dailyLogId: number
    name: number
    calories: number
    protein: number
    carbs: number
    fat: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type MealSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    dailyLogId?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    dailyLogId?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    dailyLogId?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    dailyLogId: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyLogId" | "name" | "calories" | "protein" | "carbs" | "fat", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      dailyLog: Prisma.$DailyLogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyLogId: string
      name: string
      calories: number
      protein: number
      carbs: number
      fat: number
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyLog<T extends DailyLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyLogDefaultArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly dailyLogId: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly calories: FieldRef<"Meal", 'Int'>
    readonly protein: FieldRef<"Meal", 'Int'>
    readonly carbs: FieldRef<"Meal", 'Int'>
    readonly fat: FieldRef<"Meal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutSession
   */

  export type AggregateWorkoutSession = {
    _count: WorkoutSessionCountAggregateOutputType | null
    _min: WorkoutSessionMinAggregateOutputType | null
    _max: WorkoutSessionMaxAggregateOutputType | null
  }

  export type WorkoutSessionMinAggregateOutputType = {
    id: string | null
    dailyLogId: string | null
    name: string | null
    completedAt: Date | null
  }

  export type WorkoutSessionMaxAggregateOutputType = {
    id: string | null
    dailyLogId: string | null
    name: string | null
    completedAt: Date | null
  }

  export type WorkoutSessionCountAggregateOutputType = {
    id: number
    dailyLogId: number
    name: number
    completedAt: number
    _all: number
  }


  export type WorkoutSessionMinAggregateInputType = {
    id?: true
    dailyLogId?: true
    name?: true
    completedAt?: true
  }

  export type WorkoutSessionMaxAggregateInputType = {
    id?: true
    dailyLogId?: true
    name?: true
    completedAt?: true
  }

  export type WorkoutSessionCountAggregateInputType = {
    id?: true
    dailyLogId?: true
    name?: true
    completedAt?: true
    _all?: true
  }

  export type WorkoutSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutSession to aggregate.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutSessions
    **/
    _count?: true | WorkoutSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutSessionMaxAggregateInputType
  }

  export type GetWorkoutSessionAggregateType<T extends WorkoutSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutSession[P]>
      : GetScalarType<T[P], AggregateWorkoutSession[P]>
  }




  export type WorkoutSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithAggregationInput | WorkoutSessionOrderByWithAggregationInput[]
    by: WorkoutSessionScalarFieldEnum[] | WorkoutSessionScalarFieldEnum
    having?: WorkoutSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutSessionCountAggregateInputType | true
    _min?: WorkoutSessionMinAggregateInputType
    _max?: WorkoutSessionMaxAggregateInputType
  }

  export type WorkoutSessionGroupByOutputType = {
    id: string
    dailyLogId: string
    name: string
    completedAt: Date
    _count: WorkoutSessionCountAggregateOutputType | null
    _min: WorkoutSessionMinAggregateOutputType | null
    _max: WorkoutSessionMaxAggregateOutputType | null
  }

  type GetWorkoutSessionGroupByPayload<T extends WorkoutSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutSessionGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    completedAt?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutSession$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    completedAt?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    completedAt?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectScalar = {
    id?: boolean
    dailyLogId?: boolean
    name?: boolean
    completedAt?: boolean
  }

  export type WorkoutSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyLogId" | "name" | "completedAt", ExtArgs["result"]["workoutSession"]>
  export type WorkoutSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutSession$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }
  export type WorkoutSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }

  export type $WorkoutSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutSession"
    objects: {
      dailyLog: Prisma.$DailyLogPayload<ExtArgs>
      exercises: Prisma.$ExerciseLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyLogId: string
      name: string
      completedAt: Date
    }, ExtArgs["result"]["workoutSession"]>
    composites: {}
  }

  type WorkoutSessionGetPayload<S extends boolean | null | undefined | WorkoutSessionDefaultArgs> = $Result.GetResult<Prisma.$WorkoutSessionPayload, S>

  type WorkoutSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutSessionCountAggregateInputType | true
    }

  export interface WorkoutSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutSession'], meta: { name: 'WorkoutSession' } }
    /**
     * Find zero or one WorkoutSession that matches the filter.
     * @param {WorkoutSessionFindUniqueArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutSessionFindUniqueArgs>(args: SelectSubset<T, WorkoutSessionFindUniqueArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutSessionFindUniqueOrThrowArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindFirstArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutSessionFindFirstArgs>(args?: SelectSubset<T, WorkoutSessionFindFirstArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindFirstOrThrowArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutSessions
     * const workoutSessions = await prisma.workoutSession.findMany()
     * 
     * // Get first 10 WorkoutSessions
     * const workoutSessions = await prisma.workoutSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutSessionFindManyArgs>(args?: SelectSubset<T, WorkoutSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutSession.
     * @param {WorkoutSessionCreateArgs} args - Arguments to create a WorkoutSession.
     * @example
     * // Create one WorkoutSession
     * const WorkoutSession = await prisma.workoutSession.create({
     *   data: {
     *     // ... data to create a WorkoutSession
     *   }
     * })
     * 
     */
    create<T extends WorkoutSessionCreateArgs>(args: SelectSubset<T, WorkoutSessionCreateArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutSessions.
     * @param {WorkoutSessionCreateManyArgs} args - Arguments to create many WorkoutSessions.
     * @example
     * // Create many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutSessionCreateManyArgs>(args?: SelectSubset<T, WorkoutSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutSessions and returns the data saved in the database.
     * @param {WorkoutSessionCreateManyAndReturnArgs} args - Arguments to create many WorkoutSessions.
     * @example
     * // Create many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutSessions and only return the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutSession.
     * @param {WorkoutSessionDeleteArgs} args - Arguments to delete one WorkoutSession.
     * @example
     * // Delete one WorkoutSession
     * const WorkoutSession = await prisma.workoutSession.delete({
     *   where: {
     *     // ... filter to delete one WorkoutSession
     *   }
     * })
     * 
     */
    delete<T extends WorkoutSessionDeleteArgs>(args: SelectSubset<T, WorkoutSessionDeleteArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutSession.
     * @param {WorkoutSessionUpdateArgs} args - Arguments to update one WorkoutSession.
     * @example
     * // Update one WorkoutSession
     * const workoutSession = await prisma.workoutSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutSessionUpdateArgs>(args: SelectSubset<T, WorkoutSessionUpdateArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutSessions.
     * @param {WorkoutSessionDeleteManyArgs} args - Arguments to filter WorkoutSessions to delete.
     * @example
     * // Delete a few WorkoutSessions
     * const { count } = await prisma.workoutSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutSessionDeleteManyArgs>(args?: SelectSubset<T, WorkoutSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutSessionUpdateManyArgs>(args: SelectSubset<T, WorkoutSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutSessions and returns the data updated in the database.
     * @param {WorkoutSessionUpdateManyAndReturnArgs} args - Arguments to update many WorkoutSessions.
     * @example
     * // Update many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutSessions and only return the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutSession.
     * @param {WorkoutSessionUpsertArgs} args - Arguments to update or create a WorkoutSession.
     * @example
     * // Update or create a WorkoutSession
     * const workoutSession = await prisma.workoutSession.upsert({
     *   create: {
     *     // ... data to create a WorkoutSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutSession we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutSessionUpsertArgs>(args: SelectSubset<T, WorkoutSessionUpsertArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionCountArgs} args - Arguments to filter WorkoutSessions to count.
     * @example
     * // Count the number of WorkoutSessions
     * const count = await prisma.workoutSession.count({
     *   where: {
     *     // ... the filter for the WorkoutSessions we want to count
     *   }
     * })
    **/
    count<T extends WorkoutSessionCountArgs>(
      args?: Subset<T, WorkoutSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutSessionAggregateArgs>(args: Subset<T, WorkoutSessionAggregateArgs>): Prisma.PrismaPromise<GetWorkoutSessionAggregateType<T>>

    /**
     * Group by WorkoutSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionGroupByArgs} args - Group by arguments.
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
      T extends WorkoutSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutSessionGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutSession model
   */
  readonly fields: WorkoutSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyLog<T extends DailyLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyLogDefaultArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends WorkoutSession$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSession$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutSession model
   */
  interface WorkoutSessionFieldRefs {
    readonly id: FieldRef<"WorkoutSession", 'String'>
    readonly dailyLogId: FieldRef<"WorkoutSession", 'String'>
    readonly name: FieldRef<"WorkoutSession", 'String'>
    readonly completedAt: FieldRef<"WorkoutSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutSession findUnique
   */
  export type WorkoutSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession findUniqueOrThrow
   */
  export type WorkoutSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession findFirst
   */
  export type WorkoutSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutSessions.
     */
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession findFirstOrThrow
   */
  export type WorkoutSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutSessions.
     */
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession findMany
   */
  export type WorkoutSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSessions to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession create
   */
  export type WorkoutSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutSession.
     */
    data: XOR<WorkoutSessionCreateInput, WorkoutSessionUncheckedCreateInput>
  }

  /**
   * WorkoutSession createMany
   */
  export type WorkoutSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutSessions.
     */
    data: WorkoutSessionCreateManyInput | WorkoutSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutSession createManyAndReturn
   */
  export type WorkoutSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutSessions.
     */
    data: WorkoutSessionCreateManyInput | WorkoutSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutSession update
   */
  export type WorkoutSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutSession.
     */
    data: XOR<WorkoutSessionUpdateInput, WorkoutSessionUncheckedUpdateInput>
    /**
     * Choose, which WorkoutSession to update.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession updateMany
   */
  export type WorkoutSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutSessions.
     */
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutSessions to update
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to update.
     */
    limit?: number
  }

  /**
   * WorkoutSession updateManyAndReturn
   */
  export type WorkoutSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutSessions.
     */
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutSessions to update
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutSession upsert
   */
  export type WorkoutSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutSession to update in case it exists.
     */
    where: WorkoutSessionWhereUniqueInput
    /**
     * In case the WorkoutSession found by the `where` argument doesn't exist, create a new WorkoutSession with this data.
     */
    create: XOR<WorkoutSessionCreateInput, WorkoutSessionUncheckedCreateInput>
    /**
     * In case the WorkoutSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutSessionUpdateInput, WorkoutSessionUncheckedUpdateInput>
  }

  /**
   * WorkoutSession delete
   */
  export type WorkoutSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter which WorkoutSession to delete.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession deleteMany
   */
  export type WorkoutSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutSessions to delete
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to delete.
     */
    limit?: number
  }

  /**
   * WorkoutSession.exercises
   */
  export type WorkoutSession$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    cursor?: ExerciseLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * WorkoutSession without action
   */
  export type WorkoutSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseLog
   */

  export type AggregateExerciseLog = {
    _count: ExerciseLogCountAggregateOutputType | null
    _min: ExerciseLogMinAggregateOutputType | null
    _max: ExerciseLogMaxAggregateOutputType | null
  }

  export type ExerciseLogMinAggregateOutputType = {
    id: string | null
    workoutSessionId: string | null
    exerciseId: string | null
  }

  export type ExerciseLogMaxAggregateOutputType = {
    id: string | null
    workoutSessionId: string | null
    exerciseId: string | null
  }

  export type ExerciseLogCountAggregateOutputType = {
    id: number
    workoutSessionId: number
    exerciseId: number
    _all: number
  }


  export type ExerciseLogMinAggregateInputType = {
    id?: true
    workoutSessionId?: true
    exerciseId?: true
  }

  export type ExerciseLogMaxAggregateInputType = {
    id?: true
    workoutSessionId?: true
    exerciseId?: true
  }

  export type ExerciseLogCountAggregateInputType = {
    id?: true
    workoutSessionId?: true
    exerciseId?: true
    _all?: true
  }

  export type ExerciseLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseLog to aggregate.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseLogs
    **/
    _count?: true | ExerciseLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseLogMaxAggregateInputType
  }

  export type GetExerciseLogAggregateType<T extends ExerciseLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseLog[P]>
      : GetScalarType<T[P], AggregateExerciseLog[P]>
  }




  export type ExerciseLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithAggregationInput | ExerciseLogOrderByWithAggregationInput[]
    by: ExerciseLogScalarFieldEnum[] | ExerciseLogScalarFieldEnum
    having?: ExerciseLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseLogCountAggregateInputType | true
    _min?: ExerciseLogMinAggregateInputType
    _max?: ExerciseLogMaxAggregateInputType
  }

  export type ExerciseLogGroupByOutputType = {
    id: string
    workoutSessionId: string
    exerciseId: string
    _count: ExerciseLogCountAggregateOutputType | null
    _min: ExerciseLogMinAggregateOutputType | null
    _max: ExerciseLogMaxAggregateOutputType | null
  }

  type GetExerciseLogGroupByPayload<T extends ExerciseLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseLogGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutSessionId?: boolean
    exerciseId?: boolean
    workoutSession?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | ExerciseLog$setsArgs<ExtArgs>
    _count?: boolean | ExerciseLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseLog"]>

  export type ExerciseLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutSessionId?: boolean
    exerciseId?: boolean
    workoutSession?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseLog"]>

  export type ExerciseLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutSessionId?: boolean
    exerciseId?: boolean
    workoutSession?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseLog"]>

  export type ExerciseLogSelectScalar = {
    id?: boolean
    workoutSessionId?: boolean
    exerciseId?: boolean
  }

  export type ExerciseLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutSessionId" | "exerciseId", ExtArgs["result"]["exerciseLog"]>
  export type ExerciseLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutSession?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | ExerciseLog$setsArgs<ExtArgs>
    _count?: boolean | ExerciseLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutSession?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutSession?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $ExerciseLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseLog"
    objects: {
      workoutSession: Prisma.$WorkoutSessionPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      sets: Prisma.$SetLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutSessionId: string
      exerciseId: string
    }, ExtArgs["result"]["exerciseLog"]>
    composites: {}
  }

  type ExerciseLogGetPayload<S extends boolean | null | undefined | ExerciseLogDefaultArgs> = $Result.GetResult<Prisma.$ExerciseLogPayload, S>

  type ExerciseLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseLogCountAggregateInputType | true
    }

  export interface ExerciseLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseLog'], meta: { name: 'ExerciseLog' } }
    /**
     * Find zero or one ExerciseLog that matches the filter.
     * @param {ExerciseLogFindUniqueArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseLogFindUniqueArgs>(args: SelectSubset<T, ExerciseLogFindUniqueArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseLogFindUniqueOrThrowArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogFindFirstArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseLogFindFirstArgs>(args?: SelectSubset<T, ExerciseLogFindFirstArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogFindFirstOrThrowArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseLogs
     * const exerciseLogs = await prisma.exerciseLog.findMany()
     * 
     * // Get first 10 ExerciseLogs
     * const exerciseLogs = await prisma.exerciseLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseLogWithIdOnly = await prisma.exerciseLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseLogFindManyArgs>(args?: SelectSubset<T, ExerciseLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseLog.
     * @param {ExerciseLogCreateArgs} args - Arguments to create a ExerciseLog.
     * @example
     * // Create one ExerciseLog
     * const ExerciseLog = await prisma.exerciseLog.create({
     *   data: {
     *     // ... data to create a ExerciseLog
     *   }
     * })
     * 
     */
    create<T extends ExerciseLogCreateArgs>(args: SelectSubset<T, ExerciseLogCreateArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseLogs.
     * @param {ExerciseLogCreateManyArgs} args - Arguments to create many ExerciseLogs.
     * @example
     * // Create many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseLogCreateManyArgs>(args?: SelectSubset<T, ExerciseLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseLogs and returns the data saved in the database.
     * @param {ExerciseLogCreateManyAndReturnArgs} args - Arguments to create many ExerciseLogs.
     * @example
     * // Create many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseLogs and only return the `id`
     * const exerciseLogWithIdOnly = await prisma.exerciseLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseLog.
     * @param {ExerciseLogDeleteArgs} args - Arguments to delete one ExerciseLog.
     * @example
     * // Delete one ExerciseLog
     * const ExerciseLog = await prisma.exerciseLog.delete({
     *   where: {
     *     // ... filter to delete one ExerciseLog
     *   }
     * })
     * 
     */
    delete<T extends ExerciseLogDeleteArgs>(args: SelectSubset<T, ExerciseLogDeleteArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseLog.
     * @param {ExerciseLogUpdateArgs} args - Arguments to update one ExerciseLog.
     * @example
     * // Update one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseLogUpdateArgs>(args: SelectSubset<T, ExerciseLogUpdateArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseLogs.
     * @param {ExerciseLogDeleteManyArgs} args - Arguments to filter ExerciseLogs to delete.
     * @example
     * // Delete a few ExerciseLogs
     * const { count } = await prisma.exerciseLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseLogDeleteManyArgs>(args?: SelectSubset<T, ExerciseLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseLogUpdateManyArgs>(args: SelectSubset<T, ExerciseLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseLogs and returns the data updated in the database.
     * @param {ExerciseLogUpdateManyAndReturnArgs} args - Arguments to update many ExerciseLogs.
     * @example
     * // Update many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseLogs and only return the `id`
     * const exerciseLogWithIdOnly = await prisma.exerciseLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseLog.
     * @param {ExerciseLogUpsertArgs} args - Arguments to update or create a ExerciseLog.
     * @example
     * // Update or create a ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.upsert({
     *   create: {
     *     // ... data to create a ExerciseLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseLog we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseLogUpsertArgs>(args: SelectSubset<T, ExerciseLogUpsertArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogCountArgs} args - Arguments to filter ExerciseLogs to count.
     * @example
     * // Count the number of ExerciseLogs
     * const count = await prisma.exerciseLog.count({
     *   where: {
     *     // ... the filter for the ExerciseLogs we want to count
     *   }
     * })
    **/
    count<T extends ExerciseLogCountArgs>(
      args?: Subset<T, ExerciseLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseLogAggregateArgs>(args: Subset<T, ExerciseLogAggregateArgs>): Prisma.PrismaPromise<GetExerciseLogAggregateType<T>>

    /**
     * Group by ExerciseLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogGroupByArgs} args - Group by arguments.
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
      T extends ExerciseLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseLogGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseLog model
   */
  readonly fields: ExerciseLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutSession<T extends WorkoutSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSessionDefaultArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sets<T extends ExerciseLog$setsArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseLog$setsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExerciseLog model
   */
  interface ExerciseLogFieldRefs {
    readonly id: FieldRef<"ExerciseLog", 'String'>
    readonly workoutSessionId: FieldRef<"ExerciseLog", 'String'>
    readonly exerciseId: FieldRef<"ExerciseLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseLog findUnique
   */
  export type ExerciseLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog findUniqueOrThrow
   */
  export type ExerciseLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog findFirst
   */
  export type ExerciseLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseLogs.
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseLogs.
     */
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog findFirstOrThrow
   */
  export type ExerciseLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseLogs.
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseLogs.
     */
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog findMany
   */
  export type ExerciseLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLogs to fetch.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseLogs.
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog create
   */
  export type ExerciseLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseLog.
     */
    data: XOR<ExerciseLogCreateInput, ExerciseLogUncheckedCreateInput>
  }

  /**
   * ExerciseLog createMany
   */
  export type ExerciseLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseLogs.
     */
    data: ExerciseLogCreateManyInput | ExerciseLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseLog createManyAndReturn
   */
  export type ExerciseLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseLogs.
     */
    data: ExerciseLogCreateManyInput | ExerciseLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseLog update
   */
  export type ExerciseLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseLog.
     */
    data: XOR<ExerciseLogUpdateInput, ExerciseLogUncheckedUpdateInput>
    /**
     * Choose, which ExerciseLog to update.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog updateMany
   */
  export type ExerciseLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseLogs.
     */
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseLogs to update
     */
    where?: ExerciseLogWhereInput
    /**
     * Limit how many ExerciseLogs to update.
     */
    limit?: number
  }

  /**
   * ExerciseLog updateManyAndReturn
   */
  export type ExerciseLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseLogs.
     */
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseLogs to update
     */
    where?: ExerciseLogWhereInput
    /**
     * Limit how many ExerciseLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseLog upsert
   */
  export type ExerciseLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseLog to update in case it exists.
     */
    where: ExerciseLogWhereUniqueInput
    /**
     * In case the ExerciseLog found by the `where` argument doesn't exist, create a new ExerciseLog with this data.
     */
    create: XOR<ExerciseLogCreateInput, ExerciseLogUncheckedCreateInput>
    /**
     * In case the ExerciseLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseLogUpdateInput, ExerciseLogUncheckedUpdateInput>
  }

  /**
   * ExerciseLog delete
   */
  export type ExerciseLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter which ExerciseLog to delete.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog deleteMany
   */
  export type ExerciseLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseLogs to delete
     */
    where?: ExerciseLogWhereInput
    /**
     * Limit how many ExerciseLogs to delete.
     */
    limit?: number
  }

  /**
   * ExerciseLog.sets
   */
  export type ExerciseLog$setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    where?: SetLogWhereInput
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    cursor?: SetLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog without action
   */
  export type ExerciseLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
  }


  /**
   * Model SetLog
   */

  export type AggregateSetLog = {
    _count: SetLogCountAggregateOutputType | null
    _avg: SetLogAvgAggregateOutputType | null
    _sum: SetLogSumAggregateOutputType | null
    _min: SetLogMinAggregateOutputType | null
    _max: SetLogMaxAggregateOutputType | null
  }

  export type SetLogAvgAggregateOutputType = {
    weight: number | null
    reps: number | null
  }

  export type SetLogSumAggregateOutputType = {
    weight: number | null
    reps: number | null
  }

  export type SetLogMinAggregateOutputType = {
    id: string | null
    exerciseLogId: string | null
    weight: number | null
    reps: number | null
  }

  export type SetLogMaxAggregateOutputType = {
    id: string | null
    exerciseLogId: string | null
    weight: number | null
    reps: number | null
  }

  export type SetLogCountAggregateOutputType = {
    id: number
    exerciseLogId: number
    weight: number
    reps: number
    _all: number
  }


  export type SetLogAvgAggregateInputType = {
    weight?: true
    reps?: true
  }

  export type SetLogSumAggregateInputType = {
    weight?: true
    reps?: true
  }

  export type SetLogMinAggregateInputType = {
    id?: true
    exerciseLogId?: true
    weight?: true
    reps?: true
  }

  export type SetLogMaxAggregateInputType = {
    id?: true
    exerciseLogId?: true
    weight?: true
    reps?: true
  }

  export type SetLogCountAggregateInputType = {
    id?: true
    exerciseLogId?: true
    weight?: true
    reps?: true
    _all?: true
  }

  export type SetLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetLog to aggregate.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SetLogs
    **/
    _count?: true | SetLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetLogMaxAggregateInputType
  }

  export type GetSetLogAggregateType<T extends SetLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSetLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetLog[P]>
      : GetScalarType<T[P], AggregateSetLog[P]>
  }




  export type SetLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetLogWhereInput
    orderBy?: SetLogOrderByWithAggregationInput | SetLogOrderByWithAggregationInput[]
    by: SetLogScalarFieldEnum[] | SetLogScalarFieldEnum
    having?: SetLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetLogCountAggregateInputType | true
    _avg?: SetLogAvgAggregateInputType
    _sum?: SetLogSumAggregateInputType
    _min?: SetLogMinAggregateInputType
    _max?: SetLogMaxAggregateInputType
  }

  export type SetLogGroupByOutputType = {
    id: string
    exerciseLogId: string
    weight: number
    reps: number
    _count: SetLogCountAggregateOutputType | null
    _avg: SetLogAvgAggregateOutputType | null
    _sum: SetLogSumAggregateOutputType | null
    _min: SetLogMinAggregateOutputType | null
    _max: SetLogMaxAggregateOutputType | null
  }

  type GetSetLogGroupByPayload<T extends SetLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetLogGroupByOutputType[P]>
            : GetScalarType<T[P], SetLogGroupByOutputType[P]>
        }
      >
    >


  export type SetLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseLogId?: boolean
    weight?: boolean
    reps?: boolean
    exerciseLog?: boolean | ExerciseLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLog"]>

  export type SetLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseLogId?: boolean
    weight?: boolean
    reps?: boolean
    exerciseLog?: boolean | ExerciseLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLog"]>

  export type SetLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseLogId?: boolean
    weight?: boolean
    reps?: boolean
    exerciseLog?: boolean | ExerciseLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLog"]>

  export type SetLogSelectScalar = {
    id?: boolean
    exerciseLogId?: boolean
    weight?: boolean
    reps?: boolean
  }

  export type SetLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseLogId" | "weight" | "reps", ExtArgs["result"]["setLog"]>
  export type SetLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLog?: boolean | ExerciseLogDefaultArgs<ExtArgs>
  }
  export type SetLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLog?: boolean | ExerciseLogDefaultArgs<ExtArgs>
  }
  export type SetLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLog?: boolean | ExerciseLogDefaultArgs<ExtArgs>
  }

  export type $SetLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SetLog"
    objects: {
      exerciseLog: Prisma.$ExerciseLogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseLogId: string
      weight: number
      reps: number
    }, ExtArgs["result"]["setLog"]>
    composites: {}
  }

  type SetLogGetPayload<S extends boolean | null | undefined | SetLogDefaultArgs> = $Result.GetResult<Prisma.$SetLogPayload, S>

  type SetLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetLogCountAggregateInputType | true
    }

  export interface SetLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SetLog'], meta: { name: 'SetLog' } }
    /**
     * Find zero or one SetLog that matches the filter.
     * @param {SetLogFindUniqueArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetLogFindUniqueArgs>(args: SelectSubset<T, SetLogFindUniqueArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SetLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetLogFindUniqueOrThrowArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SetLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogFindFirstArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetLogFindFirstArgs>(args?: SelectSubset<T, SetLogFindFirstArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogFindFirstOrThrowArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SetLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SetLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SetLogs
     * const setLogs = await prisma.setLog.findMany()
     * 
     * // Get first 10 SetLogs
     * const setLogs = await prisma.setLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setLogWithIdOnly = await prisma.setLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetLogFindManyArgs>(args?: SelectSubset<T, SetLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SetLog.
     * @param {SetLogCreateArgs} args - Arguments to create a SetLog.
     * @example
     * // Create one SetLog
     * const SetLog = await prisma.setLog.create({
     *   data: {
     *     // ... data to create a SetLog
     *   }
     * })
     * 
     */
    create<T extends SetLogCreateArgs>(args: SelectSubset<T, SetLogCreateArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SetLogs.
     * @param {SetLogCreateManyArgs} args - Arguments to create many SetLogs.
     * @example
     * // Create many SetLogs
     * const setLog = await prisma.setLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetLogCreateManyArgs>(args?: SelectSubset<T, SetLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SetLogs and returns the data saved in the database.
     * @param {SetLogCreateManyAndReturnArgs} args - Arguments to create many SetLogs.
     * @example
     * // Create many SetLogs
     * const setLog = await prisma.setLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SetLogs and only return the `id`
     * const setLogWithIdOnly = await prisma.setLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SetLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SetLog.
     * @param {SetLogDeleteArgs} args - Arguments to delete one SetLog.
     * @example
     * // Delete one SetLog
     * const SetLog = await prisma.setLog.delete({
     *   where: {
     *     // ... filter to delete one SetLog
     *   }
     * })
     * 
     */
    delete<T extends SetLogDeleteArgs>(args: SelectSubset<T, SetLogDeleteArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SetLog.
     * @param {SetLogUpdateArgs} args - Arguments to update one SetLog.
     * @example
     * // Update one SetLog
     * const setLog = await prisma.setLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetLogUpdateArgs>(args: SelectSubset<T, SetLogUpdateArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SetLogs.
     * @param {SetLogDeleteManyArgs} args - Arguments to filter SetLogs to delete.
     * @example
     * // Delete a few SetLogs
     * const { count } = await prisma.setLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetLogDeleteManyArgs>(args?: SelectSubset<T, SetLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SetLogs
     * const setLog = await prisma.setLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetLogUpdateManyArgs>(args: SelectSubset<T, SetLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetLogs and returns the data updated in the database.
     * @param {SetLogUpdateManyAndReturnArgs} args - Arguments to update many SetLogs.
     * @example
     * // Update many SetLogs
     * const setLog = await prisma.setLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SetLogs and only return the `id`
     * const setLogWithIdOnly = await prisma.setLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SetLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SetLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SetLog.
     * @param {SetLogUpsertArgs} args - Arguments to update or create a SetLog.
     * @example
     * // Update or create a SetLog
     * const setLog = await prisma.setLog.upsert({
     *   create: {
     *     // ... data to create a SetLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SetLog we want to update
     *   }
     * })
     */
    upsert<T extends SetLogUpsertArgs>(args: SelectSubset<T, SetLogUpsertArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SetLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogCountArgs} args - Arguments to filter SetLogs to count.
     * @example
     * // Count the number of SetLogs
     * const count = await prisma.setLog.count({
     *   where: {
     *     // ... the filter for the SetLogs we want to count
     *   }
     * })
    **/
    count<T extends SetLogCountArgs>(
      args?: Subset<T, SetLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SetLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetLogAggregateArgs>(args: Subset<T, SetLogAggregateArgs>): Prisma.PrismaPromise<GetSetLogAggregateType<T>>

    /**
     * Group by SetLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogGroupByArgs} args - Group by arguments.
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
      T extends SetLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetLogGroupByArgs['orderBy'] }
        : { orderBy?: SetLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SetLog model
   */
  readonly fields: SetLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SetLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exerciseLog<T extends ExerciseLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseLogDefaultArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SetLog model
   */
  interface SetLogFieldRefs {
    readonly id: FieldRef<"SetLog", 'String'>
    readonly exerciseLogId: FieldRef<"SetLog", 'String'>
    readonly weight: FieldRef<"SetLog", 'Float'>
    readonly reps: FieldRef<"SetLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SetLog findUnique
   */
  export type SetLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog findUniqueOrThrow
   */
  export type SetLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog findFirst
   */
  export type SetLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetLogs.
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetLogs.
     */
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SetLog findFirstOrThrow
   */
  export type SetLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetLogs.
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetLogs.
     */
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SetLog findMany
   */
  export type SetLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLogs to fetch.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SetLogs.
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SetLog create
   */
  export type SetLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SetLog.
     */
    data: XOR<SetLogCreateInput, SetLogUncheckedCreateInput>
  }

  /**
   * SetLog createMany
   */
  export type SetLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SetLogs.
     */
    data: SetLogCreateManyInput | SetLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SetLog createManyAndReturn
   */
  export type SetLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * The data used to create many SetLogs.
     */
    data: SetLogCreateManyInput | SetLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetLog update
   */
  export type SetLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SetLog.
     */
    data: XOR<SetLogUpdateInput, SetLogUncheckedUpdateInput>
    /**
     * Choose, which SetLog to update.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog updateMany
   */
  export type SetLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SetLogs.
     */
    data: XOR<SetLogUpdateManyMutationInput, SetLogUncheckedUpdateManyInput>
    /**
     * Filter which SetLogs to update
     */
    where?: SetLogWhereInput
    /**
     * Limit how many SetLogs to update.
     */
    limit?: number
  }

  /**
   * SetLog updateManyAndReturn
   */
  export type SetLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * The data used to update SetLogs.
     */
    data: XOR<SetLogUpdateManyMutationInput, SetLogUncheckedUpdateManyInput>
    /**
     * Filter which SetLogs to update
     */
    where?: SetLogWhereInput
    /**
     * Limit how many SetLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetLog upsert
   */
  export type SetLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SetLog to update in case it exists.
     */
    where: SetLogWhereUniqueInput
    /**
     * In case the SetLog found by the `where` argument doesn't exist, create a new SetLog with this data.
     */
    create: XOR<SetLogCreateInput, SetLogUncheckedCreateInput>
    /**
     * In case the SetLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetLogUpdateInput, SetLogUncheckedUpdateInput>
  }

  /**
   * SetLog delete
   */
  export type SetLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter which SetLog to delete.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog deleteMany
   */
  export type SetLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetLogs to delete
     */
    where?: SetLogWhereInput
    /**
     * Limit how many SetLogs to delete.
     */
    limit?: number
  }

  /**
   * SetLog without action
   */
  export type SetLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    gender: 'gender',
    birthDate: 'birthDate',
    height: 'height',
    weight: 'weight',
    activityLevel: 'activityLevel',
    goal: 'goal'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscleGroup: 'muscleGroup',
    videoUrl: 'videoUrl',
    instructions: 'instructions',
    isSystem: 'isSystem'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    isActive: 'isActive',
    targetCalories: 'targetCalories',
    targetProtein: 'targetProtein',
    targetCarbs: 'targetCarbs',
    targetFat: 'targetFat',
    createdAt: 'createdAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const WorkoutTemplateScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    name: 'name',
    dayOfWeek: 'dayOfWeek'
  };

  export type WorkoutTemplateScalarFieldEnum = (typeof WorkoutTemplateScalarFieldEnum)[keyof typeof WorkoutTemplateScalarFieldEnum]


  export const PlannedExerciseScalarFieldEnum: {
    id: 'id',
    workoutTemplateId: 'workoutTemplateId',
    exerciseId: 'exerciseId',
    sets: 'sets',
    reps: 'reps',
    order: 'order'
  };

  export type PlannedExerciseScalarFieldEnum = (typeof PlannedExerciseScalarFieldEnum)[keyof typeof PlannedExerciseScalarFieldEnum]


  export const DailyLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat'
  };

  export type DailyLogScalarFieldEnum = (typeof DailyLogScalarFieldEnum)[keyof typeof DailyLogScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    dailyLogId: 'dailyLogId',
    name: 'name',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const WorkoutSessionScalarFieldEnum: {
    id: 'id',
    dailyLogId: 'dailyLogId',
    name: 'name',
    completedAt: 'completedAt'
  };

  export type WorkoutSessionScalarFieldEnum = (typeof WorkoutSessionScalarFieldEnum)[keyof typeof WorkoutSessionScalarFieldEnum]


  export const ExerciseLogScalarFieldEnum: {
    id: 'id',
    workoutSessionId: 'workoutSessionId',
    exerciseId: 'exerciseId'
  };

  export type ExerciseLogScalarFieldEnum = (typeof ExerciseLogScalarFieldEnum)[keyof typeof ExerciseLogScalarFieldEnum]


  export const SetLogScalarFieldEnum: {
    id: 'id',
    exerciseLogId: 'exerciseLogId',
    weight: 'weight',
    reps: 'reps'
  };

  export type SetLogScalarFieldEnum = (typeof SetLogScalarFieldEnum)[keyof typeof SetLogScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    height?: IntNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    activityLevel?: StringNullableFilter<"User"> | string | null
    goal?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    programs?: ProgramListRelationFilter
    dailyLogs?: DailyLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    programs?: ProgramOrderByRelationAggregateInput
    dailyLogs?: DailyLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    height?: IntNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    activityLevel?: StringNullableFilter<"User"> | string | null
    goal?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    programs?: ProgramListRelationFilter
    dailyLogs?: DailyLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    height?: IntNullableWithAggregatesFilter<"User"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
    activityLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    goal?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    videoUrl?: StringNullableFilter<"Exercise"> | string | null
    instructions?: StringNullableFilter<"Exercise"> | string | null
    isSystem?: BoolFilter<"Exercise"> | boolean
    logs?: ExerciseLogListRelationFilter
    plannedIn?: PlannedExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    isSystem?: SortOrder
    logs?: ExerciseLogOrderByRelationAggregateInput
    plannedIn?: PlannedExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    videoUrl?: StringNullableFilter<"Exercise"> | string | null
    instructions?: StringNullableFilter<"Exercise"> | string | null
    isSystem?: BoolFilter<"Exercise"> | boolean
    logs?: ExerciseLogListRelationFilter
    plannedIn?: PlannedExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    isSystem?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    muscleGroup?: StringWithAggregatesFilter<"Exercise"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    isSystem?: BoolWithAggregatesFilter<"Exercise"> | boolean
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    userId?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    isActive?: BoolFilter<"Program"> | boolean
    targetCalories?: IntFilter<"Program"> | number
    targetProtein?: IntFilter<"Program"> | number
    targetCarbs?: IntFilter<"Program"> | number
    targetFat?: IntFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workouts?: WorkoutTemplateListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    workouts?: WorkoutTemplateOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    userId?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    isActive?: BoolFilter<"Program"> | boolean
    targetCalories?: IntFilter<"Program"> | number
    targetProtein?: IntFilter<"Program"> | number
    targetCarbs?: IntFilter<"Program"> | number
    targetFat?: IntFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workouts?: WorkoutTemplateListRelationFilter
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
    createdAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    userId?: StringWithAggregatesFilter<"Program"> | string
    name?: StringWithAggregatesFilter<"Program"> | string
    isActive?: BoolWithAggregatesFilter<"Program"> | boolean
    targetCalories?: IntWithAggregatesFilter<"Program"> | number
    targetProtein?: IntWithAggregatesFilter<"Program"> | number
    targetCarbs?: IntWithAggregatesFilter<"Program"> | number
    targetFat?: IntWithAggregatesFilter<"Program"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type WorkoutTemplateWhereInput = {
    AND?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    OR?: WorkoutTemplateWhereInput[]
    NOT?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    id?: StringFilter<"WorkoutTemplate"> | string
    programId?: StringFilter<"WorkoutTemplate"> | string
    name?: StringFilter<"WorkoutTemplate"> | string
    dayOfWeek?: IntNullableFilter<"WorkoutTemplate"> | number | null
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    exercises?: PlannedExerciseListRelationFilter
  }

  export type WorkoutTemplateOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    program?: ProgramOrderByWithRelationInput
    exercises?: PlannedExerciseOrderByRelationAggregateInput
  }

  export type WorkoutTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    OR?: WorkoutTemplateWhereInput[]
    NOT?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    programId?: StringFilter<"WorkoutTemplate"> | string
    name?: StringFilter<"WorkoutTemplate"> | string
    dayOfWeek?: IntNullableFilter<"WorkoutTemplate"> | number | null
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    exercises?: PlannedExerciseListRelationFilter
  }, "id">

  export type WorkoutTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    _count?: WorkoutTemplateCountOrderByAggregateInput
    _avg?: WorkoutTemplateAvgOrderByAggregateInput
    _max?: WorkoutTemplateMaxOrderByAggregateInput
    _min?: WorkoutTemplateMinOrderByAggregateInput
    _sum?: WorkoutTemplateSumOrderByAggregateInput
  }

  export type WorkoutTemplateScalarWhereWithAggregatesInput = {
    AND?: WorkoutTemplateScalarWhereWithAggregatesInput | WorkoutTemplateScalarWhereWithAggregatesInput[]
    OR?: WorkoutTemplateScalarWhereWithAggregatesInput[]
    NOT?: WorkoutTemplateScalarWhereWithAggregatesInput | WorkoutTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutTemplate"> | string
    programId?: StringWithAggregatesFilter<"WorkoutTemplate"> | string
    name?: StringWithAggregatesFilter<"WorkoutTemplate"> | string
    dayOfWeek?: IntNullableWithAggregatesFilter<"WorkoutTemplate"> | number | null
  }

  export type PlannedExerciseWhereInput = {
    AND?: PlannedExerciseWhereInput | PlannedExerciseWhereInput[]
    OR?: PlannedExerciseWhereInput[]
    NOT?: PlannedExerciseWhereInput | PlannedExerciseWhereInput[]
    id?: StringFilter<"PlannedExercise"> | string
    workoutTemplateId?: StringFilter<"PlannedExercise"> | string
    exerciseId?: StringFilter<"PlannedExercise"> | string
    sets?: IntFilter<"PlannedExercise"> | number
    reps?: StringFilter<"PlannedExercise"> | string
    order?: IntFilter<"PlannedExercise"> | number
    workoutTemplate?: XOR<WorkoutTemplateScalarRelationFilter, WorkoutTemplateWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type PlannedExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutTemplateId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    order?: SortOrder
    workoutTemplate?: WorkoutTemplateOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type PlannedExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlannedExerciseWhereInput | PlannedExerciseWhereInput[]
    OR?: PlannedExerciseWhereInput[]
    NOT?: PlannedExerciseWhereInput | PlannedExerciseWhereInput[]
    workoutTemplateId?: StringFilter<"PlannedExercise"> | string
    exerciseId?: StringFilter<"PlannedExercise"> | string
    sets?: IntFilter<"PlannedExercise"> | number
    reps?: StringFilter<"PlannedExercise"> | string
    order?: IntFilter<"PlannedExercise"> | number
    workoutTemplate?: XOR<WorkoutTemplateScalarRelationFilter, WorkoutTemplateWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type PlannedExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutTemplateId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    order?: SortOrder
    _count?: PlannedExerciseCountOrderByAggregateInput
    _avg?: PlannedExerciseAvgOrderByAggregateInput
    _max?: PlannedExerciseMaxOrderByAggregateInput
    _min?: PlannedExerciseMinOrderByAggregateInput
    _sum?: PlannedExerciseSumOrderByAggregateInput
  }

  export type PlannedExerciseScalarWhereWithAggregatesInput = {
    AND?: PlannedExerciseScalarWhereWithAggregatesInput | PlannedExerciseScalarWhereWithAggregatesInput[]
    OR?: PlannedExerciseScalarWhereWithAggregatesInput[]
    NOT?: PlannedExerciseScalarWhereWithAggregatesInput | PlannedExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlannedExercise"> | string
    workoutTemplateId?: StringWithAggregatesFilter<"PlannedExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"PlannedExercise"> | string
    sets?: IntWithAggregatesFilter<"PlannedExercise"> | number
    reps?: StringWithAggregatesFilter<"PlannedExercise"> | string
    order?: IntWithAggregatesFilter<"PlannedExercise"> | number
  }

  export type DailyLogWhereInput = {
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    id?: StringFilter<"DailyLog"> | string
    userId?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    calories?: IntFilter<"DailyLog"> | number
    protein?: IntFilter<"DailyLog"> | number
    carbs?: IntFilter<"DailyLog"> | number
    fat?: IntFilter<"DailyLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meals?: MealListRelationFilter
    workouts?: WorkoutSessionListRelationFilter
  }

  export type DailyLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    user?: UserOrderByWithRelationInput
    meals?: MealOrderByRelationAggregateInput
    workouts?: WorkoutSessionOrderByRelationAggregateInput
  }

  export type DailyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyLogUserIdDateCompoundUniqueInput
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    userId?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    calories?: IntFilter<"DailyLog"> | number
    protein?: IntFilter<"DailyLog"> | number
    carbs?: IntFilter<"DailyLog"> | number
    fat?: IntFilter<"DailyLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meals?: MealListRelationFilter
    workouts?: WorkoutSessionListRelationFilter
  }, "id" | "userId_date">

  export type DailyLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    _count?: DailyLogCountOrderByAggregateInput
    _avg?: DailyLogAvgOrderByAggregateInput
    _max?: DailyLogMaxOrderByAggregateInput
    _min?: DailyLogMinOrderByAggregateInput
    _sum?: DailyLogSumOrderByAggregateInput
  }

  export type DailyLogScalarWhereWithAggregatesInput = {
    AND?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    OR?: DailyLogScalarWhereWithAggregatesInput[]
    NOT?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyLog"> | string
    userId?: StringWithAggregatesFilter<"DailyLog"> | string
    date?: DateTimeWithAggregatesFilter<"DailyLog"> | Date | string
    calories?: IntWithAggregatesFilter<"DailyLog"> | number
    protein?: IntWithAggregatesFilter<"DailyLog"> | number
    carbs?: IntWithAggregatesFilter<"DailyLog"> | number
    fat?: IntWithAggregatesFilter<"DailyLog"> | number
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    dailyLogId?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    calories?: IntFilter<"Meal"> | number
    protein?: IntFilter<"Meal"> | number
    carbs?: IntFilter<"Meal"> | number
    fat?: IntFilter<"Meal"> | number
    dailyLog?: XOR<DailyLogScalarRelationFilter, DailyLogWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    dailyLog?: DailyLogOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    dailyLogId?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    calories?: IntFilter<"Meal"> | number
    protein?: IntFilter<"Meal"> | number
    carbs?: IntFilter<"Meal"> | number
    fat?: IntFilter<"Meal"> | number
    dailyLog?: XOR<DailyLogScalarRelationFilter, DailyLogWhereInput>
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    dailyLogId?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringWithAggregatesFilter<"Meal"> | string
    calories?: IntWithAggregatesFilter<"Meal"> | number
    protein?: IntWithAggregatesFilter<"Meal"> | number
    carbs?: IntWithAggregatesFilter<"Meal"> | number
    fat?: IntWithAggregatesFilter<"Meal"> | number
  }

  export type WorkoutSessionWhereInput = {
    AND?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    OR?: WorkoutSessionWhereInput[]
    NOT?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    id?: StringFilter<"WorkoutSession"> | string
    dailyLogId?: StringFilter<"WorkoutSession"> | string
    name?: StringFilter<"WorkoutSession"> | string
    completedAt?: DateTimeFilter<"WorkoutSession"> | Date | string
    dailyLog?: XOR<DailyLogScalarRelationFilter, DailyLogWhereInput>
    exercises?: ExerciseLogListRelationFilter
  }

  export type WorkoutSessionOrderByWithRelationInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
    dailyLog?: DailyLogOrderByWithRelationInput
    exercises?: ExerciseLogOrderByRelationAggregateInput
  }

  export type WorkoutSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    OR?: WorkoutSessionWhereInput[]
    NOT?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    dailyLogId?: StringFilter<"WorkoutSession"> | string
    name?: StringFilter<"WorkoutSession"> | string
    completedAt?: DateTimeFilter<"WorkoutSession"> | Date | string
    dailyLog?: XOR<DailyLogScalarRelationFilter, DailyLogWhereInput>
    exercises?: ExerciseLogListRelationFilter
  }, "id">

  export type WorkoutSessionOrderByWithAggregationInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
    _count?: WorkoutSessionCountOrderByAggregateInput
    _max?: WorkoutSessionMaxOrderByAggregateInput
    _min?: WorkoutSessionMinOrderByAggregateInput
  }

  export type WorkoutSessionScalarWhereWithAggregatesInput = {
    AND?: WorkoutSessionScalarWhereWithAggregatesInput | WorkoutSessionScalarWhereWithAggregatesInput[]
    OR?: WorkoutSessionScalarWhereWithAggregatesInput[]
    NOT?: WorkoutSessionScalarWhereWithAggregatesInput | WorkoutSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutSession"> | string
    dailyLogId?: StringWithAggregatesFilter<"WorkoutSession"> | string
    name?: StringWithAggregatesFilter<"WorkoutSession"> | string
    completedAt?: DateTimeWithAggregatesFilter<"WorkoutSession"> | Date | string
  }

  export type ExerciseLogWhereInput = {
    AND?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    OR?: ExerciseLogWhereInput[]
    NOT?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    id?: StringFilter<"ExerciseLog"> | string
    workoutSessionId?: StringFilter<"ExerciseLog"> | string
    exerciseId?: StringFilter<"ExerciseLog"> | string
    workoutSession?: XOR<WorkoutSessionScalarRelationFilter, WorkoutSessionWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetLogListRelationFilter
  }

  export type ExerciseLogOrderByWithRelationInput = {
    id?: SortOrder
    workoutSessionId?: SortOrder
    exerciseId?: SortOrder
    workoutSession?: WorkoutSessionOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    sets?: SetLogOrderByRelationAggregateInput
  }

  export type ExerciseLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    OR?: ExerciseLogWhereInput[]
    NOT?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    workoutSessionId?: StringFilter<"ExerciseLog"> | string
    exerciseId?: StringFilter<"ExerciseLog"> | string
    workoutSession?: XOR<WorkoutSessionScalarRelationFilter, WorkoutSessionWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetLogListRelationFilter
  }, "id">

  export type ExerciseLogOrderByWithAggregationInput = {
    id?: SortOrder
    workoutSessionId?: SortOrder
    exerciseId?: SortOrder
    _count?: ExerciseLogCountOrderByAggregateInput
    _max?: ExerciseLogMaxOrderByAggregateInput
    _min?: ExerciseLogMinOrderByAggregateInput
  }

  export type ExerciseLogScalarWhereWithAggregatesInput = {
    AND?: ExerciseLogScalarWhereWithAggregatesInput | ExerciseLogScalarWhereWithAggregatesInput[]
    OR?: ExerciseLogScalarWhereWithAggregatesInput[]
    NOT?: ExerciseLogScalarWhereWithAggregatesInput | ExerciseLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseLog"> | string
    workoutSessionId?: StringWithAggregatesFilter<"ExerciseLog"> | string
    exerciseId?: StringWithAggregatesFilter<"ExerciseLog"> | string
  }

  export type SetLogWhereInput = {
    AND?: SetLogWhereInput | SetLogWhereInput[]
    OR?: SetLogWhereInput[]
    NOT?: SetLogWhereInput | SetLogWhereInput[]
    id?: StringFilter<"SetLog"> | string
    exerciseLogId?: StringFilter<"SetLog"> | string
    weight?: FloatFilter<"SetLog"> | number
    reps?: IntFilter<"SetLog"> | number
    exerciseLog?: XOR<ExerciseLogScalarRelationFilter, ExerciseLogWhereInput>
  }

  export type SetLogOrderByWithRelationInput = {
    id?: SortOrder
    exerciseLogId?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    exerciseLog?: ExerciseLogOrderByWithRelationInput
  }

  export type SetLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetLogWhereInput | SetLogWhereInput[]
    OR?: SetLogWhereInput[]
    NOT?: SetLogWhereInput | SetLogWhereInput[]
    exerciseLogId?: StringFilter<"SetLog"> | string
    weight?: FloatFilter<"SetLog"> | number
    reps?: IntFilter<"SetLog"> | number
    exerciseLog?: XOR<ExerciseLogScalarRelationFilter, ExerciseLogWhereInput>
  }, "id">

  export type SetLogOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseLogId?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    _count?: SetLogCountOrderByAggregateInput
    _avg?: SetLogAvgOrderByAggregateInput
    _max?: SetLogMaxOrderByAggregateInput
    _min?: SetLogMinOrderByAggregateInput
    _sum?: SetLogSumOrderByAggregateInput
  }

  export type SetLogScalarWhereWithAggregatesInput = {
    AND?: SetLogScalarWhereWithAggregatesInput | SetLogScalarWhereWithAggregatesInput[]
    OR?: SetLogScalarWhereWithAggregatesInput[]
    NOT?: SetLogScalarWhereWithAggregatesInput | SetLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SetLog"> | string
    exerciseLogId?: StringWithAggregatesFilter<"SetLog"> | string
    weight?: FloatWithAggregatesFilter<"SetLog"> | number
    reps?: IntWithAggregatesFilter<"SetLog"> | number
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    programs?: ProgramCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    programs?: ProgramUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
    logs?: ExerciseLogCreateNestedManyWithoutExerciseInput
    plannedIn?: PlannedExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
    logs?: ExerciseLogUncheckedCreateNestedManyWithoutExerciseInput
    plannedIn?: PlannedExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    logs?: ExerciseLogUpdateManyWithoutExerciseNestedInput
    plannedIn?: PlannedExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    logs?: ExerciseLogUncheckedUpdateManyWithoutExerciseNestedInput
    plannedIn?: PlannedExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgramCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProgramsInput
    workouts?: WorkoutTemplateCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
    workouts?: WorkoutTemplateUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgramsNestedInput
    workouts?: WorkoutTemplateUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutTemplateUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutTemplateCreateInput = {
    id?: string
    name: string
    dayOfWeek?: number | null
    program: ProgramCreateNestedOneWithoutWorkoutsInput
    exercises?: PlannedExerciseCreateNestedManyWithoutWorkoutTemplateInput
  }

  export type WorkoutTemplateUncheckedCreateInput = {
    id?: string
    programId: string
    name: string
    dayOfWeek?: number | null
    exercises?: PlannedExerciseUncheckedCreateNestedManyWithoutWorkoutTemplateInput
  }

  export type WorkoutTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    program?: ProgramUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: PlannedExerciseUpdateManyWithoutWorkoutTemplateNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    exercises?: PlannedExerciseUncheckedUpdateManyWithoutWorkoutTemplateNestedInput
  }

  export type WorkoutTemplateCreateManyInput = {
    id?: string
    programId: string
    name: string
    dayOfWeek?: number | null
  }

  export type WorkoutTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlannedExerciseCreateInput = {
    id?: string
    sets: number
    reps: string
    order: number
    workoutTemplate: WorkoutTemplateCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutPlannedInInput
  }

  export type PlannedExerciseUncheckedCreateInput = {
    id?: string
    workoutTemplateId: string
    exerciseId: string
    sets: number
    reps: string
    order: number
  }

  export type PlannedExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    workoutTemplate?: WorkoutTemplateUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutPlannedInNestedInput
  }

  export type PlannedExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutTemplateId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PlannedExerciseCreateManyInput = {
    id?: string
    workoutTemplateId: string
    exerciseId: string
    sets: number
    reps: string
    order: number
  }

  export type PlannedExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PlannedExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutTemplateId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogCreateInput = {
    id?: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    user: UserCreateNestedOneWithoutDailyLogsInput
    meals?: MealCreateNestedManyWithoutDailyLogInput
    workouts?: WorkoutSessionCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    meals?: MealUncheckedCreateNestedManyWithoutDailyLogInput
    workouts?: WorkoutSessionUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
    meals?: MealUpdateManyWithoutDailyLogNestedInput
    workouts?: WorkoutSessionUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutDailyLogNestedInput
    workouts?: WorkoutSessionUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
  }

  export type DailyLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type MealCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    dailyLog: DailyLogCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    dailyLogId: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    dailyLog?: DailyLogUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type MealCreateManyInput = {
    id?: string
    dailyLogId: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutSessionCreateInput = {
    id?: string
    name: string
    completedAt?: Date | string
    dailyLog: DailyLogCreateNestedOneWithoutWorkoutsInput
    exercises?: ExerciseLogCreateNestedManyWithoutWorkoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateInput = {
    id?: string
    dailyLogId: string
    name: string
    completedAt?: Date | string
    exercises?: ExerciseLogUncheckedCreateNestedManyWithoutWorkoutSessionInput
  }

  export type WorkoutSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyLog?: DailyLogUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: ExerciseLogUpdateManyWithoutWorkoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseLogUncheckedUpdateManyWithoutWorkoutSessionNestedInput
  }

  export type WorkoutSessionCreateManyInput = {
    id?: string
    dailyLogId: string
    name: string
    completedAt?: Date | string
  }

  export type WorkoutSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseLogCreateInput = {
    id?: string
    workoutSession: WorkoutSessionCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutLogsInput
    sets?: SetLogCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogUncheckedCreateInput = {
    id?: string
    workoutSessionId: string
    exerciseId: string
    sets?: SetLogUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSession?: WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutLogsNestedInput
    sets?: SetLogUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: SetLogUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogCreateManyInput = {
    id?: string
    workoutSessionId: string
    exerciseId: string
  }

  export type ExerciseLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type SetLogCreateInput = {
    id?: string
    weight: number
    reps: number
    exerciseLog: ExerciseLogCreateNestedOneWithoutSetsInput
  }

  export type SetLogUncheckedCreateInput = {
    id?: string
    exerciseLogId: string
    weight: number
    reps: number
  }

  export type SetLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    exerciseLog?: ExerciseLogUpdateOneRequiredWithoutSetsNestedInput
  }

  export type SetLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseLogId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogCreateManyInput = {
    id?: string
    exerciseLogId: string
    weight: number
    reps: number
  }

  export type SetLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseLogId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type DailyLogListRelationFilter = {
    every?: DailyLogWhereInput
    some?: DailyLogWhereInput
    none?: DailyLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    activityLevel?: SortOrder
    goal?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    activityLevel?: SortOrder
    goal?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    activityLevel?: SortOrder
    goal?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseLogListRelationFilter = {
    every?: ExerciseLogWhereInput
    some?: ExerciseLogWhereInput
    none?: ExerciseLogWhereInput
  }

  export type PlannedExerciseListRelationFilter = {
    every?: PlannedExerciseWhereInput
    some?: PlannedExerciseWhereInput
    none?: PlannedExerciseWhereInput
  }

  export type ExerciseLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlannedExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    videoUrl?: SortOrder
    instructions?: SortOrder
    isSystem?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    videoUrl?: SortOrder
    instructions?: SortOrder
    isSystem?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    videoUrl?: SortOrder
    instructions?: SortOrder
    isSystem?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WorkoutTemplateListRelationFilter = {
    every?: WorkoutTemplateWhereInput
    some?: WorkoutTemplateWhereInput
    none?: WorkoutTemplateWhereInput
  }

  export type WorkoutTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    targetCalories?: SortOrder
    targetProtein?: SortOrder
    targetCarbs?: SortOrder
    targetFat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type WorkoutTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type WorkoutTemplateAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type WorkoutTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type WorkoutTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type WorkoutTemplateSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type WorkoutTemplateScalarRelationFilter = {
    is?: WorkoutTemplateWhereInput
    isNot?: WorkoutTemplateWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type PlannedExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutTemplateId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    order?: SortOrder
  }

  export type PlannedExerciseAvgOrderByAggregateInput = {
    sets?: SortOrder
    order?: SortOrder
  }

  export type PlannedExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutTemplateId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    order?: SortOrder
  }

  export type PlannedExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutTemplateId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    order?: SortOrder
  }

  export type PlannedExerciseSumOrderByAggregateInput = {
    sets?: SortOrder
    order?: SortOrder
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type WorkoutSessionListRelationFilter = {
    every?: WorkoutSessionWhereInput
    some?: WorkoutSessionWhereInput
    none?: WorkoutSessionWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyLogUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type DailyLogAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type DailyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type DailyLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type DailyLogSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type DailyLogScalarRelationFilter = {
    is?: DailyLogWhereInput
    isNot?: DailyLogWhereInput
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type WorkoutSessionCountOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
  }

  export type WorkoutSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
  }

  export type WorkoutSessionMinOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
  }

  export type WorkoutSessionScalarRelationFilter = {
    is?: WorkoutSessionWhereInput
    isNot?: WorkoutSessionWhereInput
  }

  export type SetLogListRelationFilter = {
    every?: SetLogWhereInput
    some?: SetLogWhereInput
    none?: SetLogWhereInput
  }

  export type SetLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseLogCountOrderByAggregateInput = {
    id?: SortOrder
    workoutSessionId?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseLogMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutSessionId?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseLogMinOrderByAggregateInput = {
    id?: SortOrder
    workoutSessionId?: SortOrder
    exerciseId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExerciseLogScalarRelationFilter = {
    is?: ExerciseLogWhereInput
    isNot?: ExerciseLogWhereInput
  }

  export type SetLogCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseLogId?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
  }

  export type SetLogAvgOrderByAggregateInput = {
    weight?: SortOrder
    reps?: SortOrder
  }

  export type SetLogMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseLogId?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
  }

  export type SetLogMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseLogId?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
  }

  export type SetLogSumOrderByAggregateInput = {
    weight?: SortOrder
    reps?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProgramCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type DailyLogCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type DailyLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProgramUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutUserInput | ProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutUserInput | ProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutUserInput | ProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type DailyLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutUserInput | ProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutUserInput | ProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutUserInput | ProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type DailyLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type ExerciseLogCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type PlannedExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<PlannedExerciseCreateWithoutExerciseInput, PlannedExerciseUncheckedCreateWithoutExerciseInput> | PlannedExerciseCreateWithoutExerciseInput[] | PlannedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutExerciseInput | PlannedExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: PlannedExerciseCreateManyExerciseInputEnvelope
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
  }

  export type ExerciseLogUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type PlannedExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<PlannedExerciseCreateWithoutExerciseInput, PlannedExerciseUncheckedCreateWithoutExerciseInput> | PlannedExerciseCreateWithoutExerciseInput[] | PlannedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutExerciseInput | PlannedExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: PlannedExerciseCreateManyExerciseInputEnvelope
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
  }

  export type ExerciseLogUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput | ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput | ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutExerciseInput | ExerciseLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type PlannedExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<PlannedExerciseCreateWithoutExerciseInput, PlannedExerciseUncheckedCreateWithoutExerciseInput> | PlannedExerciseCreateWithoutExerciseInput[] | PlannedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutExerciseInput | PlannedExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: PlannedExerciseUpsertWithWhereUniqueWithoutExerciseInput | PlannedExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: PlannedExerciseCreateManyExerciseInputEnvelope
    set?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    disconnect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    delete?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    update?: PlannedExerciseUpdateWithWhereUniqueWithoutExerciseInput | PlannedExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: PlannedExerciseUpdateManyWithWhereWithoutExerciseInput | PlannedExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: PlannedExerciseScalarWhereInput | PlannedExerciseScalarWhereInput[]
  }

  export type ExerciseLogUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput | ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput | ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutExerciseInput | ExerciseLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type PlannedExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<PlannedExerciseCreateWithoutExerciseInput, PlannedExerciseUncheckedCreateWithoutExerciseInput> | PlannedExerciseCreateWithoutExerciseInput[] | PlannedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutExerciseInput | PlannedExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: PlannedExerciseUpsertWithWhereUniqueWithoutExerciseInput | PlannedExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: PlannedExerciseCreateManyExerciseInputEnvelope
    set?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    disconnect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    delete?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    update?: PlannedExerciseUpdateWithWhereUniqueWithoutExerciseInput | PlannedExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: PlannedExerciseUpdateManyWithWhereWithoutExerciseInput | PlannedExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: PlannedExerciseScalarWhereInput | PlannedExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgramsInput = {
    create?: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutTemplateCreateNestedManyWithoutProgramInput = {
    create?: XOR<WorkoutTemplateCreateWithoutProgramInput, WorkoutTemplateUncheckedCreateWithoutProgramInput> | WorkoutTemplateCreateWithoutProgramInput[] | WorkoutTemplateUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutProgramInput | WorkoutTemplateCreateOrConnectWithoutProgramInput[]
    createMany?: WorkoutTemplateCreateManyProgramInputEnvelope
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
  }

  export type WorkoutTemplateUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<WorkoutTemplateCreateWithoutProgramInput, WorkoutTemplateUncheckedCreateWithoutProgramInput> | WorkoutTemplateCreateWithoutProgramInput[] | WorkoutTemplateUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutProgramInput | WorkoutTemplateCreateOrConnectWithoutProgramInput[]
    createMany?: WorkoutTemplateCreateManyProgramInputEnvelope
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramsInput
    upsert?: UserUpsertWithoutProgramsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgramsInput, UserUpdateWithoutProgramsInput>, UserUncheckedUpdateWithoutProgramsInput>
  }

  export type WorkoutTemplateUpdateManyWithoutProgramNestedInput = {
    create?: XOR<WorkoutTemplateCreateWithoutProgramInput, WorkoutTemplateUncheckedCreateWithoutProgramInput> | WorkoutTemplateCreateWithoutProgramInput[] | WorkoutTemplateUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutProgramInput | WorkoutTemplateCreateOrConnectWithoutProgramInput[]
    upsert?: WorkoutTemplateUpsertWithWhereUniqueWithoutProgramInput | WorkoutTemplateUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: WorkoutTemplateCreateManyProgramInputEnvelope
    set?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    disconnect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    delete?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    update?: WorkoutTemplateUpdateWithWhereUniqueWithoutProgramInput | WorkoutTemplateUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: WorkoutTemplateUpdateManyWithWhereWithoutProgramInput | WorkoutTemplateUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
  }

  export type WorkoutTemplateUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<WorkoutTemplateCreateWithoutProgramInput, WorkoutTemplateUncheckedCreateWithoutProgramInput> | WorkoutTemplateCreateWithoutProgramInput[] | WorkoutTemplateUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutProgramInput | WorkoutTemplateCreateOrConnectWithoutProgramInput[]
    upsert?: WorkoutTemplateUpsertWithWhereUniqueWithoutProgramInput | WorkoutTemplateUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: WorkoutTemplateCreateManyProgramInputEnvelope
    set?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    disconnect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    delete?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    update?: WorkoutTemplateUpdateWithWhereUniqueWithoutProgramInput | WorkoutTemplateUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: WorkoutTemplateUpdateManyWithWhereWithoutProgramInput | WorkoutTemplateUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
  }

  export type ProgramCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<ProgramCreateWithoutWorkoutsInput, ProgramUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutWorkoutsInput
    connect?: ProgramWhereUniqueInput
  }

  export type PlannedExerciseCreateNestedManyWithoutWorkoutTemplateInput = {
    create?: XOR<PlannedExerciseCreateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput> | PlannedExerciseCreateWithoutWorkoutTemplateInput[] | PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput | PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput[]
    createMany?: PlannedExerciseCreateManyWorkoutTemplateInputEnvelope
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
  }

  export type PlannedExerciseUncheckedCreateNestedManyWithoutWorkoutTemplateInput = {
    create?: XOR<PlannedExerciseCreateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput> | PlannedExerciseCreateWithoutWorkoutTemplateInput[] | PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput | PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput[]
    createMany?: PlannedExerciseCreateManyWorkoutTemplateInputEnvelope
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
  }

  export type ProgramUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<ProgramCreateWithoutWorkoutsInput, ProgramUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutWorkoutsInput
    upsert?: ProgramUpsertWithoutWorkoutsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutWorkoutsInput, ProgramUpdateWithoutWorkoutsInput>, ProgramUncheckedUpdateWithoutWorkoutsInput>
  }

  export type PlannedExerciseUpdateManyWithoutWorkoutTemplateNestedInput = {
    create?: XOR<PlannedExerciseCreateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput> | PlannedExerciseCreateWithoutWorkoutTemplateInput[] | PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput | PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput[]
    upsert?: PlannedExerciseUpsertWithWhereUniqueWithoutWorkoutTemplateInput | PlannedExerciseUpsertWithWhereUniqueWithoutWorkoutTemplateInput[]
    createMany?: PlannedExerciseCreateManyWorkoutTemplateInputEnvelope
    set?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    disconnect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    delete?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    update?: PlannedExerciseUpdateWithWhereUniqueWithoutWorkoutTemplateInput | PlannedExerciseUpdateWithWhereUniqueWithoutWorkoutTemplateInput[]
    updateMany?: PlannedExerciseUpdateManyWithWhereWithoutWorkoutTemplateInput | PlannedExerciseUpdateManyWithWhereWithoutWorkoutTemplateInput[]
    deleteMany?: PlannedExerciseScalarWhereInput | PlannedExerciseScalarWhereInput[]
  }

  export type PlannedExerciseUncheckedUpdateManyWithoutWorkoutTemplateNestedInput = {
    create?: XOR<PlannedExerciseCreateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput> | PlannedExerciseCreateWithoutWorkoutTemplateInput[] | PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput[]
    connectOrCreate?: PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput | PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput[]
    upsert?: PlannedExerciseUpsertWithWhereUniqueWithoutWorkoutTemplateInput | PlannedExerciseUpsertWithWhereUniqueWithoutWorkoutTemplateInput[]
    createMany?: PlannedExerciseCreateManyWorkoutTemplateInputEnvelope
    set?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    disconnect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    delete?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    connect?: PlannedExerciseWhereUniqueInput | PlannedExerciseWhereUniqueInput[]
    update?: PlannedExerciseUpdateWithWhereUniqueWithoutWorkoutTemplateInput | PlannedExerciseUpdateWithWhereUniqueWithoutWorkoutTemplateInput[]
    updateMany?: PlannedExerciseUpdateManyWithWhereWithoutWorkoutTemplateInput | PlannedExerciseUpdateManyWithWhereWithoutWorkoutTemplateInput[]
    deleteMany?: PlannedExerciseScalarWhereInput | PlannedExerciseScalarWhereInput[]
  }

  export type WorkoutTemplateCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutTemplateCreateWithoutExercisesInput, WorkoutTemplateUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutExercisesInput
    connect?: WorkoutTemplateWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutPlannedInInput = {
    create?: XOR<ExerciseCreateWithoutPlannedInInput, ExerciseUncheckedCreateWithoutPlannedInInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutPlannedInInput
    connect?: ExerciseWhereUniqueInput
  }

  export type WorkoutTemplateUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutTemplateCreateWithoutExercisesInput, WorkoutTemplateUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutTemplateUpsertWithoutExercisesInput
    connect?: WorkoutTemplateWhereUniqueInput
    update?: XOR<XOR<WorkoutTemplateUpdateToOneWithWhereWithoutExercisesInput, WorkoutTemplateUpdateWithoutExercisesInput>, WorkoutTemplateUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutPlannedInNestedInput = {
    create?: XOR<ExerciseCreateWithoutPlannedInInput, ExerciseUncheckedCreateWithoutPlannedInInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutPlannedInInput
    upsert?: ExerciseUpsertWithoutPlannedInInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutPlannedInInput, ExerciseUpdateWithoutPlannedInInput>, ExerciseUncheckedUpdateWithoutPlannedInInput>
  }

  export type UserCreateNestedOneWithoutDailyLogsInput = {
    create?: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogsInput
    connect?: UserWhereUniqueInput
  }

  export type MealCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type WorkoutSessionCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<WorkoutSessionCreateWithoutDailyLogInput, WorkoutSessionUncheckedCreateWithoutDailyLogInput> | WorkoutSessionCreateWithoutDailyLogInput[] | WorkoutSessionUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutDailyLogInput | WorkoutSessionCreateOrConnectWithoutDailyLogInput[]
    createMany?: WorkoutSessionCreateManyDailyLogInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type WorkoutSessionUncheckedCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<WorkoutSessionCreateWithoutDailyLogInput, WorkoutSessionUncheckedCreateWithoutDailyLogInput> | WorkoutSessionCreateWithoutDailyLogInput[] | WorkoutSessionUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutDailyLogInput | WorkoutSessionCreateOrConnectWithoutDailyLogInput[]
    createMany?: WorkoutSessionCreateManyDailyLogInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDailyLogsNestedInput = {
    create?: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogsInput
    upsert?: UserUpsertWithoutDailyLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyLogsInput, UserUpdateWithoutDailyLogsInput>, UserUncheckedUpdateWithoutDailyLogsInput>
  }

  export type MealUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyLogInput | MealUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyLogInput | MealUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyLogInput | MealUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WorkoutSessionUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutDailyLogInput, WorkoutSessionUncheckedCreateWithoutDailyLogInput> | WorkoutSessionCreateWithoutDailyLogInput[] | WorkoutSessionUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutDailyLogInput | WorkoutSessionCreateOrConnectWithoutDailyLogInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutDailyLogInput | WorkoutSessionUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: WorkoutSessionCreateManyDailyLogInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutDailyLogInput | WorkoutSessionUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutDailyLogInput | WorkoutSessionUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyLogInput | MealUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyLogInput | MealUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyLogInput | MealUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutDailyLogInput, WorkoutSessionUncheckedCreateWithoutDailyLogInput> | WorkoutSessionCreateWithoutDailyLogInput[] | WorkoutSessionUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutDailyLogInput | WorkoutSessionCreateOrConnectWithoutDailyLogInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutDailyLogInput | WorkoutSessionUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: WorkoutSessionCreateManyDailyLogInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutDailyLogInput | WorkoutSessionUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutDailyLogInput | WorkoutSessionUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type DailyLogCreateNestedOneWithoutMealsInput = {
    create?: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutMealsInput
    connect?: DailyLogWhereUniqueInput
  }

  export type DailyLogUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutMealsInput
    upsert?: DailyLogUpsertWithoutMealsInput
    connect?: DailyLogWhereUniqueInput
    update?: XOR<XOR<DailyLogUpdateToOneWithWhereWithoutMealsInput, DailyLogUpdateWithoutMealsInput>, DailyLogUncheckedUpdateWithoutMealsInput>
  }

  export type DailyLogCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<DailyLogCreateWithoutWorkoutsInput, DailyLogUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutWorkoutsInput
    connect?: DailyLogWhereUniqueInput
  }

  export type ExerciseLogCreateNestedManyWithoutWorkoutSessionInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutSessionInput, ExerciseLogUncheckedCreateWithoutWorkoutSessionInput> | ExerciseLogCreateWithoutWorkoutSessionInput[] | ExerciseLogUncheckedCreateWithoutWorkoutSessionInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutSessionInput | ExerciseLogCreateOrConnectWithoutWorkoutSessionInput[]
    createMany?: ExerciseLogCreateManyWorkoutSessionInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type ExerciseLogUncheckedCreateNestedManyWithoutWorkoutSessionInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutSessionInput, ExerciseLogUncheckedCreateWithoutWorkoutSessionInput> | ExerciseLogCreateWithoutWorkoutSessionInput[] | ExerciseLogUncheckedCreateWithoutWorkoutSessionInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutSessionInput | ExerciseLogCreateOrConnectWithoutWorkoutSessionInput[]
    createMany?: ExerciseLogCreateManyWorkoutSessionInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type DailyLogUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<DailyLogCreateWithoutWorkoutsInput, DailyLogUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutWorkoutsInput
    upsert?: DailyLogUpsertWithoutWorkoutsInput
    connect?: DailyLogWhereUniqueInput
    update?: XOR<XOR<DailyLogUpdateToOneWithWhereWithoutWorkoutsInput, DailyLogUpdateWithoutWorkoutsInput>, DailyLogUncheckedUpdateWithoutWorkoutsInput>
  }

  export type ExerciseLogUpdateManyWithoutWorkoutSessionNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutSessionInput, ExerciseLogUncheckedCreateWithoutWorkoutSessionInput> | ExerciseLogCreateWithoutWorkoutSessionInput[] | ExerciseLogUncheckedCreateWithoutWorkoutSessionInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutSessionInput | ExerciseLogCreateOrConnectWithoutWorkoutSessionInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutWorkoutSessionInput | ExerciseLogUpsertWithWhereUniqueWithoutWorkoutSessionInput[]
    createMany?: ExerciseLogCreateManyWorkoutSessionInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutWorkoutSessionInput | ExerciseLogUpdateWithWhereUniqueWithoutWorkoutSessionInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutWorkoutSessionInput | ExerciseLogUpdateManyWithWhereWithoutWorkoutSessionInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type ExerciseLogUncheckedUpdateManyWithoutWorkoutSessionNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutSessionInput, ExerciseLogUncheckedCreateWithoutWorkoutSessionInput> | ExerciseLogCreateWithoutWorkoutSessionInput[] | ExerciseLogUncheckedCreateWithoutWorkoutSessionInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutSessionInput | ExerciseLogCreateOrConnectWithoutWorkoutSessionInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutWorkoutSessionInput | ExerciseLogUpsertWithWhereUniqueWithoutWorkoutSessionInput[]
    createMany?: ExerciseLogCreateManyWorkoutSessionInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutWorkoutSessionInput | ExerciseLogUpdateWithWhereUniqueWithoutWorkoutSessionInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutWorkoutSessionInput | ExerciseLogUpdateManyWithWhereWithoutWorkoutSessionInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type WorkoutSessionCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutExercisesInput
    connect?: WorkoutSessionWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutLogsInput = {
    create?: XOR<ExerciseCreateWithoutLogsInput, ExerciseUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutLogsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type SetLogCreateNestedManyWithoutExerciseLogInput = {
    create?: XOR<SetLogCreateWithoutExerciseLogInput, SetLogUncheckedCreateWithoutExerciseLogInput> | SetLogCreateWithoutExerciseLogInput[] | SetLogUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutExerciseLogInput | SetLogCreateOrConnectWithoutExerciseLogInput[]
    createMany?: SetLogCreateManyExerciseLogInputEnvelope
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
  }

  export type SetLogUncheckedCreateNestedManyWithoutExerciseLogInput = {
    create?: XOR<SetLogCreateWithoutExerciseLogInput, SetLogUncheckedCreateWithoutExerciseLogInput> | SetLogCreateWithoutExerciseLogInput[] | SetLogUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutExerciseLogInput | SetLogCreateOrConnectWithoutExerciseLogInput[]
    createMany?: SetLogCreateManyExerciseLogInputEnvelope
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
  }

  export type WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutSessionUpsertWithoutExercisesInput
    connect?: WorkoutSessionWhereUniqueInput
    update?: XOR<XOR<WorkoutSessionUpdateToOneWithWhereWithoutExercisesInput, WorkoutSessionUpdateWithoutExercisesInput>, WorkoutSessionUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ExerciseCreateWithoutLogsInput, ExerciseUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutLogsInput
    upsert?: ExerciseUpsertWithoutLogsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutLogsInput, ExerciseUpdateWithoutLogsInput>, ExerciseUncheckedUpdateWithoutLogsInput>
  }

  export type SetLogUpdateManyWithoutExerciseLogNestedInput = {
    create?: XOR<SetLogCreateWithoutExerciseLogInput, SetLogUncheckedCreateWithoutExerciseLogInput> | SetLogCreateWithoutExerciseLogInput[] | SetLogUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutExerciseLogInput | SetLogCreateOrConnectWithoutExerciseLogInput[]
    upsert?: SetLogUpsertWithWhereUniqueWithoutExerciseLogInput | SetLogUpsertWithWhereUniqueWithoutExerciseLogInput[]
    createMany?: SetLogCreateManyExerciseLogInputEnvelope
    set?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    disconnect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    delete?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    update?: SetLogUpdateWithWhereUniqueWithoutExerciseLogInput | SetLogUpdateWithWhereUniqueWithoutExerciseLogInput[]
    updateMany?: SetLogUpdateManyWithWhereWithoutExerciseLogInput | SetLogUpdateManyWithWhereWithoutExerciseLogInput[]
    deleteMany?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
  }

  export type SetLogUncheckedUpdateManyWithoutExerciseLogNestedInput = {
    create?: XOR<SetLogCreateWithoutExerciseLogInput, SetLogUncheckedCreateWithoutExerciseLogInput> | SetLogCreateWithoutExerciseLogInput[] | SetLogUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutExerciseLogInput | SetLogCreateOrConnectWithoutExerciseLogInput[]
    upsert?: SetLogUpsertWithWhereUniqueWithoutExerciseLogInput | SetLogUpsertWithWhereUniqueWithoutExerciseLogInput[]
    createMany?: SetLogCreateManyExerciseLogInputEnvelope
    set?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    disconnect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    delete?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    update?: SetLogUpdateWithWhereUniqueWithoutExerciseLogInput | SetLogUpdateWithWhereUniqueWithoutExerciseLogInput[]
    updateMany?: SetLogUpdateManyWithWhereWithoutExerciseLogInput | SetLogUpdateManyWithWhereWithoutExerciseLogInput[]
    deleteMany?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
  }

  export type ExerciseLogCreateNestedOneWithoutSetsInput = {
    create?: XOR<ExerciseLogCreateWithoutSetsInput, ExerciseLogUncheckedCreateWithoutSetsInput>
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutSetsInput
    connect?: ExerciseLogWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseLogUpdateOneRequiredWithoutSetsNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutSetsInput, ExerciseLogUncheckedCreateWithoutSetsInput>
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutSetsInput
    upsert?: ExerciseLogUpsertWithoutSetsInput
    connect?: ExerciseLogWhereUniqueInput
    update?: XOR<XOR<ExerciseLogUpdateToOneWithWhereWithoutSetsInput, ExerciseLogUpdateWithoutSetsInput>, ExerciseLogUncheckedUpdateWithoutSetsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgramCreateWithoutUserInput = {
    id?: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
    workouts?: WorkoutTemplateCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
    workouts?: WorkoutTemplateUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutUserInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput>
  }

  export type ProgramCreateManyUserInputEnvelope = {
    data: ProgramCreateManyUserInput | ProgramCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    meals?: MealCreateNestedManyWithoutDailyLogInput
    workouts?: WorkoutSessionCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    meals?: MealUncheckedCreateNestedManyWithoutDailyLogInput
    workouts?: WorkoutSessionUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogCreateOrConnectWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogCreateManyUserInputEnvelope = {
    data: DailyLogCreateManyUserInput | DailyLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ProgramUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutUserInput, ProgramUncheckedUpdateWithoutUserInput>
    create: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutUserInput, ProgramUncheckedUpdateWithoutUserInput>
  }

  export type ProgramUpdateManyWithWhereWithoutUserInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    id?: StringFilter<"Program"> | string
    userId?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    isActive?: BoolFilter<"Program"> | boolean
    targetCalories?: IntFilter<"Program"> | number
    targetProtein?: IntFilter<"Program"> | number
    targetCarbs?: IntFilter<"Program"> | number
    targetFat?: IntFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
  }

  export type DailyLogUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutUserInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyLogScalarWhereInput = {
    AND?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    OR?: DailyLogScalarWhereInput[]
    NOT?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    id?: StringFilter<"DailyLog"> | string
    userId?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    calories?: IntFilter<"DailyLog"> | number
    protein?: IntFilter<"DailyLog"> | number
    carbs?: IntFilter<"DailyLog"> | number
    fat?: IntFilter<"DailyLog"> | number
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    programs?: ProgramCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    programs?: ProgramUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    programs?: ProgramCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    programs?: ProgramUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseLogCreateWithoutExerciseInput = {
    id?: string
    workoutSession: WorkoutSessionCreateNestedOneWithoutExercisesInput
    sets?: SetLogCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogUncheckedCreateWithoutExerciseInput = {
    id?: string
    workoutSessionId: string
    sets?: SetLogUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogCreateOrConnectWithoutExerciseInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseLogCreateManyExerciseInputEnvelope = {
    data: ExerciseLogCreateManyExerciseInput | ExerciseLogCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type PlannedExerciseCreateWithoutExerciseInput = {
    id?: string
    sets: number
    reps: string
    order: number
    workoutTemplate: WorkoutTemplateCreateNestedOneWithoutExercisesInput
  }

  export type PlannedExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    workoutTemplateId: string
    sets: number
    reps: string
    order: number
  }

  export type PlannedExerciseCreateOrConnectWithoutExerciseInput = {
    where: PlannedExerciseWhereUniqueInput
    create: XOR<PlannedExerciseCreateWithoutExerciseInput, PlannedExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type PlannedExerciseCreateManyExerciseInputEnvelope = {
    data: PlannedExerciseCreateManyExerciseInput | PlannedExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseLogWhereUniqueInput
    update: XOR<ExerciseLogUpdateWithoutExerciseInput, ExerciseLogUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseLogWhereUniqueInput
    data: XOR<ExerciseLogUpdateWithoutExerciseInput, ExerciseLogUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseLogUpdateManyWithWhereWithoutExerciseInput = {
    where: ExerciseLogScalarWhereInput
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseLogScalarWhereInput = {
    AND?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
    OR?: ExerciseLogScalarWhereInput[]
    NOT?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
    id?: StringFilter<"ExerciseLog"> | string
    workoutSessionId?: StringFilter<"ExerciseLog"> | string
    exerciseId?: StringFilter<"ExerciseLog"> | string
  }

  export type PlannedExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: PlannedExerciseWhereUniqueInput
    update: XOR<PlannedExerciseUpdateWithoutExerciseInput, PlannedExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<PlannedExerciseCreateWithoutExerciseInput, PlannedExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type PlannedExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: PlannedExerciseWhereUniqueInput
    data: XOR<PlannedExerciseUpdateWithoutExerciseInput, PlannedExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type PlannedExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: PlannedExerciseScalarWhereInput
    data: XOR<PlannedExerciseUpdateManyMutationInput, PlannedExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type PlannedExerciseScalarWhereInput = {
    AND?: PlannedExerciseScalarWhereInput | PlannedExerciseScalarWhereInput[]
    OR?: PlannedExerciseScalarWhereInput[]
    NOT?: PlannedExerciseScalarWhereInput | PlannedExerciseScalarWhereInput[]
    id?: StringFilter<"PlannedExercise"> | string
    workoutTemplateId?: StringFilter<"PlannedExercise"> | string
    exerciseId?: StringFilter<"PlannedExercise"> | string
    sets?: IntFilter<"PlannedExercise"> | number
    reps?: StringFilter<"PlannedExercise"> | string
    order?: IntFilter<"PlannedExercise"> | number
  }

  export type UserCreateWithoutProgramsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgramsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgramsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
  }

  export type WorkoutTemplateCreateWithoutProgramInput = {
    id?: string
    name: string
    dayOfWeek?: number | null
    exercises?: PlannedExerciseCreateNestedManyWithoutWorkoutTemplateInput
  }

  export type WorkoutTemplateUncheckedCreateWithoutProgramInput = {
    id?: string
    name: string
    dayOfWeek?: number | null
    exercises?: PlannedExerciseUncheckedCreateNestedManyWithoutWorkoutTemplateInput
  }

  export type WorkoutTemplateCreateOrConnectWithoutProgramInput = {
    where: WorkoutTemplateWhereUniqueInput
    create: XOR<WorkoutTemplateCreateWithoutProgramInput, WorkoutTemplateUncheckedCreateWithoutProgramInput>
  }

  export type WorkoutTemplateCreateManyProgramInputEnvelope = {
    data: WorkoutTemplateCreateManyProgramInput | WorkoutTemplateCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProgramsInput = {
    update: XOR<UserUpdateWithoutProgramsInput, UserUncheckedUpdateWithoutProgramsInput>
    create: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgramsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgramsInput, UserUncheckedUpdateWithoutProgramsInput>
  }

  export type UserUpdateWithoutProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutTemplateUpsertWithWhereUniqueWithoutProgramInput = {
    where: WorkoutTemplateWhereUniqueInput
    update: XOR<WorkoutTemplateUpdateWithoutProgramInput, WorkoutTemplateUncheckedUpdateWithoutProgramInput>
    create: XOR<WorkoutTemplateCreateWithoutProgramInput, WorkoutTemplateUncheckedCreateWithoutProgramInput>
  }

  export type WorkoutTemplateUpdateWithWhereUniqueWithoutProgramInput = {
    where: WorkoutTemplateWhereUniqueInput
    data: XOR<WorkoutTemplateUpdateWithoutProgramInput, WorkoutTemplateUncheckedUpdateWithoutProgramInput>
  }

  export type WorkoutTemplateUpdateManyWithWhereWithoutProgramInput = {
    where: WorkoutTemplateScalarWhereInput
    data: XOR<WorkoutTemplateUpdateManyMutationInput, WorkoutTemplateUncheckedUpdateManyWithoutProgramInput>
  }

  export type WorkoutTemplateScalarWhereInput = {
    AND?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
    OR?: WorkoutTemplateScalarWhereInput[]
    NOT?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
    id?: StringFilter<"WorkoutTemplate"> | string
    programId?: StringFilter<"WorkoutTemplate"> | string
    name?: StringFilter<"WorkoutTemplate"> | string
    dayOfWeek?: IntNullableFilter<"WorkoutTemplate"> | number | null
  }

  export type ProgramCreateWithoutWorkoutsInput = {
    id?: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProgramsInput
  }

  export type ProgramUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
  }

  export type ProgramCreateOrConnectWithoutWorkoutsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutWorkoutsInput, ProgramUncheckedCreateWithoutWorkoutsInput>
  }

  export type PlannedExerciseCreateWithoutWorkoutTemplateInput = {
    id?: string
    sets: number
    reps: string
    order: number
    exercise: ExerciseCreateNestedOneWithoutPlannedInInput
  }

  export type PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput = {
    id?: string
    exerciseId: string
    sets: number
    reps: string
    order: number
  }

  export type PlannedExerciseCreateOrConnectWithoutWorkoutTemplateInput = {
    where: PlannedExerciseWhereUniqueInput
    create: XOR<PlannedExerciseCreateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput>
  }

  export type PlannedExerciseCreateManyWorkoutTemplateInputEnvelope = {
    data: PlannedExerciseCreateManyWorkoutTemplateInput | PlannedExerciseCreateManyWorkoutTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ProgramUpsertWithoutWorkoutsInput = {
    update: XOR<ProgramUpdateWithoutWorkoutsInput, ProgramUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<ProgramCreateWithoutWorkoutsInput, ProgramUncheckedCreateWithoutWorkoutsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutWorkoutsInput, ProgramUncheckedUpdateWithoutWorkoutsInput>
  }

  export type ProgramUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgramsNestedInput
  }

  export type ProgramUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedExerciseUpsertWithWhereUniqueWithoutWorkoutTemplateInput = {
    where: PlannedExerciseWhereUniqueInput
    update: XOR<PlannedExerciseUpdateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedUpdateWithoutWorkoutTemplateInput>
    create: XOR<PlannedExerciseCreateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedCreateWithoutWorkoutTemplateInput>
  }

  export type PlannedExerciseUpdateWithWhereUniqueWithoutWorkoutTemplateInput = {
    where: PlannedExerciseWhereUniqueInput
    data: XOR<PlannedExerciseUpdateWithoutWorkoutTemplateInput, PlannedExerciseUncheckedUpdateWithoutWorkoutTemplateInput>
  }

  export type PlannedExerciseUpdateManyWithWhereWithoutWorkoutTemplateInput = {
    where: PlannedExerciseScalarWhereInput
    data: XOR<PlannedExerciseUpdateManyMutationInput, PlannedExerciseUncheckedUpdateManyWithoutWorkoutTemplateInput>
  }

  export type WorkoutTemplateCreateWithoutExercisesInput = {
    id?: string
    name: string
    dayOfWeek?: number | null
    program: ProgramCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutTemplateUncheckedCreateWithoutExercisesInput = {
    id?: string
    programId: string
    name: string
    dayOfWeek?: number | null
  }

  export type WorkoutTemplateCreateOrConnectWithoutExercisesInput = {
    where: WorkoutTemplateWhereUniqueInput
    create: XOR<WorkoutTemplateCreateWithoutExercisesInput, WorkoutTemplateUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutPlannedInInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
    logs?: ExerciseLogCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutPlannedInInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
    logs?: ExerciseLogUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutPlannedInInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutPlannedInInput, ExerciseUncheckedCreateWithoutPlannedInInput>
  }

  export type WorkoutTemplateUpsertWithoutExercisesInput = {
    update: XOR<WorkoutTemplateUpdateWithoutExercisesInput, WorkoutTemplateUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutTemplateCreateWithoutExercisesInput, WorkoutTemplateUncheckedCreateWithoutExercisesInput>
    where?: WorkoutTemplateWhereInput
  }

  export type WorkoutTemplateUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutTemplateWhereInput
    data: XOR<WorkoutTemplateUpdateWithoutExercisesInput, WorkoutTemplateUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutTemplateUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    program?: ProgramUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseUpsertWithoutPlannedInInput = {
    update: XOR<ExerciseUpdateWithoutPlannedInInput, ExerciseUncheckedUpdateWithoutPlannedInInput>
    create: XOR<ExerciseCreateWithoutPlannedInInput, ExerciseUncheckedCreateWithoutPlannedInInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutPlannedInInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutPlannedInInput, ExerciseUncheckedUpdateWithoutPlannedInInput>
  }

  export type ExerciseUpdateWithoutPlannedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    logs?: ExerciseLogUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutPlannedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    logs?: ExerciseLogUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutDailyLogsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    programs?: ProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyLogsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: string | null
    goal?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
  }

  export type MealCreateWithoutDailyLogInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type MealUncheckedCreateWithoutDailyLogInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type MealCreateOrConnectWithoutDailyLogInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput>
  }

  export type MealCreateManyDailyLogInputEnvelope = {
    data: MealCreateManyDailyLogInput | MealCreateManyDailyLogInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutSessionCreateWithoutDailyLogInput = {
    id?: string
    name: string
    completedAt?: Date | string
    exercises?: ExerciseLogCreateNestedManyWithoutWorkoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateWithoutDailyLogInput = {
    id?: string
    name: string
    completedAt?: Date | string
    exercises?: ExerciseLogUncheckedCreateNestedManyWithoutWorkoutSessionInput
  }

  export type WorkoutSessionCreateOrConnectWithoutDailyLogInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutDailyLogInput, WorkoutSessionUncheckedCreateWithoutDailyLogInput>
  }

  export type WorkoutSessionCreateManyDailyLogInputEnvelope = {
    data: WorkoutSessionCreateManyDailyLogInput | WorkoutSessionCreateManyDailyLogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDailyLogsInput = {
    update: XOR<UserUpdateWithoutDailyLogsInput, UserUncheckedUpdateWithoutDailyLogsInput>
    create: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyLogsInput, UserUncheckedUpdateWithoutDailyLogsInput>
  }

  export type UserUpdateWithoutDailyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    programs?: ProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealUpsertWithWhereUniqueWithoutDailyLogInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutDailyLogInput, MealUncheckedUpdateWithoutDailyLogInput>
    create: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput>
  }

  export type MealUpdateWithWhereUniqueWithoutDailyLogInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutDailyLogInput, MealUncheckedUpdateWithoutDailyLogInput>
  }

  export type MealUpdateManyWithWhereWithoutDailyLogInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutDailyLogInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    dailyLogId?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    calories?: IntFilter<"Meal"> | number
    protein?: IntFilter<"Meal"> | number
    carbs?: IntFilter<"Meal"> | number
    fat?: IntFilter<"Meal"> | number
  }

  export type WorkoutSessionUpsertWithWhereUniqueWithoutDailyLogInput = {
    where: WorkoutSessionWhereUniqueInput
    update: XOR<WorkoutSessionUpdateWithoutDailyLogInput, WorkoutSessionUncheckedUpdateWithoutDailyLogInput>
    create: XOR<WorkoutSessionCreateWithoutDailyLogInput, WorkoutSessionUncheckedCreateWithoutDailyLogInput>
  }

  export type WorkoutSessionUpdateWithWhereUniqueWithoutDailyLogInput = {
    where: WorkoutSessionWhereUniqueInput
    data: XOR<WorkoutSessionUpdateWithoutDailyLogInput, WorkoutSessionUncheckedUpdateWithoutDailyLogInput>
  }

  export type WorkoutSessionUpdateManyWithWhereWithoutDailyLogInput = {
    where: WorkoutSessionScalarWhereInput
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyWithoutDailyLogInput>
  }

  export type WorkoutSessionScalarWhereInput = {
    AND?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
    OR?: WorkoutSessionScalarWhereInput[]
    NOT?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
    id?: StringFilter<"WorkoutSession"> | string
    dailyLogId?: StringFilter<"WorkoutSession"> | string
    name?: StringFilter<"WorkoutSession"> | string
    completedAt?: DateTimeFilter<"WorkoutSession"> | Date | string
  }

  export type DailyLogCreateWithoutMealsInput = {
    id?: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    user: UserCreateNestedOneWithoutDailyLogsInput
    workouts?: WorkoutSessionCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateWithoutMealsInput = {
    id?: string
    userId: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    workouts?: WorkoutSessionUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogCreateOrConnectWithoutMealsInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
  }

  export type DailyLogUpsertWithoutMealsInput = {
    update: XOR<DailyLogUpdateWithoutMealsInput, DailyLogUncheckedUpdateWithoutMealsInput>
    create: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
    where?: DailyLogWhereInput
  }

  export type DailyLogUpdateToOneWithWhereWithoutMealsInput = {
    where?: DailyLogWhereInput
    data: XOR<DailyLogUpdateWithoutMealsInput, DailyLogUncheckedUpdateWithoutMealsInput>
  }

  export type DailyLogUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
    workouts?: WorkoutSessionUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    workouts?: WorkoutSessionUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogCreateWithoutWorkoutsInput = {
    id?: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    user: UserCreateNestedOneWithoutDailyLogsInput
    meals?: MealCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    userId: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    meals?: MealUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogCreateOrConnectWithoutWorkoutsInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutWorkoutsInput, DailyLogUncheckedCreateWithoutWorkoutsInput>
  }

  export type ExerciseLogCreateWithoutWorkoutSessionInput = {
    id?: string
    exercise: ExerciseCreateNestedOneWithoutLogsInput
    sets?: SetLogCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogUncheckedCreateWithoutWorkoutSessionInput = {
    id?: string
    exerciseId: string
    sets?: SetLogUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogCreateOrConnectWithoutWorkoutSessionInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutWorkoutSessionInput, ExerciseLogUncheckedCreateWithoutWorkoutSessionInput>
  }

  export type ExerciseLogCreateManyWorkoutSessionInputEnvelope = {
    data: ExerciseLogCreateManyWorkoutSessionInput | ExerciseLogCreateManyWorkoutSessionInput[]
    skipDuplicates?: boolean
  }

  export type DailyLogUpsertWithoutWorkoutsInput = {
    update: XOR<DailyLogUpdateWithoutWorkoutsInput, DailyLogUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<DailyLogCreateWithoutWorkoutsInput, DailyLogUncheckedCreateWithoutWorkoutsInput>
    where?: DailyLogWhereInput
  }

  export type DailyLogUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: DailyLogWhereInput
    data: XOR<DailyLogUpdateWithoutWorkoutsInput, DailyLogUncheckedUpdateWithoutWorkoutsInput>
  }

  export type DailyLogUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
    meals?: MealUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type ExerciseLogUpsertWithWhereUniqueWithoutWorkoutSessionInput = {
    where: ExerciseLogWhereUniqueInput
    update: XOR<ExerciseLogUpdateWithoutWorkoutSessionInput, ExerciseLogUncheckedUpdateWithoutWorkoutSessionInput>
    create: XOR<ExerciseLogCreateWithoutWorkoutSessionInput, ExerciseLogUncheckedCreateWithoutWorkoutSessionInput>
  }

  export type ExerciseLogUpdateWithWhereUniqueWithoutWorkoutSessionInput = {
    where: ExerciseLogWhereUniqueInput
    data: XOR<ExerciseLogUpdateWithoutWorkoutSessionInput, ExerciseLogUncheckedUpdateWithoutWorkoutSessionInput>
  }

  export type ExerciseLogUpdateManyWithWhereWithoutWorkoutSessionInput = {
    where: ExerciseLogScalarWhereInput
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyWithoutWorkoutSessionInput>
  }

  export type WorkoutSessionCreateWithoutExercisesInput = {
    id?: string
    name: string
    completedAt?: Date | string
    dailyLog: DailyLogCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutSessionUncheckedCreateWithoutExercisesInput = {
    id?: string
    dailyLogId: string
    name: string
    completedAt?: Date | string
  }

  export type WorkoutSessionCreateOrConnectWithoutExercisesInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutLogsInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
    plannedIn?: PlannedExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    muscleGroup: string
    videoUrl?: string | null
    instructions?: string | null
    isSystem?: boolean
    plannedIn?: PlannedExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutLogsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutLogsInput, ExerciseUncheckedCreateWithoutLogsInput>
  }

  export type SetLogCreateWithoutExerciseLogInput = {
    id?: string
    weight: number
    reps: number
  }

  export type SetLogUncheckedCreateWithoutExerciseLogInput = {
    id?: string
    weight: number
    reps: number
  }

  export type SetLogCreateOrConnectWithoutExerciseLogInput = {
    where: SetLogWhereUniqueInput
    create: XOR<SetLogCreateWithoutExerciseLogInput, SetLogUncheckedCreateWithoutExerciseLogInput>
  }

  export type SetLogCreateManyExerciseLogInputEnvelope = {
    data: SetLogCreateManyExerciseLogInput | SetLogCreateManyExerciseLogInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutSessionUpsertWithoutExercisesInput = {
    update: XOR<WorkoutSessionUpdateWithoutExercisesInput, WorkoutSessionUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
    where?: WorkoutSessionWhereInput
  }

  export type WorkoutSessionUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutSessionWhereInput
    data: XOR<WorkoutSessionUpdateWithoutExercisesInput, WorkoutSessionUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutSessionUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyLog?: DailyLogUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutLogsInput = {
    update: XOR<ExerciseUpdateWithoutLogsInput, ExerciseUncheckedUpdateWithoutLogsInput>
    create: XOR<ExerciseCreateWithoutLogsInput, ExerciseUncheckedCreateWithoutLogsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutLogsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutLogsInput, ExerciseUncheckedUpdateWithoutLogsInput>
  }

  export type ExerciseUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    plannedIn?: PlannedExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    plannedIn?: PlannedExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type SetLogUpsertWithWhereUniqueWithoutExerciseLogInput = {
    where: SetLogWhereUniqueInput
    update: XOR<SetLogUpdateWithoutExerciseLogInput, SetLogUncheckedUpdateWithoutExerciseLogInput>
    create: XOR<SetLogCreateWithoutExerciseLogInput, SetLogUncheckedCreateWithoutExerciseLogInput>
  }

  export type SetLogUpdateWithWhereUniqueWithoutExerciseLogInput = {
    where: SetLogWhereUniqueInput
    data: XOR<SetLogUpdateWithoutExerciseLogInput, SetLogUncheckedUpdateWithoutExerciseLogInput>
  }

  export type SetLogUpdateManyWithWhereWithoutExerciseLogInput = {
    where: SetLogScalarWhereInput
    data: XOR<SetLogUpdateManyMutationInput, SetLogUncheckedUpdateManyWithoutExerciseLogInput>
  }

  export type SetLogScalarWhereInput = {
    AND?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
    OR?: SetLogScalarWhereInput[]
    NOT?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
    id?: StringFilter<"SetLog"> | string
    exerciseLogId?: StringFilter<"SetLog"> | string
    weight?: FloatFilter<"SetLog"> | number
    reps?: IntFilter<"SetLog"> | number
  }

  export type ExerciseLogCreateWithoutSetsInput = {
    id?: string
    workoutSession: WorkoutSessionCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutLogsInput
  }

  export type ExerciseLogUncheckedCreateWithoutSetsInput = {
    id?: string
    workoutSessionId: string
    exerciseId: string
  }

  export type ExerciseLogCreateOrConnectWithoutSetsInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutSetsInput, ExerciseLogUncheckedCreateWithoutSetsInput>
  }

  export type ExerciseLogUpsertWithoutSetsInput = {
    update: XOR<ExerciseLogUpdateWithoutSetsInput, ExerciseLogUncheckedUpdateWithoutSetsInput>
    create: XOR<ExerciseLogCreateWithoutSetsInput, ExerciseLogUncheckedCreateWithoutSetsInput>
    where?: ExerciseLogWhereInput
  }

  export type ExerciseLogUpdateToOneWithWhereWithoutSetsInput = {
    where?: ExerciseLogWhereInput
    data: XOR<ExerciseLogUpdateWithoutSetsInput, ExerciseLogUncheckedUpdateWithoutSetsInput>
  }

  export type ExerciseLogUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSession?: WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProgramCreateManyUserInput = {
    id?: string
    name: string
    isActive?: boolean
    targetCalories: number
    targetProtein: number
    targetCarbs: number
    targetFat: number
    createdAt?: Date | string
  }

  export type DailyLogCreateManyUserInput = {
    id?: string
    date: Date | string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutTemplateUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutTemplateUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    targetCalories?: IntFieldUpdateOperationsInput | number
    targetProtein?: IntFieldUpdateOperationsInput | number
    targetCarbs?: IntFieldUpdateOperationsInput | number
    targetFat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    meals?: MealUpdateManyWithoutDailyLogNestedInput
    workouts?: WorkoutSessionUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutDailyLogNestedInput
    workouts?: WorkoutSessionUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseLogCreateManyExerciseInput = {
    id?: string
    workoutSessionId: string
  }

  export type PlannedExerciseCreateManyExerciseInput = {
    id?: string
    workoutTemplateId: string
    sets: number
    reps: string
    order: number
  }

  export type ExerciseLogUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSession?: WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput
    sets?: SetLogUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSessionId?: StringFieldUpdateOperationsInput | string
    sets?: SetLogUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type PlannedExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    workoutTemplate?: WorkoutTemplateUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type PlannedExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutTemplateId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PlannedExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutTemplateId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutTemplateCreateManyProgramInput = {
    id?: string
    name: string
    dayOfWeek?: number | null
  }

  export type WorkoutTemplateUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    exercises?: PlannedExerciseUpdateManyWithoutWorkoutTemplateNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    exercises?: PlannedExerciseUncheckedUpdateManyWithoutWorkoutTemplateNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlannedExerciseCreateManyWorkoutTemplateInput = {
    id?: string
    exerciseId: string
    sets: number
    reps: string
    order: number
  }

  export type PlannedExerciseUpdateWithoutWorkoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutPlannedInNestedInput
  }

  export type PlannedExerciseUncheckedUpdateWithoutWorkoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PlannedExerciseUncheckedUpdateManyWithoutWorkoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MealCreateManyDailyLogInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type WorkoutSessionCreateManyDailyLogInput = {
    id?: string
    name: string
    completedAt?: Date | string
  }

  export type MealUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateManyWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutSessionUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseLogUpdateManyWithoutWorkoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseLogUncheckedUpdateManyWithoutWorkoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseLogCreateManyWorkoutSessionInput = {
    id?: string
    exerciseId: string
  }

  export type ExerciseLogUpdateWithoutWorkoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise?: ExerciseUpdateOneRequiredWithoutLogsNestedInput
    sets?: SetLogUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutWorkoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: SetLogUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateManyWithoutWorkoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type SetLogCreateManyExerciseLogInput = {
    id?: string
    weight: number
    reps: number
  }

  export type SetLogUpdateWithoutExerciseLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogUncheckedUpdateWithoutExerciseLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogUncheckedUpdateManyWithoutExerciseLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
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