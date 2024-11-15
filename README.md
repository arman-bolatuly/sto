<!-- pm2 commands -->

pm2 serve <path> <port> --spa
pm2 restart <id>

<!-- nginx commands -->

sudo systemctl restart nginx
sudo nginx -t

<!-- nginx config -->

root /var/www/tokens/dist/;
index index.html index.htm;
location / {
try_files $uri $uri/ /index.html;
}
# sto
