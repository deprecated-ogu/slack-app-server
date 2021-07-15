import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware { // implement : support error handling
	private logger = new Logger('HTTP'); // about HTTP log

	use(request: Request, response: Response, next: NextFunction): void {
		// first
		const { ip, method, originalUrl } = request;
		const userAgent = request.get('user-agent') || '';

		// third - on aynchronous
		response.on('finish', () => {
			const { statusCode } = response;
			const contentLength = response.get('content-length');
			Logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,);
		});
		// second
		next();
	}
}