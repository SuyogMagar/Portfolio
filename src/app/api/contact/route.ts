import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { ContactRequest } from '@/types/portfolio';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(50, 'Message must be at least 50 characters long'),
  inquiryType: z.enum(['job-opportunity', 'collaboration', 'general']).default('general')
});

// In-memory storage for demo purposes (in production, use a database)
const messages: any[] = [];

// Simple rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitData = rateLimitMap.get(ip);

  if (!limitData) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (now - limitData.lastRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (limitData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  limitData.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map(err => err.message);
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: errorMessages
        },
        { status: 400 }
      );
    }

    const contactData: ContactRequest = validationResult.data;

    // Create contact message object
    const message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...contactData,
      createdAt: new Date().toISOString(),
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Store message (in production, save to database)
    messages.push(message);

    // Log the message (in production, use proper logging)
    console.log('New contact message received:', {
      id: message.id,
      name: message.name,
      email: message.email,
      inquiryType: message.inquiryType,
      createdAt: message.createdAt
    });

    // Send notification email (in production, implement email sending)
    await sendNotificationEmail(message);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you as soon as possible.',
      data: {
        id: message.id,
        createdAt: message.createdAt
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Admin endpoint to retrieve all messages (in production, add authentication)
  return NextResponse.json({
    success: true,
    data: messages,
    count: messages.length
  });
}

// Email notification function (placeholder - implement with your preferred email service)
async function sendNotificationEmail(message: any) {
  // In production, implement with services like:
  // - Nodemailer with SMTP
  // - SendGrid
  // - AWS SES
  // - Resend

  console.log('📧 Email notification would be sent here:', {
    to: 'suyog.magar@example.com',
    subject: `New Contact Form: ${message.inquiryType} from ${message.name}`,
    message: {
      name: message.name,
      email: message.email,
      company: message.company,
      inquiryType: message.inquiryType,
      message: message.message,
      createdAt: message.createdAt
    }
  });

  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return true;
}