import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Visitor = {
  ip: string | undefined;
  country: string | undefined;
  region: string | undefined;
  city: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
};

type IpLocationResponse = {
  ip: string;
  ip_number: string;
  ip_version: string;
  country_name: string;
  country_code2: string;
  isp: string;
  response_code: string;
  response_message: string;
};

export async function GET(request: NextRequest) {
  try {
    const ipAddress =
      request.headers.get('x-real-ip') ||
      request.headers.get('x-forwarded-for') ||
      request.ip;
    console.log(ipAddress);
    if (request.geo?.country === undefined) {
      console.log('No geo data found');
      try {
        const response = fetch(`https://api.iplocation.net/?ip=${ipAddress}`);
        const data: IpLocationResponse = await (await response).json();
        const createRecod = await prisma.history.create({
          data: {
            ip_address: data.ip,
            ip_version: data.ip_version,
            country_name: data.country_name,
            country_code: data.country_code2,
            isp: data.isp,
            city: '',
            region: '',
            latitude: 0.1,
            longitude: 0.1,
            source: 'iplocation.net',
          },
        });

        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.error();
      }
    } else {
      console.log('Geo data found');
      const visitor: Visitor = {
        ip: request.ip,
        country: request.geo?.country,
        region: request.geo?.region,
        city: request.geo?.city,
        latitude: request.geo?.latitude,
        longitude: request.geo?.longitude,
      };
      if (visitor.ip === undefined) {
        return NextResponse.error();
      }
      const createRecod = await prisma.history.create({
        data: {
          ip_address: visitor.ip,
          ip_version: 'IPv4',
          country_name: '',
          country_code: '',
          isp: '',
          city: 'visitor.city',
          region: '',
          latitude: 0.1,
          longitude: 0.1,
          source: 'next.js',
        },
      });
      console.log(visitor);
      return NextResponse.json(visitor);
    }
  } catch (error) {
    return NextResponse.error();
  }
}
