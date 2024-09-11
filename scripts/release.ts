import { $ } from "bun";

const bump = process.argv[2];

if (!bump) {
  console.error("Missing bump");
  process.exit(1);
}

if (!["patch", "minor", "major"].includes(bump)) {
  console.error("Invalid bump");
  process.exit(1);
}

await $`npm version ${bump} -m "${{ raw: "🔖" }} chore: release %s"`;
await $`git push --follow-tags`;
