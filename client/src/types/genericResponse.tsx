export type ApiResponse<T> = {
    code: number;
    data: T; // T is the generic type parameter
    error: boolean;
    message: string;
  };

