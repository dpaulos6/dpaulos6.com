import { testDbConnection } from '@/hooks/testdb'

export async function GET(request: Request, res: Response) {
  try {
    const result = await testDbConnection()
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error: any) {
    return new Response('Database connection failed', { status: 500 })
  }
}
