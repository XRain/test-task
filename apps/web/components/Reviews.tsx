import type { HunqzReview } from "@repo/shared";

interface ReviewsProps {
  reviews: HunqzReview[];
}

export function Reviews({ reviews }: ReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  {/* TBH, I'm not sure if review.vote is the star rating or vote count, but let's assume it is a rating */}
  const averageVote = reviews.reduce((acc, r) => acc + (r.vote || 0), 0) / reviews.length;

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 sm:p-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-headline text-xl font-bold text-on-surface">Reviews</h2>
          <div className="mt-1 flex items-center space-x-2">
            <div className="flex text-primary">
              <span className="material-symbols-outlined text-xl fill-current">star</span>
            </div>
            <span className="text-lg font-bold text-on-surface">{averageVote.toFixed(1)}</span>
            <span className="text-outline">({reviews.length} reviews)</span>
          </div>
        </div>
        <button className="text-sm font-semibold text-primary hover:text-primary-container">
          View All Reviews
        </button>
      </div>
      
      <div className="space-y-6">
        {reviews.slice(0, 3).map((review) => (
          <div key={review.id} className="border-b border-outline/10 pb-6 last:border-0 last:pb-0">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant font-bold text-on-surface-variant">
                  {review.reviewer_name?.charAt(0) || "U"}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-on-surface">{review.reviewer_name || "User"}</p>
                  <p className="text-xs text-outline">
                    {new Date(review.updated_at).toLocaleDateString()}
                    {review.is_reviewer_genuine && (
                      <span className="ml-2 inline-flex items-center text-green-600">
                        <span className="material-symbols-outlined mr-0.5 text-xs">verified</span>
                        Verified Session
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`material-symbols-outlined text-sm ${(review.vote || 0) > i ? 'fill-current' : 'text-outline/20'}`}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              "{review.comment}"
            </p>
            {review.reply && (
              <div className="mt-4 rounded-xl bg-surface-variant/50 p-4">
                <p className="text-xs font-bold text-on-surface">Reply from Profile</p>
                <p className="mt-1 text-sm italic text-on-surface-variant">"{review.reply.text}"</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
