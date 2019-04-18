echo ${DEV}
if [ "$APP_ENV" = "development" ]
then
  echo 'DEV mode'
  HOST=0.0.0.0 PORT=80 yarn run dev
else
  echo 'PRODUCT mode'
  yarn run build
fi
