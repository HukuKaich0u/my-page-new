/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://koki-aoyagi.vercel.app/", // あなたのサイトのURL
  generateRobotsTxt: true, // robots.txt を生成するかどうか
  // (オプション) 他の設定
};
