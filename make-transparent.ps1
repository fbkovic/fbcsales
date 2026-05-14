Add-Type -AssemblyName System.Drawing
$path = 'fbc-logo.png'
$bmp = [System.Drawing.Bitmap]::FromFile($path)
$bmp.MakeTransparent([System.Drawing.Color]::White)
$bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output 'transparent conversion completed'