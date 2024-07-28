import { prisma } from '@/prisma/prisma-client';
import { Slice } from 'lucide-react';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || 'Пицца';

  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          name: {
            contains: query[0].toUpperCase() + query.slice(1, -1),
          },
        },
      ],
    },
    take: 5,
  });

  return NextResponse.json(products);
}
