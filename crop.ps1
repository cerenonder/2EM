Add-Type -AssemblyName System.Drawing

$src = "c:\Users\fcere\OneDrive\Desktop\2EM\assets\logo.jpg"
$dest = "c:\Users\fcere\OneDrive\Desktop\2EM\assets\logo_cropped.jpg"

$bmp = [System.Drawing.Bitmap]::FromFile($src)
$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y += 2) {
    for ($x = 0; $x -lt $bmp.Width; $x += 2) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 230 -or $c.G -lt 230 -or $c.B -lt 230) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$pad = 12
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, ($maxX - $minX) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, ($maxY - $minY) + ($pad * 2))

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$bmp.Dispose()

$cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$cropped.Dispose()

Move-Item -Path $dest -Destination $src -Force
Write-Host "Cropped successfully! Width: $cropW, Height: $cropH"
