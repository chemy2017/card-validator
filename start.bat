@echo off
cd /d "%~dp0"
echo Chemythology 開発サーバーを起動中...
echo.
echo ブラウザで http://localhost:5173 を開いてください
echo 終了するには Ctrl+C を押してください
echo.
npm run dev
pause
