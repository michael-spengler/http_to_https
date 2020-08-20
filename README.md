# http_to_https

Deno Module to forward requests from unsafe port 80 to safe port 443.

## Usage Example including pm2 start

```sh
  
deno run --allow-read --allow-net https://deno.land/x/http_to_https/forwarder.ts

```

or via pm2 

```sh

git clone https://github.com/michael-spengler/http_to_https.git
cd http_to_https
pm2 start  --interpreter="deno" --interpreter-args="run --allow-net --allow-read" forwarder.ts

```


## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/fan464/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)

