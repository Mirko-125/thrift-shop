@echo off
setlocal

REM Define the source and destination directories
set "source_dir=%~dp0get"
set "dest_dir=%~dp0"

REM Check if the source directory exists
if not exist "%source_dir%" (
    echo Source directory "%source_dir%" does not exist.
    exit /b 1
)

REM Move all files from the source directory to the destination directory
move "%source_dir%\*" "%dest_dir%"

REM Check if the move command was successful
if %errorlevel% neq 0 (
    echo Failed to move files from "%source_dir%" to "%dest_dir%".
    exit /b 1
)

echo Files moved successfully from "%source_dir%" to "%dest_dir%".
exit /b 0