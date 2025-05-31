import React from "react";

export default function page() {
  return (
    <div className="max-w-6xl mx-auto p3 space-y-10">
      <section className="space-y-2 mt-10">
        <h3 className="text-2xl text-amber-400">About Us</h3>
        <p>
          KinoSphere is your ultimate destination for exploring the world of
          cinema. From timeless classics to the latest blockbusters, we aim to
          bring you detailed movie information, cast and crew bios, trailers,
          ratings, and user reviews—all in one place.
        </p>
      </section>
      <section className="space-y-2">
        <h3 className="text-2xl text-amber-400">Our Mission</h3>
        <p>
          We believe in the power of storytelling through film. Our goal is to
          create a platform where movie lovers can discover, discuss, and
          celebrate the art of cinema with a rich, user-friendly experience.
        </p>
      </section>
      <section className="space-y-2">
        <h3 className="text-2xl text-amber-400">What We Offer</h3>
        <ul>
          <li>Extensive movie database with real-time updates</li>
          <li>Search by genre, actor, release year, and more</li>
          <li>Community reviews and ratings</li>
          <li>Curated collections and editor picks</li>
          <li>Trailers and behind-the-scenes content</li>
        </ul>
      </section>
      <section className="space-y-2">
        <h3 className="text-2xl text-amber-400">Contact Us</h3>
        <p>
          Have feedback or suggestions? We’d love to hear from you! Reach out
          via our <a href="/contact">Contact page</a> or email us at{" "}
          <a href="mailto:support@kinosphere.com">support@kinosphere.com</a>.
        </p>
      </section>
    </div>
  );
}
