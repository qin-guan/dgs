/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { createProxyMiddleware } from 'http-proxy-middleware'

/**
 * Check feature flags on GB to determine which paths are proxyable, etc
 */
async function getProxyablePaths() {
	const defaultProxyable = [
		'/environment/2-hour-weather-forecast'
	]

	return [...defaultProxyable]
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	// const globalPrefix = 'api';
	// app.setGlobalPrefix(globalPrefix);

	const proxyablePaths = await getProxyablePaths()

	app.use(
		'/',
		createProxyMiddleware({
			target: 'https://api-staging.data.gov.sg',
			changeOrigin: true,
			secure: true,
			pathFilter(path) {
				return proxyablePaths.includes(path)
			}
		})
	);

	const port = process.env.PORT || 3000;
	await app.listen(port);
	Logger.log(
		`🚀 Application is running on: http://localhost:${port}`
	);
}

bootstrap();
