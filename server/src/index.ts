import app from './app';
import { PORT } from './config/dotenv';

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
