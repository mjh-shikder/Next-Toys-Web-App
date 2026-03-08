import React from 'react'
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-100 rounded-xl">
      <div className="hero-content text-center flex-col lg:flex-row-reverse gap-10  ">

        {/* Optional Image */}
        <img
          src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kids Toys"
          className="max-w-sm rounded-xl shadow-xl"
        />

        {/* Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Discover Fun & Learning Toys for Kids
          </h1>

          <p className="py-6 text-base-content/70">
            Explore a magical collection of toys designed to spark creativity,
            learning, and endless fun for children of all ages.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">

            {/* Primary CTA */}
            <Link href="/products" className="btn btn-primary gap-2">
              Shop Toys
              <ShoppingCart size={18} />
            </Link>

            {/* Secondary CTA */}
            <Link href="/products" className="btn btn-outline gap-2">
              Browse Categories
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero