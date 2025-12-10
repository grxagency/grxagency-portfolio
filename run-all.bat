@echo off
REM Script para rodar o site e o servidor de contato em paralelo

echo.
echo ========================================
echo   GRX AGENCY - Servidor Completo
echo ========================================
echo.

REM Abrir dois terminais separados
start "Site Portfolio (Port 3000)" cmd /k "cd /d "%CD%" && npm run dev"
timeout /t 2 /nobreak
start "Servidor de Contato (Port 3001)" cmd /k "cd /d "%CD%" && npm run contact-server"

echo.
echo ========================================
echo   Ambos os servidores estao rodando!
echo.
echo   - Site: http://localhost:3000
echo   - Contato: http://localhost:3001
echo.
echo ========================================
echo.
pause
