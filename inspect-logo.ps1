Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('fbc-logo.png')
Write-Output $bmp.PixelFormat
Write-Output $bmp.Width
Write-Output $bmp.Height
$bmp.Dispose()