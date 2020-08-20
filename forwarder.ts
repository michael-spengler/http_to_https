import { opine } from "https://deno.land/x/opine@0.20.2/mod.ts";

export class Forwarder {

    public static activate() {
        const app = opine();

        app.get('/', (req: any, res: any) => {
            const unsafeURL = req.protocol + '://' + req.get('host') + req.originalUrl;
            const safeURL = unsafeURL.replace('http://', 'https://')
            const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url='${safeURL}'" /></head><body><p>Redirecting to https: <a href="${safeURL}">${safeURL}</a></p></body></html>`
            res.send(html);
        });

        app.listen(80)
    }
}

Forwarder.activate()

