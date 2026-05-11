import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock getCloudflareContext
const mockDb = {
  select: vi.fn(),
  update: vi.fn(),
};

// Chain mock setup
const mockLimit = vi.fn();
const mockWhere = vi.fn(() => ({ limit: mockLimit }));
const mockOrderBy = vi.fn(() => ({ limit: mockLimit }));
const mockFrom = vi.fn(() => ({ where: mockWhere, orderBy: mockOrderBy }));
const mockSet = vi.fn(() => ({ where: vi.fn() }));

mockDb.select.mockReturnValue({ from: mockFrom });
mockDb.update.mockReturnValue({ set: mockSet });

vi.mock("@opennextjs/cloudflare", () => ({
  getCloudflareContext: vi.fn(() => Promise.resolve({ env: { DB: {} } })),
}));

vi.mock("@/db", () => ({
  getDb: vi.fn(() => mockDb),
}));

beforeEach(() => {
  vi.clearAllMocks();
  mockDb.select.mockReturnValue({ from: mockFrom });
  mockDb.update.mockReturnValue({ set: mockSet });
  mockFrom.mockReturnValue({ where: mockWhere, orderBy: mockOrderBy });
  mockWhere.mockReturnValue({ limit: mockLimit });
  mockOrderBy.mockReturnValue({ limit: mockLimit });
});

describe("GET /api/v1/hotsnacks", () => {
  it("returns all hotsnacks ordered by like_count", async () => {
    const mockData = [
      { id: 1, name: "フランク", like_count: 10 },
      { id: 2, name: "チキン", like_count: 5 },
    ];
    mockOrderBy.mockResolvedValue(mockData);

    const { GET } = await import("@/app/api/v1/hotsnacks/route");
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockData);
  });
});

describe("GET /api/v1/hotsnack/[item_uuid]", () => {
  it("returns a single hotsnack", async () => {
    const mockItem = { id: 1, item_uuid: "test-uuid", name: "フランク" };
    mockLimit.mockResolvedValue([mockItem]);

    const { GET } = await import("@/app/api/v1/hotsnack/[item_uuid]/route");
    const request = new Request("http://localhost/api/v1/hotsnack/test-uuid");
    const response = await GET(request, {
      params: Promise.resolve({ item_uuid: "test-uuid" }),
    });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockItem);
  });

  it("returns 404 when not found", async () => {
    mockLimit.mockResolvedValue([]);

    const { GET } = await import("@/app/api/v1/hotsnack/[item_uuid]/route");
    const request = new Request("http://localhost/api/v1/hotsnack/nonexistent");
    const response = await GET(request, {
      params: Promise.resolve({ item_uuid: "nonexistent" }),
    });

    expect(response.status).toBe(404);
  });
});

describe("GET /api/v1/random", () => {
  it("returns a random item_uuid", async () => {
    mockLimit.mockResolvedValue([{ item_uuid: "random-uuid" }]);

    const { GET } = await import("@/app/api/v1/random/route");
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toBe("random-uuid");
  });
});

describe("PUT /api/v1/hotsnack/[item_uuid]/like", () => {
  it("increments like_count", async () => {
    const mockItem = { id: 1, item_uuid: "test-uuid", like_count: 11 };
    mockLimit.mockResolvedValue([mockItem]);

    const { PUT } = await import(
      "@/app/api/v1/hotsnack/[item_uuid]/like/route"
    );
    const request = new Request("http://localhost", { method: "PUT" });
    const response = await PUT(request, {
      params: Promise.resolve({ item_uuid: "test-uuid" }),
    });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.like_count).toBe(11);
  });
});
