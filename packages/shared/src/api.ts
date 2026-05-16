import type { User } from "./types";

interface ApiClientOptions {
  baseUrl: string;
  headers?: Record<string, string>;
}

export interface ApiClient {
  fetchUsers(): Promise<User[]>;
}

export function createApiClient(options: ApiClientOptions): ApiClient {
  async function fetchUsers(): Promise<User[]> {
    const url = new URL(options.baseUrl);

    const response = await fetch(url.toString(), {
      headers: options.headers
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user profiles: ${response.status}`);
    }

    return (await response.json()) as User[];
  }

  return { fetchUsers };
}
