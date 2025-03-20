interface Review {
    id: number;
    user: string;
    rating: number;
    comment: string;
  }
  
  interface ReviewListProps {
    reviews: Review[];
  }
  
  const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-2xl">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-3">Customer Reviews</h3>
  
        {reviews.length > 0 ? (
          <div className="space-y-6 mt-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-800">{review.user}</p>
                  <p className="text-yellow-500 text-lg">
                    {"⭐".repeat(review.rating)}
                  </p>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-500 italic">No reviews yet. Be the first to write one! 😊</p>
        )}
      </div>
    );
  };
  
  export default ReviewList;
  