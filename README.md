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

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)