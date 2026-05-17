import type { HunqzProfile } from "./types";

interface ApiClientOptions {
  baseUrl: string;
  headers?: Record<string, string>;
  timeoutMs?: number;
}

export interface ApiClient {
  fetchProfile(): Promise<HunqzProfile>;
}

export function createApiClient(options: ApiClientOptions): ApiClient {
  async function fetchProfile(): Promise<HunqzProfile> {
    const controller = new AbortController();
    const timeoutMs = options.timeoutMs ?? 15000;
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeoutMs);

    try {
      const response = await fetch(options.baseUrl, {
        headers: {
          Accept: "application/json",
          ...options.headers
        },
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.status}`);
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.toLowerCase().includes("application/json")) {
        throw new Error("Failed to fetch profile: expected JSON response");
      }

      return (await response.json()) as HunqzProfile;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error(`Failed to fetch profile: request timed out after ${timeoutMs}ms`);
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return { fetchProfile };
}
