import { createTestIndexer } from "envio";
import { describe, expect, it } from "vitest";

describe("indexer wiring", () => {
  it("creates a test indexer", () => {
    const indexer = createTestIndexer();
    expect(indexer).toBeTruthy();
  });
});
