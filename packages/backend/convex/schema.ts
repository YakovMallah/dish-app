import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Initial stub schema. We will define it fully in Issue #4.
  users: defineTable({
    name: v.string(),
    email: v.string()
  })
});
