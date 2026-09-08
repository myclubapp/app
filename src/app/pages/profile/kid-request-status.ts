import { Timestamp } from "@angular/fire/firestore";

/**
 * Lifecycle of a request under userProfile/{uid}/kidsRequests, as written by
 * the backend trigger (functions/src/firestore/userProfile/kidsRequest.ts):
 *
 * - `invited`: no myclub account for the address yet — the child received an
 *   invitation mail; the verification starts once it signs up with it.
 * - `pending_verification`: the child received the verification mail and
 *   must confirm the link with the token (valid until `expiresAt`).
 * - `rejected`: the backend refused the request, see `reason`.
 * - `expired`: the verification link was not used within its lifetime.
 *
 * Requests written before the backend rollout carry no `status`; a verified
 * request is deleted by the backend, `verified` only survives on legacy docs.
 */
export type KidRequestStatus =
  | "invited"
  | "pending_verification"
  | "rejected"
  | "expired";

export type KidRequestRejectReason =
  | "invalid_email"
  | "self"
  | "duplicate"
  | "limit_reached"
  | "already_linked";

export interface KidRequest {
  id: string;
  email: string;
  verified?: boolean;
  status?: KidRequestStatus;
  reason?: KidRequestRejectReason | string;
  createdAt?: Timestamp | Date;
  invitedAt?: Timestamp | Date;
  expiresAt?: Timestamp | Date;
}

/** What the profile page shows for one request. Keys live under `profile.`. */
export interface KidRequestView {
  labelKey: string;
  color: "success" | "warning" | "danger" | "medium";
  hintKey: string | null;
  /** Expiry of the verification link (pending_verification only). */
  expiresAt: Date | null;
}

const REJECT_REASON_KEYS: Record<KidRequestRejectReason, string> = {
  invalid_email: "profile.kids.error__invalid_email",
  self: "profile.kids.error__self",
  duplicate: "profile.kids.error__request_pending",
  limit_reached: "profile.kids.max_reached_message",
  already_linked: "profile.kids.error__already_linked",
};

/**
 * A request that no longer blocks the address: the backend ignores rejected
 * requests when it checks for duplicates, so the parent may enter the same
 * address again without deleting the old entry first.
 */
export function isClosedKidRequest(request: Pick<KidRequest, "status">) {
  return request?.status === "rejected";
}

function toDate(value: Timestamp | Date | undefined | null): Date | null {
  if (!value) {
    return null;
  }
  if (value instanceof Date) {
    return value;
  }
  return typeof value.toDate === "function" ? value.toDate() : null;
}

export function describeKidRequest(request: KidRequest): KidRequestView {
  switch (request?.status) {
    case "invited":
      return {
        labelKey: "profile.kids.status__invited",
        color: "warning",
        hintKey: "profile.kids.status__invited_hint",
        expiresAt: null,
      };
    case "pending_verification":
      return {
        labelKey: "profile.kids.status__pending_verification",
        color: "warning",
        hintKey: "profile.kids.status__pending_verification_hint",
        expiresAt: toDate(request.expiresAt),
      };
    case "rejected":
      return {
        labelKey: "profile.kids.status__rejected",
        color: "danger",
        hintKey:
          REJECT_REASON_KEYS[request.reason as KidRequestRejectReason] ?? null,
        expiresAt: null,
      };
    case "expired":
      return {
        labelKey: "profile.kids.status__expired",
        color: "danger",
        hintKey: "profile.kids.status__expired_hint",
        expiresAt: null,
      };
    default:
      return request?.verified
        ? {
            labelKey: "profile.kids.verified",
            color: "success",
            hintKey: null,
            expiresAt: null,
          }
        : {
            labelKey: "profile.kids.pending",
            color: "warning",
            hintKey: null,
            expiresAt: null,
          };
  }
}
