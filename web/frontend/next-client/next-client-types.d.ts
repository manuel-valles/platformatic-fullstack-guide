export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type MoviesApiGetMoviesRequest = {
  /**
   * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
   */
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.ilike'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
}

/**
 * Default Response
 */
export type MoviesApiGetMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type MoviesApiGetMoviesResponses =
  MoviesApiGetMoviesResponseOK

export type MoviesApiCreateMovieRequest = {
  'id'?: number;
  'title': string;
}

/**
 * A Movie
 */
export type MoviesApiCreateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type MoviesApiCreateMovieResponses =
  MoviesApiCreateMovieResponseOK

export type MoviesApiUpdateMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.ilike'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'title': string;
}

/**
 * Default Response
 */
export type MoviesApiUpdateMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type MoviesApiUpdateMoviesResponses =
  MoviesApiUpdateMoviesResponseOK

export type MoviesApiGetMovieByIdRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

/**
 * A Movie
 */
export type MoviesApiGetMovieByIdResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type MoviesApiGetMovieByIdResponses =
  MoviesApiGetMovieByIdResponseOK

export type MoviesApiUpdateMovieRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
  'title': string;
}

/**
 * A Movie
 */
export type MoviesApiUpdateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type MoviesApiUpdateMovieResponses =
  MoviesApiUpdateMovieResponseOK

export type MoviesApiDeleteMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

/**
 * A Movie
 */
export type MoviesApiDeleteMoviesResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type MoviesApiDeleteMoviesResponses =
  MoviesApiDeleteMoviesResponseOK

export type MoviesApiGetQuotesForMovieRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'likes' | 'movieId' | 'quote' | 'saidBy'>;
  'id': number;
}

/**
 * Default Response
 */
export type MoviesApiGetQuotesForMovieResponseOK = Array<{ 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }>
export type MoviesApiGetQuotesForMovieResponses =
  MoviesApiGetQuotesForMovieResponseOK

export type MoviesApiGetQuotesRequest = {
  /**
   * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
   */
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'createdAt' | 'id' | 'likes' | 'movieId' | 'quote' | 'saidBy'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.ilike'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.likes.eq'?: number;
  'where.likes.neq'?: number;
  'where.likes.gt'?: number;
  'where.likes.gte'?: number;
  'where.likes.lt'?: number;
  'where.likes.lte'?: number;
  'where.likes.like'?: number;
  'where.likes.ilike'?: number;
  'where.likes.in'?: string;
  'where.likes.nin'?: string;
  'where.likes.contains'?: string;
  'where.likes.contained'?: string;
  'where.likes.overlaps'?: string;
  'where.movieId.eq'?: number;
  'where.movieId.neq'?: number;
  'where.movieId.gt'?: number;
  'where.movieId.gte'?: number;
  'where.movieId.lt'?: number;
  'where.movieId.lte'?: number;
  'where.movieId.like'?: number;
  'where.movieId.ilike'?: number;
  'where.movieId.in'?: string;
  'where.movieId.nin'?: string;
  'where.movieId.contains'?: string;
  'where.movieId.contained'?: string;
  'where.movieId.overlaps'?: string;
  'where.quote.eq'?: string;
  'where.quote.neq'?: string;
  'where.quote.gt'?: string;
  'where.quote.gte'?: string;
  'where.quote.lt'?: string;
  'where.quote.lte'?: string;
  'where.quote.like'?: string;
  'where.quote.ilike'?: string;
  'where.quote.in'?: string;
  'where.quote.nin'?: string;
  'where.quote.contains'?: string;
  'where.quote.contained'?: string;
  'where.quote.overlaps'?: string;
  'where.saidBy.eq'?: string;
  'where.saidBy.neq'?: string;
  'where.saidBy.gt'?: string;
  'where.saidBy.gte'?: string;
  'where.saidBy.lt'?: string;
  'where.saidBy.lte'?: string;
  'where.saidBy.like'?: string;
  'where.saidBy.ilike'?: string;
  'where.saidBy.in'?: string;
  'where.saidBy.nin'?: string;
  'where.saidBy.contains'?: string;
  'where.saidBy.contained'?: string;
  'where.saidBy.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.createdAt'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.likes'?: 'asc' | 'desc';
  'orderby.movieId'?: 'asc' | 'desc';
  'orderby.quote'?: 'asc' | 'desc';
  'orderby.saidBy'?: 'asc' | 'desc';
}

