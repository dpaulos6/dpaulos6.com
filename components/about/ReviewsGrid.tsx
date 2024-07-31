// components/ReviewsGrid.tsx
'use client'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

interface Review {
  id: number
  name: string
  content: string
  approved: boolean
  ip: string
}

interface ReviewsGridProps {
  reviews: Review[]
}

const ReviewsGrid = ({ reviews }: ReviewsGridProps) => {
  return (
    <ResponsiveMasonry
      className="masonry"
      columnsCountBreakPoints={{ 350: 1, 756: 2, 1024: 3 }}
    >
      <Masonry gutter="1.5rem">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg border bg-background-menu border-background-border p-6 shadow-sm"
          >
            <span className="text-lg font-medium leading-relaxed">
              &quot;{review.content}&quot;
            </span>
            <div className="mt-4 flex items-center space-x-3">
              <span className="font-medium">{review.name}</span>
            </div>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default ReviewsGrid
