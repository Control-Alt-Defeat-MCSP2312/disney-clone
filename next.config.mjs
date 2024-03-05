/** Adds svg/webpack configuration to allow for display of svg files using @svg/webpack dependency */
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;