
const crypto = require("crypto");

const seenEvents = new Map();

function verifyMetaSignature(rawBody, signature) {
  const secret = process.env.APP_SECRET;

  if (!secret || !rawBody || !signature) {
    return false;
  }

  const expected =
    "sha256=" +
    crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);

  return a.length === b.length &&
    crypto.timingSafeEqual(a, b);
}

function isDuplicate(eventId) {
  if (!eventId) return false;

  const now = Date.now();

  for (const [id, time] of seenEvents) {
    if (now - time > 10 * 60 * 1000) {
      seenEvents.delete(id);
    }
  }

  if (seenEvents.has(eventId)) return true;

  seenEvents.set(eventId, now);
  return false;
}

module.exports = {
  verifyMetaSignature,
  isDuplicate
};
        
