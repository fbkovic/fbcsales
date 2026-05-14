Add-Type -AssemblyName System.Drawing
$srcPath = 'fbc-logo.png'
$pngTarget = 'favicon-64x64.png'
$icoTarget = 'favicon.ico'
$src = [System.Drawing.Image]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap 64,64
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.Clear([System.Drawing.Color]::Transparent)
$g.DrawImage($src, 0, 0, 64, 64)
$g.Dispose()
$src.Dispose()
$bmp.Save($pngTarget, [System.Drawing.Imaging.ImageFormat]::Png)
try {
    $hIcon = $bmp.GetHicon()
    $icon = [System.Drawing.Icon]::FromHandle($hIcon)
    $stream = [System.IO.FileStream]::new($icoTarget, [System.IO.FileMode]::Create)
    $icon.Save($stream)
    $stream.Close()
    $icon.Dispose()
} catch {
    Write-Output "Could not create ICO: $_"
}
$bmp.Dispose()
Write-Output 'favicon files created'