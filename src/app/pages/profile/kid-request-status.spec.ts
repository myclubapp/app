import { Timestamp } from "@angular/fire/firestore";
import {
  describeKidRequest,
  isClosedKidRequest,
  KidRequest,
} from "./kid-request-status";

describe("describeKidRequest", () => {
  const request = (overrides: Partial<KidRequest>): KidRequest => ({
    id: "r1",
    email: "kid@example.com",
    ...overrides,
  });

  it("shows a legacy request without status as pending", () => {
    const view = describeKidRequest(request({}));
    expect(view.labelKey).toBe("profile.kids.pending");
    expect(view.color).toBe("warning");
    expect(view.hintKey).toBeNull();
  });

  it("shows a legacy verified request as verified", () => {
    const view = describeKidRequest(request({ verified: true }));
    expect(view.labelKey).toBe("profile.kids.verified");
    expect(view.color).toBe("success");
  });

  it("explains an invitation for an address without account", () => {
    const view = describeKidRequest(request({ status: "invited" }));
    expect(view.labelKey).toBe("profile.kids.status__invited");
    expect(view.hintKey).toBe("profile.kids.status__invited_hint");
    expect(view.expiresAt).toBeNull();
  });

  it("shows the link expiry while the child has to confirm", () => {
    const expiresAt = new Date(2026, 8, 15);
    const view = describeKidRequest(
      request({
        status: "pending_verification",
        expiresAt: Timestamp.fromDate(expiresAt),
      }),
    );
    expect(view.labelKey).toBe("profile.kids.status__pending_verification");
    expect(view.hintKey).toBe("profile.kids.status__pending_verification_hint");
    expect(view.expiresAt).toEqual(expiresAt);
  });

  it("accepts a plain Date as expiry", () => {
    const expiresAt = new Date(2026, 8, 15);
    const view = describeKidRequest(
      request({ status: "pending_verification", expiresAt }),
    );
    expect(view.expiresAt).toBe(expiresAt);
  });

  it("maps the backend's reject reasons onto the existing error texts", () => {
    const self = describeKidRequest(
      request({ status: "rejected", reason: "self" }),
    );
    expect(self.labelKey).toBe("profile.kids.status__rejected");
    expect(self.color).toBe("danger");
    expect(self.hintKey).toBe("profile.kids.error__self");
    expect(
      describeKidRequest(request({ status: "rejected", reason: "duplicate" }))
        .hintKey,
    ).toBe("profile.kids.error__request_pending");
    expect(
      describeKidRequest(
        request({ status: "rejected", reason: "limit_reached" }),
      ).hintKey,
    ).toBe("profile.kids.max_reached_message");
    expect(
      describeKidRequest(
        request({ status: "rejected", reason: "already_linked" }),
      ).hintKey,
    ).toBe("profile.kids.error__already_linked");
    expect(
      describeKidRequest(
        request({ status: "rejected", reason: "invalid_email" }),
      ).hintKey,
    ).toBe("profile.kids.error__invalid_email");
  });

  it("shows a rejected request without a known reason as rejected only", () => {
    const view = describeKidRequest(
      request({ status: "rejected", reason: "something_new" }),
    );
    expect(view.labelKey).toBe("profile.kids.status__rejected");
    expect(view.hintKey).toBeNull();
  });

  it("tells the parent to re-enter the address after the link expired", () => {
    const view = describeKidRequest(request({ status: "expired" }));
    expect(view.labelKey).toBe("profile.kids.status__expired");
    expect(view.color).toBe("danger");
    expect(view.hintKey).toBe("profile.kids.status__expired_hint");
  });
});

describe("isClosedKidRequest", () => {
  it("only treats rejected requests as closed, like the backend", () => {
    expect(isClosedKidRequest({ status: "rejected" })).toBeTrue();
    expect(isClosedKidRequest({ status: "expired" })).toBeFalse();
    expect(isClosedKidRequest({ status: "invited" })).toBeFalse();
    expect(isClosedKidRequest({})).toBeFalse();
  });
});
