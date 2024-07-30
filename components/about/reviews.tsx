// pages/reviews.tsx
import { prisma } from '@/helpers/prisma' // Adjust the import path as necessary
import { GetServerSideProps } from 'next'
import ReviewsGrid from './ReviewsGrid' // Adjust the import path as necessary

interface Review {
  id: number
  name: string
  content: string
  approved: boolean
  ip: string
}

interface ReviewsProps {
  reviews: Review[]
}

const ReviewsPage = ({ reviews }: ReviewsProps) => {
  return (
    <div>
      <ReviewsGrid reviews={reviews} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const reviews = await prisma.reviews.findMany({
      where: { approved: true }
    })

    return { props: { reviews } }
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return { props: { reviews: [] } }
  }
}

export default ReviewsPage
