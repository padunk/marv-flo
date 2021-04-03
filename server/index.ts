import express from "express";
import cors from "cors";

const app = express();
const PORT = "5000";

app.use(cors);

type IGTokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
};

app.get("/refresh-token", async (req: any, res: any) => {
    async function refreshLongLivedAccessToken(
        token: string
    ): Promise<IGTokenResponse> {
        const response = await fetch(
            `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
        );
        const data = (await response.json()) as IGTokenResponse;
        return data;
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
