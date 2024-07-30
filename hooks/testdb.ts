import { prisma } from '@/helpers/prisma'

export const testDbConnection = async () => {
  try {
    // Perform a simple query
    const result = await prisma.reviews.findMany({
      take: 1 // Limit to 1 result for a quick check
    })
    console.log('Database connection successful. Sample data:', result)
    return result
  } catch (error) {
    console.error('Database connection failed:', error)
    throw new Error('Database connection failed')
  }
}
