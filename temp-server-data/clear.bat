@echo off
setlocal

REM Define the source directory
set "source_dir=%~dp0input"

REM Check if the source directory exists
if not exist "%source_dir%" (
    echo Source directory "%source_dir%" does not exist.
    exit /b 1
)

REM Remove all files from the source directory
del /q "%source_dir%\*"

REM Check if the delete command was successful
if %errorlevel% neq 0 (
    echo Failed to delete files from "%source_dir%".
    exit /b 1
)

echo All files removed successfully from "%source_dir%".
exit /b 0