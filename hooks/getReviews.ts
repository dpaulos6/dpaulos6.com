import { prisma } from '@/helpers/prisma'

export const getReviews = async () => {
  try {
    const reviews = await prisma.reviews.findMany({
      where: {
        approved: true
      }
    })
    return reviews
  } catch (error: any) {
    console.error('Error fetching reviews:', error)
    throw new Error(`Could not fetch reviews: ${error.message}`)
  }
}
