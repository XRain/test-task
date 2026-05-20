import type { HunqzProfile } from "./types";

/*
* These options should usually be set in environment (env vars or CI/CD env),
*  we'll keep it here for simplicity
*  */
const API_BASE_URL = "https://www.hunqz.com/api/opengrid/profiles/msescortplus";
const PROFILE_IMAGE_BASE_URL = "https://www.hunqz.com/img/usr/original/0x0";
const API_TIMEOUT = 15000;

export interface ApiClient {
  fetchProfile(): Promise<HunqzProfile>;
}

export function buildProfileImageUrl(urlToken: string): string {
  const normalizedToken = urlToken.trim();
  return `${PROFILE_IMAGE_BASE_URL}/${encodeURIComponent(normalizedToken)}.jpg`;
}

function withProfileImage(profile: HunqzProfile): HunqzProfile {
  return {
    ...profile,
    preview_pic: profile.preview_pic
      ? {
          ...profile.preview_pic,
          image_url: buildProfileImageUrl(profile.preview_pic.url_token)
        }
      : undefined,
    pictures: Array.isArray(profile.pictures)
      ? profile.pictures.map((picture) => ({
          ...picture,
          image_url: buildProfileImageUrl(picture.url_token)
        }))
      : []
  };
}

export function createApiClient(): ApiClient {
  async function fetchProfile(): Promise<HunqzProfile> {
    const controller = new AbortController();
    const timeoutMs = API_TIMEOUT;
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeoutMs);

    try {
      const response = await fetch(API_BASE_URL, {
        headers: {
          Accept: "application/json",
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

      const profile = (await response.json()) as HunqzProfile;
      return withProfileImage(profile);
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
