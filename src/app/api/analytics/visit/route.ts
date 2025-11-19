import { NextRequest, NextResponse } from 'next/server';
import { VisitorAnalytics } from '@/types/portfolio';

// In-memory storage for demo purposes (in production, use a database)
const visits: VisitorAnalytics[] = [];

// Simple analytics aggregation
function getAnalyticsStats() {
  const totalVisits = visits.length;
  const uniqueVisitors = new Set(visits.map(v => v.ipAddress)).size;

  // Page views
  const pageViews = visits.reduce((acc, visit) => {
    acc[visit.pageUrl] = (acc[visit.pageUrl] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Recent visits (last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const recentVisits = visits.filter(v => new Date(v.visitedAt) > sevenDaysAgo);

  // Daily visitors (last 7 days)
  const dailyVisitors = recentVisits.reduce((acc, visit) => {
    const date = new Date(visit.visitedAt).toISOString().split('T')[0];
    if (!acc[date]) {
      acc[date] = { visitors: new Set(), visits: 0 };
    }
    if (visit.ipAddress) {
      acc[date].visitors.add(visit.ipAddress);
    }
    acc[date].visits++;
    return acc;
  }, {} as Record<string, { visitors: Set<string>; visits: number }>);

  const dailyStats = Object.entries(dailyVisitors).map(([date, stats]) => ({
    date,
    uniqueVisitors: stats.visitors.size,
    totalVisits: stats.visits
  }));

  return {
    totalVisits,
    uniqueVisitors,
    totalPageViews: Object.values(pageViews).reduce((sum, count) => sum + count, 0),
    pageViews,
    recentVisits: recentVisits.length,
    dailyStats: dailyStats.sort((a, b) => a.date.localeCompare(b.date))
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.pageUrl) {
      return NextResponse.json(
        { success: false, error: 'pageUrl is required' },
        { status: 400 }
      );
    }

    // Get visitor information
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referrer = request.headers.get('referer') || body.referrer;

    // Create visit record
    const visit: VisitorAnalytics = {
      id: `visit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      pageUrl: body.pageUrl,
      userAgent,
      referrer: referrer !== undefined ? referrer : undefined,
      visitedAt: new Date().toISOString(),
      ipAddress: ip
    };

    // Store visit (in production, save to database)
    visits.push(visit);

    console.log('New visit recorded:', {
      id: visit.id,
      pageUrl: visit.pageUrl,
      ipAddress: visit.ipAddress,
      visitedAt: visit.visitedAt
    });

    return NextResponse.json({
      success: true,
      message: 'Visit recorded successfully',
      data: {
        id: visit.id,
        visitedAt: visit.visitedAt
      }
    });

  } catch (error) {
    console.error('Analytics visit tracking error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to record visit'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const stats = getAnalyticsStats();

    return NextResponse.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Analytics stats error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch analytics stats'
      },
      { status: 500 }
    );
  }
}