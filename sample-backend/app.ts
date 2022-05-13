import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const middleware = (req: Request, res: Response, next: NextFunction) => {
    next();
};

app.get('api/users', middleware, (req: Request, res: Response) => 
    res.json([{ firstName: 'Dobrin', lastName: 'Donev' }])
);

app.listen(() => console.log('Server listening...'));