/**
 * Default Response
 */
export type MoviesApiGetQuotesResponseOK = Array<{ 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }>
export type MoviesApiGetQuotesResponses =
  MoviesApiGetQuotesResponseOK

export type MoviesApiCreateQuoteRequest = {
  'id'?: number;
  'quote': string;
  'likes'?: number | null;
  'saidBy': string;
  'createdAt'?: string | null;
  'movieId'?: number | null;
}

/**
 * A Quote
 */
export type MoviesApiCreateQuoteResponseOK = { 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }
export type MoviesApiCreateQuoteResponses =
  MoviesApiCreateQuoteResponseOK

export type MoviesApiUpdateQuotesRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'likes' | 'movieId' | 'quote' | 'saidBy'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.ilike'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.likes.eq'?: number;
  'where.likes.neq'?: number;
  'where.likes.gt'?: number;
  'where.likes.gte'?: number;
  'where.likes.lt'?: number;
  'where.likes.lte'?: number;
  'where.likes.like'?: number;
  'where.likes.ilike'?: number;
  'where.likes.in'?: string;
  'where.likes.nin'?: string;
  'where.likes.contains'?: string;
  'where.likes.contained'?: string;
  'where.likes.overlaps'?: string;
  'where.movieId.eq'?: number;
  'where.movieId.neq'?: number;
  'where.movieId.gt'?: number;
  'where.movieId.gte'?: number;
  'where.movieId.lt'?: number;
  'where.movieId.lte'?: number;
  'where.movieId.like'?: number;
  'where.movieId.ilike'?: number;
  'where.movieId.in'?: string;
  'where.movieId.nin'?: string;
  'where.movieId.contains'?: string;
  'where.movieId.contained'?: string;
  'where.movieId.overlaps'?: string;
  'where.quote.eq'?: string;
  'where.quote.neq'?: string;
  'where.quote.gt'?: string;
  'where.quote.gte'?: string;
  'where.quote.lt'?: string;
  'where.quote.lte'?: string;
  'where.quote.like'?: string;
  'where.quote.ilike'?: string;
  'where.quote.in'?: string;
  'where.quote.nin'?: string;
  'where.quote.contains'?: string;
  'where.quote.contained'?: string;
  'where.quote.overlaps'?: string;
  'where.saidBy.eq'?: string;
  'where.saidBy.neq'?: string;
  'where.saidBy.gt'?: string;
  'where.saidBy.gte'?: string;
  'where.saidBy.lt'?: string;
  'where.saidBy.lte'?: string;
  'where.saidBy.like'?: string;
  'where.saidBy.ilike'?: string;
  'where.saidBy.in'?: string;
  'where.saidBy.nin'?: string;
  'where.saidBy.contains'?: string;
  'where.saidBy.contained'?: string;
  'where.saidBy.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'quote': string;
  'likes'?: number | null;
  'saidBy': string;
  'createdAt'?: string | null;
  'movieId'?: number | null;
}

/**
 * Default Response
 */
export type MoviesApiUpdateQuotesResponseOK = Array<{ 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }>
export type MoviesApiUpdateQuotesResponses =
  MoviesApiUpdateQuotesResponseOK

export type MoviesApiGetQuoteByIdRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'likes' | 'movieId' | 'quote' | 'saidBy'>;
  'id': number;
}

/**
 * A Quote
 */
export type MoviesApiGetQuoteByIdResponseOK = { 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }
export type MoviesApiGetQuoteByIdResponses =
  MoviesApiGetQuoteByIdResponseOK

export type MoviesApiUpdateQuoteRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'likes' | 'movieId' | 'quote' | 'saidBy'>;
  'id': number;
  'quote': string;
  'likes'?: number | null;
  'saidBy': string;
  'createdAt'?: string | null;
  'movieId'?: number | null;
}

/**
 * A Quote
 */
export type MoviesApiUpdateQuoteResponseOK = { 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }
export type MoviesApiUpdateQuoteResponses =
  MoviesApiUpdateQuoteResponseOK

export type MoviesApiDeleteQuotesRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'likes' | 'movieId' | 'quote' | 'saidBy'>;
  'id': number;
}

/**
 * A Quote
 */
