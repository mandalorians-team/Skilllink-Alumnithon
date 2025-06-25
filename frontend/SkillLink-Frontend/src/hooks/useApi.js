import { useState, useEffect, useCallback } from 'react';
import { handleApiError } from '../services/BackendServices';

export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset
  };
};

// Hook para peticiones automáticas (se ejecutan al montar el componente)
export const useApiData = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiFunction();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  useEffect(() => {
    refetch();
  }, dependencies);

  return {
    data,
    loading,
    error,
    refetch
  };
};

// Hook para peticiones con parámetros
export const useApiWithParams = (apiFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (params) => {
    if (!params) return;

    setLoading(true);
    setError(null);

    try {
      const result = await apiFunction(params);
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset
  };
};

// Hook para peticiones POST/PUT/DELETE
export const useApiMutation = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await apiFunction(...args);
      setSuccess(true);
      return result;
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    success,
    execute,
    reset
  };
};

// Hook para búsquedas con debounce
export const useSearchApi = (searchFunction, delay = 500) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const executeSearch = useCallback(async (term) => {
    if (!term || term.trim().length < 2) {
      setData(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await searchFunction(term);
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [searchFunction]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        executeSearch(searchTerm);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, delay, executeSearch]);

  const setSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setSearchTerm('');
  }, []);

  return {
    data,
    loading,
    error,
    searchTerm,
    setSearch,
    reset
  };
};