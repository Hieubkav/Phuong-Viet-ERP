# Hướng dẫn Deploy lên GitHub Pages

## ⚠️ QUAN TRỌNG: Các bước cần thực hiện ngay

### Bước 1: Kiểm tra branch hiện tại
```bash
git branch
```
Nếu đang ở branch `master`, workflow sẽ tự động chạy khi push.
Nếu đang ở branch khác, cần checkout về `main` hoặc `master`.

### Bước 2: Push code lên GitHub
```bash
# Thêm tất cả files
git add .

# Commit với message
git commit -m "Add GitHub Pages deployment with Phuong Viet logo and favicon"

# Push lên repository
git push origin main
# HOẶC nếu đang dùng master branch:
# git push origin master
```

### Bước 3: Kiểm tra GitHub Actions
1. Vào repository: https://github.com/Hieubkav/Phuong-Viet-ERP
2. Click tab **Actions**
3. Sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
4. Click vào workflow run để xem chi tiết

### Bước 4: Kiểm tra GitHub Pages Settings
1. Vào **Settings** > **Pages**
2. Đảm bảo **Source** đã chọn **GitHub Actions** ✅
3. Sau khi workflow hoàn thành, sẽ thấy URL: `https://hieubkav.github.io/Phuong-Viet-ERP/`

## Cấu hình đã sẵn sàng

### Workflow Features
- ✅ Tự động chạy khi push vào `main` hoặc `master`
- ✅ Có thể chạy thủ công từ Actions tab
- ✅ Build bằng Bun (nhanh hơn npm)
- ✅ Cấu hình đúng base path cho GitHub Pages
- ✅ Upload artifacts và deploy tự động

## Scripts có sẵn

```bash
# Development
bun run dev

# Build cho production
bun run build

# Build cho GitHub Pages (với base path)
bun run build:github

# Preview build
bun run preview
```

## Cấu hình quan trọng

### Base Path
- Dự án được cấu hình để hoạt động với base path `/Phuong-Viet-ERP/`
- Điều này đảm bảo các asset và routing hoạt động đúng trên GitHub Pages

### Environment Variables
- `VITE_BASE_PATH`: Đường dẫn gốc cho deployment
- `GEMINI_API_KEY`: API key cho Gemini (nếu cần)

## Troubleshooting

### Nếu trang không load đúng:
1. Kiểm tra base path trong `vite.config.ts`
2. Đảm bảo tên repository trong workflow khớp với tên thực tế
3. Kiểm tra GitHub Pages settings

### Nếu build fail:
1. Kiểm tra logs trong tab Actions
2. Đảm bảo tất cả dependencies được cài đặt đúng
3. Kiểm tra syntax errors trong code

### Cập nhật tên repository:
Nếu đổi tên repository, cần cập nhật:
1. `VITE_BASE_PATH` trong `.github/workflows/deploy.yml`
2. Script `build:github` trong `package.json`
3. Base path trong `vite.config.ts`
