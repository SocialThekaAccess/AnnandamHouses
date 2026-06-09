import "./CustomerReviews.css";

const REVIEWS = [
  {
    author: "Rakesh Patel",
    review:
      "Professional support from the first enquiry to the site visit. The team kept every detail clear and easy to understand.",
  },
  {
    author: "Megha Shah",
    review:
      "A very smooth experience with transparent communication, prompt callbacks, and genuine guidance throughout the process.",
  },
  {
    author: "Nirav Desai",
    review:
      "The project presentation felt well planned and the location insights helped us make a confident family decision.",
  },
  {
    author: "Priya Mehta",   
    review:
      "We appreciated the respectful follow-up and the way the team explained the investment potential without pressure.",
  },
  {
    author: "Krunal Joshi",
    review:
      "Clear answers, organized visits, and a polished buyer experience. It felt dependable from start to finish.",
  },
];

function StarIcon() {
  return (
    <svg
      className="reviews-card__star"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.75l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.31l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93L12 2.75z" />
    </svg>
  );
}

function ReviewCard({ author, review }) {
  return (
    <article className="reviews-card">
      <div className="reviews-card__meta">
        {/* <span className="reviews-card__source">Google review</span> */}
        <div className="reviews-card__stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>
      <p className="reviews-card__copy">"{review}"</p>
      <p className="reviews-card__author">{author}</p>
    </article>
  );
}

export default function CustomerReviews() {
  const scrollingReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="customer-reviews" aria-labelledby="customer-reviews-title">
      <div className="customer-reviews__container">
        <div className="customer-reviews__intro">
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title" id="customer-reviews-title">
            We deliver what we promise 
          </h2>
          <p className="customer-reviews__text">
            Real-estate decisions feel better when the experience is clear, calm,
            and consistently well supported.
          </p>
        </div>
      </div>

      <div className="reviews-ticker" aria-label="Scrolling customer reviews">
        <div className="reviews-ticker__track">
          {scrollingReviews.map((review, index) => (
            <ReviewCard
              key={`${review.author}-${index}`}
              author={review.author}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
