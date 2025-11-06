import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, category, storeLink } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      )
    }

    // Check if RESEND_API_KEY is set
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set in environment variables")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      )
    }

    // Initialize Resend client inside the handler to avoid build-time errors
    const resend = new Resend(resendApiKey)

    // Send notification email to tech@kerrsor.com (your email)
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: "Stylr Waiting List <onboarding@resend.dev>", // You'll need to verify your domain with Resend for custom sender
      to: ["tech@kerrsor.com"], // Your email address
      subject: `New Waiting List Signup: ${name}${company ? ` from ${company}` : ""}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
            New Waiting List Signup
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ""}
            ${category ? `<p style="margin: 10px 0;"><strong>Category:</strong> ${category}</p>` : ""}
            ${storeLink ? `<p style="margin: 10px 0;"><strong>E-commerce Store Link:</strong> <a href="${storeLink}" target="_blank">${storeLink}</a></p>` : ""}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email, // So you can reply directly to the sender
    })

    if (notificationError) {
      console.error("Resend notification error:", JSON.stringify(notificationError, null, 2))
      return NextResponse.json(
        { 
          error: "Failed to send notification email", 
          details: notificationError.message || "Unknown error. Please check your Resend API key and configuration."
        },
        { status: 500 }
      )
    }

    // Success - email sent to tech@kerrsor.com
    // User will see success message in the modal
    return NextResponse.json(
      { message: "Email sent successfully", data: notificationData },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

