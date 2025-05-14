import { toast } from 'react-hot-toast';

// Define custom error types
export interface ApiError extends Error {
  statusCode?: number;
  details?: any;
}

/**
 * Handles API errors and provides appropriate user feedback
 */
export function handleApiError(error: unknown, customMessage?: string): ApiError {
  console.error('API Error:', error);
  
  // Format the error into a standard structure
  const apiError: ApiError = error instanceof Error 
    ? error 
    : new Error(customMessage || 'An unexpected error occurred');
  
  // Provide user feedback via toast notification if not in server context
  if (typeof window !== 'undefined') {
    const message = customMessage || 
      (apiError.statusCode === 404 
        ? 'The requested resource was not found' 
        : 'An error occurred while fetching data');
        
    toast.error(message);
  }
  
  return apiError;
}

/**
 * Safely unwraps the result of a Promise or throws a formatted error
 * Useful for async/await operations with proper error handling
 */
export async function unwrapResult<T>(
  promise: Promise<T>, 
  errorMessage = 'An error occurred'
): Promise<T> {
  try {
    return await promise;
  } catch (error) {
    throw handleApiError(error, errorMessage);
  }
}

/**
 * Creates a safe API call wrapper that handles errors and loading states
 */
export function createSafeApiCall<T, Args extends any[]>(
  apiFunction: (...args: Args) => Promise<T>,
  options?: {
    errorMessage?: string;
    onSuccess?: (data: T) => void;
    onError?: (error: ApiError) => void;
  }
) {
  return async (...args: Args): Promise<T | null> => {
    try {
      const data = await apiFunction(...args);
      options?.onSuccess?.(data);
      return data;
    } catch (error) {
      const formattedError = handleApiError(error, options?.errorMessage);
      options?.onError?.(formattedError);
      return null;
    }
  };
} 