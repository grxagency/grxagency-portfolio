# Script para organizar imagens soltas em pastas de projetos
# Entrada: assets/portfolio/ com imagens 1.png, 2.png, ...
# Saída: assets/portfolio/slug1/, assets/portfolio/slug2/, etc. com cover.jpg, img-1.png, ...

$portfolioPath = "C:\Users\guira\Desktop\Portfolio Guilherme\assets\portfolio"
$dataPath = "C:\Users\guira\Desktop\Portfolio Guilherme\data\projects.json"

# Define os projetos e quantas imagens cada um tem
# Ajuste conforme necessário: "slug" = "nome_legível:quantidade"
$projects = @(
    @{ slug = "apresentacao-racionais"; title = "Apresentação Racionais"; tags = @("Design", "Apresentação"); count = 35 },
    @{ slug = "miv-mascote"; title = "MIV Mascote"; tags = @("Branding", "Design"); count = 35 }
)

$imageCounter = 1
$projectsData = @()

foreach ($project in $projects) {
    $projectDir = Join-Path $portfolioPath $project.slug
    
    # Cria pasta do projeto
    if (!(Test-Path $projectDir)) {
        New-Item -ItemType Directory -Path $projectDir -Force | Out-Null
        Write-Host "Criada pasta: $($project.slug)"
    }
    
    # Move imagens para a pasta
    $firstImage = $true
    for ($i = 0; $i -lt $project.count; $i++) {
        $sourceImg = Join-Path $portfolioPath "$imageCounter.png"
        
        if (Test-Path $sourceImg) {
            if ($firstImage) {
                # Primeira imagem vira cover e thumb
                $newName = "cover.png"
                Copy-Item -Path $sourceImg -Destination (Join-Path $projectDir $newName) -Force
                Copy-Item -Path $sourceImg -Destination (Join-Path $projectDir "thumb.png") -Force
                Write-Host "  [COVER] $imageCounter.png -> $newName"
                $firstImage = $false
            } else {
                # Resto vira img-1.png, img-2.png, ...
                $imgNum = $i
                $newName = "img-$imgNum.png"
                Copy-Item -Path $sourceImg -Destination (Join-Path $projectDir $newName) -Force
                Write-Host "  [$imgNum] $imageCounter.png -> $newName"
            }
        }
        
        $imageCounter++
    }
    
    # Remove arquivo original
    Remove-Item -Path $sourceImg -Force -ErrorAction SilentlyContinue
    
    # Cria entrada JSON
    $projectEntry = @{
        slug = $project.slug
        title = $project.title
        short = "Projeto com design profissional e atenção aos detalhes."
        tags = $project.tags
        cover = "assets/portfolio/$($project.slug)/cover.png"
        thumb = "assets/portfolio/$($project.slug)/thumb.png"
        images = @()
        caseUrl = "#"
    }
    
    # Lista as imagens de cada projeto
    for ($i = 1; $i -lt $project.count; $i++) {
        $projectEntry.images += "assets/portfolio/$($project.slug)/img-$i.png"
    }
    
    $projectsData += $projectEntry
}

# Gera JSON
$json = $projectsData | ConvertTo-Json -Depth 10
Set-Content -Path $dataPath -Value $json -Encoding UTF8

Write-Host "`nOrganização concluída!"
Write-Host "Arquivo atualizado: data/projects.json"
