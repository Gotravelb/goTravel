/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  env: {
    GOOGLE_MAP_API_KEY: "AIzaSyAUYjiha3EDxuzGYaA1KivSOIlekKVfLBA",
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: 465,
    SMTP_MAIL: "businessgotravelb@gmail.com",
    SMTP_PASSWORD: "qcpjctphtydcoida",
    TO_MAIL: "ak3838688@gmail.com",
    MONGODB_URI: "mongodb+srv://goTravelBe:3eMCUTuVLTBfI3wV@cluster0.ogpipxt.mongodb.net/?retryWrites=true&w=majority",
    MONGODB_DB: "gotravelb",
  },
};

module.exports = nextConfig;
