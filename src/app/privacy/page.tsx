import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Diogo Paulos - Privacy Policy</title>
      </Head>
      <main className="w-full px-8">
        <div className="max-w-7xl mx-auto w-full mt-28 flex flex-col gap-6 text-text text-base md:text-lg">
          <span className="text-3xl sm:text-4xl md:text-5xl">
            Privacy Notice
          </span>
          <span>
            When you submit a review and it is approved, your name and review
            content will be publicly displayed to help other users benefit from
            your feedback. I also collect your IP address (hashed) to ensure
            only one review per user is sent (it also helps preventing spam).
          </span>
          <span>
            To your assurance, a hashed string can&apos;t be reversed to
            it&apos;s original value, it is only possible to be validated. The
            same string will never return the same hash, as it always generates
            a different hash even for the same string. Besides the database
            being secure and regularly monitored, hashed strings is already of
            the safest and most secure way to store data.
          </span>
          <span>
            You can see the implementation on the{' '}
            <Link
              href="https://github.com/dpaulos6/portfolio"
              className="text-blue-500 hover:underline"
            >
              website&apos;s github repository
            </Link>{' '}
            or the{' '}
            <Link
              href="https://www.npmjs.com/package/bcrypt"
              className="text-blue-500 hover:underline"
            >
              bcrypt documentation
            </Link>{' '}
            for more information about the hashing algorithm that was used.
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl">
            What Data We Collect
          </span>
          <ul className="list-disc list-inside">
            <li>Your name</li>
            <li>Your review message</li>
            <li>Your IP address (hashed)</li>
          </ul>
          <span className="text-xl sm:text-2xl md:text-3xl">
            How We Use Your Data
          </span>
          <span>
            Your name and review content will be publicly displayed on{' '}
            <Link href="/about" className="text-blue-500 hover:underline">
              About Me
            </Link>
            . Your IP address will be stored in a private and secure database,
            where no data is shared to third parties.
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl">Your Rights</span>
          <span>
            You can request the removal of your review at any time by{' '}
            <Link href="/about" className="text-blue-500 hover:underline">
              contacting me
            </Link>
            .
          </span>
          <span>
            By submitting your review, you consent to the public display of your
            name and review content on the website, as well as your IP address
            being hashed and stored in a database.
          </span>
        </div>
      </main>
    </>
  )
}
