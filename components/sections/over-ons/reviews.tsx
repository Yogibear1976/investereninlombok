export const Reviews = () => {
  const reviews = [
    {
      quote:
        "This is the survival kit I wish I had when I was starting out building apps.",
      name: "Derrick Reimer",
      role: "Investeerder",
      img: "/_next/static/media/derrickreimer.80571312bb77ad98.jpg",
      stars: 5,
      hidden: false,
    },
    {
      quote: "This book is fantastic for engineers learning how to design.",
      name: "Alex MacCaw",
      role: "Investeerder",
      img: "/_next/static/media/maccaw.34cd778098dd5964.jpg",
      stars: 4,
      hidden: true,
    },
    {
      quote:
        "This book Refactoring UI is a no-brainer for anyone in the web industry.",
      name: "Justin Jackson",
      role: "Investeerder",
      img: "/_next/static/media/mijustin.c8203456dfa8c1e7.jpg",
      stars: 5,
      hidden: true,
    },
  ];

  const Star = ({ filled = true }) => (
    <svg
      width="20"
      height="20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
    >
      <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
    </svg>
  );

  return (
    <ul className="relative mx-auto px-4 my-8 max-w-sm lg:my-24 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-8">
      {reviews.map((item, i) => (
        <li key={i} className={`${item.hidden ? "hidden lg:block" : ""}`}>
          <figure>
            {/* Stars */}
            <div className="flex justify-center space-x-1 text-warning">
              {[...Array(item.stars)].map((_, idx) => (
                <Star key={idx} filled />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-6 text-center text-xl leading-8 tracking-tight before:content-['“'] after:content-['”']">
              {item.quote}
            </blockquote>

            {/* Author */}
            <figcaption className="mt-6 flex justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
};
