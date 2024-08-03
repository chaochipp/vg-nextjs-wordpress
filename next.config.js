if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['i0.wp.com','secure.gravatar.com','vietgame.asia'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: `${pathname}/**`,
      },
    ],
  },
};
