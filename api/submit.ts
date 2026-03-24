import { neon } from "@neondatabase/serverless";

export const config = { runtime: "edge" };

const ALLOWED_FIELDS = new Set([
  "fullName", "jobTitle", "department", "departmentOther", "yearsAtProdesign",
  "dailyTools", "dailyToolsOther", "fileStorage",
  "mandatoryTools", "mandatoryToolsDetail",
  "task1Name", "task1Desc", "task1Freq", "task1Duration", "task1Tools", "task1Pain",
  "task2Name", "task2Desc", "task2Freq", "task2Duration", "task2Tools", "task2Pain",
  "priorityTask", "assistantWish", "automationGoals", "automationGoalsOther",
  "confidentiality", "confidentialityDetail", "noChange", "anythingElse",
]);

function sanitize(val: unknown): string | null {
  if (val == null) return null;
  if (typeof val === "string") return val.slice(0, 5000);
  if (Array.isArray(val)) return val.map(v => String(v).slice(0, 500)) as unknown as string;
  return String(val).slice(0, 5000);
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    return new Response("Server misconfigured", { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // Validate required fields
  if (!body.fullName || !body.jobTitle || !body.department) {
    return new Response("Missing required fields: fullName, jobTitle, department", { status: 400 });
  }

  // Strip unknown fields
  const clean: Record<string, unknown> = {};
  for (const key of Object.keys(body)) {
    if (ALLOWED_FIELDS.has(key)) {
      clean[key] = sanitize(body[key]);
    }
  }

  const sql = neon(dbUrl);

  try {
    await sql`INSERT INTO submissions (
      full_name, job_title, department, department_other, years_at_prodesign,
      daily_tools, daily_tools_other, file_storage, mandatory_tools, mandatory_tools_detail,
      task1_name, task1_desc, task1_freq, task1_duration, task1_tools, task1_pain,
      task2_name, task2_desc, task2_freq, task2_duration, task2_tools, task2_pain,
      priority_task, assistant_wish, automation_goals, automation_goals_other,
      confidentiality, confidentiality_detail, no_change, anything_else
    ) VALUES (
      ${clean.fullName}, ${clean.jobTitle}, ${clean.department}, ${clean.departmentOther},
      ${clean.yearsAtProdesign},
      ${clean.dailyTools}, ${clean.dailyToolsOther}, ${clean.fileStorage},
      ${clean.mandatoryTools}, ${clean.mandatoryToolsDetail},
      ${clean.task1Name}, ${clean.task1Desc}, ${clean.task1Freq}, ${clean.task1Duration},
      ${clean.task1Tools}, ${clean.task1Pain},
      ${clean.task2Name}, ${clean.task2Desc}, ${clean.task2Freq}, ${clean.task2Duration},
      ${clean.task2Tools}, ${clean.task2Pain},
      ${clean.priorityTask}, ${clean.assistantWish},
      ${clean.automationGoals}, ${clean.automationGoalsOther},
      ${clean.confidentiality}, ${clean.confidentialityDetail},
      ${clean.noChange}, ${clean.anythingElse}
    )`;

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("DB insert error:", err);
    return new Response("Submission failed", { status: 500 });
  }
}
