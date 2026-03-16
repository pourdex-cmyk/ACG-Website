import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, industry, companySize, challenge, phone } = body;

    if (!name?.trim()) return NextResponse.json({ error: "Name is required." }, { status: 400 });
    if (!email?.trim() || !validateEmail(email.trim()))
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    if (!company?.trim())
      return NextResponse.json({ error: "Company is required." }, { status: 400 });
    if (!message?.trim() || message.trim().length < 10)
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });

    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      message: message.trim(),
      industry: industry?.trim() || null,
      company_size: companySize?.trim() || null,
      primary_challenge: challenge?.trim() || null,
      phone: phone?.trim() || null,
      status: "new",
    });

    if (error) {
      console.error("[Contact Supabase Error]", error);
      return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Thank you — we'll respond within one business day." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
