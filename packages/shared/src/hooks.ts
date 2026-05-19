import { useState, useEffect, useCallback, useRef } from "react";
import { type ApiClient } from "./api";
import { type HunqzProfile } from "./types";

export function useProfile(apiClient: ApiClient) {
  const [profile, setProfile] = useState<HunqzProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const lastRequestId = useRef(0);

  const load = useCallback(async () => {
    const requestId = ++lastRequestId.current;
    setLoading(true);
    setError(null);
    try {
      const result = await apiClient.fetchProfile();
      if (requestId === lastRequestId.current) {
        setProfile(result);
      }
    } catch (err) {
      if (requestId === lastRequestId.current) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    } finally {
      if (requestId === lastRequestId.current) {
        setLoading(false);
      }
    }
  }, [apiClient]);

  useEffect(() => {
    void load();
    return () => {
      lastRequestId.current++;
    };
  }, [load]);

  return { profile, loading, error, refresh: load };
}
