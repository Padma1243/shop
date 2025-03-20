"use client";
import { useState } from "react";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

interface ReviewFormProps {
  addReview: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addReview }) => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      user: user.trim(),
      rating,
      comment: comment.trim(),
    };

    addReview(newReview);
    setUser("");
    setComment("");
    setRating(5);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Write a Review</h3>

      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 font-medium">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          required
        />
      </div>

      {/* Rating Dropdown */}
      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-600 font-medium">
          Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          required
        >
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>
              {`${star} ${star === 1 ? "Star" : "Stars"}`}
            </option>
          ))}
        </select>
      </div>

      {/* Review Textarea */}
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-600 font-medium">
          Review
        </label>
        <textarea
          id="comment"
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-md w-full"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
