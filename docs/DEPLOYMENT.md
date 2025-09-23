# GitHub Pages Deployment Guide

Bu rehber, Yadulla Mirzayev portföyünü GitHub Pages üzerinde deploy etmek ve custom domain bağlamak için gerekli adımları içerir.

## 📋 Önkoşullar

- GitHub hesabı
- Git kurulu
- Custom domain (isteğe bağlı)

## 🚀 GitHub'a Yükleme

### 1. Repository Oluşturma
```bash
# Yeni repository oluştur
gh repo create yadikk.github.io --public

# Veya GitHub web arayüzünden:
# - Repository Name: yadikk.github.io
# - Public seçin
# - README eklemeyin (zaten var)
```

### 2. Dosyaları Yükleme
```bash
# Git başlat
git init

# Remote ekle
git remote add origin https://github.com/yadikk/yadikk.github.io.git

# Tüm dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit: Portfolio website"

# Main branch'e push yap
git branch -M main
git push -u origin main
```

## 🌐 GitHub Pages Ayarları

### 1. Settings > Pages
1. GitHub repository'nizde **Settings** sekmesine gidin
2. Sol menüden **Pages** seçin
3. **Source** olarak "Deploy from a branch" seçin
4. **Branch** olarak "main" seçin
5. **Folder** olarak "/ (root)" seçin
6. **Save** butonuna tıklayın

### 2. Actions Ayarları
1. **Actions** sekmesine gidin
2. **Pages** workflow'unu etkinleştirin
3. İlk deployment'ı bekleyin

## 🔗 Custom Domain Bağlama

### 1. Domain Satın Alma
- Namecheap, GoDaddy, veya başka bir domain sağlayıcısından domain satın alın
- Önerilen domain: `yadikk.dev` veya `yadikk.com`

### 2. DNS Ayarları
Domain sağlayıcınızın DNS ayarlarında:

```
Type: CNAME
Name: www
Value: yadikk.github.io
TTL: 3600

Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### 3. CNAME Dosyası
CNAME dosyası zaten oluşturuldu ve içeriği:
```
yadikk.dev
```

### 4. GitHub Pages Domain Ayarları
1. Repository > Settings > Pages
2. **Custom domain** alanına domain adresinizi girin
3. **Enforce HTTPS** seçeneğini işaretleyin

## 🔧 Geliştirme Ortamı

### Local Server
```bash
# HTTP server başlat
npm install
npm run dev

# Veya Python ile
python -m http.server 8080

# Veya Node.js ile
npx http-server -p 8080
```

### Dosya Yapısı
```
yadikk.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Photos/
│   ├── EcoState/
│   ├── SolidPlane/
│   └── ...
├── index.html
├── styles.css
├── script.js
├── *.html (project pages)
├── CNAME
├── robots.txt
├── sitemap.xml
├── 404.html
├── README.md
├── package.json
└── .gitignore
```

## 📝 Güncelleme Süreci

### 1. Değişiklikleri Yapma
```bash
# Dosyaları düzenle
# index.html, styles.css, vb.

# Değişiklikleri kontrol et
git status
git diff
```

### 2. Commit ve Push
```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Update: Description of changes"

# GitHub'a push yap
git push origin main
```

### 3. Otomatik Deployment
- GitHub Actions otomatik olarak deployment yapacak
- 2-3 dakika içinde site güncellenecek

## 🐛 Sorun Giderme

### SSL Sertifikası Sorunu
```bash
# HTTPS zorlamayı kapatın, sonra tekrar açın
# Settings > Pages > Enforce HTTPS
```

### DNS Propagasyon
- DNS değişiklikleri 24-48 saat sürebilir
- https://www.whatsmydns.net/ ile kontrol edin

### 404 Hatası
- CNAME dosyasının doğru olduğundan emin olun
- Domain ayarlarının doğru olduğunu kontrol edin

## 📊 SEO ve Analytics

### Google Search Console
1. https://search.google.com/search-console
2. Domain ekleyin
3. Sitemap submit edin: `https://yadikk.dev/sitemap.xml`

### Google Analytics
```html
<!-- index.html head bölümüne ekleyin -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Performans Optimizasyonu

### Image Optimization
```bash
# Resimleri optimize edin
# TinyPNG, ImageOptim, veya online araçlar kullanın
```

### CSS/JS Minification
```bash
# Production için CSS/JS dosyalarını minify edin
# Online araçlar veya build tools kullanın
```

## 📱 Mobil Optimizasyon
- Responsive design zaten mevcut
- Touch-friendly navigation
- Mobile-first approach

## 🔒 Güvenlik
- HTTPS zorlaması aktif
- Robots.txt ile bot kontrolü
- Güvenli headers (isteğe bağlı)

---

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- **Email**: yadullamirzeyev5@gmail.com
- **GitHub Issues**: Repository'de issue açın
- **Documentation**: Bu dosyayı referans alın

**Başarılı deployment'lar! 🚀**
