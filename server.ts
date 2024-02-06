import express, {Request, Response} from "express";
const app = express();
const API_KEY = "60665533a43b47d0ab1155442240102";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;


app.get("/test", (req: Request, res: Response) => {
    res.send("coucou, le serveur fonctionne :)");
})

//creer la route qui va utiliser le controlleur meteo pour faire la request
app.get("/weather/:city", async (req: Request, res: Response) => {
    await weatherController.getWeather(req, res);
})




app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution sur le port ${PORT}`)
})
