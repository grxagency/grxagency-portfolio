# Script para reorganizar portfolio

$portfolioZipsPath = "C:\Users\guira\Desktop\Portfolio Guilherme\portfolio"
$outputPath = "C:\Users\guira\Desktop\Portfolio Guilherme\assets\portfolio"
$dataFile = "C:\Users\guira\Desktop\Portfolio Guilherme\data\projects.json"

# Limpar pastas antigas
Remove-Item -Path "$outputPath\apresentacao-racionais" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$outputPath\miv-mascote" -Recurse -Force -ErrorAction SilentlyContinue

# Encontrar ZIPs na pasta
$allZips = Get-ChildItem -Path $portfolioZipsPath -Filter "*.zip"
$variationsArray = @()

foreach ($zip in $allZips) {
    if ($zip.Name -match "Apresenta") {
        $slug = "apresentacao-racionais"
        $name = "Apresentação Racionais"
    } elseif ($zip.Name -match "MIV" -or $zip.Name -match "Mascote") {
        $slug = "miv-mascote"
        $name = "MIV Mascote"
    } else {
        continue
    }
    
    Write-Host "Processando: $name"
    
    # Criar pasta
    $projectFolder = "$outputPath\$slug"
    New-Item -ItemType Directory -Path $projectFolder -Force | Out-Null
    
    # Extrair
    $tempExtractPath = "$outputPath\temp_extract_$slug"
    Remove-Item -Path $tempExtractPath -Recurse -Force -ErrorAction SilentlyContinue
    New-Item -ItemType Directory -Path $tempExtractPath -Force | Out-Null
    
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::ExtractToDirectory($zip.FullName, $tempExtractPath)
    
    # Obter imagens
    $tempFiles = Get-ChildItem -Path $tempExtractPath -Include "*.png", "*.jpg", "*.jpeg" -Recurse
    $images = $tempFiles | Sort-Object { 
        $num = [regex]::Match($_.BaseName, '\d+').Value
        if ($num) { [int]$num } else { 999999 }
    }
    
    $imagesList = @()
    $imgIndex = 0
    
    foreach ($img in $images) {
        if ($imgIndex -eq 0) {
            Copy-Item -Path $img.FullName -Destination "$projectFolder\cover.png" -Force
            Copy-Item -Path $img.FullName -Destination "$projectFolder\thumb.png" -Force
            $imagesList += "assets/portfolio/$slug/cover.png"
        } else {
            $newName = "img-$($imgIndex).png"
            Copy-Item -Path $img.FullName -Destination "$projectFolder\$newName" -Force
            $imagesList += "assets/portfolio/$slug/$newName"
        }
        $imgIndex++
    }
    
    Remove-Item -Path $tempExtractPath -Recurse -Force
    
    $variationsArray += @{
        id = $slug
        name = $name
        thumb = "assets/portfolio/$slug/thumb.png"
        cover = "assets/portfolio/$slug/cover.png"
        images = $imagesList
    }
    
    Write-Host " $name - $($images.Count) imagens"
}

Write-Host "`nAtualizando JSON..."
$json = Get-Content -Path $dataFile -Raw | ConvertFrom-Json

# Converter para array se necessário
if ($json -is [PSCustomObject]) {
    $json = @($json)
}

for ($i = 0; $i -lt $json.Count; $i++) {
    if ($json[$i].slug -eq "brand-identity") {
        $json[$i].variations = $variationsArray
        break
    }
}

$json | ConvertTo-Json -Depth 10 | Set-Content -Path $dataFile -Encoding UTF8
Write-Host " Pronto!"
