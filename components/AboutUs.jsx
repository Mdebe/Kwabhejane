"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHardHat,
  FaMountain,
  FaUsers,
} from "react-icons/fa";

export default function AboutUs() {
  const primary = "#c77900";
  const accent = "#ffd000";

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-yellow-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-orange-500/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          className="mb-14 text-center lg:mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#c77900]
              sm:text-sm
            "
          >
            About Our Company
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-gray-950
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Building More Than
            <span className="block text-[#c77900]">
              Roads & Structures
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
              sm:leading-8
            "
          >
            We transform natural resources into quality materials,
            economic opportunities and lasting value for communities.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =====================================================
              IMAGE
          ===================================================== */}

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
                relative
                h-[320px]
                overflow-hidden
                rounded-2xl
                shadow-2xl
                sm:h-[420px]
                lg:h-[540px]
              "
            >
              <Image
                src="/images/quarry-about.jpg"
                alt="Kwabhejane Bricks & Quarry operations"
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  600px
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/10
                  to-transparent
                "
              />

              {/* Image caption */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  sm:p-8
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-yellow-400
                  "
                >
                  Kwabhejane Bricks & Quarry
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    text-white
                    sm:text-3xl
                  "
                >
                  Crushing Rocks Into Stones
                </h3>
              </div>
            </div>

            {/* Experience / location badge */}

            <div
              className="
                absolute
                -bottom-5
                left-5
                rounded-2xl
                border
                border-white/20
                bg-[#111111]
                px-5
                py-4
                shadow-2xl
                sm:left-8
                sm:px-7
                sm:py-5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-500/10
                    text-yellow-400
                  "
                >
                  <FaMountain size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Strategically Located
                  </p>

                  <p className="mt-1 text-sm font-bold text-white sm:text-base">
                    KwaBhejane • Nseleni
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#c77900]
              "
            >
              Who We Are
            </span>

            <h3
              className="
                mt-3
                text-3xl
                font-black
                leading-tight
                text-gray-950
                sm:text-4xl
              "
            >
              A Proudly South African
              <span className="block text-[#c77900]">
                Quarrying Enterprise
              </span>
            </h3>

            <div
              className="
                mt-5
                h-1
                w-20
                rounded-full
                bg-gradient-to-r
                from-[#c77900]
                to-[#ffd000]
              "
            />

            <p
              className="
                mt-7
                text-base
                leading-7
                text-gray-600
                sm:text-lg
                sm:leading-8
              "
            >
              Kwabhejane Bricks & Quarry (KBBQ) is a proudly
              South African quarrying and aggregate production
              company situated in the KwaBhejane area of Nseleni,
              strategically positioned between Richards Bay and
              Empangeni in KwaZulu-Natal.
            </p>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-gray-600
                sm:text-lg
                sm:leading-8
              "
            >
              Our focus is on the extraction, crushing, screening
              and supply of quality aggregate materials for
              construction, civil engineering, mining,
              infrastructure and industrial projects.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Quality */}

              <div
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-5
                  transition
                  hover:border-yellow-500/40
                  hover:shadow-md
                "
              >
                <div className="flex gap-4">
                  <FaCheckCircle
                    className="
                      mt-1
                      shrink-0
                      text-xl
                      text-[#c77900]
                    "
                  />

                  <div>
                    <h4 className="font-bold text-gray-950">
                      Quality Focused
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Reliable aggregate products produced
                      with quality and consistency in mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community */}

              <div
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-5
                  transition
                  hover:border-yellow-500/40
                  hover:shadow-md
                "
              >
                <div className="flex gap-4">
                  <FaUsers
                    className="
                      mt-1
                      shrink-0
                      text-xl
                      text-[#c77900]
                    "
                  />

                  <div>
                    <h4 className="font-bold text-gray-950">
                      Community Driven
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Creating opportunities for employment,
                      skills development and local participation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Operations */}

              <div
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-5
                  transition
                  hover:border-yellow-500/40
                  hover:shadow-md
                  sm:col-span-2
                "
              >
                <div className="flex gap-4">
                  <FaHardHat
                    className="
                      mt-1
                      shrink-0
                      text-xl
                      text-[#c77900]
                    "
                  />

                  <div>
                    <h4 className="font-bold text-gray-950">
                      Built for Infrastructure
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Supporting roads, housing, commercial,
                      industrial, mining and civil engineering
                      developments throughout KwaZulu-Natal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-9">
              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#c77900]
                  to-[#ffd000]
                  px-7
                  py-3.5
                  font-bold
                  text-black
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                Discover Our Story

                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          className="
            mt-20
            rounded-3xl
            bg-[#111111]
            px-6
            py-10
            text-center
            shadow-2xl
            sm:px-10
            lg:mt-24
            lg:py-12
          "
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="
              text-xl
              font-black
              text-white
              sm:text-2xl
              lg:text-3xl
            "
          >
            "Crushing Rocks into Stones,
            <span className="text-yellow-400">
              {" "}Building Communities.
            </span>
            "
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            KBBQ is committed to transforming natural resources
            into lasting value for clients, communities and
            stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}