export type MoviesApiDeleteQuotesResponseOK = { 'id'?: number | null; 'quote'?: string | null; 'likes'?: number | null; 'saidBy'?: string | null; 'createdAt'?: string | null; 'movieId'?: number | null }
export type MoviesApiDeleteQuotesResponses =
  MoviesApiDeleteQuotesResponseOK

export type MoviesApiGetMovieForQuoteRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

/**
 * A Movie
 */
export type MoviesApiGetMovieForQuoteResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type MoviesApiGetMovieForQuoteResponses =
  MoviesApiGetMovieForQuoteResponseOK

export type PostQuotesIdLikeRequest = {
  'id': number | null;
}

export type PostQuotesIdLikeResponseOK = unknown
export type PostQuotesIdLikeResponses =
  FullResponse<PostQuotesIdLikeResponseOK, 200>

export type GetExampleRequest = {
  
}

export type GetExampleResponseOK = unknown
export type GetExampleResponses =
  FullResponse<GetExampleResponseOK, 200>



export interface NextClient {
  setBaseUrl(newUrl: string): void;
  setDefaultHeaders(headers: object): void;
  setDefaultFetchParams(fetchParams: RequestInit): void;
  /**
   * Get movies.
   *
   * Fetch movies from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiGetMovies(req: MoviesApiGetMoviesRequest): Promise<MoviesApiGetMoviesResponses>;
  /**
   * Create movie.
   *
   * Add new movie to the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiCreateMovie(req: MoviesApiCreateMovieRequest): Promise<MoviesApiCreateMovieResponses>;
  /**
   * Update movies.
   *
   * Update one or more movies in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiUpdateMovies(req: MoviesApiUpdateMoviesRequest): Promise<MoviesApiUpdateMoviesResponses>;
  /**
   * Get Movie by id.
   *
   * Fetch Movie using its id from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiGetMovieById(req: MoviesApiGetMovieByIdRequest): Promise<MoviesApiGetMovieByIdResponses>;
  /**
   * Update movie.
   *
   * Update movie in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiUpdateMovie(req: MoviesApiUpdateMovieRequest): Promise<MoviesApiUpdateMovieResponses>;
  /**
   * Delete movies.
   *
   * Delete one or more movies from the Database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiDeleteMovies(req: MoviesApiDeleteMoviesRequest): Promise<MoviesApiDeleteMoviesResponses>;
  /**
   * Get quotes for movie.
   *
   * Fetch all the quotes for movie from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiGetQuotesForMovie(req: MoviesApiGetQuotesForMovieRequest): Promise<MoviesApiGetQuotesForMovieResponses>;
  /**
   * Get quotes.
   *
   * Fetch quotes from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiGetQuotes(req: MoviesApiGetQuotesRequest): Promise<MoviesApiGetQuotesResponses>;
  /**
   * Create quote.
   *
   * Add new quote to the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiCreateQuote(req: MoviesApiCreateQuoteRequest): Promise<MoviesApiCreateQuoteResponses>;
  /**
   * Update quotes.
   *
   * Update one or more quotes in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiUpdateQuotes(req: MoviesApiUpdateQuotesRequest): Promise<MoviesApiUpdateQuotesResponses>;
  /**
   * Get Quote by id.
   *
   * Fetch Quote using its id from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiGetQuoteById(req: MoviesApiGetQuoteByIdRequest): Promise<MoviesApiGetQuoteByIdResponses>;
  /**
   * Update quote.
   *
   * Update quote in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiUpdateQuote(req: MoviesApiUpdateQuoteRequest): Promise<MoviesApiUpdateQuoteResponses>;
  /**
   * Delete quotes.
   *
   * Delete one or more quotes from the Database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiDeleteQuotes(req: MoviesApiDeleteQuotesRequest): Promise<MoviesApiDeleteQuotesResponses>;
  /**
   * Get movie for quote.
   *
   * Fetch the movie for quote from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  moviesApiGetMovieForQuote(req: MoviesApiGetMovieForQuoteRequest): Promise<MoviesApiGetMovieForQuoteResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  postQuotesIdLike(req: PostQuotesIdLikeRequest): Promise<PostQuotesIdLikeResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getExample(req: GetExampleRequest): Promise<GetExampleResponses>;
}
type PlatformaticFrontendClient = Omit<NextClient, 'setBaseUrl'>
type BuildOptions = {
  headers?: object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
