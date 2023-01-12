::──────────────────────────
:: ◦ MAKE FILE
::──────────────────────────
:: $(CURRENT_DIRECTORY)\make.bat
::──────────────────────────
@echo off
set program="C:\Program Files\Mozilla Firefox\firefox.exe"
set directory=%~dp0
set main_file=%directory%index.html

call %program% %main_file%

::pause