// import { NextRequest, NextResponse } from 'next/server';

// type Visitor = {
//   ip: string | undefined;
//   country: string | undefined;
//   region: string | undefined;
//   city: string | undefined;
//   latitude: string | undefined;
//   longitude: string | undefined;
// };

// type IpLocationResponse = {
//   ip: string;
//   ip_number: string;
//   ip_version: string;
//   country_name: string;
//   country_code2: string;
//   isp: string;
//   response_code: string;
//   response_message: string;
// };

// export async function GET(request: NextRequest) {
//   try {
//     const ipAddress =
//       request.headers.get('x-real-ip') ||
//       request.headers.get('x-forwarded-for') ||
//       request.ip;
//     console.log(ipAddress);
//     if (request.geo?.country === undefined) {
//       console.log('No geo data found');
//       try {
//         const response = fetch(`https://api.iplocation.net/?ip=${ipAddress}`);
//         const data: IpLocationResponse = await (await response).json();
//         return NextResponse.json(data);
//       } catch (error) {
//         return NextResponse.error();
//       }
//     } else {
//       console.log('Geo data found');
//       const visitor: Visitor = {
//         ip: request.ip,
//         country: request.geo?.country,
//         region: request.geo?.region,
//         city: request.geo?.city,
//         latitude: request.geo?.latitude,
//         longitude: request.geo?.longitude,
//       };
//       console.log(visitor);
//       return NextResponse.json(visitor);
//     }
//   } catch (error) {
//     return NextResponse.error();
//   }
// }
