import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('users')
export class UsersController {
	@Get()
	getUsers(@Req() req) {
		return req.user;
	}
	@Post()
	postUsers() {
	}

	@Post('login') // POST users/login
	logIn(@Req() req) {
		return req.user;
	}

	@Post('logout')
	logOut(@Req() req, @Res() res) {
		req.logOut();
		response.clearCookie('connect.sid', { htppOnly: true });
		res.send('ok');
	}
}
