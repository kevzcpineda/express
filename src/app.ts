import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

interface Iuser {
  id: number;
  name: string;
}

let user: Iuser[] = [];

app.get('/', (req: Request, res: Response) => {
  res.json(user);
});

app.post('/', (req: Request, res: Response) => {
  user.push(req.body);
  res.json({
    completed: true,
  });
});
app.put('/', (req: Request, res: Response) => {
  const { id } = req.query;
  const { name } = req.body;

  user.map((item) => {
    item.id === Number(id) ? (item.name = name) : item.name;
  });

  res.json({
    completed: true,
  });
});

app.delete('/', (req: Request, res: Response) => {
  const { id } = req.query;
  console.log(id);
  const newdata = user.filter((item) => {
    return item.id !== Number(id);
  });
  console.log(newdata);
  user = newdata;
  res.json({
    completed: true,
  });
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
